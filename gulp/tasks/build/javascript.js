const gulp = require('gulp');
// const sourcemaps = require('gulp-sourcemaps');
const config = require('../../config').javascript;
const reload = require('browser-sync').reload;
// const rigger = require('gulp-rigger');
// const concat = require('gulp-concat');

gulp.task('build:javascript', function () {
  gulp.src(config.src)
      // .pipe(rigger())
      // .pipe(sourcemaps.init())
      // .pipe(concat(config.file))
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest))
      .pipe(reload({stream: true}));
});
