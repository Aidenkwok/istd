 $(function(){
 		var x = document.getElementById("location");

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function showPosition(position) {
	    x.innerHTML = "Latitude: " + position.coords.latitude + 
	    "<br>Longitude: " + position.coords.longitude;
	}

	(function () {
	    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

	    navigator.getMedia(
	        // constraints
	        {video: { width: 1280, height: 720 }, audio:false},

	        // success callback
	        function (mediaStream) {
	            var video = document.getElementById('cam-feed');
	            video.src = window.URL.createObjectURL(mediaStream);
	            video.play();
	        },   
	        //handle error
	        function (error) {
	            console.log(error);
	        })   
	})();

	$('#video').hide()
	$('#play').on('click', function() {
		$('#video').fadeIn()
	    $('#video').get(0).play();
	    $('#play').fadeOut()
	});

	navigator.getBattery().then(function(battery) {
		console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
		battery.addEventListener('dischargingtimechange', function() {
			console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
		});
	});

	getLocation();
}); 