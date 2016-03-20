window.arschmitz.timelines = {
	youCantTouchThis: {
		timeline: [
			{
				title: "About Me",
				detail: "Alexander Schmitz - Development Lead jQuery Foundation - Head of Web CÜR Music",
				img: "https://avatars0.githubusercontent.com/u/462993?v=3&s=460",
				size: "large",
				color: "timeline-blue",
				notes: [
					"Hi everyone thank you for coming back for a second talk. Yesterday you heard me talk a lot about the jQuery Foundation. The work i do with the open source community goes beyond just jQuery. I work with and contribute and maintain too many open source projects, in many different areas, I enjoy writing tools for testing and have worked with many testing related projects like QUnit, Intern, Perf Jankie, and aXe and have created tools like spider.js, to help with testing everything from basic unit tests to advanced rendering tests and live site spider. I have written many grunt plugins and node modules for everything from css pre-processing to games. You get the idea…"
				]
			},
			{
				date: "",
				title: "Related Projects",
				detail: "Projects i work on related to touch input",
				img: "http://nhenze.net/uploads/Hit-It-for-Android.jpg",
				size: "medium",
				color: "timeline-salmon",
				notes: [
					"Today though i would like to focus on one specific area of the projects i work on which is those projects related to handling and simplifying one of the most fractured areas in browsers today which is input. Not so long ago this used to be a pretty simple thing to deal with. You had two basic type of input. There were mouse events, and keyboard events, and the two played very nicely together.",
					"These is not the case anymore and has not been for some time now. New input methods are being thought up every day. The biggest change that occurred to change all this was the introduction of touch events in iPhone OS  2 when everything got turned on its head. Now we have not only multiple implementations of the same events but competing standards for how events. Leading to browser fragmentation and the need for multiple code paths to handle the same thing. ",
					"thank fully for developers there have been a few libraries which have emerged to help overcome these problems. I am fortunate enough to lead or work on a few of these projects."
				]
			},
			{
				date: "Project Lead",
				title: "jQuery Mobile",
				detail: "Handles touch input on all widgets and has basic gesture support",
				img: "http://blog.jquery.com/wp-content/uploads/2015/07/icn-jquerymobile-logo.png",
				size: "small",
				color: "timeline-yellow",
				notes: [
					"jQuery Mobile is basically where it all started not only for me but for major libraries trying to handle the problem of touch input on the web. I started as a contributor and now lead the jQuery Mobile project and worked to refactor their touch and gesture support in the last 2 versions. jQuery Mobile supports a small subset of gestures and a normalized event model called vmouse"
				]
			},
			{
				date: "Project Lead",
				title: "Hammer.js",
				detail: "Stand alone Library for gesture events support",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
				size: "small",
				color: "timeline-orange",
				notes: [
					"Hammer.js was created by Jorik Tangler in 2012 with some of the goal of making a simple to use gesture event library. It has received 2 major re-writes which have focused in on supporting standardized gestures and improved browser support. Hammer.js has become the standard for gesture support on the internet. Earlier this year after about 6 months of talks and work between Jorik and myself Hammer.js is now a community lead project and independent organization which i currently lead."
				]
			},
			{
				date: "Team Member",
				title: "PEP",
				detail: "Pointer Events Polyfill",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "small",
				color: "timeline-green",
				notes: [
					"PEP is a pointer events polyfill. It has one very simple goal which is to polyfill the W3C Pointer events specification in all modern browsers. It started as part of google's Polymer project but is not part of the jQuery Foundation and is lead by Scott Gonzalez with my help. PEP has collaboration from both Microsoft and the Dojo Foundation"
				]
			},
			{
				date: "Team Member",
				title: "jQuery UI",
				detail: "Supports a variety interactions such as drag and drop",
				img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMVx1hWMy2Hl71YWh9Ou9G9tvjPH3Kfb3Dh3h9q_E8n5aSIPcDr63h1rLh",
				size: "small",
				color: "timeline-yellow",
				notes: [
					"jQuery UI is a UI widget library implemented using jQuery but for the purposes of this talk i will be focusing on the jQuery UI Interactions. jQuery UI includes widgets which add support for common interaction patterns like drag and drop, resizing, and dragging to select a range. I am currently the most active contributor to jQuery UI."
				]
			},
			{
				date: "Creator",
				title: "Hammer Time",
				detail: "Fast click based on polyfilling touch-action css",
				img: "http://static.comicvine.com/uploads/original/5/54353/3215411-mjolnir+-+hammer+of+thor+prop_color_5x-lrg.jpg",
				size: "small",
				color: "timeline-salmon",
				notes: [
					"Lastly there is Hammer Time the newest project from the hammerjs organization. Hammer time is a fast click solution which works by polyfilling the touch-action css property in non supporting browsers. I created this polyfill as a result POC for the joint efforts between the PEP and Hammer.js teams to find a way to support touch-action css.",
					"So as you can see supporting touch based input is something i am passionate about and have worked with many projects on. This might bring some of you to ask why do we need so many projects to do something that seems so simple in the apps on my phone. That is a really great question and to answer that i would like to give you an overview of the sordid 9 year history that is touch input on the web. After that i’ll let you know how far the browsers and libraries have come and show you how simple supporting complex touch interactions can be with the use of a few libraries. "
				]
			},
			{
				title: "2007",
				detail: "Year One",
				divider: true
			},
			{
				date: "June 17, 2007",
				title: "jQuery UI - First Commit",
				detail: "On june 17 2007 the first commit was made to jQuery UI, by Paul Bakaus",
				img: "http://www.hivelocity.co.jp/wp-content/uploads/2014/09/jquery.jpg",
				size: "small",
				notes: [
					"This dark tale starts back a long time ago way back in 2007  the web development landscape was very different back then and most of the JavaScript libraries we use and take for granted didn’t exist yet. It was only a year after the first release of jQuery by John Resig and on June 17 Paul Bakaus made the first commit to what would become jQuery UI. Paul intended to build a JavaScript UI library based on the solid jQuery Foundation John had built."
				]
			},
			{
				date: "June 29, 2007",
				title: "First generation iPhone",
				detail: "Only days later the first iPhone is released",
				img: "http://www.ztechnews.com/wp-content/uploads/2012/12/64.jpg",
				size: "medium",
				notes: [
					"Only 12 days later on June 29 the first iPhone was released to a lot of hype. what many of you may not remember though was that this was not nearly the iPhone many know and love today while it had “a fully functioning browser” it lacked many features including any sort of touch manipulation ability, it however showed the possibility of what a touchscreen phone could be and how it could operate."
				]
			},
			{
				date: "September 16, 2007",
				title: "jQuery UI 1.0",
				detail: "jQuery UI 1.0 is released in September of the same year",
				img: "http://mikederoche.com/images/logos/components/jqueryui.jpg",
				size: "large",
				notes: [
					"a few months later on September 16 jQuery UI 1.0 was released. It was of course written completely around mouse based input and was still at an early stage but showed promise already."
				]
			},

			{
				title: "2008",
				detail: "Year Two",
				divider: true
			},
			{
				date: "July 11, 2008",
				title: "iphone OS 2.0",
				detail: "Support for touch events added",
				img: "http://parisworkingforart.files.wordpress.com/2010/05/iphone-3g.jpg",
				size: "medium",
				notes: [
					"This brings us to year 2 in our journey 2008 brought us 2 important milestones in the epic of touch input. The first happened on July 11, 2008 when iPhone OS 2 was released along with the iphone 3g iPhone OS2 will always be remembered for one important milestone in the web. The introduction of touch events to the browser. For the first time there was a “usable” model for events and interaction for touch screens in the context of a browser. There was however a downside to this too. These  new events were not based on any standard, had no developer feedback or buy in and were completely proprietary to apple and the iPhone."
				]
			},
			{
				date: "September 23, 2008",
				title: "First Android phone released",
				detail: "The first android phone the HTC Dream is released",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/512px-Android_robot.svg.png",
				size: "small",
				notes: [
					"Two months later the first android phone was released. The HTC dream introduced google's Android to the global market. This first version of android though it had a fully featured browser lacked support for any sort of touch based input model for the browser. Touch Events had not yet been introduced to the android browser being only months after their first introduction in iPhone OS 2. "
				]
			},
			{
				title: "2009",
				detail: "Year Three",
				divider: true
			},
			{
				date: "February 13, 2009",
				title: "Ticket Filed to add support for touch",
				detail: "Paul Bakus files ticket and PR to support touch events in jQuery UI",
				img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/249/2cc/1b6f021.jpg",
				size: "large",
				notes: [
					"In February of 2009 Paul Bakaus the original creator of jQuery UI filed a ticket to add support for IOS to jQuery UI interactions along with a patch. However after discussions amongst the team it was decided that adding support for a non standard proprietary events system was not a good idea. Instead they would push for standardization and work at creating an abstracted interactions model capable of handling different input types. "
				]
			},
			{
				date: "Mid 2009",
				title: "W3C begins pointer discussions",
				detail: "Discussions are begun about adding a unified pointer event model to the DOM Level 3 Events",
				img: "http://www.vector-logo.net/logo_preview/eps/m/Microsoft_Internet_Explorer_Mouse_Pointer.png",
				size: "small",
				notes: [
					"Also in 2009, the W3C started discussing a unified pointer model for DOM Level 3 Events. The idea was that touch (including multi-touch), pen/stylus, and mouse events would be coalesced into a single model, making it easy to support all pointer types at once. However, this was abandoned because the goal at the time was to keep the spec as small as possible in order to become a recommendation faster."
				]
			},
			{
				date: "December 11, 2009",
				title: "Touch events land in WebKit",
				detail: "Google lands touch events in main WebKit repo",
				img: "http://www.beevoz.com/wp-content/uploads/2014/12/Google_logo.png",
				size: "medium",
				notes: [
					"It was not until december of 2009 a year and a half after touch events landed in iPhone OS 2 that touch events landed in the main WebKit repository. While this was important for adoption in other browsers it still came with its own downsides. This was not apple's Touch Events. Touch events only landed in the main WebKit repository because google reverse engineered them for use in its android phones. Because of this important difference there would always be small difference between apple and webkit touch events especially across versions."
				]
			},
			{
				title: "2010",
				detail: "Year Four",
				divider: true
			},
			{
				date: "July 6, 2010",
				title: "Firefox 4 Beta",
				detail: "Proprietary touch events added",
				img: "http://www.my-iguru.com/ipad/assets/images/ipad-wallpapers/computers/ipad-wallpaper-firefox.jpg",
				size: "large",
				notes: [
					"In July of 2010  the Firefox 4 Beta was released. The firefox 4 beta contained their own proprietary version of touch events with different implementation api and semantics. Having competing implementations of the same event model would prove to be less than ideal for developers which had already begun coding to the apple version of touch events. now instead of 2 code paths 1 for touch and one for mouse we were now facing the possibility of having to worry about Apple Touch events, Firefox touch events plus mouse events."
				]
			},
			{
				date: "August 13, 2010",
				title: "jQuery Mobile Announced",
				detail: "jQuery Mobile is announced with the goal of fully supporting touch devices",
				img: "http://blog.jquery.com/wp-content/uploads/2015/07/icn-jquerymobile-logo.png",
				size: "medium",
				notes: [
					"A month later jQuery Mobile was announced jQuery Mobile would launch with the goal of being a “A Touch-Optimized Web Framework HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices.” While jQuery UI could not make the jump needed to support mobile. A new Project could jump in and test the mobile waters attempting to support all common touch devices available. It would be the first truly optimized mobile framework and would blaze the way in many areas including touch input and declarative markup and would include a full AJAX navigation frame work complete with page transitions."
				]
			},
			{
				date: "October 27, 2010",
				title: "Touch Punch released",
				detail: "jQuery UI Touch Punch is released adding support for touch events to jquery ui",
				img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/0ac/33d/170d272.jpg",
				size: "medium",
				notes: [
					"2 months later touch support would come to jQuery UI thanks to a 3rd party add on known as jQuery UI Touch Punch. This worked by duck punching touch events to mouse events for jQuery UI to consume. While not a permanent or perfect solution it proved to work rather well and has since achieved widespread adoption with users of jQuery UI needing to support touch screens."
				]
			},
			{
				title: "2011",
				detail: "Year Five",
				divider: true
			},
			{
				date: "January 25, 2011",
				title: "W3C Touch Events",
				detail: "The W3C Begins work on touch events",
				img: "http://www.designbyfire.com/images/img_w3c_14.gif",
				size: "small",
				notes: [
					"This brings us to 2011 and year five in our 9 year journey, we are roughly at the halfway point of our journey chronologically however the drama is just beginning to ramp up. The interesting part of this tale is still yet to come. If the first part of this tale was climbing your local mountain the next stage in our Journey will be like a trek up everest. We will see more competing event models, splits in browser engines Drama in the W3C, Developer developer outrage on social media and the internet in general on a scale previously never seen before. This is about to get a lot bumpier folks so you better hold on.",
					"at the end of January 2011 the W3C began work on a touch events specification. This work began with cooperation from the jQuery foundation being represented by scott gonzalez and every major browser vendor except apple. It is also worth noting here that all of the other browser vendors which did participate did not do so because they believed in the touch events specification or even that it was the right way forward for the web. This working group was formed with the goal of web compatibility in mind and creating a specification for touch events based on the current model as quickly as possible because they believed after the move without input from developers or any outside party to introduce these new events that it was in the best interest of the community to standardize as quickly as possible."
				]
			},
			{
				date: "March 22, 2011",
				title: "Firefox 4",
				detail: "Firefox 4 adds propriatary touch events with different api in stable chanel",
				img: "http://media.today.ng/news/wp-content/uploads/2015/08/firefox.jpg",
				size: "small",
				notes: [
					"Firefox 4 hits the stable channel completely with the proprietary touch events model introduced in the beta version. This meant the worst fears of many developers had come true. We now had several different browsers all with their own implementations of touch events that were not compatible.",
					"The Mozilla model is much closer to the mouse event model and the abandoned W3C model in that the event objects are flat; properties such as event.pageX exist and there is no touch list. If you want to track multiple touches, you can do so via the event’s streamId."
				]
			},
			{
				date: "May 5, 2011",
				title: "First Draft of touch events spec",
				detail: "First working draft of the touch events spec is published with the W3C",
				img: "http://no-thinglikeaustralia.com.au/images/W3C_logo-large.jpg",
				size: "large",
				notes: [
					"May 5, 2011 the first draft of the touch events specification is published by the working group at the W3C it includes a basic specification based on the webkit implementation by google. however there are many questions from the working group about touch events that still need to be answered including a murky legality surrounding apple patents."
				]
			},
			{
				date: "September 13, 2011",
				title: "IE 10 Developer Preview",
				detail: "IE 10 Developer preview is released containing pointer events",
				img: "http://screenshots.nl.sftcdn.net/nl/scrn/318000/318673/internet-explorer-10-14-700x402.jpg",
				size: "large",
				notes: [
					"A few months after the publication of the first draft of the touch events specification another milestone would take place in the history of touch input which is the introduction of the IE 10 Developer Preview. This contained something completely new for the web. For better or worse we were about to see a whole new model for handling input in the browser including touch. ",
					"The IE 10 Developer preview shipped with a new prefixed event type known as pointer events. Pointer events instead of trying to introduce yet another event type and another code path for developers to have to worry about had the goal of normalizing all different types of input into a single model and event type known as a pointer event. "
				]
			},
			{
				date: "November 11, 2011",
				title: "jQuery Mobile 1.0",
				detail: "jQuery Mobile 1.0 is released supporting touch events in all widgets",
				img: "http://big.info/wp-content/uploads/2013/03/80508321d8ce3ba8aa264380bb7eba33.png",
				size: "medium",
				notes: [
					"Later on November 11, 2011 ( 11 - 11 - 11 ) jQuery Mobile 1.0 was released. jQuery Mobile introduced several important features at the time for supporting touch based input. It included an events abstraction known as Vmouse. vmouse normalized touch and mouse input into a single event model and included a fast click solution known as vclick. At the time it was the only such event abstraction available and was made available as a stand alone module as well. All of the widgets in jQuery Mobile utilized this normalized event model making it possible for them to support all types of input. In addition to the normalized events jQuery Mobile included several new custom gesture based events including tap, tap hold and swipe."
				]
			},
			{
				date: "November 16, 2011",
				title: "Apple discloses patents for touch events",
				detail: "",
				img: "http://img1.wikia.nocookie.net/__cb20121102224024/logopedia/images/2/26/Apple_2003_logo.png",
				size: "medium",
				notes: [
					"Five days later apple finally disclosed their patents regarding touch events to the W3C so they could be reviewed. to see the potential legal ramification of these patents on the touch events specification which had begun work earlier in the year. This would begin a year and a half delay in the specification due to uncertainties it raised"

				]
			},
			{
				date: "November 23, 2011",
				title: "jQuery UI Interaction adbstraction",
				detail: "jQuery UI begins writing abstraction to support any event type",
				img: "https://cdn.tutsplus.com/net/authors/jeffreyway/jquery-ui-widget-factory.jpg",
				size: "small",
				notes:[
					"Later this same month jQuery UI would begin work on its interactions abstraction. The interactions abstraction was a reaction to touch and other proprietary events systems springing up. It allowed any event type to be mapped to an interaction allowing anything capable of emitting an event within a web browser. One early demonstration of the idea allowed an original xbox controller to be used to control drag and drop within the browser."
				]
			},
			{
				title: "2012",
				detail: "Year Six",
				divider: true
			},
			{
				date: "January, 2012",
				title: "W3C forms patent advisory group",
				detail: "The W3C web events working group halts efforts and pending formation and results of PAG",
				img: "http://www.clickminded.com/wp-content/uploads/patent.jpg",
				size: "medium",
				notes: [
					"In march of the next year another tool was born to help us in our adventure to bring touch support into the browser. This one with a little bit different goal. It was one thing just to receive raw events from the browser but what about recognizing complex gestures like native apps were able to on the iPhone and androids. Things like pinch to zoom, rotate, swipe, tap, double tap, pan or others. defining and recognizing these gestures especially multi touch ones is its own complex task, made even more daunting when you are forced to deal with competing event models and implementations.  it was out of this complexity that hammer.js was born a small library with the singular goal of implementing gesture events in the browser."
				]
			},
			{
				date: "Mar 2, 2012",
				title: "First commit of Hammer.js",
				detail: "First commit is made to hammer.js to attempt to create a gesture library for the web",
				img: "https://avatars1.githubusercontent.com/u/1243901?v=3&s=460",
				size: "medium",
				notes: [
					"A month later my good friend and fellow development lead with the jQuery Foundation published a key blog post about the current state of touch input in the browser. He covered a brief history up until that point and went on to give a critical unbiased comparison of the now competing touch and pointer event models. The murky future of touch events with all of their pending patent issues as well as the fact that it was questionable just what browser vendors would even be willing to implement either model. He concluded with a call to action to both Microsoft and the community. Microsoft he called upon to submit pointer events to the W3C to become a spec. The community he called upon to try building things with both of the the new event models and give their feedback."
				]
			},
			{
				date: "April 10th, 2012",
				title: "Blog Post on future of touch",
				detail: "Scott publishes Getting touchy about patents",
				img: "https://avatars2.githubusercontent.com/u/141167?v=3&s=460",
				size: "large",
				notes: [
					"In July the Patent advisory committee concluded its work finding that of the 8 patents submitted by apple for consideration in relation to the touch events specification. That though none of them were submitted under a royalty free agreement that would have allowed them to be used as part of the specification that 7 of the patents had previously been rejected by the US patent office or were still pending and of the 1 patent that was found to be valid the pending pointer events specification had no relation to so it was concluded that work would be able to continue on the specification"
				]
			},
			{
				date: "July 6, 2012",
				title: "Touch Events PAG concludes",
				detail: "The Touch Events patent advisory committe concludes there is no infringment",
				img: "http://spicyip.com/wp-content/uploads/2013/07/denied-721524.png",
				size: "small",
				notes: [
					"Several months later with the encouragement of both the jQuery Foundation and the community microsoft submitted a proposal for the pointer events specification to the W3C. This essentially revived the work begun in 2009 as the new pointer events specification was very similar to the work begun then. One major advantage of both of these approaches over touch events is that is that they support multiple types of pointer devices and are not touch specific. In fact, tablet running Windows 8, mouse, pen, and fingers are all normalized to Pointer; you can even use the pointerType property to determine which type of pointer is being used. In addition to supporting all current pointer devices, Pointer events are designed in such a way that future devices can easily be added, and existing code will automatically support the new device. Even better, Pointer event objects have the same structure as other events, reducing the learning curve compared to the conglomerate of TouchEvent, TouchList, and Touch.",
					"Another big difference between Pointer and Touch is that Pointer has support for hovering (over and out events). While most touch devices have a hardware limitation that doesn’t allow for hovering, there are devices which do for example some sony xperia devices have a floating touch technology, and the samsung galaxy note line support hovering with a stylus. As technology continues to evolve this will become more common. This brings up an important issue: Touch Events were designed based on a specific device for a specific type of input. Pointer Events represent a completely different approach to input on the Web. While we’ve already covered how this impacts developers, it’s interesting to consider the impact on hardware manufacturers. In order for Apple to succeed with touch interfaces, they had to create a new event model. Innovation for new form factors and new input methods will either be stifled by the existing standards or will require a new set of APIs, following in Apple’s footsteps with the iPhone and Touch Events. Pointer Events provides a clean solution not only for developers, but for hardware manufacturers as well.",
					"In his blog post Scott said and i quote “It’s conceivable that in a few years developers could use Pointer Events as the only event model for pointers, leaving Mouse Events as a thing of the past.” This will  be important to remember in a few minutes as we move down our timeline"
				]
			},
			{
				date: "September 27, 2012",
				title: "Microsoft submits Pointer Events proposal",
				detail: "Microsoft submits the Pointer Events proposal to the W3C",
				img: "http://ragzon.com/wp-content/uploads/2015/08/microsoft-logo-3.jpg",
				size: "large",
				notes: [
					"a couple months forward on our journey in November the W3C formed the pointer events working group to pursue the proposal submitted by microsoft. The group includes representation from all of the major browser vendors once again. Well except of course apple…"
				]
			},
			{
				date: "November 9, 2012",
				title: "Pointer Events W3C Working group formed",
				detail: "The W3C forms a working group for pointer events specification",
				img: "http://www.w3.org/TR/pointerevents/pointer.png",
				size: "medium"
			},
			{
				date: "November 25, 2012",
				title: "Chrome opens issue to implment pointer events",
				detail: "The chrome team opens an issue with the intent to implement pointer events",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Chromium_11_Logo.svg/1000px-Chromium_11_Logo.svg.png",
				size: "large"
			},
			{
				date: "November 29, 2012",
				title: "Toolkitchen Polyfill refuses oldIE",
				detail: "",
				img: "http://www.html5hacks.com/wp-content/uploads/2013/05/pointerevents.jpg",
				size: "small"
			},
			{
				date: "December 11, 2012",
				title: "Pointer Events First Draft",
				detail: "The first draft of the pointer events specification is published by the W3C",
				img: "http://www.thesba.com/wp-content/uploads/2013/05/Ie8logo1.png",
				size: "medium"
			},
			{
				title: "2013",
				detail: "Year Seven",
				divider: true
			},
			{
				date: "January 8, 2013",
				title: "Firefox removes propriatary events",
				detail: "Firefox removes propriatary version of touch events",
				img: "http://images.techhive.com/images/article/2013/02/firefox_logo-100026079-gallery.jpg",
				size: "small"
			},
			{
				date: "February 20, 2013",
				title: "Microsoft anounces hand.js",
				detail: "Microsoft announces their own pointer events polyfill hand.js",
				img: "https://upload.wikimedia.org/wikipedia/en/b/ba/DrawingHands.jpg",
				size: "medium"
			},
			{
				date: "February 26, 2013",
				title: "Hammer.js 1.0",
				detail: "Hammer.js 1.0 is released brining the first simple gesture support to the web",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=460",
				size: "large"
			},
			{
				date: "March 11, 2013",
				title: "jQuery Special Events implementation",
				detail: "jQuery UI Team begins work on special events polyfill for pointer events",
				img: "http://blog.roymj.co.in/wp-content/uploads/2014/01/jquery-events.png",
				size: "small"
			},
			{
				date: "May 9, 2013",
				title: "Touch events become a W3C Propsed Recomendation",
				detail: "W3C publishes touch events Propsed recomendation for consideration",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png",
				size: "large"
			},
			{
				date: "May 14, 2013",
				title: "jquery-pointer-events create",
				detail: "jQuery Implementation of pointer events intended to follow",
				img: "https://cdn.tutsplus.com/net/uploads/legacy/359_jqueryTips/jquery.png",
				size: "large"
			},
			{
				date: "June 7, 2013",
				title: "Decision to use Polymer",
				detail: "The decision is made to promote the polymer polyfill as the one true polyfill",
				img: "https://avatars2.githubusercontent.com/u/2159051?v=3&s=400",
				size: "medium"
			},
			{
				date: "October 10, 2013",
				title: "Touch Events becomes a W3C Recomendation",
				detail: "The W3C publishes the Touch Events recomendation",
				img: "http://www.w3.org/Talks/Tools/Slidy2/graphics/w3c-logo-slanted.jpg",
				size: "large"
			},
			{
				date: "October 28, 2013",
				title: "Touch Events Community Group",
				detail: "The touch events working group is disbanded and a community group formed",
				img: "http://www.girliemac.com/presentation-slides/html5-mobile-usecases/images/w3c-community-logo.png",
				size: "small"
			},
			{
				title: "2014",
				detail: "Year Eight",
				divider: true
			},
			{
				date: "May 20, 2014",
				title: "Chrome ships touch-action css",
				detail: "Chrome stable ships touch-action css",
				img: "https://gigaom.com/wp-content/uploads/sites/1/2013/04/chrome-tablet.jpg?quality=80&strip=all",
				size: "medium"
			},
			{
				date: "July 11, 2014",
				title: "Hammer.js 2.0 released",
				detail: "Hammer.js 2.0 focus on solid and consistent gesture events, and multi touch",
				img: "http://i.stack.imgur.com/wolsW.png",
				size: "small"
			},
			{
				date: "August 12, 2014",
				title: "Polymer Pointer Events marked deprecated",
				detail: "The polymer pointer events polyfill is unexpectedly marked as deprecated",
				img: "https://avatars2.githubusercontent.com/u/2159051?v=3&s=400",
				size: "medium"
			},
			{
				date: "August 15, 2014",
				title: "Chrome closes issues to implement Pointer Events",
				detail: "Chrome decides not to implement pointer events, citing various reason including apples unwillingness",
				img: "https://lh3.ggpht.com/O0aW5qsyCkR2i7Bu-jUU1b5BWA_NygJ6ui4MgaAvL7gfqvVWqkOBscDaq4pn-vkwByUx=w300",
				size: "large"
			},
			{
				date: "November 13, 2014",
				title: "Last Call for pointer events",
				detail: "Last call working draft published for Pointer events",
				img: "http://images.chesscomfiles.com/uploads/images_users/tiny_mce/Egyptian_Assassin/phpAytUWZ.gif",
				size: "large"
			},
			{
				date: "December 16, 2014",
				title: "Pointer events proposed recomendation published by W3C",
				detail: "W3C published proposed recomendationf for pointer events",
				img: "http://www.html5hacks.com/wp-content/uploads/2013/05/pointerevents.jpg",
				size: "small"
			},
			{
				date: "December 16, 2014",
				title: "Polymer Pointer Evenets polyfill transfered",
				detail: "Google transfers the polymer pointer events polyfill to the jQuery Foundation for further development",
				img: "https://brand.jquery.org/resources/jquery-mark-light.gif",
				size: "small"
			},
			{
				title: "2015",
				detail: "Year Nine",
				divider: true
			},
			{
				date: "February 5, 2015",
				title: "Formal complaint filed",
				detail: "Yandex files formal complain suggestion the pointer events specification should not be published",
				img: "http://www.nixsolutions.com/uploads//2013/03/yandex.png",
				size: "medium"
			},
			{
				date: "February 24, 2015",
				title: "Pointer Events Recomendation published by W3C",
				detail: "Almost 6 years to the day after inital PR for adding touch support to UI pointer events spec published",
				img: "https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/EventOverview/Art/tablet_events2_2x.png",
				size: "large"
			},
			{
				date: "February 24, 2015",
				title: "Closed chrome issue for pointer events locked",
				detail: "Closing issues results in developer out rage on social media and issue is quickly reopened to comments",
				img: "http://screenshots.en.sftcdn.net/blog/en/2013/09/AngryTwitter-664x374.jpg",
				size: "medium"
			},
			{
				date: "March 25, 2015",
				title: "Chrome reverse decision on pointer events",
				detail: "Chrome team bowing to developer feedback reverses their decision not to implement pointer events.",
				img: "http://d0od.wpengine.netdna-cdn.com/wp-content/uploads/2014/09/android-chrome-apk-maker-icon.png",
				size: "small"
			},
			{
				date: "April 21, 2015",
				title: "First release of PEP",
				detail: "PEP 0.3.1 is released this is the first official release",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "medium"
			},
			{
				date: "June 7, 2015",
				title: "Hammer.js becomes a community project",
				detail: "Hammer.js is turned over to Alex Schmitz to become a community project",
				img: "https://avatars0.githubusercontent.com/u/462993?v=3&s=460",
				size: "small"

			},
			{
				date: "June 11, 2015",
				title: "PEP, Hammer.js, Microsoft collaborate on touch-action",
				detail: "All three teams decide to work together to try to find a way to support css touch-action",
				img: "http://i.istockimg.com/file_thumbview_approve/42594676/3/stock-photo-42594676-human-hand-touch-action.jpg",
				size: "small"
			},
			{
				date: "June 18, 2015",
				title: "jQuery Mobile decides to adopt Hammer.js",
				detail: "jQuery Mobile team votes to replace custom gestures",
				img: "http://demos.jquerymobile.com/1.4.5/_assets/img/devices.png",
				size: "medium"
			},
			{
				date: "July 30, 2015",
				title: "Teams settle on touch-action approach",
				detail: "Through discussion a workable approach and proof of concept are created",
				img: "http://2011.igem.org/wiki/images/thumb/2/28/Collaboration-hands.jpg/500px-Collaboration-hands.jpg",
				size: "large"
			},
			{
				date: "August 7th, 2015",
				title: "Hammer Time released",
				detail: "First fast click based on touch action css",
				img: "http://cdn.shopify.com/s/files/1/0263/4245/products/hammertime.jpg?v=1383097227",
				size: "medium"
			},
			{
				title: "Now",
				detail: "Where are we",
				divider: true
			},
			{
				title: "Its a fractured landscape",
				detail: "Touch events not consistent in different browsers, limited support for touch-action" +
					"even more limited support for pointer events.",
				img: "http://img04.deviantart.net/b8f6/i/2009/176/8/9/fractured_ground_texture_by_r3ds0ld13r.jpg",
				size: "large",
				color: "timeline-orange"
			},
			{
				title: "Multiple code paths",
				detail: "Today because of this limited and mixed support we are forced to maintain multiple" +
					"discreet code paths for worse yet even combinations of multiple paths",
				img: "http://i.stack.imgur.com/7C2kD.png",
				size: "medium",
				color: "timeline-green"
			},
			{
				title: "There has to be a better way?",
				detail: "There is thanks to the hard work of the open source community today we have options",
				img: "http://www.youritservices.co.nz/wp-content/uploads/2015/01/Open-Source.jpg",
				size: "large",
				color: "timeline-blue"
			},
			{
				title: "Libs",
				detail: "to the rescue!",
				divider: true
			},
			{
				date: "Uses: Input normalization",
				title: "PEP - Pointer Events Polyfill",
				detail: "Allows you to handle a single set of events regardless of browser",
				img: "https://cloud.githubusercontent.com/assets/1379244/8460397/3135099c-1fd9-11e5-9ca7-70240d46385b.png",
				size: "medium",
				color: "timeline-yellow",
				codeSample: [
					'$( ".ss-row h3" ).on( "pointerenter pointerleave", function( e ){',
					'	$( this )[ e.type === "pointerenter" ? "addClass" : "removeClass"  ]( "timeline-hover" );',
					'});'
				]
			},
			{
				date: "Uses: Advanced interactivity",
				title: "jQuery UI + Touch Punch",
				detail: "Rock solid tested interactions out of the box. Flexible and extenible widgets for Draggable, droppable, sortable, resizable, and selectable",
				img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzP0kZjL2JJRSiW2aq4eULzrVf5XkL4y2uSFJB1Sp9BIQ4bze0UQ",
				size: "medium",
				color: "timeline-blue",
				codeSample: [
					'// Draggable',
					'$( ".ss-circle" ).draggable();',
					'',
					'// Sortable',
					'$( ".ss-container" ).sortable();'
				]
			},
			{
				date: "Uses: Gesture Support",
				title: "Hammer.js",
				detail: "Support common gestures like pan, pinch, press, rotate, swipe, and tap across platoforms",
				img: "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
				size: "medium",
				color: "timeline-salmon",
				codeSample: [
					'// Basic Setup for pan, press, swipe, and tap',
					'var ham = new Hammer( ele, {',
					'	domEvents: true',
					'} );',
					'',
					'// Setup addint pinch and rotate',
					'var ham = new Hammer( ele, {',
					'	domEvents: true',
					'} );',
					'hammer.get( "rotate" ).set({ enable: true });',
					'ham.get( "pinch" ).set({ enable: true });'
				]
			},
			{
				date: "Uses: Fast Click",
				title: "Hammer Time",
				detail: "New fast click from the hammer.js team based on the touch-action spec",
				img: "http://cdn.shopify.com/s/files/1/0263/4245/products/hammertime.jpg?v=1383097227",
				size: "medium",
				color: "timeline-green",
				codeSample: [
					'<div class="target" style="touch-action:none"></div>'
				]
			},
			{
				date: "Uses: Fast Click",
				title: "Fast Click",
				detail: "The best known and most used fast click solution",
				img: "http://foundation.zurb.com/assets/img/learn/features/fast-click.svg",
				size: "medium",
				color: "timeline-salmon",
				codeSample: [
					'$(function() {',
						'FastClick.attach(document.body);',
					'});'
				]
			}
		]
	}
}