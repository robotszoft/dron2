#!/usr/bin/env python
#-*- coding:utf-8 -*-
import sys
import json

myjson = json.load(sys.stdin)

reset = "soros.txt"

print "Content-type: application/json\n"

with open(reset, 'w') as resetfile:
    resetfile.write("")
    resetfile.close()

print json.dumps("Az utolsó adatsor törölve")