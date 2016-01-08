/**
 * Dependencies
 */
var metalsmith 			= require('metalsmith'),
    filenames 			= require('metalsmith-filenames'),
    markdown 			= require('metalsmith-markdownit'),
    layouts 			= require('metalsmith-layouts'),
    autoprefixer 		= require('metalsmith-autoprefixer'),
    cleanCSS 			= require('metalsmith-clean-css'),
    metadata 			= require('metalsmith-metadata'),
    sitemap 			= require('metalsmith-sitemap'),
    uglify 				= require('metalsmith-uglify'),
    browserSync 		= require('metalsmith-browser-sync'),
	htmlMinifier 		= require("metalsmith-html-minifier"),
	sass 				= require('metalsmith-sass'),
    concat 				= require('metalsmith-concat');

/**
 * Build
 */
metalsmith(__dirname)

/**
 * General
 */
.source("./src")
.destination('./build')
.use(filenames())
.ignore(['templates', 'metadata', 'vendor/bootstrap-3.3.6', 'js/snippets'])
.use(
	markdown({
		typographer: true,
		html: true
	})
)

/**
 * Templates
 */

.use(
	layouts({
		engine : 'swig',
		directory : 'src/templates/'
	})
)

/**
 * CSS / Scripts
 */

.use(autoprefixer())

.use(
	sass({
		files : 'scss/base.scss',
		outputDir : 'css/',
		indentType : 'tab',
		indentWidth : '4',
		outputStyle : 'expanded'
	})
)

.use(
	cleanCSS({
		files : 'css/base.css',
		cleanCSS : {
			rebase : true,
			mediaMerging : true
		}
	})
)

.use(
	sass({
		files : 'vendor/bootstrap-3.3.6/styles/bootstrap.sass',
		outputDir : 'css/',
		indentType : 'tab',
		indentWidth : '4',
		outputStyle : 'compact'
	})
)

.use(
	cleanCSS({
		files: ['css/bootstrap.css', 'vendor/telephone/styles/*'],
		cleanCSS : {
			rebase : true,
			mediaMerging : true
		}
	})
)

.use(
	concat({
		files : ['css/bootstrap.css', 'vendor/**/styles/*.css'],
		output : 'css/vendor.min.css'
	})
)


.use(
	uglify({
		filter : 'js/*.js',
		removeOriginal : 'true',
		concat : 'js/app.min.js'
	})
)

.use(
	uglify({
		filter : ['vendor/bootstrap-3.3.6/scripts/*.js'],
		removeOriginal : 'true',
		concat : 'js/vendor.min.js'
	})

)

/**
 * Other
 */
	
.use(
	sitemap({
		pattern : '*.html',
		hostname : 'http://domain.com/',
		changefreq : 'yearly'
	})
)

.use(
	browserSync({
		server : "./build",
		files  : ['src/*.md', 'templates/*.swig', 'src/**/*', 'src/vendor/**/**/*'],
		ghostMode: {clicks: true, forms: true, scroll: false}
	})
)

/**
 * Build Finish
 */
.build(function(err) {
	if (err)
		throw err;
});

