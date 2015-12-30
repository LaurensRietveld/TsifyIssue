var gulp = require('gulp'),
    browserify = require('browserify'),
		source = require('vinyl-source-stream');


gulp.task('default',  function() {

	var bundler = browserify({entries: ['./main.ts'], debug: true, extensions: ['.js', '.json', '.ts']});
	return bundler
		.plugin("tsify", {target: 'es6'})
		.transform("babelify", {presets: ["es2015"], extensions: [".js",".ts"]})
		.bundle()
		.on("error", console.log)
		// .pipe(exorcist(jsDir + config.bundleFileName + '.js.map'))
		.pipe(source('out.js'))
		.pipe(gulp.dest('./'))
});
