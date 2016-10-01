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

var vivus = new Vivus( options, onComplete, logoElements);

function onComplete() {}

let logoElements = document.querySelectorAll('#logo-corner-down #logo-corner-top #logo-diagonal-right #logo-diagonal-left');
