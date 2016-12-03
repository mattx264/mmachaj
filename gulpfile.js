var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    ts = require('gulp-typescript'),
    cleanCSS = require('gulp-clean-css'),
    spritesmith = require('gulp.spritesmith');

var cssPath = './public/stylesheets';

gulp.task('sass', function () {
    gulp.src(cssPath + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }));
});
gulp.task('mincss', function () {
    return gulp.src(cssPath + '/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/bundle'));
});
gulp.task('sass:watch', function () {
    gulp.watch(cssPath + '/*.scss', ['sass']);
});
gulp.task('sass:watch', function () {
    gulp.watch(cssPath + '/*.css', ['mincss']);
});
gulp.task('minjs', function () {
 gulp.start('min-all-js', 'min-start-js');
   
});
gulp.task('min-all-js', function () {
 pump([gulp.src(['./public/javascript/helpers/**.js', './node_modules/raphael/raphael.js']),
    concat('all.min.js'),
    uglify(),
    gulp.dest('./public/bundle/')
    ]);
});
gulp.task('min-start-js', function () {
 return pump([
      gulp.src(['./public/javascript/main.js', './public/javascript/preloading.js']),
        concat('allstart.min.js'),
        uglify(),// dont know why it doesnt work 
        gulp.dest('./public/bundle/')
    ]);
    
});
gulp.task('ts', function () {
    return gulp.src('./public/javascript/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./public/javascript/'));
});
gulp.task('ts:watch', function () {
    gulp.watch('./public/javascript/*.ts', ['ts']);
});

