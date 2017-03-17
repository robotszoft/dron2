#!/usr/bin/env python

import sys 
import json
import cgitb
import MySQLdb
import struct
cgitb.enable()



print 'Content-Type: application/json\n\n'

def float_to_hex(f):
    return hex(struct.unpack('<I',struct.pack('<f',f))[0])

result = {'success':'true','message':'Az adat megerkezett '};
myjson = json.load(sys.stdin)
# Do something with 'myjson' object
utvonal = myjson["tipus"]
tablatorol = int(myjson["torles"])
tablaszam = '{:02x}'.format(int(myjson["tabla"]))
lati = float_to_hex(float(myjson["origo"]["latitude"]))
lati = lati[2:]
longi = float_to_hex(float(myjson["origo"]["longitude"]))
longi = longi[2:]
sorszam = "00"
command = "00"
param1 = "00"
param2 = "00"
param3 = "00"
param4 = "00"


conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cursor = conn.cursor()

cursor.execute("""update %s%s set param5='%s' where param5='00000000'""" %(utvonal,tablaszam,lati))
cursor.execute("""update %s%s set param6='%s' where param6='00000000'""" %(utvonal,tablaszam,longi))

conn.commit()
conn.close()
szoveg = utvonal+tablaszam
print json.dumps(szoveg)    # or "json.dump(result, sys.stdout)"
