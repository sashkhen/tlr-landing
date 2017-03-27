const gulp = require('gulp');
const config = require('../../config').fonts;

gulp.task('build:fonts', function() {
  gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
});
