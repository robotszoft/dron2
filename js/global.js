var map = null;
var poly;
var szamlalo = 0;

var flylocation;
var markerid = null;
var parancs = "";
var parancsszam = 0;
var voltpost = 0;
var markerlist = Array();
var selected = 0;
 
function markerdata(markerid,utvonal,command,param1,param2,param3,param4,param5, param6,param7,tipus) {

this.markerid = markerid;
this.utvonal = utvonal;
this.command = command;
this.param1 = param1;
this.param2 = param2;
this.param3 = param3;
this.param4 = param4;
this.param5 = param5;
this.param6 = param6;
this.param7 = param7;
this.tipus =tipus;
} 

//Az útvonal beállításaihoz szükséges paraméterek
var utvonal = {
tabla: "",
szamlalo: "",
torles: 0,
sorszam:  "", //A marker azonosítója marker.id
parancs: "",

params : {
	param1: 0,
	param2: 0,
	param3: 0,
	param4: 0,
	param5: 0,
	param6: 0,
	param7: 0
},
idozites: {
	utv: 0,
	perc1: 0,
	ora1: 0,
	perc2: 0,
	ora2: 0,
	perc3: 0,
	ora3: 0
}, 
tipus: "riasztas",
origo: {
	latitude:0,
	longitude:0	

},




} //utvonal object

var alap = new markerdata(0,0,0,100,0,0,0,0,0,0,"riasztas");
markerlist.push(alap);


$(document).ready(function() {
$("input:radio").change(function() {

utvonal.tipus = this.value;
console.log(utvonal);


});


$("#idozitett").spinner({
    change: function(event,ui) {
    utvonal.idozites.utv = this.value;
}

});

$("#perc1").spinner({
    change: function(event,ui) {
    utvonal.idozites.perc1 = this.value;
}

});

$("#ora1").spinner({
    change: function(event,ui) {
    utvonal.idozites.ora1 = this.value;
}

});

$("#perc2").spinner({
    change: function(event,ui) {
    utvonal.idozites.perc2 = this.value;
} });

$("#ora2").spinner({
    change: function(event,ui) {
    utvonal.idozites.ora2 = this.value;
}

});

$("#ora3").spinner({
    change: function(event,ui) {
    utvonal.idozites.ora3 = this.value;
} });


$("#perc3").spinner({
    change: function(event,ui) {
    utvonal.idozites.perc3 = this.value;
} });

$("#perc1").spinner("option","min",0);
$("#perc2").spinner("option","min",0);
$("#perc3").spinner("option","min",0);
$("#perc1").spinner("option","max",59);
$("#perc2").spinner("option","max",59);
$("#perc3").spinner("option","max",59);

$("#ora1").spinner("option","min",0);
$("#ora2").spinner("option","min",0);
$("#ora3").spinner("option","min",0);
$("#ora1").spinner("option","max",23);
$("#ora2").spinner("option","max",23);
$("#ora3").spinner("option","max",23);
$("#idozitett").spinner("option","min",1);

$("#perc1").spinner("value",0);
$("#perc2").spinner("value",0);
$("#perc3").spinner("value",0);
$("#ora1").spinner("value",0);
$("#ora2").spinner("value",0);
$("#ora3").spinner("value",0);

$("#idogomb").click(function() {
		
		 $.ajax({
                        url: "idozit.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                            alert("Időzítve: "+response);
                        }
                    });
		
		});
		
$("#idoztorol").click(function() {
		
		 $.ajax({
                        url: "idoztorol.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                            alert("Időzítés törölve: "+response);
                        }
                    });
		
		});

console.log(JSON.stringify(utvonal))
		
});
  