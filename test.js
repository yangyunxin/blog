gulp.task('sass', () => {
	return gulp.src('src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('server/public/css'))
})
