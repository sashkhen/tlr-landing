$(document).ready(function() {

  // animations
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

  // scroll animations apply
  var controller = new ScrollMagic.Controller();

  var elements = $('.section-title .section-wrapper, .section-info .info-text');
  elements.each(function(el) {
    animateElement(controller, this);
  });

  var bg = $('.section-title .head');
  animateBg(controller, bg);

});
