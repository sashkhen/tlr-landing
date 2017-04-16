const gulp = require('gulp');
const config = require('../config').compress;
const zip = require('gulp-zip');

gulp.task('compress', () =>
  gulp.src(config.src)
      .pipe(zip('archive.zip'))
      .pipe(gulp.dest(config.dest))
);
