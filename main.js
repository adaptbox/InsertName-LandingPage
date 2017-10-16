$(document).ready(function() {

  // spam counter to avoid multisends (>5)
  var spamCounter = 0;

  // highlight tags dynamically
  function highlightTag(tagNum) {
    for (var i = 1; i <= 4; i++) {
      $('.js-tag-' + i).css("color", "black");
    }
    $('.js-tag-' + tagNum).css("color", "white")
  }

  // show pages dynamically
  function showPage(pageNum) {
    for (var i = 0; i <= 4; i++) {
      $('.js-button-' + i).hide();
      $('.js-description-' + i).hide();
      $('.js-image-' + i).hide();
    }
    $('.js-button-' + pageNum).fadeIn();
    $('.js-description-' + pageNum).fadeIn();
    $('.js-image-' + pageNum).fadeIn();
  }

  // email validation
  function isValidEmail(email) {
    if (email.indexOf("@") === -1) {
      return false;
    }
    if (email.indexOf(".") === -1) {
      return false;
    }
    return true;
  }

  // ajax email sending with formspree - good for 1000 free per month
  function sendEmail(email, nameSuggestion) {
    $.ajax({
      // formspree is good for up to 1000 emails per month for free
      url: "https://formspree.io/adaptboxanalytics@gmail.com",
      method: "POST",
      data: {
        message: "EMAIL: " + email + ", NAME_SUGGESTION: " + nameSuggestion
      },
      dataType: "json"
    });
    $(".js-submit-button").css("background-color", "#00cc00")
                          .text("Success!");
    spamCounter++;
    if (spamCounter >= 3) {
      $('.js-submit-button').prop("disabled", true);
    }
  }

  // event handlers
  function initializeEventHandlers() {
    $('.js-button-0').on('click', function() {
      highlightTag(1);
      showPage(1);
    });

    $('.js-button-1').on('click', function() {
      highlightTag(2);
      showPage(2);
    });

    $('.js-button-2').on('click', function() {
      highlightTag(3);
      showPage(3);
    });

    $('.js-button-3').on('click', function() {
      highlightTag(4);
      showPage(4);
    });

    $('.js-button-4').on('click', function() {
      highlightTag(0);
      showPage(0);
    });

    $('.js-submit-button').on('click', function() {
      var email = $('.js-email-input').val();
      var name = $('.js-name-input').val();
      if (!email || !isValidEmail(email)) {
        alert("Please ensure that you have entered a valid email. We'll make it worth your while!");
        return;
      }
      sendEmail(email, name);
    });
  }

  initializeEventHandlers();
});