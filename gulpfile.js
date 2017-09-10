var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
  })

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});