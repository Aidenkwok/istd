// $(document).foundation();

// $(".right").click(function(){
// 	$(this).css("color","white");
// });

// $("video").hover(function(){
//     $("video").get(0).play();
// });

// var x = document.getElementById("location");

//     function getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } else { 
//             x.innerHTML = "Geolocation is not supported by this browser.";
//         }
//     }

//     function showPosition(position) {
//         x.innerHTML = "Latitude: " + position.coords.latitude + 
//         "<br>Longitude: " + position.coords.longitude;
//     }



// function webcam() {
//     navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

//     navigator.getMedia(
//         // constraints
//         {video: { width: 1280, height: 720 }, audio:false},

//         // success callback
//         function (mediaStream) {
//             var video = document.getElementById('cam-feed');
//             video.src = window.URL.createObjectURL(mediaStream);
//             video.play();
//         },   
//         //handle error
//         function (error) {
//             console.log(error);
//         })   
// });


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
        x.innerHTML = "Latitude: " + position.coords.latitude + ", " +
        "Longitude: " + position.coords.longitude;
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

    $("video").hover(function(){
        $("video").get(0).play();
    });

    getLocation();
}); 

$(".right").click(function(){
 $(this).css("color","white");
});


navigator.getBattery().then(function(battery) {
    $("#battery").append("<p>" +'You have ' + battery.dischargingTime + " seconds left" + "</p>");
    battery.addEventListener('dischargingtimechange', function() {
        $("#battery").replaceWith("<p>" +'You have ' + battery.dischargingTime + " seconds left" + "</p>");
    });
});


////////////////TESTING////////////////

// $(window).scroll(function() {
//     if ($('#cam-feed').is(':in-viewport')) {
//         alert("hello");
//     }
// });

console.log("is this working?");