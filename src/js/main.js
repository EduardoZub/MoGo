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

});
// script for map START
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}