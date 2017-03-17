#!/usr/bin/env python
import sys
import json
import MySQLdb
import os

myjson = json.load(sys.stdin)

print 'Content-Type: application/json\r\n'



utvonal = format(int(myjson["idozites"]["utv"]),"02x")

conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cursor = conn.cursor()

cursor.execute("""delete from idozites where utvonal='%s'""" %(utvonal))

conn.commit()
conn.close()



print json.dumps(utvonal)
	
	
	