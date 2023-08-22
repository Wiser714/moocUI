const gulp = require('gulp');
const sass = require('gulp-sass');  //sass-->css
const minifyCss = require('gulp-minify-css');   //对css进行压缩

gulp.task('sass',async function(){
    return gulp.src('components/css/**/*.scss') //拿到文件
    .pipe(sass())   //转成css
    .pipe(minifyCss())  //进行压缩
    .pipe(gulp.dest('dist/css'))  //输出到打包的目录里
})