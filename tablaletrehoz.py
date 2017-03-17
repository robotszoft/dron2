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
if (utvonal == "riasztas"):
    tip = "U"
else:
    tip = "P"

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
param5 = "00000000"
param6 = "00000000"
param7 = "00000000"


conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cursor = conn.cursor()

if (tablatorol == 0): 
    cursor.execute("""create table if not exists %s%s
    (id int auto_increment, sof char(2) default 'GP', sender char(2) default '1', cmd char(1) default '%s',
    dron_id char(2) default '01', route_id char(1) default 'A', route_nr char(2) default '%s',
    sorszam char(2),command char(2),
    param1 char(2), param2 char(2), param3 char(2), param4 char(2), param5 char(8), 
    param6 char(8), param7 char(8), controll char(4) default '0000', primary key(id))""" %(utvonal,tablaszam,tip,tablaszam))

    cursor.execute("""delete from %s%s""" %(utvonal,tablaszam))
    cursor.execute("""insert into %s%s (sorszam,command,param1,param2, param3,param4,param5,param6,param7) values ('%s','%s','%s','%s','%s','%s','%s','%s','%s')""" %(utvonal, tablaszam,sorszam,command,param1,param2,param3,param4, param5, param6, param7))
    cursor.execute("""create table if not exists idozites (id int auto_increment, utvonal char(4), ora1 char(2), perc1 char(2), ora2 char(2), perc2 char(2), ora3 char(2), perc3 char(2), primary key(id))""")



conn.commit()
conn.close()
szoveg = utvonal+tablaszam
print json.dumps(szoveg)    # or "json.dump(result, sys.stdout)"
