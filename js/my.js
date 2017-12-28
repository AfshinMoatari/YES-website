'use strict';
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});
$(document).ready(function() {
  $('.my-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
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
  if (window.location.pathname == '/contact') {
    $("input[type='datetime']").datetimepicker({
      timeInput: true,
      timeFormat: 'hh:mm tt',
      showAnim: 'slide'
    });
  }
});
