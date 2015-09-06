/////////////////////
// BirdBox transition:

var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  	//wScroll -> position ow displayed page from top of document
  if (wScroll <= pContainerHeight) {
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });
    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });
  }

///////////////////////////
// Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
    $('.clothes-pics figure').each(function(i){
      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.2))) - 700);
    });
  }
/////////////////////////////
// Periscope Feature
  if (wScroll > $('.large-window.one').offset().top - $(window).height()) {
	$('.large-window').css({'background-position':'center '+ (wScroll-$('.large-window.one').offset().top) +'px'});
  	var opacity = (wScroll - $('.large-window.one').offset().top + 400) / (wScroll/8)
  	$('.one .window-tint').css({'opacity': opacity});
  }
  if (wScroll > $('.large-window.two').offset().top - $(window).height()) {
  	$('.large-window').css({'background-position':'center '+ (wScroll-$('.large-window.two').offset().top) +'px'});
  	var opacity = (wScroll - $('.large-window.two').offset().top + 400) / (wScroll/8)
  	$('.two .window-tint').css({'opacity': opacity});
  }
//////////////////////////////////
// Sliding-in Blog Posts:

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){
  	var offset = Math.min(0, wScroll - $('.blog-posts').offset().top
  		+$(window).height() - 450);
  	var scale = 1-Math.abs(offset/450);

  	$('.post-1').css({
  		'transform': 'translate('+ offset +'px, '+ Math.abs(offset*0.2) +'px )'});
  	$('.post-3').css({
  		'transform': 'translate('+ Math.abs(offset) +'px,'+ Math.abs(offset*0.2) +'px )'});
  	$('.post-2').css({
  		'transform': 'scale(' + scale +')'});
  }

  });