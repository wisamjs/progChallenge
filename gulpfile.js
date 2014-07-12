var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

//task to compile scss file.
gulp.task('sass', function() {
  gulp.src('public/styles/index.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/styles'));
});

//task to watch for new scss changes
//and update css
gulp.task('watch', function() {
  	gulp.watch('public/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);