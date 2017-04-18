$(document).ready(function() {

  var addSpace = function() {
    var fixed = $('.section-fixed').outerHeight();
    $('body').css({ marginBottom: fixed });
  };

  addSpace();

  $(window).resize(function() {
    addSpace();
  });

});
