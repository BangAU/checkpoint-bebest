var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // call functions here
    aos_init();
    smooth_scroll();
    rellax();
    form_validate();
    form_submit();
});

//function called on window resize
win.on('resize', function(){
});


/*****  Declare your functions here  ********/
// AOS Initialise
function aos_init() {
    AOS.init({ 
        startEvent: 'load',
        anchorPlacement: 'top-center',
        once: true,
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
        var rellax = new Rellax('.rellax');
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

function form_submit() {
    $(".contact-form .btn-submit").click(function(event){
        event.preventDefault();
        if( $(".contact-form").valid() ){
            $( ".contact-form .btn-submit").attr("disabled", true);
            var form_data = $(".contact-form").serialize();
            var form_url = $(".contact-form").attr('action');
            $('body').css('cursor','wait');
            $.ajax({
                type:"POST",
                url: form_url,
                data: form_data,
                dataType:"json",
                success: function(response){
                    // console.log(response);
                    $( ".contact-form .btn-submit").attr("disabled", false);
                    $('body').css('cursor','auto');
                    if(response.status === "success") {
                        window.location.href="thankyou.php";
                    }
                    else{
                        $('#form-msg').html('There might be some problem sending message. Please contact site admin');
                        $('#form-msg').css('visibility',"visible");
                    }

                },
                error: function(err) {
                    console.log(err);
                    $('#form-msg').html('There might be some problem sending message. Please contact site admin');
                    $('#form-msg').css('visibility',"visible");
                },
            });
        }
    });

}