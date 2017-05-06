$(document).ready(function() {

  var addSpace = function() {
    var fixed = $('.section-fixed').outerHeight();
    $('.section-interaction').css({ marginBottom: fixed });
  };

  addSpace();

  $(window).resize(function() {
    addSpace();
  });

});
