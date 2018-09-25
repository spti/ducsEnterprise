const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('components:sass', () => {
  return gulp.src('./src/components/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/components/'))
})

gulp.task('src:sass', () => {
  return gulp.src('./src/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/'))
})
