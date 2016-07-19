// This is where it all goes :)
//= require jquery
//= require slick.js.js

$(document).ready(function(){

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: ".slider-nav",
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true
  })

  $('.slick-nav .slick-slider').eq(0).addClass('slick-current');

  $('.slider-for').on('afterChange', function(event, slick, i){
    $('.slider-nav .slick-slide').removeClass('slick-current');
    $('.slider-nav .slick-slide').eq(i).addClass('slick-current');
  });

  // Smooth scrolling to in page divs
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.top').click(function(){
    $('html,body').animate({scrollTop:(0,0)}, 500);
  });

  $('contact_form').submit(function(e){
    e.preventDefault();
    $(this).parent().append("<p style='color:red;'>Submitted</p>")
  })

  $('#menu-icon').click(function(){
    $(this).next().toggleClass('show-menu');
  });

  $('.menu li').click(function(){
    $(this).parent().toggleClass('show-menu');
  });
  if($(window).width() > 768 ) {
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();

      $('.navbar').css({
        'transform': 'translate(0px, ' + wScroll/2 + '%)'
      });

      $('.intro').css({
        'transform': 'translate(0px, -' + wScroll/40 + '%)'
      });
    });
  }
})

