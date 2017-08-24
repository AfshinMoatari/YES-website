$(function() {

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
      timeFrom: {
        required: "Please Set From-Time"
      },
      timeTo: {
        required: "Please Set To-Time"
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
              "<a class='my-button my-button-text' href=faq.html>" +
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
        min: 15,
        max: 48
      },
      experience: {
        required: true,
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
              "<a class='my-button my-button-text' href=faq.html>" +
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
