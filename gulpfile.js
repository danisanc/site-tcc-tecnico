var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['css_min', 'image'])

gulp.task('css_min', function () {
  gulp.src('./src/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css/'))
})

gulp.task('image', function() {
  gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/img/'))
})
