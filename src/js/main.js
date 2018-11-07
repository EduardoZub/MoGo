"use strict";
$(document).ready(function() {
    // script for search field START
    $(".icon-header__search").click(function() {
        $("body").toggleClass("show-search-field");
    });

    // script for modal window tabs START
    $(".tab_item").not(":first").hide();
    $(".content-block .tab").click(function() {
        $(".content-block .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //script for modal show START
    $(".icon-header__account, .close-modal, .mask-block").click(function() {
        $("body").toggleClass("show-modal-window");
    });
    // script for tab modal img START
    $(".tab_img-two").click(function() {
        $("body").addClass("tab-img-change");
    });

    $(".tab_img-one").click(function() {
        $("body").removeClass("tab-img-change");
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
        speed: 500,
        responsive: [{
            breakpoint: 1024,
            settings: {
                // arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                // centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }]
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

    // script for show map START
    $(".mask-title, .close-map").click(function() {
        $("body").toggleClass("show-map");
    });
    // script for show menu STARt
    $(".header-burger, .icon-close-menu").click(function() {
        $("body").toggleClass("show-menu");
    });

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