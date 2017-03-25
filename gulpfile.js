var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

// adds stylus -> css converting
gulp.task('stylus', function(){
  return gulp.src('src/style/**/*.styl')
    .pipe(stylus()) //  Converts Stylus to CSS with gulp-stylus
    .pipe(gulp.dest('src/style/css'))
    // adds injecting new styles to browser
    .pipe(browserSync.reload({
      stream: true
    }))
});

// adds spinning up server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

// adds watching for changes
gulp.task('watch', ['browserSync', 'stylus'], function(){
  // compilation
  gulp.watch('src/style/**/*.styl', ['stylus']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload); 
  // Other watchers
});
