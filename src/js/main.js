"use strict";
$(document).ready(function() {
    // script for search field START
    $(".icon-header__search").click(function() {
        $("body").toggleClass("show-search-field");
    });

    // script for section-what-we-do slider START
    $(".slider").slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
            // autoplay: true,
            // autoplaySpeed: 2000
    });
    // $("#show-slide1").on('click', function() {
    //     // slideIndex++;
    // });
    // script for section-coments slider START
    $(".section-coments-slider").slick({
        infinite: true,
        speed: 500
    });

    // script for section-what-we-do accordion START
    $("#accordion").accordion({
        heightStyle: "auto",
        icons: {
            "header": "icon-active ",
            "activeHeader": "icon-not-active"
        }
    });

    $("#accordion-resizer").resizable({
        minHeight: 0,
        minWidth: 600,
        maxHeight: 200,
        maxWidth: 600,
        resize: function() {
            $("#accordion").accordion("refresh");
        }
    });

    // script for map START
    $(".mask-title, .close-map").click(function() {
        $("body").toggleClass("show-map");
    });
    // script for map END

});
// script for map START
var MyMap;

function initMap() {
    MyMap = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 56.005476, lng: -4.358288 },
        zoom: 13,
        // mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeId: 'satellite',
        heading: 90,
        tilt: 45

    });



    var marker = new google.maps.Marker({
        position: { lat: 56.008476, lng: -4.358299 },
        map: MyMap,
        icon: "img/PIN_2.png"
    })

    var InfoWindow = new google.maps.InfoWindow({
        content: "<span>MoGo</span>"
    })

    InfoWindow.open(MyMap, marker)

    marker.addListener("click", function() {
        InfoWindow.open(MyMap, marker);
    })
}