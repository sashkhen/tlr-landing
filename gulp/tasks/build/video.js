const gulp = require('gulp');
const config = require('../../config').video;
const reload = require('browser-sync').reload;

gulp.task('build:video', function () {
  gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
      .pipe(reload({ stream: true }));
});
