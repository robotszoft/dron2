#!/usr/bin/env python
#-*- coding: utf-8 -*-
import sys
import json

myjson = json.load(sys.stdin)

origo = "origo.txt"

print "Content-type: application/json\n"

with open(origo, 'w') as origofile:
    origofile.write(myjson[0]+","+myjson[1])
    origofile.close()

print json.dumps("A kezdőpont beállítása megtörtént.")
