$(function() {

  $.validator.addMethod("dateTime", function(value, element) {
    var stamp = value.split(" ");
    var validDate = !/Invalid|NaN/.test(new Date(stamp[0]).toString());
    var validTime = /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/i.test(stamp[1]);
    return this.optional(element) || (validDate && validTime);
  });

  let validatorCompany = $("#company form").validate({
    onkeyup: function(el, e) {
      $(el).valid();
    },
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 26
      },
      behalf: {
        required: true,
        minlength: 2,
        maxlength: 26
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
      datetimeFrom: {
        required: true,
        dateTime: true
      },
      datetimeTo: {
        required: true,
        dateTime: true
      }
    },
    messages: {
      name: {
        required: "Name Required.",
        minlength: "Your Name must be between 2-26 character."
      },
      behalf: {
        required: "Behalf Name Required.",
        minlength: "Behalf Name must be between 2-26 character."
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
      datetimeFrom: {
        required: "Please set 'From-date and time.'",
        dateTime: "Please enter a valid date and time."
      },
      datetimeTo: {
        required: "Please set 'To-date and time.'",
        dateTime: "Please enter a valid date and time."
      }
    },
    errorContainer: $("#company #error-container"),
    errorLabelContainer: $("#company #error-container ul"),
    wrapper: "li",
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "inc/mailer-company.php",
        data: $("#company form").serialize(),
        success: function() {
          $("#company form").html("<div class='message'></div>");
          $('.message').html("<h2>Your contact request is on the way!</h2>")
            .append("<p>meanwhile, if you have any questions feel free to check the " +
              "<a class='my-button my-button-text' href=faq>" +
              "FAQ" +
              "</a>" +
              " page.</p>")
            .hide()
            .fadeIn(1500)
        }
      });
      return false;
    }
  });
  let validatorEmployee = $("#employee form").validate({
    onkeyup: function(el, e) {
      $(el).valid();
    },
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 26
      },
      age: {
        required: true,
        number: true,
        min: 18,
        max: 99
      },
      hours: {
        required: true,
        number: true,
        min: 10,
        max: 160
      },
      experience: {
        required: false,
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: "Name Required.",
        minlength: "Your Name must be between 2-26 character."
      },
      age: {
        required: "Age Required.",
        minlength: "Age must be between 18-99 character."
      },
      hours: {
        required: "Hours Required.",
        minlength: "Hours must be between 15-48 character."
      },
      experience: {
        required: "Experience Required.",
      },
      email: {
        required: "Email Required.",
        email: "Not a valid Email."
      }
    },
    errorContainer: $("#employee #error-container"),
    errorLabelContainer: $("#employee #error-container ul"),
    wrapper: "li",
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "inc/mailer-employee.php",
        data: $("#employee form").serialize(),
        success: function() {
          $("#employee form").html("<div class='message'></div>");
          $('.message').html("<h2>Your contact request is on the way!</h2>")
            .append("<p>meanwhile, if you have any questions feel free to check the " +
              "<a class='my-button my-button-text' href=faq>" +
              "FAQ" +
              "</a>" +
              " page.</p>")
            .hide()
            .fadeIn(1500)
        }
      });
      return false;
    }
  });

});
