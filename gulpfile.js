var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var minifyImage = require('gulp-imagemin');
var cache = require('gulp-cache');

var JS_SOURCE = 'src/js';
var JS_DEST = 'dist/js';
var JS_OUTPUT_FILE = 'main.js';
var CSS_SOURCE = 'src/style';
var CSS_DEST = 'dist/css';
var IMAGE_SOURCE = 'src/img';
var IMAGE_DEST = 'dist/img';

gulp.task('javascript', function() {
  return gulp.src(JS_SOURCE + '/**/*.js')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        generator.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat(JS_OUTPUT_FILE))
    .pipe(babel())
    .pipe(gulp.dest(JS_DEST + '/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(JS_DEST + '/'))
});

gulp.task('css', function() {
  gulp.src(CSS_SOURCE + '/**/*.scss')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        generator.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(CSS_DEST + '/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(CSS_DEST + '/'))
});

gulp.task('images', function() {
  gulp.src(IMAGE_SOURCE + '/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(IMAGE_DEST + '/'));
});

gulp.task('default', function() {
  gulp.watch(JS_SOURCE + '/**/*.js', ['javascript']);
  gulp.watch(CSS_SOURCE + '/**/*.scss', ['css']);
});
