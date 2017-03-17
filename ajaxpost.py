#!/usr/bin/env python

import sys 
import json
import cgitb
import MySQLdb
import struct
cgitb.enable()


result = {'success':'true','message':'Az adat megerkezett '};
myjson = json.load(sys.stdin)
# Do something with 'myjson' object


def float_to_hex(f):
    return hex(struct.unpack('<I',struct.pack('<f',f))[0])



print 'Content-Type: application/json\n\n'

# print json.dumps(myjson["params"]["param1"])    # or "json.dump(result, sys.stdout)"
tipus = myjson["tipus"]
tablaszam ='{:02x}'.format(int(myjson["tabla"]))
sorszam = '{:02x}'.format(int(myjson["sorszam"]))
command = hex(int(myjson["parancs"]))
command = command[2:]
param1 = '{:02x}'.format(int(myjson["params"]["param1"]))
param2 = '{:02x}'.format(int(myjson["params"]["param2"]))
param3 = '{:02x}'.format(int(myjson["params"]["param3"]))
param4 = '{:02x}'.format(int(myjson["params"]["param4"]))
param5 = float_to_hex(float(myjson["params"]["param5"]))
param5 = param5[2:]
param6 = float_to_hex(float(myjson["params"]["param6"]))
param6 = param6[2:]

if int(myjson["params"]["param7"]) == 0:
    param7 = format(0,"08x")

else:
    param7 = float_to_hex(float(myjson["params"]["param7"]))
    param7 = param7[2:]


#print json.dumps(tablaszam)

#tmp = float(myjson["params"]["param5"])

#par1 = float_to_hex(tmp)

conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
x = conn.cursor();

x.execute("""insert into %s%s (sorszam,command,param1, param2, param3, param4,param5,param6,param7) values('%s','%s','%s','%s','%s','%s','%s','%s','%s')""" %(tipus,tablaszam,sorszam,command,param1,param2,param3,param4,param5,param6,param7))
conn.commit()
conn.close()

#print	 json.dumps(myjson.sorszam)