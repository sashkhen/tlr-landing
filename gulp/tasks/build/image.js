const gulp = require('gulp');
const config = require('../../config').image;
const reload = require('browser-sync').reload;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('build:image', function () {
  return gulp.src(config.src)
      .pipe(imagemin())
      // .pipe(webp())
      .pipe(gulp.dest(config.dest))
      .pipe(reload({ stream: true }));
});
