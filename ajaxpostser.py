#!/usr/bin/env python

import sys 
import json
import cgitb
import MySQLdb
import struct
import serial

print 'Content-Type: application/json\n\n'

cgitb.enable()
ser = serial.Serial("/dev/ttyAMA0",57600)

result = {'success':'true','message':'Az adat megerkezett '};
myjson = json.load(sys.stdin)


def float_to_hex(f):
    return hex(struct.unpack('<I',struct.pack('<f',f))[0])



tipus = myjson["tipus"]
tablaszam = '{:02x}'.format(int(myjson["tabla"]))
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


conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
x = conn.cursor();
x.execute("""insert into %s%s (sorszam,command,param1, param2, param3, param4,param5,param6,param7) values('%s','%s','%s','%s','%s','%s','%s','%s','%s')""" %(tipus,tablaszam,sorszam,command,param1,param2,param3,param4,param5,param6,param7))
conn.commit();
r_db = x.execute("""select * from %s%s""" %(tipus,tablaszam))
results = x.fetchall()
for row in results:
    s0 = str(row[0])
    s1 = row[1]
    s2 = row[2]
    s3 = row[3]
    s4 = row[4]
    s5 = row[5]
    s6 = row[6]
    db = format(r_db,"02x")
    s7 = row[7]
    s8 = row[8]
    s9 = row[9]
    s10 = row[10]
    s11 = row[11]
    s12 = row[12]
    s13 = row[13]
    s14 = row[14]
    s15 = row[15]
    s16 = row[16]
    str1 = s1+s2+s3+s4+s6+db+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16
    slen = format((len(str1)+4),"02x")
    str2 = s1+s2+s3+s4+s6+db+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+slen+"\r\n"
    if (tipus != "jaror"):
	ser.write(str2)

conn.close()
