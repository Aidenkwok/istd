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

$.scrollify({
        section : ".section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
});

var waypoint = new Waypoint({
  element: $('#waypoint1'),
  handler: function() {
    $('#typed').typeIt({
        speed: 100,
        breakLines: false,
        autoStart: false
    })
    .tiType('Abruptly he was sitting up with O’Brien’s arm round his shoulders. ')
    .tiPause(700)

    .tiType("He had perhaps lost consciousness for a few seconds.")
    .tiPause(2000)

    .tiType("The bonds that had held his body down were loosened. ")
    .tiPause(700)

    .tiType("He felt very cold, ")
    .tiPause(1000)

    .tiType("He felt very cold, ")
    .tiPause(1000)

    .tiType("he was shaking uncontrollably, ")
    .tiPause(1000)

    .tiType("his teeth were chattering, ")
    .tiPause(1000)

    .tiType("the tears were rolling down his cheeks. ")
    .tiPause(1000)

    .tiType("For a moment he clung to O’Brien like a baby, curiously comforted by the heavy arm round his shoulders. ")
    .tiPause(700)

    .tiType("He had the feeling that O’Brien was his protector, ")
    .tiPause(1000)

    .tiType("that the pain was something that came from outside, ")
    .tiPause(1000)

    .tiType("from some other source, ")
    .tiPause(1000)

    .tiType("and that it was O’Brien who would save him from it.")
  }
})

var waypoint = new Waypoint({
  element: $('#waypoint2'),
  handler: function() {
    $("video").get(0).play();
  }
})
