var gulp = require('gulp'),
   uglify = require('gulp-uglify');

   gulp.task('minify', function () {
      gulp.src('index.js')
            .pipe(uglify())
	    .pipe(gulp.dest('build'))
   });
