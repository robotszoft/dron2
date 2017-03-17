
//Spinners

$( "#p1" ).spinner({
  change: function( event, ui ) {
	  utvonal.params.param1 = this.value;
	
  }});
  
 $( "#p2" ).spinner({
  change: function( event, ui ) {
	  utvonal.params.param2 = this.value;
	
  }
  
});

$( "#p3" ).spinner({
  change: function( event, ui ) {
	  utvonal.params.param3 = this.value;
	
  }});
  
$( "#p4" ).spinner({
  change: function( event, ui ) {
	  utvonal.params.param4 = this.value;
	 
  }});

  $( "#p7" ).spinner({
  change: function( event, ui ) {
	  utvonal.params.param7 = this.value;
	
  }});
 
  $( "#utvonal" ).spinner({
  change: function( event, ui ) {
	  utvonal.tabla = this.value;
	
  }});