const { src, dest, parallel } = require('gulp')
const imagemin = require('gulp-imagemin')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify');


function cleanCss() {
  return src('./src/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./docs/css/'))
}

function image() {
  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./docs/img/'))
}

function javascript() {
  return src('./src/js/*.js')
    .pipe(minify())
    .pipe(dest('./docs/js/'))
}

exports.default = parallel(cleanCss, javascript, image)
