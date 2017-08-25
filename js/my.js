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

  if ($('#data').length > 0) {
    $(window).scroll(function() {
      let hT = $('#data').offset().top,
        hH = $('#data').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > (hT + hH - wH)) {
        $('.blocks li .block').each(function(key, block) {
          let percentage = $(this).data('percentage');
          $(this).animate({
            'height': percentage + '%'
          }, 1000);
        });
      }
    });
  }



  $('.nav-secondary .why-us').on('click', function() {
    $('.value').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 5000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now) + '%');
        }
      });
    });
  });

  $('.open-menu').on('click', function() {
    $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });

  $("#sticker .my-button").on("click", function() {
    localStorage.setItem('button', 'clicked');
    window.location.href = "secondPage.html";
  });
  if (localStorage.getItem('button') === 'clicked') {
    $('#service .nav-secondary').find('.uk-active').removeClass('uk-active');
    $('#service .nav-secondary .why-us').addClass('uk-active');
    $('#service .uk-switcher').find('.uk-active').removeClass('uk-active');
    $('#service .uk-switcher .why-us').addClass('uk-active');
    localStorage.removeItem('button');
  }

});
