var gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task("default", ["styles"],
	function() {
        gulp.watch('sass/**/*.scss', ['styles']);
	}
);

gulp.task("styles", 
    function() {
    console.log("Creando estilos...");
    gulp
        .src("sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(
        autoprefixer({
            browsers: ["last 2 versions"]
        })
        )
        .pipe(gulp.dest("./css"));
    }
);