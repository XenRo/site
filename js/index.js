//content fading effect
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).ready(function(){
     $('.content').each(function(){
        if(!isScrolledIntoView($(this))){
            $(this).addClass('hidden');
        }
    });

$(document).on('scroll', function(){
    $('.hidden').each(function(){
        if(isScrolledIntoView($(this))){
            $(this).removeClass('hidden').css({ 'display' : 'none' }).fadeIn();
        }
    });
});
});

//logo-effect
var options = {
  duration: 300, 
  animTimingFunction: Vivus.EASE_OUT,
  start:"autostart"
};

var vivus = new Vivus('logo-diagonal-right', options, onComplete);
var vivus = new Vivus('logo-diagonal-left', options, onComplete);
var vivus = new Vivus('logo-corner-top', options, onComplete);
var vivus = new Vivus('logo-corner-down', options, onComplete);
function onComplete() {}
//preload images
function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();

		img1.src = "img/logo/header_pattern.gif";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
