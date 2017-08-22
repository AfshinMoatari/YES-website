$(function() {

  // let SelectedForm = $("#contact form");
  // let AllInputs = SelectedForm.find("input");
  // let AllTextInputs = SelectedForm.find("input[type=text]");
  //
  // $(AllTextInputs).keyup(function() {
  //   $(this).each(function() {
  //     $(this).addClass("my-danger");
  //   })
  // });
  //
  // $(SelectedForm).submit(function(event) {
  //   event.preventDefault();
  //   $(AllInputs).each(function() {
  //     if (!$.trim($(this).val())) {
  //       $(this).addClass("my-danger");
  //       $(this).attr("placeholder", "Required");
  //     } else {
  //       $(this).removeClass("my-danger");
  //       $(this).attr("placeholder", "");
  //     }
  //   })
  // });

  jQuery(function($) {

    var validator = $('#contact form').validate({
      // errorPlacement: function(error, element) {
      //   element.attr("placeholder", error.text());
      // }
      onkeyup: true,
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 16
        },
        behalf: {
          required: true,
          minlength: 2,
          maxlength: 16
        },
        message: {
          required: true,
          minlength: 2,
          maxlength: 140
        },
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        timeFrom: {
          required: true,
        },
        timeTo: {
          required: true,
        }
      },
      messages: {
        name: {
          required: "Name Required.",
          minlength: "Your Name must be between 2-16 character."
        },
        behalf: {
          required: "Behalf Name Required.",
          minlength: "Behalf Name must be between 2-16 character."
        },
        message: {
          required: "Message Required.",
          minlength: "Message must be between 2-140 character."
        },
        phone: {
          required: "Phone Number Required.",
        },
        email: {
          required: "Email Required.",
          email: "Not a valid Email."
        },
        timeFrom: {
          required: "Please Set From-Time"
        },
        timeTo: {
          required: "Please Set To-Time"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });


  })





  // let form = $('#company form');
  // let formMessages = $('#form-messages');
  // $(form).submit(function(event) {
  //   event.preventDefault();
  //   let formData = $(form).serialize();
  //   $.ajax({
  //       type: 'POST',
  //       url: $(form).attr('action'),
  //       data: formData
  //     })
  //     .done(function(response) {
  //       $(formMessages).removeClass('error');
  //       $(formMessages).addClass('success');
  //       $(formMessages).text(response);
  //       $('#name').val('');
  //       $('#behalf').val('');
  //       $('#message').val('');
  //       $('#phone').val('');
  //       $('#email').val('');
  //       $('#time').val('');
  //     })
  //     .fail(function(data) {
  //       $(formMessages).removeClass('success');
  //       $(formMessages).addClass('error');
  //       if (data.responseText !== '') {
  //         $(formMessages).text(data.responseText);
  //       } else {
  //         $(formMessages).text('Oops! An error occured and your message could not be sent.');
  //       }
  //     });
  // });
});
