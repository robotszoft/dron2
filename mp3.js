"use strict";
var serialport = require("serialport");
var parsers = serialport.parsers;

var port = new serialport("/dev/ttyAMA0", {
	baudrate: 57600,
	parser: parsers.readline("\r\n")
    
});

port.on("open",function() {
	console.log("Port open");
});

port.on("data",function(data) {
	console.log(data);
	fs.writeFile("soros.txt", (data));
});

var fs = require("fs");
fs.writeFile("soros.txt","", function(err) {
	if (err) {
	return console.log(err);
	}
console.log("A fájl létrehozva");
});
