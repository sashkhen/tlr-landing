$(document).ready(function() {

  var SPEED    = 0.5,
      DURATION = 1000,
      STEP     = 200,
      OFFSET   = 300;

  // title background interactions
  anm.on();

  var animateElement = function(controller, el) {

    //create animation
    var tween = new TweenMax
      .from(el, SPEED, {
        marginTop: STEP,
      });

    // creare scene on trigger
    var scene = new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 'onEnter',
        duration: DURATION,
        offset: OFFSET,
    })
    .setTween(tween)
    .addTo(controller);
  }

  // scroll animations
  var controller = new ScrollMagic.Controller();
  var elements = $('.section-title .section-wrapper, .section-info .info-text');

  elements.each(function(el) {
    animateElement(controller, this);
  });
});
