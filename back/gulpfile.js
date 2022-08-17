const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

 function copy(cb) {
    src('routes/*.js')
        .pipe(dest('copies'));
    cb();
}

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'));
    cb();
}

exports.css = generateCSS;
exports.copy = copy;
const eslint = require("gulp-eslint");

function runLinter(cb) {
    return src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format()) 
        .pipe(eslint.failAfterError())
        .on('end', function() {
            cb();
        });
}

exports.lint = runLinter;

const gulp = require('gulp');
const mocha = require('gulp-mocha');

exports.default = () => (
	gulp.src('test.js', {read: false})
		// `gulp-mocha` needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
);
