$(document).ready(function() {

  // mobile detect
  if (window.mobilecheck()) {
    $('html').addClass('mobile');
  }

  // title background interactions
  anm.on();

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
