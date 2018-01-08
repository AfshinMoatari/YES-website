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

  $('#data').on('click', function() {
    $('.blocks li .block').each(function(key, block) {
            var percentage = $(this).data('percentage');
            $(this).animate({
              'height': percentage + '%'
            }, 1000);
    });
  });

  $('.nav-secondary .why-us').on('click', function() {
    if (!$(this).hasClass("uk-active")) {
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
    }
  });
  if ($('.nav-secondary .why-us').hasClass("uk-active")) {
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
  }
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

  //
  // var label = $("#panel .item");
  // label.each(function(){
  //   $(this).on("click", function(){
  //       if($(this).hasClass("close")){
  //          $(this).siblings(".open").toggleClass("open").addClass("close");
  //          $(this).removeClass("close");
  //          $(this).addClass("open");
  //        }else if($(this).hasClass("open")){
  //          $("#panel").on("click", ".close", function(){
  //              $(this).closest(".panel-container.open").toggleClass("open normal");
  //              $(this).closest(".item").siblings(".item").removeClass("close");
  //              $(this).closest(".item").removeClass("open");
  //          });
  //        }else{
  //          $(this).parents(".panel-container.normal").toggleClass("normal open");
  //          $(this).addClass("open");
  //          $(this).siblings().addClass("close");
  //        }
  //   })
  // });

  var label = $(".panel .item");
  label.each(function(){
    $(this).on("click", function(e){
      e.preventDefault()
      if($(this).hasClass("close")){
         $(this).siblings(".open").toggleClass("open").addClass("close");
         $(this).removeClass("close");
         $(this).addClass("open");
       }else if($(this).hasClass("open")){
         $(this).parents(".panel-container.open").toggleClass("open normal");
         $(this).siblings(".close").removeClass("close");
         $(this).removeClass("open");
       }else{
         $(this).parents(".panel-container.normal").toggleClass("normal open");
         $(this).addClass("open");
         $(this).siblings().addClass("close");
       }
    })
  });

      var textChange = $(".text-change");
      var leftPanel = $(".left-panel");
      var texts = ["Event", "Kitchen", "Cleaning", "Food"];
      var count = 0, interval = 3000;
      addText();

      function addText() {
          var usrtxt = $("#text");
          usrtxt.text(texts[count]).fadeOut(interval/2,
            function(){usrtxt.text(texts[count]).fadeIn(interval/2);});
          count += count < 3 ? 1 : -3;
          setTimeout(addText, interval);
          textChange.addClass("scrolled");
          leftPanel.addClass("scrolled");
      }

      var cost = $(".panel-container");
      var hr = $("hr");
      var operations = $(".operations .panel .assistance");

      $(window).scroll(function() {
        // if($.browser.safari){
        //   var scroll = $("body").scrollTop();
        //   console.log("a");
        // }else{
        //   var scroll = $(window).scrollTop();
        //   console.log("b");
        // }
        var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            cost.toggleClass("scrolled", scroll >= $("#cost").offset().top - 400);
            hr.toggleClass("scrolled", scroll >= $("#partners").offset().top - 600);
            operations.toggleClass("scrolled", scroll >= $("#operations").offset().top - 400);
      });

});
