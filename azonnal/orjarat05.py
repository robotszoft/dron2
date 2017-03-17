#!/usr/bin/env python 
import MySQLdb
import sys
import os
import serial
ser = serial.Serial("/dev/ttyAMA0",57600)
conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
x = conn.cursor();
r_db = x.execute("""select * from jaror05""") 
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
	ser.write(str2)
conn.close()