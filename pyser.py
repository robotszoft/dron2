#!/usr/bin/env python

import time
import serial
ser = serial.Serial("/dev/ttyAMA0",115200)
time.sleep(2)
while 1:
    sor = ser.readline()
    print(sor)
