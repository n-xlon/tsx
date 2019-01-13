const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const watch = require('gulp-watch')
const connect = require('gulp-connect')
// const ts = require('gulp-typescript')
const buffer = require('vinyl-buffer')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')

// let tsProject = ts.createProject('tsconfig.json')
console.log(process.env.NODE_ENV)

const browserifyTs =  function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/ts/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
}

// 在node环境下运行可以使用
// gulp.task('ts', function () {
//   return tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest('dist/js'))
// })

// ts 浏览器（web）环境下运行
gulp.task('browserify', function () {
  if (process.env.NODE_ENV.trim() === 'dev') {
    return browserifyTs()
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourceMaps.init({
        loadMaps: true
      }))
      .pipe(uglify())
      .pipe(sourceMaps.write('./'))
      .pipe(gulp.dest('dist/js'))
  } else {
    return browserifyTs()
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  }
})

gulp.task('sass', function () {
  return gulp.src('src/sass/index.sass')
    .pipe(gulpSass())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('webserver', function () {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 6060
  })
})

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function () {
  watch('src/sass/**/*.sass', gulp.series('sass'))
  watch('src/ts/**/*.ts', gulp.series('browserify'))
  watch('src/index.html', gulp.series('html'))
})

gulp.task('default', gulp.parallel('browserify', 'sass', 'html'))
gulp.task('dev', gulp.parallel('html', 'browserify', 'sass', 'webserver', 'watch'))

