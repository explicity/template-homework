$('button[data-target="#navbartoggler"]').on('click', function() {
	$('nav[id="navbartoggler"]').addClass('wrap');
	$('nav[id="navbartoggler"] ul').addClass('wrap-popup');
	$('.wrap').fadeIn('fast');
});

$('figure').hover(
	function() {
		$('.text-hover').show('fast');
	},
	function() {
		$('.text-hover').hide('fast');
	}
);