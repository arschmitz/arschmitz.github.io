module.exports = {
	all: {
		files: [ "src/**/*.js", "src/*.css", "templates/*.html" ],
		tasks: [ "default" ],
		options: {
			spawn: false,
			interupt: true
		}
	}
};
