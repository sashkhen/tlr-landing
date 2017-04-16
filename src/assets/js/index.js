$(document).ready(function() {

  // mobile detect
  if (window.mobilecheck()) {
    $('html').addClass('mobile');
  }

  // video support detect [SAFARI]
  if (Modernizr.video.webm === '') {
    $('html').removeClass('video');
  };

  // gallery options
  // http://fancyapps.com/fancybox/3/docs/#options
  $("[data-fancybox]").fancybox({
    infobar: true,
    buttons: true,
    // What buttons should appear in the toolbar
    slideShow  : false,
    fullScreen : false,
    thumbs     : false,
    closeBtn   : true,
  });

});
