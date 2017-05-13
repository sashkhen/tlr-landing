const gulp = require('gulp');

gulp.task('build', [
    'build:nunjucks',
    'build:style',
    'build:image',
    'build:video',
    'build:javascript',
    'build:fonts',
    'build:favicons',
]);
