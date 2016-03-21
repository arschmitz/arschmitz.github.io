module.exports = {
	intro: [
		"This section describes some of the unique aspects of the site and how they work",
		"The content for this entire website are stored in a single global javascript object `arschmitz`",
		"Everything you see in the GUI is created by passing parts of this object to a handlebars template and rendering the result"
	],
	sections: {
		json: [
			"Many of the content blocks on this website have small links in the upper right hand corner that say JSON",
			"The links mean that this block is created out of a single object that is part of the global `arschmitz` website object",
			"When you click the link it will show the path to the object and the json object it self which are passed to the handlebars template to create this block"
		],
		pageJSONLink: [
			"Similar to the JSON link mentioned above you will notice each GUI page has a json link at the very top of the page which is fixed to the top of the viewport",
			"Clicking this link will show the JSON objcet that creates the whole page",
			"Where this differs from the normal JSON links is after clicking the first time it will say template",
			"Clicking again will show the Hnadlebars template which renders the page when passed the previous JSON object"
		],
		links: [
			"You may notice any time you click a button or link on the website that there is a command entered into the console and run",
			"All actions in the gui actually just run the correcponding command in the console."
		],
		transitions: [
			"you may have noticed a subtle fading page transition when switching pages in the GUI",
			"You may change this to some more dramatic and fun transitions by going to the effects page and changing the default transition"
		],
		background: [
			"The text you see scrolling the background is the source code for different projects which i work on.",
			"I love javscript and could not thing of any more fitting of a background for my own website :-)"
		],
		topTitle: [
			"The top title you see on each page is the property accessor to the global site object for the current page"
		]
	}
};
