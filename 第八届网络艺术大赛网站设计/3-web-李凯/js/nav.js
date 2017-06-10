$(function () {
	var $floor1 = $(".floor1");
	var $floor2 = $(".floor2");
	var $getnav = $("header");
	var $navtrick = function () {
		var st = $(document).scrollTop();
		var width = $(window).width();
		(width > 1080 && st > 150) ? $floor1.slideUp('quick'): $floor1.slideDown('quick');
		(width > 1080 && st > 900) ? $getnav.fadeOut('slow'): $getnav.fadeIn('slow');
	};
	var $showfloor2 = function () {
		var width = $(window).width();
		if
        (width <= 1080 ){$floor2.toggle('quick');}
	};
	
	$(window).bind("scroll", $navtrick);
		$floor1.bind("click", $showfloor2);
});