jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>450){
			$('.fixMenu').addClass('fixed');
		}
		else if ($(this).scrollTop()<450){
			$('.fixMenu').removeClass('fixed');
		}
	});
});


