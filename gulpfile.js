var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify');
var refresh = require('gulp-refresh');
// var inject = require('gulp-inject');
var image = require('gulp-image')


gulp.task('default',['html','css','js', 'move'], function(){

});

gulp.task('html', function() {
    gulp.src(`./index.html`)
        .pipe(gulp.dest('../public'))
});

gulp.task('css',function () {
    gulp.src(`./scss/*.scss`)
      .pipe(sass())
      .pipe(gulp.dest('../../public'))
      .pipe(refresh())
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../../public'));
});

gulp.task('move', function () {
  gulp.src('./images/*')
    .pipe(gulp.dest('../../public/images'))
});

// gulp.task('index', function () {
//   var target = gulp.src('./index.html');
//   var sources = gulp.src(['./**/*.js', './**/*.css'], {read: false});
//
//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('../public'))
// });



gulp.task('watch', function(){
  gulp.watch('.scss/styles.scss', ['css'])
  gulp.watch('./index.html', ['html']);
  gulp.watch('./js/*.js', ['js']);
})
