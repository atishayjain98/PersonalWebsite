/*
jQuery(document).ready(function() {
     
  /*
      Fullscreen background
  */
  /* $.backstretch("Images/img/image.png"); */
   
  /*
  Contact form
  *//*
  $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
      $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
  });
  $('.contact-form form').submit(function(e) {
      e.preventDefault();
      $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
      var postdata = $('.contact-form form').serialize();
      $.ajax({
          type: 'POST',
          url: 'assets/contact.php',
          data: postdata,
          dataType: 'json',
          success: function(json) {
              if(json.emailMessage != '') {
                  $('.contact-form form .contact-email').addClass('input-error');
              }
              if(json.subjectMessage != '') {
                  $('.contact-form form .contact-subject').addClass('input-error');
              }
              if(json.messageMessage != '') {
                  $('.contact-form form textarea').addClass('input-error');
              }
              if(json.antispamMessage != '') {
                  $('.contact-form form .contact-antispam').addClass('input-error');
              }
              if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                  $('.contact-form form').fadeOut('fast', function() {
                      $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                      // reload background
                      $.backstretch("resize");
                  });
              }
          }
      });
  });
  
   
});

*/

// JavaScript file

function validateForm() {
  // Get the form element
  var form = document.getElementById("contact-form");

  // Get the input fields
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  // Validate the fields
  if (nameField.value == "") {
    alert("Please enter your name");
    return false;
  }
  if (emailField.value == "") {
    alert("Please enter your email address");
    return false;
  }
  if (messageField.value == "") {
    alert("Please enter a message");
    return false;
  }

  // If the fields are valid, submit the form
  return true;
}

