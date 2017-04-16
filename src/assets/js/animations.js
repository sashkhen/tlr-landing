$(document).ready(function() {

  // animations
  var BREAK_POINT = 896;

  var isMobileDevice = window.mobilecheck();

  // for desktops only
  if (!isMobileDevice) {

    // title background interactions
    anm.on();

    var SPEED    = 1,
        DURATION = 1000,
        DELAY    = 0.5,
        STEP     = 200,
        OFFSET   = 300;

    var animateElement = function(controller, el) {

      //create animation
      var tween = new TweenMax
        .from(el, SPEED, {
          y: STEP,
          opacity: 0,
        });

      // creare scene on trigger
      var scene = new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: 'onEnter',
          offset: OFFSET,
      })
      .setTween(tween)
      .addTo(controller);
    }

    var animateBg = function(controller, el) {

      //create animation
      var tween = new TweenMax
        .from(el, SPEED, {
          opacity: 0,
          delay: DELAY,
        });

      // creare scene on trigger
      var scene = new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: 'onEnter',
      })
      .setTween(tween)
      .addTo(controller);
    }

    // scroll animations init
    var controller = new ScrollMagic.Controller();
    controller.enabled(false);

    var elements = $('.section-title .section-wrapper, .section-info .info-text');
    elements.each(function(el) {
      animateElement(controller, this);
    });

    var bg = $('.section-title .head');
    animateBg(controller, bg);

    // scroll animation apply
    var isSmallScreen = $(window).width() <= BREAK_POINT;
    if (!isSmallScreen) {
      controller.enabled(true);
    }

    // resize re-init
    $(window).resize(function() {
      var prevIsSmall = isSmallScreen;
      isSmallScreen = $(window).width() <= BREAK_POINT;

      if (prevIsSmall !== isSmallScreen) {
        if (isSmallScreen) {
          controller.enabled(false);
          anm.off();
        } else {
          controller.enabled(true);
          controller.update(true);
          anm.on();
        }
      }

    });
  } else {
    anm.off();
  }

});
