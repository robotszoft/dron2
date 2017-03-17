#!/usr/bin/env python
import MySQLdb
import struct
import serial

ser = serial.Serial("/dev/ttyAMA0",57600)
def float_to_hex(f):
    return hex(struct.unpack('<I',struct.pack('f',f))[0])


db = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cur = db.cursor()
f = 0x00000000;

#for i in range(1,5):
#    f = float_to_hex(i)
#    b = float_to_hex(i+1)
#    cur.execute("""insert into proba2 (sorszam,ertek) values (%s,%s)""",(f,b))
#db.commit();
i = 0;
cur.execute("""select * from riasztas""")
results = cur.fetchall()
for row in results:
    i = i+1
    s0 = row[0]
    s1 = row[1]
    s2 = row[2]
    s3 = row[3]
    s4 = row[4]
    s5 = row[5]
    s6 = row[6]
    s7 = row[7]
    s8 = row[8]
    s9 = row[9]
    s10 = row[10]
    s11 = row[11]
    ser.write(s0[2:]+s1[2:]+s2[2:]+s3[2:]+s4[2:]+s5[2:]+s6[2:]+s7[2:]+s8[2:]+s9[2:]+s10[2:]+s11[2:]+"\n\r")
    print s0[2:]+s1[2:]+s2[2:]+s3[2:]+s4[2:]+s5[2:]+s6[2:]+s7[2:]+s8[2:]+s9[2:]+s10[2:]+s11[2:]

db.close()
print i
