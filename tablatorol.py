#!/usr/bin/env python
#-*- coding: utf-8 -*-

import sys 
import json
import cgitb
import MySQLdb
import struct
cgitb.enable()


result = {'success':'true','message':'Az adat megerkezett '};
myjson = json.load(sys.stdin)
# Do something with 'myjson' object


utvonal = myjson["tipus"]
tablatorol = int(myjson["torles"])
tablaszam = '{:02x}'.format(int(myjson["tabla"]))

print 'Content-Type: application/json\n\n'

conn = MySQLdb.connect(host="localhost",user="mavlink",passwd="mvlLNX1100",db="mavlink")
cursor = conn.cursor()

if (tablatorol == 1): 
    cursor.execute("""drop table %s%s""" %(utvonal,tablaszam))

conn.commit()
conn.close()
szoveg = utvonal+tablaszam
print json.dumps(szoveg)    # or "json.dump(result, sys.stdout)"

