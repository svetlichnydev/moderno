let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('sass', function(){
  return gulp.src([
      'app/scss/style.scss',
      'app/scss/media.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));  
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}));  
});

gulp.task('js', function(){
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}));  
});

gulp.task('browser-sync', function(){
  return browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task('script', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.min.js'
  ])
  .pipe(concat('lib.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js')); 
});

gulp.task('style', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.scss',
    'node_modules/slick-carousel/slick/slick-theme.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('lib.min.css'))
  .pipe(autoprefixer())
  .pipe(gulp.dest('app/css'));  
});

 gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'));