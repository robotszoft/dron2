"use strict";
var serialport = require("serialport");
var parsers = serialport.parsers;
var exec = require('child_process').exec;

var port = new serialport("/dev/ttyAMA0", {
	baudrate: 57600,
	parser: parsers.readline("\r\n")
    
});

port.on("open",function() {
	console.log("Port open");
});

port.on("data",function(data) {
	console.log(data);
	if (data == '1') {
	exec('omxplayer mp3/egy.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '2') {
	exec('omxplayer mp3/ketto.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '3') {
	exec('omxplayer mp3/harom.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '4') {
	exec('omxplayer mp3/negy.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '5') {
	exec('omxplayer mp3/ot.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '6') {
	exec('omxplayer mp3/hat.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '7') {
	exec('omxplayer mp3/het.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '8') {
	exec('omxplayer mp3/nyolc.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '9') {
	exec('omxplayer mp3/kilenc.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}
	if (data == '10') {
	exec('omxplayer mp3/tiz.mp3', function(error,stdout, stderr) {
		console.log(data);
});
}





else
	fs.writeFile("soros.txt", (data));
});

var fs = require("fs");
fs.writeFile("soros.txt","", function(err) {
	if (err) {
	return console.log(err);
	}
console.log("A fájl létrehozva");
});
