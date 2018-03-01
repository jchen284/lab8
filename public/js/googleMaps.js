function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.87879, lng:-117.23602};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng, 
		zoom: 15
	});

	var market = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});

}
