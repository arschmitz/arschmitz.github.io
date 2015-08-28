module.exports = {
	js: {
		src: [
			"external/handlebars/handlebars.runtime.js",
			"external/jquery/jquery.js",
			"external/jquery-ui/jquery-ui.js",
			"src/helpers.js",
			"src/prompt.js",
			"src/gui.js",
			"src/effects",
			"src/sidescroll.js",
			"src/scrollintoview.js",
			"src/me.js",
			"src/talks/talks.js",
			"dist/template.js",
			"src/builtWith/*.js"
		],
		dest: "dist/script.js"
	}
};
