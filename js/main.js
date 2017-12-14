NavBtn = $('button[data-target="#navbartoggler"]');

NavBtn.on('click', function() {
	$('nav[id="navbartoggler"] ul').toggleClass('wrap-popup');
	$('.wrap').fadeIn('fast');
    NavBtn.attr('id', 'close-popup');
    NavBtn.toggleClass('btn-active');

    $('#close-popup').on('click', function () {
        $('.wrap').hide();
        NavBtn.removeAttr('id');
        $('nav').removeAttr('style');
        NavBtn.toggleClass('btn-active');
    });

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


$(document).ready(function() {
    const setActive = function() {
        const self = $(this);
        const listMenu = $('.navbar-nav li');
        let curIndex = -1;

        $('.nav-header').each(function(index) {
            if (self.scrollTop() > $(this).offset().top - 70) {
                curIndex = index;
            }
        });

        if (curIndex === -1) {
            listMenu.removeClass('active');
        }
        else {
            const curItemMenu = listMenu.eq(curIndex);

            if (!curItemMenu.hasClass('active')) {
                curItemMenu.addClass('active');
                curItemMenu.siblings().removeClass('active');
            }
        }
    };

    setActive();

    $('.navbar-nav li').on('click', function(e) {
        e.preventDefault();

        const index = $(this).index();
        const curHeader = $('.section-js').eq(index).offset().top;

        $('html, body').animate({
            scrollTop: curHeader - 70
        }, 1000);
    });

    $(document).on('scroll', function() {
        const posDoc = $(this).scrollTop();

        $('.section-js').each(function(index, item) {
            const topHeader = $(this).offset().top - 70;
            const botHeader = topHeader + $(this).height();

            if (
                posDoc > topHeader &&
                posDoc < botHeader
            ) {
                $('.navbar-nav li').removeClass('active');
                $('.navbar-nav li').eq(index).addClass('active');
            }

        });
    });
});

