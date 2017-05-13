const gulp = require('gulp');
const config = require('../../config').favicons;

gulp.task('build:favicons', function() {
  gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
});
