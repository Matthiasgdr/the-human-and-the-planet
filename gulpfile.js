var gulp = require('gulp');
var sass = require('gulp-sass');
  
gulp.task('sass', function () {
    return gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/scss/app.scss', ['sass']);
  gulp.watch('src/scss/_main.scss', ['sass']);
});