var req_version = "1.11.1";
if ( !($ = window.jQuery) || req_version > $.fn.jquery || callback( $ ) ) {
	script = document.createElement( 'script' );
	script.type = 'text/javascript';
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + req_version + '/jquery.min.js';
	script.onload = script.onreadystatechange = function() {
		includeHTML('/include.js');
	});
};