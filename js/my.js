'use strict';

$(function() {

  $('.my-slider').slick({
    infinite: true,
    arrows: true,
    speed: 2300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".bars li .bar").each(function(key, bar) {
    let percentage = $(this).data('percentage');
    $(this).animate({
      'height': percentage + '%'
    }, 1000);
  });

  $('.open-menu').on('click', function() {
    $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});
