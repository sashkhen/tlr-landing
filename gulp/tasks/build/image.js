const gulp = require('gulp');
const config = require('../../config').image;
const reload = require('browser-sync').reload;

gulp.task('build:image', function () {
  gulp.src(config.src)
      .pipe(gulp.dest(config.dest))
      .pipe(reload({ stream: true }));
});
