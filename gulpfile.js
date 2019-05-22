const gulp = require('gulp')
const sass = require('gulp-sass')

/*
function componentsSass() {
  return gulp.src('./src/components/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/components/'))
}

function srcSass(done) {
  return gulp.src('./src/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/'))
  .on('end', done)
}

function srcCopy(done) {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('dist/'))
  .on('end', done)
}
*/

function demoSass(done) {
  return gulp.src('./demo/src/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./demo/dist/'))
  .on('end', done)
}

function demoCopy(done) {
  return gulp.src('./demo/src/*.html')
  .pipe(gulp.dest('./demo/dist/'))
  .on('end', done)
}

module.exports.watch = function() {
  gulp.watch(['./demo/src/*.scss', './demo/src/*.html'], gulp.series(demoSass, demoCopy))
}
// module.exports.build = gulp.series(srcSass, srcCopy)
