const gulp = require('gulp');
const config = require('../../config').fonts;
const fontmin = require('gulp-fontmin');

gulp.task('build:fonts', function() {
  gulp.src(config.src)
      .pipe(fontmin())
      .pipe(gulp.dest(config.dest))
});
