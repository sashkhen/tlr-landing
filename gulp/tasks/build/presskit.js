const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const prettify = require('gulp-html-prettify');
const minifyHtml = require('gulp-minify-html');
const config = require('../../config').nunjucks;
const reload = require('browser-sync').reload;

var exec = require('child_process').exec;

gulp.task('build:presskit', function (cb) {
  exec('presskit build "src/presskit" -o "dest/presskit/"', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


