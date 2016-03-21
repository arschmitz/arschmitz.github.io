module.exports =  {
	"jquery-mobile": {
		name: "jQuery Mobile",
		role: "Project Lead",
		repoName: "[ 'jquery-mobile' ]",
		links: {
			github: "https://github.com/jquery/jquery-mobile",
			issues: "https://github.com/jquery/jquery-mobile/issues",
			website: "http://jquerymobile.com",
			api: "http://api.jquerymobile.com",
			irc: "#jqueryui-dev",
			demos: "http://demos.jquerymobile.com"
		},
		libScore: {
			"name": "$.mobile"
		},
		builtWith: "true",
		dist: "https://code.jquery.com/mobile/git/jquery.mobile-git.js",
		description: "A unified, HTML5-based user interface system for all popular mobile device platforms, built on the rock-solid jQuery and jQuery UI foundation. Its lightweight code is built with progressive enhancement, and has a flexible, easily themeable design.",
		logo: "images/mobile.svg",
		currentWork: [
			"Leading all aspects of the project",
			"Re-writing declaritive initilization as a stand alone module",
			"improving testing",
			"porting widgets to / from jQuery UI",
			"re-writing navigation."
		]
	},
	"jquery-ui": {
		name: "jQuery UI",
		repoName: "[ 'jquery-ui' ]",
		role: "Team Member",
		links: {
			github: "https://github.com/jquery/jquery-ui",
			issues: "http://bugs.jqueryui.com",
			website: "http://jqueryui.com",
			api: "http://api.jqueryui.com",
			irc: "#jqueryui-dev",
			demos: "http://jqueryui.com/demos/"
		},
		libScore: {
			"name": "$.ui"
		},
		builtWith: true,
		description: "jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.",
		dist: "https://code.jquery.com/ui/jquery-ui-git.js",
		currentWork: [
			"Adding new option / feature to all widgets \"classes\" which allows customization of the classes on any element in a widget",
			"Adding checkboxradio widget",
			"Adding controlgroup widget",
			"Removing portions of jQuery core dependency",
			"Improving testing",
			"Converting demos to use AMD"
		],
		logo: "images/ui.svg"
	},
	"hammer.js": {
		name: "Hammer.js",
		repoName: "[ 'hammer.js' ]",
		role: "Project Lead / Organization Owner",
		links: {
			github: "https://github.com/hammerjs/hammer.js",
			issues: "https://github.com/hammerjs/hammer.js/issues",
			website: "http://hammerjs.github.io/",
			api: "http://hammerjs.github.io/getting-started/",
			irc: "Comming Soon",
			demos: "http://hammerjs.github.io/"
		},
		libScore: {
			"name": "Hammer"
		},
		builtWith: true,
		description: "Hammer is a open-source library that can recognize gestures made by touch, mouse and pointerEvents. It doesn't have any dependencies, and it's small, only 3.96 kB minified + gzipped!",
		dist: "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.4/hammer.js",
		currentWork: [
			"Building Team",
			"Setting up organization",
			"Tranisition project from personal project to a community project",
			"Converting to a modular build",
			"Triage"
		],
		logo: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200"
	},
	"css-chassis": {
		name: "Chassis",
		role: "Co-Creator / Team Member",
		repoName: "[ 'css-chassis\'' ]",
		links: {
			github: "https://github.com/jquery/css-chassis",
			issues: "https://github.com/jquery/css-chassis/issues",
			website: "http://css-chassis.com",
			api: "Coming Soon",
			demos: "http://view.css-chassis.com/master/demos",
			irc: "#css-chassis",
		},
		description: "Chassis is an attempt at creating open standards designed for CSS libraries, JavaScript UI libraries, and web developers in general. This project will define standards for markup and class names for common widgets and patterns, as well as an implementation of those standards.",
		logo: "images/chassis.svg",
		currentWork: [
			"Adding and improving automated performance testing for Chassis",
			"Automated component comparison for testing the relative performace of componenets from different libraries",
			"Developing node based build system for use in custom automated builds in other projects"
		]
	},
	"pep": {
		name: "PEP: PointerEvents Polyfill",
		role: "Team Member",
		repoName: ".pep",
		links: {
			github: "https://github.com/jquery/pep",
			issues: "https://github.com/jquery/pep/issues",
			demos: "Coming Soon",
			api: "https://github.com/jquery/pep",
			irc: "#pep",
		},
		description: "PointerEvents Polyfill: a unified event system for the web platform http://www.w3.org/TR/pointerevents/",
		dist: "http://code.jquery.com/pep/0.3.0/pep.js",
		logo: "images/pep.png",
		currentWork: [
			"Updating code to new style guide",
			"Issue triage",
			"Improving automated testing"
		]
	},
	"jquery-infrastructure": {
		name: "jQuery Infrastructure",
		repoName: "[ 'jquery-infrastructure' ]",
		role: "Team Member",
		links: {
			github: "Private",
			issues: "Private",
			demos: "none",
			api: "none",
			website: "http://jquery.org",
			irc: "#jquery-infrastructure"
		},
		description: "Team responsible for all infrastructure of for the jQuery Foundations projects",
		logo: "images/infrastructure.svg",
		currentWork: [
			"Maintaining jQuery UI and Mobile infrastructure",
			"Setting up new infrastructure for Chassis Project",
			"Working on automated testing infrastructure"
		]
	},
	"jquery-content": {
		name: "jQuery Content",
		role: "Team Member",
		repoName: "[ 'jquery-content' ]",
		links: {
			github: "https://github.com/jquery/jquery-content",
			issues: "https://github.com/jquery/jquery-content/issues",
			website: "http://jquery.org",
			demos: "none",
			api: "none",
			irc: "#jquery-content"
		},
		description: "Team responsible for all content of for the jQuery Foundations websites",
		logo: "images/content.png",
		currentWork: [
			"Adding automated nightly testing of all websites using spider.js",
			"Creating on HTML validation tools"
		]
	},
	"spider.js": {
		name: "Spider.js",
		role: "Creator",
		repoName: "[ 'spider.js' ]",
		links: {
			github: "https://github.com/arschmitz/spider.js",
			issues: "https://github.com/arschmitz/spider.js/issues",
			api: "https://github.com/arschmitz/spider.js/",
			demos: "none",
			irc: "Ping me arschmitz "
		},
		description: "A node module / CLI based on casper.js for crawling and checking websites for dead links, unnessasarry redirects, resource load errors and script erros",
		dist: "https://raw.githubusercontent.com/arschmitz/spider.js/master/lib/tests.js",
		logo: "images/spider-js.svg",
		currentWork: [
			"Preparing 1.0 release",
			"Adding Slimer.js support",
			"Improving error output"
		]
	},
	"jqueryui-bootstrap-adapter": {
		name: "jQuery UI Bootstrap Adapter",
		role: "Creator",
		repoName: "[ 'jqueryui-bootstrap-adapter' ]",
		links: {
			github: "https://github.com/arschmitz/jqueryui-bootstrap-adapter",
			issues: "https://github.com/arschmitz/jqueryui-bootstrap-adapter/issues",
			website: "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
			demos: "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
			irc: "Ping me arschmitz ",
			api: "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html"
		},
		description: "A set of default options and customizations for jQuery UI to use twitter bootstrap css",
		logo: "images/bootstrapAdapter.svg",
		currentWork: [
			"Porting jQuery Mobile as well",
			"Adding components without a direct coralary in both libraries",
			"Preparing 1.0 to conincide with jQuery UI 1.12 Release"
		]
	}
};
