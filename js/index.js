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

//show page only when fully loaded
$("html").load(function() {
  // When the page has loaded
  $("site").fadeIn(2000);
  $("preloader").fadeOut(2000);
});
