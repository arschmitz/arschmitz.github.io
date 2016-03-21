module.exports = {
	description: "This section describes how to use and navigate through the website, as well as a complete API for the website for use in the prompt",
	instructions: [
		"This website is designed to be navigated in 2 different ways...",
		"The first way is via a JavaScript console. This is what you see when you first come to the website, and what is always on the bottom portion of the screen.",
		"This works just like the console in the inspector of your browser. All of the websites content is stored in a global object named `arschmitz`.",
		"You can explore this object directly within the console as well as run the commands you will find below.",
		"The second way you can explore this website, is via the GUI interface.",
		"This is the more traditional sort of website you are probably familiar with. Where you have friendly links and buttons and can use your mouse ( and no JavaScript required ).",
		"You will notice however when you click on a link or button it inputs a coresponding command into the prompt and runs it.",
		"This way you can see exactly what is happening as you explore the website"
	],
	globalObjects: {
		gui: {
			description: "This object contains methods and properties that control the display of the GUI content of the website",
			methods: [
				{
					name: "GUI",
					description: "Open the GUI ( Graphic User Interface ) for the website. Proxy's to `gui.open();`"
				},
				{
					name: "gui.close()",
					description: "Close the GUI ( Graphic User Interface ) for the website."
				},
				{
					name: "gui.open()",
					description: "Open the GUI ( Graphic User Interface ) for the website."
				},
				{
					name: "gui.render( template [,item] );",
					description:" Render a page in the GUI"
				},
				{
					name: "gui.runTransition( content );",
					description: "Transition the GUI to new content"
				},
				{
					name: "gui.startBackground()",
					description: "Update and start the scrolling background text for the current page"
				},
				{
					name: "gui.popState();",
					description: "Update the current GUI content based on the current URL"
				}
			],
			properties: [
				{
					name: "gui.isOpen",
					description: "The current state of the GUI"
				},
				{
					name: "gui.transition",
					description: "The transition which will be used for GUI page transitions"
				},
				{
					name:"gui.duration",
					description: "The duration of the transition effect for GUI page transitions"
				}
			]
		},
		prompt: {
			description: "These functions control the JavaScript prompt at the bottom of the page",
			methods: [
				{
					name: "prompt.logError( error );",
					description: "Log an error to the in page console"
				},
				{
					name: "prompt.syntaxHighlight( json );",
					description: "Syntax highlight a JSON object and return the result"
				},
				{
					name: "prompt.runCommand();",
					description: "Run the command currently typed into the prompt"
				},
				{
					name: "prompt.keyup( event );",
					description: "Handles the keyup event for the prompt"
				}

			],
			properties: [
				{
					name: "prompt.syntaxRegex",
					description: "A regular expression used by `prompt.syntaxHighlight()`"
				}
			]
		},
		effects: {
			description: "This object contains methods and properties that animate the website in differnet ways",
			methods: [
				{
					name: "effects.runEffect( effect, element );",
					description: "Run a jQuery UI effect on an element"
				},
				{
					name: "effects.kill()",
					description: "Stop all effects and reset the website"
				},
				{
					name: "effects.iHaveTheSpins();",
					description: "Try and find out :-)"
				},
				{
					name: "effects.partyMode();",
					description: "Try and find out :-)"
				},
				{
					name: "effects.iAmTheSpoon();",
					description: "Try and find out :-)"
				},
				{
					name: "effects.flashMob( effect, image, duration );",
					description: "Run the flashmob effect with the specificied options. Duration defaults to infinite."
				},
				{
					name: "effects.getRandomColor()",
					description: "Returns a random Hex color code"
				},
				{
					name: "effects.stopTheMob()",
					description: "Stops the flshmob effect without removing the added elements"
				},
				{
					name: "effects.generateRule( rule, selector )",
					description: "Take an object and selector and converts them into a css rule and adds them to a dynamic stylesheet"
				},
				{
					name: "effects.saveStyle()",
					description: "Finds elements with style rules and saves them so they can be restored later"
				},
				{
					name: "effects.restoreStyle()",
					description: "Restores styles saved with `effects.saveStyle()`"
				}
			],
			properties: [
				{
					name: "effects.intervals",
					description: "An object containing the stored `setInterval` refrences on which the effects are running"
				},
				{
					name: "effects.images",
					description: "An array of image links used in the canned effects for `flashmob` effect"
				},
				{
					name: "effects.width",
					description: "The windows current width"
				},
				{
					name: "effects.height",
					description: "The windows current height"
				},
				{
					name: "effects.flashMobElements",
					description: "A collection containing all the elements that exist prior to the start of the `flashMob` effect for use when restoring the dom after cancelation"
				},
				{
					name: "effects.savedStyle",
					description: "A bollean indication if the pre effect style has been saved"
				},
				{
					name: "effects.stylesheet",
					description: "A refrence to the dynamic stylesheet used by `effects.generateRule()`"
				}
			]
		},
		arschmitz: {
			description: "An object containing all the content for the website which is rendered using handlebars templates to create the GUI"
		}
	}
};
