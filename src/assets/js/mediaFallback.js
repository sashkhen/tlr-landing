$(document).ready(function() {
  var webmAccesible = $('html').hasClass('video');
  var mobile = $('html').hasClass('mobile');
  var videoToLoad = webmAccesible && !mobile;

  var selector = videoToLoad ? 'video' : 'img';
  var globalSelector = '.section-info .info-image ' + selector;

  $(globalSelector).each(function(item) {
    var src = $(this).attr('data-src');

    if (videoToLoad) {
      this.src = src;
    } else {
      var ext = !mobile ? '.gif' : '.png';
      var imgSrc = src + ext;
      this.src = imgSrc;
    }
  })
});
