const gulp = require('gulp');

gulp.task('build', [
    'build:nunjucks',
    'build:style',
    'build:image',
    'build:javascript',
    'build:fonts',
]);
