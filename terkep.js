
function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

 
 
poly = new google.maps.Polyline({
          strokeColor: '#FFFFFF',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        poly.setMap(map);
 
 google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
	 var path = poly.getPath();
	  path.push(event.latLng);
 });

 

//Marker elhelyezése funkció

function placeMarker(location) {
    szamlalo = szamlalo+1;
	
	if (szamlalo == 1) {
	firstlocation = location;
	}
	
	//Marker konstruktor
  var marker = new google.maps.Marker({
    position: location,
	    map: map,
	draggable: true,
}

);

//Kattintás a markerre esemény !!!!

 google.maps.event.addListener(marker, "click", function() {
console.log(marker);

markerid = marker.get("id").toString();

document.getElementById("tabs").style.visibility = 'visible';
$(".markerid").text(markerid);
$(".hely").text(marker.position);

utvonal.sorszam = markerid;


$("#p5").val(marker.position.lat().toFixed(6));
$("#p6").val(marker.position.lng().toFixed(6));
utvonal.params.param5 = marker.position.lat().toFixed(6);
utvonal.params.param6 = marker.position.lng().toFixed(6);

console.log(JSON.stringify(utvonal));
 });
 
 //Kattintás a markerre esemény vége 
 
marker.set("id",szamlalo);

//A koordináták megjelenítése (Törlendő)

parancs=parancs.concat(szamlalo.toString()+ ": ["+ location+"],\r\n");
//document.getElementById("GPS").value = parancs;

  var infowindow = new google.maps.InfoWindow({
    
    content: marker.get("id").toString()
  });
 //infowindow.open(map,marker);
 
 
  } //Marker elhelyezés vége
 
 
 
 
 
 }
  
 
 
 
 
 function hidediv(melyik) {
 var mydiv = document.getElementById(melyik).style.visibility = 'hidden';

 }
 
 function showdiv(melyik) {
 var mydiv = document.getElementById(melyik).style.visibility = 'visible';

 }
google.maps.event.addDomListener(window, 'load', initialize);

