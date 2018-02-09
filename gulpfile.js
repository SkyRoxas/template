(function() {
  'use strict'

  const gulp = require('gulp')
  const watch = require('gulp-watch')
  const webpack = require('webpack-stream')
  const sass = require('gulp-sass')
  const browserSync = require('browser-sync').create()
  const imagemin = require('gulp-imagemin')
  const pug = require('gulp-pug')

  const config = {
    src: {
      js: './src/app/**/*.js',
      sass: './src/sass/**/*.scss',
      html: './src/html/**/*.pug',
      image: './src/images/**/*.*'
    },
    dest: {
      js: './dest/js',
      sass: './dest/css/',
      html: './dest/',
      image: './dest/images'
    }
  }

  const minifyJS = function() {
    return gulp.src(config.src.js).pipe(webpack(require('./webpack.config.js'))).pipe(gulp.dest(config.dest.js)).pipe(browserSync.reload({stream: true, once: true}))
  }

  const minifySASS = function() {
    return gulp.src(config.src.sass).pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(gulp.dest(config.dest.sass)).pipe(browserSync.stream())
  }

  const minifyHTML = function() {
    return gulp.src(config.src.html).pipe(pug().on('error', function(err){console.log(err)})).pipe(gulp.dest(config.dest.html)).pipe(browserSync.stream())
  }

  const imageMin = function() {
    return gulp.src(config.src.image).pipe(imagemin({progressive: true})).pipe(gulp.dest(config.dest.image)).pipe(browserSync.stream())
  }

  gulp.task('minifyjs', function() {
    minifyJS()
  })

  gulp.task('minifysass', function() {
    minifySASS()
  })

  gulp.task('minifyHTML', function() {
    minifyHTML()
  })

  gulp.task('imagemin', function() {
    imageMin()
  })

  gulp.task('minify', ['minifyjs', 'minifysass', 'minifyHTML', 'imagemin'])

  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: './dest'
      }
    })
  })

  gulp.task('watch', ['browser-sync'], function() {
    watch([
      config.src.js, config.src.sass, config.src.html, config.src.image
    ], {
      verbose: true
    }, function(event) {
      if (/\.js$/i.test(event.path)) {
        minifyJS()
      } else if (/\.scss$/i.test(event.path)) {
        minifySASS()
      } else if (/\.pug$/i.test(event.path)) {
        minifyHTML()
      } else {
        imageMin()
      }
    })
  })

    gulp.task('default', ['minify', 'watch'])
})()
