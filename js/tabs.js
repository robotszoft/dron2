function urit() {
$( "#utvonal").spinner();

$( "#p1").spinner();
$( "#p2" ).spinner();
$( "#p3" ).spinner();
$( "#p4" ).spinner();
$( "#p5" ).spinner();
$( "#p6" ).spinner();
$( "#p7" ).spinner();
//$( "#utvonal").spinner("value",0);
$( "#utvonal").spinner({min: 0});
$( "#p1").spinner("value",0);
$( "#p1").spinner({min: 0});
$( "#p2").spinner("value",0);
$( "#p2").spinner({min: 0});
$( "#p3").spinner("value",0);
$( "#p3").spinner({min: 0});
$( "#p4").spinner("value",0);
$( "#p4").spinner({min: 0});
$( "#p5").spinner("destroy");
//$( "#p5").spinner({min: 0});
$( "#p6").spinner("destroy");
//$( "#p6").spinner({min: 0});
$( "#p7").spinner("value",10);
utvonal.params.param7 = 10;
$( "#p7").spinner({min: 0});
/*
$("#p1").spinner("enable");
$("#p2").spinner("enable");
$("#p3").spinner("enable");
$("#p4").spinner("enable");
$("#p5").attr("disabled", "disabled");
$("#p6").attr("disabled", "disabled");

$("#p7").spinner("enable");
	*/

if (utvonal.parancs == "183") {
	$( "#p2").spinner("value",1);
	utvonal.params.param2 = 1;
}
console.log(utvonal);
} 

$( "#tabs" ).tabs();


$.widget( "ui.spinner", $.ui.spinner, {
        _buttonHtml: function() {
            return "" +
                "<input class='ui-spinner-button ui-spinner-up' id='buttonadd' type='button' value='' />" +
                "<input class='ui-spinner-button ui-spinner-down' id='buttonremove' type='button' value='' />";
        }
    });


$( "#p1").spinner();
$( "#p2" ).spinner();
$( "#p3" ).spinner();
$( "#p4" ).spinner();
$( "#p5" ).spinner();
$( "#p6" ).spinner();
$( "#p7" ).spinner();

$( "#p1").spinner("value",0);
$( "#p2").spinner("value",0);
$( "#p3").spinner("value",0);
$( "#p4").spinner("value",0);
$( "#p5").spinner("destroy");
$( "#p6").spinner("destroy");
$( "#p7").spinner("value",10);
utvonal.params.param7 = 10;



urit();


function felszallas() {
urit();

//console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
//$("#p2").spinner("enable");
//$("#p3").spinner("enable");
$("#p4").spinner("enable");
$("#p5").removeAttr("disabled"); //Input text
$("#p6").removeAttr("disabled"); //Input text

$("#p7").spinner("enable");

$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Emelkedés");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("Felszólítás");
$("#param5").text("Szélesség");
$("#param6").text("Hosszúság");
$("#param7").text("Magasság");
$( "#p7").spinner("value",10);


}

function waypoint() {
	urit();

console.log(JSON.stringify(utvonal));

$("#p1").spinner("enable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$( "#p2").spinner("value",0);
$( "#p2").spinner({min: 0});
$( "#p2").spinner({max: 0});
$( "#p3").spinner("value",0);
$( "#p3").spinner({min: 0});
$( "#p3").spinner({max: 0});
$("#p4").spinner("enable");
$("#p5").removeAttr("disabled"); //Input text
$("#p6").removeAttr("disabled"); //Input text

$("#p7").spinner("enable");

$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Időzítés");
//$("#param2").text("Kör sugár");
//$("#param3").text("Körözés");
$("#param4").text("Felszólítás");
$("#param5").text("Szélesség");
$("#param6").text("Hosszúság");
$("#param7").text("Magasság");
	
}

function return_to_launch() {
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("disable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#p4").spinner("disable");
$("#p5").attr("disabled", "disabled");
$("#p6").attr("disabled", "disabled");
$(".rogzit").attr("hidden","hidden");
$(".rogzkuld").removeAttr("hidden");
$("#p7").spinner("value",0);
$("#p7").spinner("disable");
utvonal.params.param7 = 0;


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");
	
}

function leszallas() {
urit();

console.log(JSON.stringify(utvonal));
$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Abort alt");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("Dőlésszög");
$("#param5").text("Szélesség");
$("#param6").text("Hosszúság");
$("#param7").text("Magasság");


$("#p1").spinner("enable");
$("#p4").spinner("enable");
$("#p7").spinner("enable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#p5").removeAttr("disabled"); //Input text
$("#p6").removeAttr("disabled"); //Input text	
	
}

function spline_waypoint() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$( "#p2").spinner("value",0);
$( "#p2").spinner({min: 0});
$( "#p2").spinner({max: 0});
$( "#p3").spinner("value",0);
$( "#p3").spinner({min: 0});
$( "#p3").spinner({max: 0});
$("#p4").spinner("enable");
$("#p5").removeAttr("disabled"); //Input text
$("#p6").removeAttr("disabled"); //Input text

$("#p7").spinner("enable");

$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Időzítés");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("Felszólítás");
$("#param5").text("Szélesség");
$("#param6").text("Hosszúság");
$("#param7").text("Magasság");
}

function submode_circle() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("enable");
$("#p3").spinner("disable");
$("#p4").spinner("disable");
$("#p5").removeAttr("disabled"); //Input text
$("#p6").removeAttr("disabled"); //Input text

$("#p7").spinner("disable");

$("#p2").spinner("enable");
$("#p3").spinner("disable");
$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Időzítés (s)");
$("#param2").text("Figyelmeztetés [1..9]");
$("#param3").text("");
$("#param5").text("Szélesség");
$("#param6").text("Hosszúság");

}

function nav_roi() {
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("disable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#p4").spinner("enable");
//$("#p5").removeAttr("disabled"); //Input text
//$("#p6").removeAttr("disabled"); //Input text
$("#p5").spinner()
$("#p6").spinner()
$("#p5").spinner("value",0)
$("#p6").spinner("value",0)
$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("");
$("#param2").text("");
$("#param4").text("Felszólítás");
$("#param5").text("X");
$("#param6").text("Y");
$("#param7").text("Z");

	
}

function change_speed() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("disable");
$("#p2").spinner("enable");
$("#p3").spinner("disable");
$("#p4").spinner("enable");
$("#p5").attr("disabled","disabled")
$("#p6").attr("disabled","disabled")

$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");


$("#param2").text("Sebesség");

$("#param4").text("Felszólítás");

}

function set_camera() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("disable");
$("#p3").spinner("disable");
$("#p4").spinner("disable");
$("#p5").attr("disabled","disabled")
$("#p6").attr("disabled","disabled")

//$("#p5").removeAttr("disabled"); //Input text
//$("#p6").removeAttr("disabled"); //Input text

$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Távolság");
}

function condition_yaw() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("disable");
$("#p3").spinner("enable");
$( "#p3").spinner("value",1);
$( "#p3").spinner({min: 1});
$( "#p3").spinner({max: 1});

utvonal.params.param3 = 1; //3. paraméter fixen megadva

$("#p4").spinner("enable");
$("#p5").attr("disabled","disabled")
$("#p6").attr("disabled","disabled")

$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Szög");

$("#param3").text("Forgásirány");
$("#param4").text("Felszólítás");


}

function set_servo() {
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("enable");
$( "#p2").spinner("value",1);
$( "#p2").spinner({min: 1});
$( "#p2").spinner({max: 100});
$("#p3").spinner("disable");
$("#p4").spinner("enable");

$("#p5").attr("disabled","disabled")
$("#p6").attr("disabled","disabled")

$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Csatorna száma");
$("#param2").text("PWM 1-100%");
$("#param4").text("Felszólítás");
	
}

function do_jump() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("enable");
$("#p3").spinner("disable");
$("#p4").spinner("disable");
$("#p5").attr("disabled","disabled")
$("#p6").attr("disabled","disabled")

$("#p7").spinner("disable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Parancs sorszám");
$("#param2").text("Ismétlés");


	
}

function set_roi() {
	
	urit();

console.log(JSON.stringify(utvonal));
$("#p1").spinner("enable");
$("#p2").spinner("enable");
$("#p3").spinner("enable");
$("#p4").spinner("disable");
//$("#p5").removeAttr("disabled"); //Input text
//$("#p6").removeAttr("disabled"); //Input text
$("#p5").spinner()
$("#p6").spinner()
$("#p5").spinner("value",0)
$("#p6").spinner("value",0)
$("#p7").spinner("enable");


$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");

$("#param1").text("Mode");
$("#param2").text("Mission Index");
$("#param3").text("ROI index");
$("#param5").text("X");
$("#param6").text("Y");
$("#param7").text("Z");
}

function menu() {
	
	urit();
}
//---------------------------------------------

$( "#commands" ).selectmenu({
  change: function( event, ui ) {}
});

$("#param1").text("");
$("#param2").text("");
$("#param3").text("");
$("#param4").text("");
$("#param5").text("");
$("#param6").text("");
$("#param7").text("");
$(".rogzkuld").attr("hidden", "hidden");
$(".rogzit").removeAttr("hidden");



 $( "#commands" ).on( "selectmenuchange", function( event, ui ) {
 var valueSelected = this.value;
 

//Felszállás
 if (valueSelected == "22") {
utvonal.parancs = this.value;	 
felszallas();
}

//Waypoint
if (valueSelected == "16") {
utvonal.parancs = this.value;
waypoint();
}

//Vissza a felszállási helyre (Minden kikapcsolva)
if (valueSelected == "20") {
utvonal.parancs = this.value;
return_to_launch();
}

//Leszállás
 
if (valueSelected == "21") {
utvonal.parancs = this.value;
leszallas();
}


//MAV_CMD_NAV_SPLINE_WAYPOINT
 if (valueSelected == "82") {
utvonal.parancs = this.value;
 spline_waypoint();
 
}


//MAV_CMD_SET_GUIDED_SUBMODE_CIRCLE
if (valueSelected == "112") {
utvonal.parancs = this.value;
submode_circle();
}

//MAV_CMD_NAV_ROI

if (valueSelected == "80") {
utvonal.parancs = this.value;
nav_roi();
}

//MAV_CMD_DO_CHANGE_SPEED
if (valueSelected == "178") {
utvonal.parancs = this.value;
change_speed();

}

//MAV_CMD_DO_SET_CAM_TRIGG_DIST
if (valueSelected == "206") {
utvonal.parancs = this.value;
set_camera();
}


//MAV_CMD_CONDITION_YAW
if (valueSelected == "115") {
utvonal.parancs = this.value;
condition_yaw();
}

//MAV_CMD_DO_SET_SERVO
if (valueSelected == "183") {
utvonal.parancs = this.value;
set_servo();

}

//MAV_CMD_DO_JUMP
if (valueSelected == "177") {
utvonal.parancs = this.value;
do_jump();
}

//MAV_CMD_DO_SET_ROI
if (valueSelected == "201") {
utvonal.parancs = this.value;
set_roi();

}


  } );
  
$( "input[type='radio']" ).checkboxradio();

//Funkciógombok függvényei
  $(".elvet").click(function() {document.getElementById("tabs").style.visibility = 'hidden'});
 // $(".rogzit").click(function() {alert(JSON.stringify(utvonal))});
 
  $(function()
            {
                $('.rogzit').click(function(){
                //    alert('Adat elkuldve');

                    $.ajax({
                        url: "ajaxpost.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                        alert(response);
			}
						
					
                    });
                var data = new markerdata(utvonal.sorszam, utvonal.tabla,utvonal.parancs,utvonal.params.param1,utvonal.params.param2,utvonal.params.param3,utvonal.params.param4,utvonal.params.param5,utvonal.params.param6,utvonal.params.param7,utvonal.tipus);
					markerlist.push(data);
					console.log(markerlist);
				document.getElementById("tabs").style.visibility = 'hidden';
				});
				
				
				$('.rogzkuld').click(function(){
                //    alert('Adat elkuldve');

                    $.ajax({
                        url: "ajaxpostser.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                            alert(response);
                        }
						
					
                    });
                var data = new markerdata( utvonal.sorszam, utvonal.tabla,utvonal.parancs,utvonal.params.param1,utvonal.params.param2,utvonal.params.param3,utvonal.params.param4,utvonal.params.param5,utvonal.params.param6,utvonal.params.param7,utvonal.tipus);
					markerlist.push(data);
					console.log(markerlist);
				document.getElementById("tabs").style.visibility = 'hidden';
				 var path = poly.getPath();
	  //path.push(firstlocation);
				});
				
            });

 
 //Rádiógombok eseményei
  $(document).ready(function () {
        
		
		$('input:checkbox').click(function() {
		if (this.checked == true) {
			utvonal.torles = 1;
		 
		
		}
		else {
			utvonal.torles = 0;
		}
		
		});
		
		$("#torol").click(function() {
		
		 $.ajax({
                        url: "tablatorol.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                            alert("Törölve: "+response);
                        }
                    });
		
		});
    
		$("#letrehoz").click(function() {
		
		 $.ajax({
                        url: "tablaletrehoz.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
                            alert("Létrehozva :"+response);
                        }
                    });
		
		});

$("#setorigo").click(function() {
		
		 $.ajax({
                        url: "setorigo.py",
                        type: "post",
                        datatype:"json",
                        data: JSON.stringify(utvonal),
                        success: function(response){
			
                            alert("Beállítva :"+response);
                        }
                    });
		
		});



	
	});

//Tabs	
	
	$(document).ready(function() {
    $("#tabs").tabs();
    $('#action').click(function() {
        var selected = $("#tabs").tabs("option", "selected");
        $("#tabs").tabs("option", "selected", selected + 1);
    });
});

