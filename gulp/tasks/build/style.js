const gulp = require('gulp');
const stylus = require('gulp-stylus');
const rupture = require('rupture');
const reload = require('browser-sync').reload;
const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config').style;
const autoprefixer = require('gulp-autoprefixer');

const stylusOptions = {
  use : [
    rupture(),
  ]
}

gulp.task('build:style', function () {
  gulp.src(config.src)
      .pipe(sourcemaps.init())
      .pipe(stylus(stylusOptions))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest))
      .pipe(reload({ stream: true }));
});
