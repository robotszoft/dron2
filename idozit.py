#!/usr/bin/env python
import sys
import json
import MySQLdb
import os

myjson = json.load(sys.stdin)

print 'Content-Type: application/json\r\n'



utvonal = format(int(myjson["idozites"]["utv"]),"02x")
perc1 = myjson["idozites"]["perc1"]
perc2 = myjson["idozites"]["perc2"]
perc3 = myjson["idozites"]["perc3"]

ora1 = myjson["idozites"]["ora1"]
ora2 = myjson["idozites"]["ora2"]
ora3 = myjson["idozites"]["ora3"]
conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cursor = conn.cursor()

if utvonal !='00':
	cursor.execute("""delete from idozites where utvonal='%s'""" %(utvonal))
	cursor.execute("""insert into idozites (utvonal,ora1,perc1,ora2,perc2,ora3,perc3) values ('%s','%s','%s','%s','%s','%s','%s')""" %(utvonal,ora1,perc1,ora2,perc2,ora3,perc3))

	conn.commit()
conn.close()
min1 = str(0)
hour1 = str(0)

cronfile = open('/var/www/html/gps/crontab/pi','w')

conn = MySQLdb.connect(host="localhost", user="mavlink", passwd="mvlLNX1100", db="mavlink")
cursor = conn.cursor()
cursor.execute("select * from idozites")
results = cursor.fetchall()
for row in results:
    utvonal = row[1]
    ora1 = row[2]
    perc1 = row[3]
    ora2 = row[4]
    perc2 = row[5]
    ora3 = row[6]
    perc3 = row[7]

    if (perc2 == '0' and ora2 == '0' and perc3 == '0' and ora3 == '0'):
	if (perc1 !='0'):
		min1 = "*/"+str(perc1)
	else:
		min1 = "*"
	if (ora1 !='0'):
		hour1 = "*/"+str(ora1)
	else:
		hour1 = "*"

	cronfile.write(str(min1)+" "+str(hour1)+" "+"*"+" "+"*"+" "+"*"+" "+"python /var/www/html/gps/jaror/jaror"+utvonal+" "+" \r\n")

    if (ora2 != '0' and ora3 != '0'):
	if (perc1 !='0'):
	    min1 = "*/"+str(perc1)
	else:
	    min1 = "*"
	hour1 = int(ora2)
	while (int(ora3) > hour1):
	    cronfile.write(str(min1)+" "+str(hour1)+" "+"*"+" "+"*"+" "+"*"+" "+"python /var/www/html/gps/jaror/jaror"+utvonal+" "+"\r\n")
	    hour1 = hour1+1

conn.close()

def writecrontab():
	filename ="jaror"+utvonal
	crt = open("/var/www/html/gps/jaror/"+filename,"w")
	crt.write("#!/usr/bin/env python \r\n")
	crt.write("import MySQLdb\r\n")
	crt.write("import sys\r\n")
	crt.write("import os\r\n")
	crt.write("import serial\r\n")
	crt.write("ser = serial.Serial(\"/dev/ttyAMA0\",57600)\r\n")
	crt.write("conn = MySQLdb.connect(host=\"localhost\",user=\"mavlink\",passwd=\"mvlLNX1100\",db=\"mavlink\")\r\n")
	crt.write("x = conn.cursor();\r\n")
	crt.write("r_db = x.execute(\"\"\"select * from %s\"\"\") \r\n" %(filename))
	crt.write("results = x.fetchall()\r\n")
	crt.write("for row in results:\r\n")
	crt.write("\ts0 = str(row[0])\r\n")
	crt.write("\ts1 = row[1]\r\n")
	crt.write("\ts2 = row[2]\r\n")
	crt.write("\ts3 = row[3]\r\n")
	crt.write("\ts4 = row[4]\r\n")
	crt.write("\ts5 = row[5]\r\n")
	crt.write("\ts6 = row[6]\r\n")
	crt.write("\tdb = format(r_db,\"02x\")\r\n")
	crt.write("\ts7 = row[7]\r\n")
	crt.write("\ts8 = row[8]\r\n")
	crt.write("\ts9 = row[9]\r\n")
	crt.write("\ts10 = row[10]\r\n")
	crt.write("\ts11 = row[11]\r\n")
	crt.write("\ts12 = row[12]\r\n")
	crt.write("\ts13 = row[13]\r\n")
	crt.write("\ts14 = row[14]\r\n")
	crt.write("\ts15 = row[15]\r\n")
	crt.write("\ts16 = row[16]\r\n")
	crt.write("\tstr1 = s1+s2+s3+s4+s6+db+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16\r\n")
	crt.write("\tslen = format((len(str1)+4),\"02x\")\r\n")
	crt.write("\tstr2 = s1+s2+s3+s4+s6+db+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+slen+\"\\r\\n\"\r\n")
	crt.write("\tser.write(str2)\r\n")
	crt.write("conn.close()")

	
	
	
writecrontab()

print json.dumps(utvonal)
	
	
	