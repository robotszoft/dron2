"use strict";
var serialport = require("serialport");
var parsers = serialport.parsers;
var exec = require('child_process').exec;
var subdata;
var port = new serialport("/dev/ttyAMA0", {
	baudrate: 57600,
	parser: parsers.readline("\r\n")
    
});

port.on("open",function() {
	console.log("Port open");
});

port.on("data",function(data) {
	console.log(data);
subdata = data.substring(0,7);

// *** Nyomógombok ***

	if (subdata == "PCB0101") {
//	exec('omxplayer mp3/egy.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat01.py', function(error,stdout, stderr) {
		console.log('01-es orjarat');
});
}
	if (subdata == "PCB0102") {
//	exec('omxplayer mp3/ketto.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat02.py', function(error,stdout, stderr) {
		console.log('02-es orjarat');
});
}
	if (subdata == "PCB0103") {
//	exec('omxplayer mp3/harom.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat03.py', function(error,stdout, stderr) {
		console.log('03-as orjarat');
});
}
	if (subdata == "PCB0104") {
//	exec('omxplayer mp3/negy.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat04.py', function(error,stdout, stderr) {
		console.log('04-es orjarat');
});
}
	if (subdata == "PCB0105") {
//	exec('omxplayer mp3/ot.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat05.py', function(error,stdout, stderr) {
		console.log('05-os orjarat');
});
}
	if (subdata == "PCB0106") {
//	exec('omxplayer mp3/hat.mp3', function(error,stdout, stderr) {
//		console.log(subdata);
//});
	exec('python azonnal/orjarat06.py', function(error,stdout, stderr) {
		console.log('06-os orjarat');
});
}

// *** Hangok ***

	if (subdata == "PCS0101") {
	exec('omxplayer mp3/egy.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}


	if (subdata == "PCS0102") {
	exec('omxplayer mp3/ketto.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == "PCS0103") {
	exec('omxplayer mp3/harom.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0104') {
	exec('omxplayer mp3/negy.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0105') {
	exec('omxplayer mp3/ot.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0106') {
	exec('omxplayer mp3/hat.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0107') {
	exec('omxplayer mp3/het.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0108') {
	exec('omxplayer mp3/nyolc.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS0109') {
	exec('omxplayer mp3/kilenc.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}
	if (subdata == 'PCS010a') {
	exec('omxplayer mp3/tiz.mp3', function(error,stdout, stderr) {
		console.log(subdata);
});
}

var subsubdata = subdata.substring(0,5);
	if (subsubdata == 'PCC01') {
	var d = new Date().toUTCString();
	data = data + " " + d;
	lgfs.appendFile("log/log.txt", (data+"\r\n"));
		    
}

// *** Drón adatok ***

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

var lgfs = require("fs");


lgfs.writeFile("log/log.txt","",function(err) {

    if (err) {

    return console.log(err);
}

console.log("A logfájl létrehozva");

});


