const gulp = require('gulp');
const watch = require('gulp-watch');
const config = require('../config').watch;

gulp.task('watch', function(){
  watch([config.html], function(event, cb) {
    gulp.start('build:nunjucks');
  });

  watch([config.style], function(event, cb) {
    gulp.start('build:style');
  });

  watch([config.img], function(event, cb) {
    gulp.start('build:image');
  });

  watch([config.fonts], function(event, cb) {
    gulp.start('build:fonts');
  });

  watch([config.favicons], function(event, cb) {
    gulp.start('build:favicons');
  });

  watch([config.javascript], function(event, cb) {
    gulp.start('build:javascript');
  });
});
