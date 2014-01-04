$( document ).ready(function() {
	
	// slideshow
	$(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 500,            // Integer: Speed of the transition, in milliseconds
		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,           // Boolean: Show pager, true or false
		nav: false,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
  	});

		var nav = responsiveNav(".nav-collapse", { // Selector
		animate: true, // Boolean: Use CSS3 transitions, true or false
		transition: 250, // Integer: Speed of the transition, in milliseconds
		label: "Menu", // String: Label for the navigation toggle
		insert: "after", // String: Insert the toggle before or after the navigation
		customToggle: "", // Selector: Specify the ID of a custom toggle
		openPos: "relative", // String: Position of the opened nav, relative or static
		jsClass: "js", // String: 'JS enabled' class which is added to <html> el
		init: function(){}, // Function: Init callback
		open: function(){}, // Function: Open callback
		close: function(){} // Function: Close callback
	});
	
	
	

/* google maps - contact page*/
function initialize() {
  var myLatlng = new google.maps.LatLng(48.7091167, 18.6445667);         // change  latitude/longitude  
  var mapOptions = {
    zoom: 11,                                                                                                        // higher number => closer
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,                                                                          // remove street view icon
        mapTypeControl: false                                                                            // remove map type tabs
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 
                        // map-mcanvas => div with #map-canvas in html code
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Dreveny Svet PD'  // title when hovered over marker
  });
  
  
  // code from stack overflow to keep marker in middle
  var center;
        function calculateCenter() {
          center = map.getCenter();
        }
        google.maps.event.addDomListener(map, 'idle', function() {
          calculateCenter();
        });
        google.maps.event.addDomListener(window, 'resize', function() {
          map.setCenter(center);
        });
}

google.maps.event.addDomListener(window, 'load', initialize);

});