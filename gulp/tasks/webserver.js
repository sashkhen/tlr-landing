const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config').webserver;

gulp.task('webserver', function () {
  browserSync(config);
});
