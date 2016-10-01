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
var logo-diagonal-right = new Vivus('logo-diagonal-right', {
  duration: 100,
  type: "delayed", 
  animTimingFunction: Vivus.EASE_OUT
  });
  logo-diagonal-right.play(1);

var logo-diagonal-left = new Vivus('logo-diagonal-left', {
  duration: 100,
  type: "delayed", 
  animTimingFunction: Vivus.EASE_OUT
  });
  logo-diagonal-left.play(1);

var logo-corner-top = new Vivus('logo-corner-top', {
  duration: 100,
  type: "delayed", 
  animTimingFunction: Vivus.EASE_OUT
  });
  logo-corner-top.play(1);

var logo-corner-down = new Vivus('logo-corner-down', {
  duration: 100,
  type: "delayed", 
  animTimingFunction: Vivus.EASE_OUT
  });
  logo-corner-down.play(1);
