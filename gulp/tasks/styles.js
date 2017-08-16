var gulp = require("gulp"),
autoPrefixer = require("autoprefixer"),
cssImport = require("postcss-import"),
cssVars = require("postcss-simple-vars"),
mixins = require("postcss-mixins"),
nested = require("postcss-nested"),
postCSS = require("gulp-postcss"),
hexRGBA = require("postcss-hexrgba");

gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postCSS([cssImport, mixins, cssVars, nested, hexRGBA, autoPrefixer]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
