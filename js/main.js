$('button[data-target="#navbartoggler"]').on('click', function() {
	$('nav[id="navbartoggler"]').addClass('wrap');
	$('nav[id="navbartoggler"] ul').addClass('wrap-popup');
	$('.wrap').fadeIn('fast');
});

$(function(){
 var shrinkHeader = 50;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('header-fixed');
        }
        else {
            $('.header').removeClass('header-fixed');
        }
  });

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});