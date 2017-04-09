const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const prettify = require('gulp-html-prettify');
const config = require('../../config').nunjucks;
const reload = require('browser-sync').reload;

gulp.task('build:nunjucks', function () {
  return gulp.src(config.src)
    .pipe(nunjucksRender({
      path: config.path // String or Array
    }))
    .pipe(prettify({
      indent_char: ' ', indent_size: 4
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});
