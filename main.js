$(document).ready(function() {
  function highlightTag(tagNum) {
    for (var i = 1; i <= 4; i++) {
      $('.js-tag-' + i).css("color", "black");
    }
    $('.js-tag-' + tagNum).css("color", "white");
  }

  function showPage(pageNum) {
    for (var i = 0; i <= 4; i++) {
      $('.js-button-' + i).hide();
      $('.js-description-' + i).hide();
    }
    $('.js-button-' + pageNum).fadeIn();
    $('.js-description-' + pageNum).fadeIn();
  }

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
});