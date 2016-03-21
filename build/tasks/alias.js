module.exports = function( grunt ) {

grunt.registerTask( "default", [ "build", "test" ] );
grunt.registerTask( "build", [
	"site",
	"handlebars",
	"concat",
	"cssmin",
	"uglify",
	"jsdox",
	"copy",
	"clean"
] );
grunt.registerTask( "test", [ "jshint", "jscs", "csslint", "csscomb" ] );

};
