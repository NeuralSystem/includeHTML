window.include = function(url){
	var script = document.createElement('script');
	script.src = 'https://www.eq19.com/' + url;
	script.type = 'text/javascript';
	$('#₠Quantum').appendChild(script);
	return false;
}

/* core.JS
 ========================================================*/
include('includeHTML/js/includeHTML.js');
include('slick/slick/slick.min.js');
include('sequence/js/svginnerhtml.min.js');
include('sequence/js/snap.svg-min.js');
include('flowchart/raphael-min.js');
include('route/d3.min.js');
include('cards/widget.js');

/* library
 ========================================================
include('js/device.min.js');
include('js/jquery.cookie.js');
include('js/jquery.ui.totop.js');
include('js/jquery.easing.1.3.js');
include('js/jquery.equalheights.js');
include('js/jquery-migrate-1.2.1.js');*/


/* Smooth scrolling
 ========================================================
include('wheel/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');*/

/* Superfish menu
 ========================================================
include('js/superfish.js');
include('js/jquery.mobilemenu.js');*/

/* Custom script
 ========================================================
include('js/legacy.js');
include('js/camera.js');
include('js/isotope.min.js');
include('js/owl.carousel.js');*/
include('js/function.js');

