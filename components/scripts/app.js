var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // call functions here
    aos_init();
    smooth_scroll();
    rellax();
    form_validate();
    animStart();
});

//function called on window resize
win.on('resize', function(){
});


/*****  Declare your functions here  ********/
// AOS Initialise
function aos_init() {
    AOS.init({ 
        startEvent: 'load',
        anchorPlacement: 'top-center'
    });
}

//smooth scroll
function smooth_scroll() {
    $("a.page-scroll").bind("click", function (event) {
        event.preventDefault();
        var $anchor = $(this);

        $("html, body").animate({
            scrollTop: $($anchor.attr("href")).offset().top,
        },800);

    });
}

// rellax init
function rellax(){
    if($('.rellax').length) {
        var rellax = new Rellax('.rellax', {
            speed: -1.5
        });
        if ($(window).width() > 991) {
            rellax.refresh();
        } else {
            rellax.destroy();
        }
    }
}

function form_validate(){
    $('.contact-form').validate({
        errorPlacement: function errorPlacement(error, element) {
                element.after(error);
        },
    })
}


function animStart() {
    var objTarget = $('.footer .circ-orange-red svg'),
        offsetFromTop = objTarget.offset().top;

    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        // console.log('Offset Top', offsetFromTop);
        // console.log('Window Height', $(window).height());
        // console.log('Window Scroll', $(window).scrollTop());
        if (offsetFromTop < (windowScroll + windowHeight)) {
            // console.log('YEAH!!!!!!!!!!!!!!');
            objTarget.addClass('anim-start')
        }
    })
}
