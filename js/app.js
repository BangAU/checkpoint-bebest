function aos_init(){AOS.init({startEvent:"load",anchorPlacement:"top-center"})}function formFocus(){$(".form-group input,.form-group select").focusin(function(){$(this).parents(".form-group").addClass("focus-in")}).focusout(function(){$(this).parents(".form-group").removeClass("focus-in")})}function formStepAndValidate(){var t=$(".custom-form-step");if(0!=t.length){var e,s;t.validate({email:{required:!0,email:!0},errorPlacement:function(t,e){e.parent(".form-group").length?(e.parent(".form-group").append(t),console.log(e)):e.parents(".radio-wrap").length?e.parents(".radio-wrap").append(t):e.after(t)}}),t.steps({headerTag:"h4",bodyTag:".form-step",transitionEffect:"fade",autoFocus:!0,titleTemplate:'<span class="step">#index#</span> #title#',labels:{previous:"Back",finish:"Submit"},onStepChanging:function(e,s,o){return t.validate().settings.ignore=":disabled,:hidden",t.valid()},onInit:function(t,o){var r=$(this).parents(".section"),n=$(this).parents(".custom-form-step-wrap");$(this).find('.actions a[href="#previous"]').addClass("btn btn-main btn-transp"),$(this).find('.actions a[href="#next"]').addClass("btn btn-main btn-hasarrow"),$(this).find('.actions a[href="#finish"]').addClass("btn btn-main btn-hasarrow"),$(this).parents(".section").prepend('<span class="form-step-progress"></span>'),$(this).before('<p class="form-step-count">Question <span class="num-current">1</span> of <span class="num-total">10</span></p>'),e=$(this).find(".content .form-step").length-1,s=100*(o+1)/e,$(".form-step-progress").css({width:s+"%"}),r.find(".form-step-count .num-current").html(o+1),r.find(".form-step-count .num-total").html(e),setTimeout(function(){n.find(".loader").fadeOut()},1e3)},onStepChanged:function(t,o,r){var n=$(this).parents(".section"),a=$(this).parents(".custom-form-step-wrap");s=100*(o+1)/e,$(this).find('.actions a[href="#next"]').html("Next"),n.find(".form-step-count .num-current").html(o+1),n.find(".form-step-count .num-total").html(e),$(".form-step-progress").css({width:s+"%"}),o===e&&(n.find(".form-step-count").hide(),$(this).find('.actions a[href="#previous"]').parent().hide(),n.find(".form-step-progress").hide(),a.find(".shapes").fadeIn())},onFinishing:function(e,s){return t.validate().settings.ignore=":disabled",t.valid()},onFinished:function(t,e){}})}}function getStartedForm_validate(){$(".getstarted-form").validate({rules:{email:{required:!0,email:!0}}})}function getStartedForm_submit(){$(".getstarted-form .btn-submit").click(function(t){if(t.preventDefault(),$(".getstarted-form").valid()){$(".getstarted-form .btn-submit").attr("disabled",!0);var e=$(".getstarted-form").serialize(),s=$(".getstarted-form").attr("action");$("body").css("cursor","wait"),$.ajax({type:"POST",url:s,data:e,dataType:"json",success:function(t){$(".getstarted-form .btn-submit").attr("disabled",!1),$("body").css("cursor","auto"),"success"===t.status?"demo"===t.message?window.location.href="thankyou.php?enquiry_type=demo#sectionGetstarted":"contact"===t.message?window.location.href="thankyou.php?enquiry_type=contact#sectionGetstarted":"contact"===t.message&&($("#msg").html("There might be some problem sending message. Please contact site admin"),$("#msg").css("visibility","visible")):($("#msg").html("There might be some problem sending message. Please contact site admin"),$("#msg").css("visibility","visible"))},error:function(t){console.log(t),$("#msg").html("There might be some problem sending message. Please contact site admin"),$("#msg").css("visibility","visible")}})}})}function customStepForm_submit(){$(".custom-form-step").submit(function(t){if(t.preventDefault(),$(".custom-form-step").valid()){$(".custom-form-step .survey-submit").attr("disabled",!0);var e=$(".custom-form-step").serialize(),s=$(".custom-form-step").attr("action");$("body").css("cursor","wait"),$.ajax({type:"POST",url:s,data:e,dataType:"json",success:function(t){$(".custom-form-step .survey-submit").attr("disabled",!1),$("body").css("cursor","auto"),"success"===t.status?($(".custom-form-step").hide(),$(".custom-form-step-wrap .thank-you-msg-wrap").html('<div class="thank-you-msg"> <h2>Thank you.</h2> <p>One of our cybersecurity consultants will get back to you shortly with your free license for “Zone Alarm Mobile security”.</p></div>'),$("html, body").stop().animate({scrollTop:$(".custom-form-step-wrap").parents(".section").offset().top},1e3)):"failed"===t.status&&($(".custom-form-step-wrap .thank-you-msg-wrap").html("There is some problem submitting the entry. Please try again"),$(".custom-form-step-wrap .thank-you-msg-wrap").css("visibility","visible"))},error:function(t){console.log(t),$(".custom-form-step-msg").html("There might be some problem sending message. Please contact site admin"),$(".custom-form-step-msg").css("visibility","visible")}})}})}function animStart(){var t=$(".footer .circ-orange-red svg"),e=t.offset().top;$(window).scroll(function(){var s=$(window).scrollTop(),o=$(window).height();s+o>e&&t.addClass("anim-start")})}var $=jQuery;if(AOS.init(),$("a.page-scroll").bind("click",function(t){t.preventDefault();var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1e3)}),$(".rellax").length){var rellax=new Rellax(".rellax",{speed:-1.5});$(window).width()>991?rellax.refresh():rellax.destroy(),$(window).resize(function(){$(window).width()>991?rellax.refresh():rellax.destroy()})}$("select.nice-select").length&&$("select.nice-select").niceSelect(),formFocus(),$(".custom-form-step").validate({rules:{email:{required:!0,email:!0}},errorPlacement:function(t,e){e.parent(".form-group").length?(e.parent(".form-group").append(t),console.log(e)):e.parents(".radio-wrap").length?e.parents(".radio-wrap").append(t):e.after(t)}}),$("#takesurveyToggleForm").click(function(t){t.preventDefault(),$(this).parents(".takesurvey").hide(),$(this).parents(".section").find(".custom-form-step-wrap").show(),formStepAndValidate()}),getStartedForm_validate(),getStartedForm_submit(),customStepForm_submit(),animStart();