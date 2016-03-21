window.arschmitz={
    "API": {
        "description": "This section describes how to use and navigate through the website, as well as a complete API for the website for use in the prompt",
        "instructions": [
            "This website is designed to be navigated in 2 different ways...",
            "The first way is via a JavaScript console. This is what you see when you first come to the website, and what is always on the bottom portion of the screen.",
            "This works just like the console in the inspector of your browser. All of the websites content is stored in a global object named `arschmitz`.",
            "You can explore this object directly within the console as well as run the commands you will find below.",
            "The second way you can explore this website, is via the GUI interface.",
            "This is the more traditional sort of website you are probably familiar with. Where you have friendly links and buttons and can use your mouse ( and no JavaScript required ).",
            "You will notice however when you click on a link or button it inputs a coresponding command into the prompt and runs it.",
            "This way you can see exactly what is happening as you explore the website"
        ],
        "globalObjects": {
            "gui": {
                "description": "This object contains methods and properties that control the display of the GUI content of the website",
                "methods": [
                    {
                        "name": "GUI",
                        "description": "Open the GUI ( Graphic User Interface ) for the website. Proxy's to `gui.open();`"
                    },
                    {
                        "name": "gui.close()",
                        "description": "Close the GUI ( Graphic User Interface ) for the website."
                    },
                    {
                        "name": "gui.open()",
                        "description": "Open the GUI ( Graphic User Interface ) for the website."
                    },
                    {
                        "name": "gui.render( template [,item] );",
                        "description": " Render a page in the GUI"
                    },
                    {
                        "name": "gui.runTransition( content );",
                        "description": "Transition the GUI to new content"
                    },
                    {
                        "name": "gui.startBackground()",
                        "description": "Update and start the scrolling background text for the current page"
                    },
                    {
                        "name": "gui.popState();",
                        "description": "Update the current GUI content based on the current URL"
                    }
                ],
                "properties": [
                    {
                        "name": "gui.isOpen",
                        "description": "The current state of the GUI"
                    },
                    {
                        "name": "gui.transition",
                        "description": "The transition which will be used for GUI page transitions"
                    },
                    {
                        "name": "gui.duration",
                        "description": "The duration of the transition effect for GUI page transitions"
                    }
                ]
            },
            "prompt": {
                "description": "These functions control the JavaScript prompt at the bottom of the page",
                "methods": [
                    {
                        "name": "prompt.logError( error );",
                        "description": "Log an error to the in page console"
                    },
                    {
                        "name": "prompt.syntaxHighlight( json );",
                        "description": "Syntax highlight a JSON object and return the result"
                    },
                    {
                        "name": "prompt.runCommand();",
                        "description": "Run the command currently typed into the prompt"
                    },
                    {
                        "name": "prompt.keyup( event );",
                        "description": "Handles the keyup event for the prompt"
                    }
                ],
                "properties": [
                    {
                        "name": "prompt.syntaxRegex",
                        "description": "A regular expression used by `prompt.syntaxHighlight()`"
                    }
                ]
            },
            "effects": {
                "description": "This object contains methods and properties that animate the website in differnet ways",
                "methods": [
                    {
                        "name": "effects.runEffect( effect, element );",
                        "description": "Run a jQuery UI effect on an element"
                    },
                    {
                        "name": "effects.kill()",
                        "description": "Stop all effects and reset the website"
                    },
                    {
                        "name": "effects.iHaveTheSpins();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.partyMode();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.iAmTheSpoon();",
                        "description": "Try and find out :-)"
                    },
                    {
                        "name": "effects.flashMob( effect, image, duration );",
                        "description": "Run the flashmob effect with the specificied options. Duration defaults to infinite."
                    },
                    {
                        "name": "effects.getRandomColor()",
                        "description": "Returns a random Hex color code"
                    },
                    {
                        "name": "effects.stopTheMob()",
                        "description": "Stops the flshmob effect without removing the added elements"
                    },
                    {
                        "name": "effects.generateRule( rule, selector )",
                        "description": "Take an object and selector and converts them into a css rule and adds them to a dynamic stylesheet"
                    },
                    {
                        "name": "effects.saveStyle()",
                        "description": "Finds elements with style rules and saves them so they can be restored later"
                    },
                    {
                        "name": "effects.restoreStyle()",
                        "description": "Restores styles saved with `effects.saveStyle()`"
                    }
                ],
                "properties": [
                    {
                        "name": "effects.intervals",
                        "description": "An object containing the stored `setInterval` refrences on which the effects are running"
                    },
                    {
                        "name": "effects.images",
                        "description": "An array of image links used in the canned effects for `flashmob` effect"
                    },
                    {
                        "name": "effects.width",
                        "description": "The windows current width"
                    },
                    {
                        "name": "effects.height",
                        "description": "The windows current height"
                    },
                    {
                        "name": "effects.flashMobElements",
                        "description": "A collection containing all the elements that exist prior to the start of the `flashMob` effect for use when restoring the dom after cancelation"
                    },
                    {
                        "name": "effects.savedStyle",
                        "description": "A bollean indication if the pre effect style has been saved"
                    },
                    {
                        "name": "effects.stylesheet",
                        "description": "A refrence to the dynamic stylesheet used by `effects.generateRule()`"
                    }
                ]
            },
            "arschmitz": {
                "description": "An object containing all the content for the website which is rendered using handlebars templates to create the GUI"
            }
        }
    },
    "aboutMe": {
        "name": {
            "initials": "AS",
            "first": "Alexander",
            "last": "Schmitz",
            "middle": "Ryan",
            "nick": "Alex"
        },
        "basic": {
            "name": "Alexander Schmitz",
            "age": "31",
            "profession": "Developer",
            "title": "Project Lead jQuery Mobile, Co Creator Chassis CSS Framework, Team Member jQuery UI, PEP, jQuery Testing Team, jQuery Infrastructure Team, jQuery Content Team"
        },
        "avatar": "https://avatars0.githubusercontent.com/u/462993?v=3&amp;s=460",
        "currentPosition": {
            "company": "CÜR Media",
            "title": "Senior Engineer - Web Lead",
            "time": "2015 - Present",
            "responsibilities": [
                "Lead development of all web properties",
                "Lead development of streaming music app",
                "Lead a distributed team of developers",
                "Lead development of node backend",
                "App arcitecture",
                "Work with leads on other projects to create and improve cross-project standards"
            ]
        },
        "funFacts": [
            "Projects which i help lead and work on are on ~65% of the top 1 Million websites",
            "20% of these sites feature 2 or more of these projects",
            "11% have 3 or more of the projects",
            "When open source report card still worked I was in the top 1% of JavaScripters"
        ],
        "pastExperience": {
            "W3C": {
                "title": "Member",
                "time": "2015 - Present",
                "responsibilities": [
                    "Work on Web Platform working group",
                    "Work on Audio working group",
                    "Expert on promises findText api",
                    "Contributor Pointer Events working group"
                ]
            },
            "jQuery Foundation": {
                "title": "Development Lead / Full-time Consultant",
                "time": "2012 - Present",
                "responsibilities": [
                    "Lead development, direction of jQuery Foundation Projects",
                    "Lead the jQuery Mobile project",
                    "Lead a distributed team of developers around the world",
                    "Work on different distributed teams of developers",
                    "Create tools for use across different teams",
                    "Work with leads on other projects to create and improve cross-project standards"
                ]
            },
            "Filament Group": {
                "title": "Consultant",
                "time": "2013",
                "responsibilities": [
                    "Create a set of light weight reusable widgets built on shoestring",
                    "Continue development and add tests to shoestring library",
                    "Create eyelet a super tiny ( 80 lines ) widget factory api compatible with the jQuery UI widget factory"
                ]
            },
            "Bill Dodge Auto Group": {
                "title": "Internet Development Administrator",
                "time": "2009 - 2013",
                "responsibilities": [
                    "Create and manage all websites",
                    "Develop internet strategy for company",
                    "Handle all digital marketing",
                    "Create sales tools",
                    "Create accounting tools",
                    "Manage small team",
                    "Create text messaging marketing, inventory, and sales integration tools",
                    "Create text message auto response system"
                ]
            },
            "Starr Graphics": {
                "title": " Lead Web Developer / Graphic Artist",
                "time": "2005-2009",
                "responsibilities": [
                    "Handle all web development for clients",
                    "Create designes for comercial packageing",
                    "Pre-press art prep"
                ]
            },
            "Freelance": {
                "title": "Web Developer / Graphic Artist / Programmer",
                "time": "1996-2013",
                "responsibilities": [
                    "A variety of work for different clients"
                ]
            }
        },
        "contact": {
            "website": "http://arschmitz.me",
            "email": "arschmitz@gmail.com",
            "twitter": "alexrschmitz",
            "github": "arschmitz",
            "irc": "arschmitz",
            "linkedIn": "https://www.linkedin.com/in/arschmitz"
        },
        "description": "I'm a developer from Portland Maine specializing in front end development. My passion is writing elegant and functional javscript code to be used and enjoyed by any one who wants it. In my spare time I brew beer, make wine and love to cook. I have been coding and making websites for over 20 years. Durring this time i came to find that my true passion was not just to write code. It was to write code that could help Others and open make the internet a better and more accessible place. I devote my life and 100% of my working time to the development and fostering of open source projects.",
        "libScore": [
            {
                "url": "baidu.com",
                "rank": 4,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/baidu.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "qq.com",
                "rank": 8,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/qq.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "twitter.com",
                "rank": 10,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/twitter.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "taobao.com",
                "rank": 12,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/taobao.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "msn.com",
                "rank": 13,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/msn.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "linkedin.com",
                "rank": 15,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/linkedin.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "sina.com.cn",
                "rank": 16,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sina.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "yandex.ru",
                "rank": 21,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/yandex.ru",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "hao123.com",
                "rank": 22,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/hao123.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "instagram.com",
                "rank": 23,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/instagram.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.com",
                "rank": 24,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "360.cn",
                "rank": 29,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/360.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "pinterest.com",
                "rank": 31,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "reddit.com",
                "rank": 34,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/reddit.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "netflix.com",
                "rank": 35,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/netflix.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "paypal.com",
                "rank": 38,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/paypal.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "sohu.com",
                "rank": 39,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sohu.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "microsoft.com",
                "rank": 40,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                "lib": [
                    "$.mobile"
                ]
            },
            {
                "url": "tumblr.com",
                "rank": 46,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tumblr.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "imgur.com",
                "rank": 47,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/imgur.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "ok.ru",
                "rank": 48,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ok.ru",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "gmw.cn",
                "rank": 49,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/gmw.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "xvideos.com",
                "rank": 50,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/xvideos.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "imdb.com",
                "rank": 53,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/imdb.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "stackoverflow.com",
                "rank": 54,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/stackoverflow.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "fc2.com",
                "rank": 55,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/fc2.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ask.com",
                "rank": 56,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ask.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "office.com",
                "rank": 62,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/office.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "rakuten.co.jp",
                "rank": 64,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "pornhub.com",
                "rank": 65,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "soso.com",
                "rank": 68,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/soso.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "tianya.cn",
                "rank": 69,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                "lib": [
                    "$.ui",
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "github.com",
                "rank": 71,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/github.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "nicovideo.jp",
                "rank": 74,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/nicovideo.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "kat.cr",
                "rank": 76,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/kat.cr",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "outbrain.com",
                "rank": 77,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/outbrain.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "bongacams.com",
                "rank": 78,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/bongacams.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "haosou.com",
                "rank": 80,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/haosou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "go.com",
                "rank": 82,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/go.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "cnn.com",
                "rank": 83,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/cnn.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "360.com",
                "rank": 84,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/360.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "pixnet.net",
                "rank": 86,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/pixnet.net",
                "lib": [
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "dropbox.com",
                "rank": 87,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "adobe.com",
                "rank": 89,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/adobe.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "jd.com",
                "rank": 90,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/jd.com",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "xhamster.com",
                "rank": 92,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                "lib": [
                    "Hammer",
                    "jQuery"
                ]
            },
            {
                "url": "flipkart.com",
                "rank": 93,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/flipkart.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "microsoftonline.com",
                "rank": 94,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/microsoftonline.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "whatsapp.com",
                "rank": 95,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/whatsapp.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "nytimes.com",
                "rank": 96,
                "platform": "mobile",
                "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                "lib": [
                    "Hammer",
                    "jQuery",
                    "$.mobile"
                ]
            },
            {
                "url": "chase.com",
                "rank": 97,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/chase.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "youku.com",
                "rank": 98,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/youku.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "coccoc.com",
                "rank": 99,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/coccoc.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "chinadaily.com.cn",
                "rank": 101,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/chinadaily.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "indiatimes.com",
                "rank": 102,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/indiatimes.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "booking.com",
                "rank": 104,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/booking.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "china.com.cn",
                "rank": 107,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/china.com.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "livedoor.jp",
                "rank": 108,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/livedoor.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "sogou.com",
                "rank": 109,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/sogou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.co.uk",
                "rank": 110,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.co.uk",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "ebay.de",
                "rank": 113,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/ebay.de",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "163.com",
                "rank": 114,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/163.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "dailymotion.com",
                "rank": 117,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dailymotion.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "alipay.com",
                "rank": 118,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/alipay.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "amazon.cn",
                "rank": 119,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/amazon.cn",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "dmm.co.jp",
                "rank": 120,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/dmm.co.jp",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "twitch.tv",
                "rank": 121,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                "lib": [
                    "$.ui",
                    "jQuery"
                ]
            },
            {
                "url": "tudou.com",
                "rank": 125,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/tudou.com",
                "lib": [
                    "jQuery"
                ]
            },
            {
                "url": "espn.go.com",
                "rank": 126,
                "platform": "desktop",
                "resource": "http://api.libscore.com/v1/sites/espn.go.com",
                "lib": [
                    "jQuery"
                ]
            }
        ]
    },
    "aboutTheSite": {
        "intro": [
            "This section describes some of the unique aspects of the site and how they work",
            "The content for this entire website are stored in a single global javascript object `arschmitz`",
            "Everything you see in the GUI is created by passing parts of this object to a handlebars template and rendering the result"
        ],
        "sections": {
            "json": [
                "Many of the content blocks on this website have small links in the upper right hand corner that say JSON",
                "The links mean that this block is created out of a single object that is part of the global `arschmitz` website object",
                "When you click the link it will show the path to the object and the json object it self which are passed to the handlebars template to create this block"
            ],
            "pageJSONLink": [
                "Similar to the JSON link mentioned above you will notice each GUI page has a json link at the very top of the page which is fixed to the top of the viewport",
                "Clicking this link will show the JSON objcet that creates the whole page",
                "Where this differs from the normal JSON links is after clicking the first time it will say template",
                "Clicking again will show the Hnadlebars template which renders the page when passed the previous JSON object"
            ],
            "links": [
                "You may notice any time you click a button or link on the website that there is a command entered into the console and run",
                "All actions in the gui actually just run the correcponding command in the console."
            ],
            "transitions": [
                "you may have noticed a subtle fading page transition when switching pages in the GUI",
                "You may change this to some more dramatic and fun transitions by going to the effects page and changing the default transition"
            ],
            "background": [
                "The text you see scrolling the background is the source code for different projects which i work on.",
                "I love javscript and could not thing of any more fitting of a background for my own website :-)"
            ],
            "topTitle": [
                "The top title you see on each page is the property accessor to the global site object for the current page"
            ]
        }
    },
    "community": {
        "W3C": {
            "role": "Member",
            "organization": "W3C",
            "website": "https://www.w3.org/",
            "logo": "https://www.w3.org/2008/site/images/logo-w3c-mobile-lg",
            "work": [
                "Work on Web Platform working group",
                "Work on Audio working group",
                "Expert on promises findText api",
                "Contributor Pointer Events working group"
            ]
        },
        "gsoc": {
            "role": "Organization Admin / Mentor",
            "organization": "Google Summer of Code",
            "website": "https://summerofcode.withgoogle.com/",
            "logo": "https://lh3.googleusercontent.com/zt9X7V06jkKDR9bZ7HFcS8RjUK_4axUv5FRR7UTjj5bq4Amy71kxwnl10aOJ5vuzLrkQiGEF7XJHzHzRzMeA3tHBI1MgA0vTiGJOJIXl2tf5FaANpBMMDrYZ9WUbCmjq-bvRXGmI=s426",
            "work": [
                "Mentor students",
                "Administor organization",
                "Review work and create weekly goals"
            ]
        },
        "hammer": {
            "role": "Organization Owner / Lead",
            "organization": "Hammer.js",
            "website": "https://github.com/hammerjs",
            "logo": "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200",
            "work": [
                "Turning project into a community project",
                "Building a team",
                "Reaching out to other organizations about collaboration"
            ]
        },
        "nodeSchoolPortland": {
            "role": "Mentor",
            "organization": "Node School Portland",
            "website": "http://www.meetup.com/nodeschool-portland-me/",
            "logo": "http://photos1.meetupstatic.com/photos/event/1/c/c/1/global_433507361.jpeg",
            "work": [
                "Help mentor and teach node to anyone who is interested"
            ]
        },
        "portlandWebDev": {
            "role": "Frequent speaker, helper",
            "organization": "Portland Main Web Developer Group",
            "website": "http://www.meetup.com/me-webdev/",
            "logo": "http://photos1.meetupstatic.com/photos/event/7/5/3/c/global_257430012.jpeg",
            "work": [
                "Give occasional talks",
                "Help find speakers",
                "Mentor and give advice to fellow members",
                "Setup irc support channel"
            ]
        },
        "jqueryBoston": {
            "role": "Member",
            "website": "http://www.meetup.com/jQuery-Boston/",
            "logo": "http://photos2.meetupstatic.com/photos/event/4/7/9/d/global_20598333.jpeg",
            "organization": "jQuery Boston"
        },
        "bostonjs": {
            "role": "Member",
            "website": "http://www.meetup.com/boston_JS/",
            "organization": "Boston JS",
            "logo": "http://photos2.meetupstatic.com/photos/event/7/5/d/6/global_431910166.jpeg"
        }
    },
    "help": {
        "top": [
            "This website is a little different then typical websites so this section gives some basic usage instructions",
            "The website is composed of 2 main parts the Console and the GUI"
        ],
        "sections": {
            "console": [
                "The console provides the basis for the whole site. This is a javascript console just like the one you may have used in the developer tools of your favorite browser",
                "The console will run any valid javascript you enter in the global context and will log any return values or errors it encounters.",
                "on larger screens you can have either the console open the GUI open or both.",
                "On small screen like mobile devices the GUI / Console are responsive and only one can be open at a time",
                "When the console is closed you will find a small button at the bottom of the screen to re-open it",
                "The console can be resized by dragging its top border up or down",
                "For more information on the console and its API see the API section",
                "For more details on how this interacts and works with the rest of the site see the `aboutTheSite` section"
            ],
            "gui": [
                "The GUI or Graphical User Interface is what most people think of as a normal website",
                "The GUI has your typical buttons and links. The GUI on this website does have some unique feature though",
                "The GUI can be opened at any time by typing `GUI` into the console or by clicking the flips switch at the top which toggles the GUI on and off",
                "One mobile screens when you open the GUI it will completely hide he console and you will see only the GUI.",
                "On smaller screens when the GUI is open you will see only the GUI",
                "For more details on the GUI and its features see the `aboutTheSite` section",
                "For the full API see the API section"
            ]
        }
    },
    "projects": {
        "jquery-mobile": {
            "name": "jQuery Mobile",
            "role": "Project Lead",
            "repoName": "[ 'jquery-mobile' ]",
            "links": {
                "github": "https://github.com/jquery/jquery-mobile",
                "issues": "https://github.com/jquery/jquery-mobile/issues",
                "website": "http://jquerymobile.com",
                "api": "http://api.jquerymobile.com",
                "irc": "#jqueryui-dev",
                "demos": "http://demos.jquerymobile.com"
            },
            "libScore": {
                "name": "$.mobile",
                "sites": [
                    {
                        "url": "microsoft.com",
                        "rank": 40,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn"
                    },
                    {
                        "url": "pixnet.net",
                        "rank": 86,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pixnet.net"
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com"
                    },
                    {
                        "url": "wellsfargo.com",
                        "rank": 141,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/wellsfargo.com"
                    },
                    {
                        "url": "cnet.com",
                        "rank": 155,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnet.com"
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com"
                    },
                    {
                        "url": "shutterstock.com",
                        "rank": 258,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shutterstock.com"
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net"
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com"
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com"
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com"
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com"
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com"
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com"
                    },
                    {
                        "url": "hotnewhiphop.com",
                        "rank": 659,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotnewhiphop.com"
                    },
                    {
                        "url": "hotstar.com",
                        "rank": 660,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotstar.com"
                    },
                    {
                        "url": "yadi.sk",
                        "rank": 687,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yadi.sk"
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com"
                    },
                    {
                        "url": "gamepedia.com",
                        "rank": 751,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamepedia.com"
                    },
                    {
                        "url": "prezi.com",
                        "rank": 775,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/prezi.com"
                    },
                    {
                        "url": "123rf.com",
                        "rank": 778,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/123rf.com"
                    },
                    {
                        "url": "hh.ru",
                        "rank": 838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hh.ru"
                    },
                    {
                        "url": "104.com.tw",
                        "rank": 849,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/104.com.tw"
                    },
                    {
                        "url": "vetogate.com",
                        "rank": 875,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vetogate.com"
                    },
                    {
                        "url": "cracked.com",
                        "rank": 889,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cracked.com"
                    },
                    {
                        "url": "focus.de",
                        "rank": 906,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/focus.de"
                    },
                    {
                        "url": "hubspot.com",
                        "rank": 916,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hubspot.com"
                    },
                    {
                        "url": "bedbathandbeyond.com",
                        "rank": 1012,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/bedbathandbeyond.com"
                    },
                    {
                        "url": "haberturk.com",
                        "rank": 1024,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/haberturk.com"
                    },
                    {
                        "url": "stanford.edu",
                        "rank": 1051,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/stanford.edu"
                    },
                    {
                        "url": "korabia.com",
                        "rank": 1052,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/korabia.com"
                    },
                    {
                        "url": "axisbank.com",
                        "rank": 1096,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/axisbank.com"
                    },
                    {
                        "url": "tagged.com",
                        "rank": 1106,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tagged.com"
                    },
                    {
                        "url": "today.com",
                        "rank": 1138,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/today.com"
                    },
                    {
                        "url": "entrepreneur.com",
                        "rank": 1141,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/entrepreneur.com"
                    },
                    {
                        "url": "iherb.com",
                        "rank": 1167,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/iherb.com"
                    },
                    {
                        "url": "cvs.com",
                        "rank": 1169,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cvs.com"
                    },
                    {
                        "url": "tim.it",
                        "rank": 1247,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tim.it"
                    },
                    {
                        "url": "teamviewer.com",
                        "rank": 1253,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/teamviewer.com"
                    },
                    {
                        "url": "cdc.gov",
                        "rank": 1259,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cdc.gov"
                    },
                    {
                        "url": "hibapress.com",
                        "rank": 1299,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hibapress.com"
                    },
                    {
                        "url": "cars.com",
                        "rank": 1322,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cars.com"
                    },
                    {
                        "url": "folha.uol.com.br",
                        "rank": 1336,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/folha.uol.com.br"
                    },
                    {
                        "url": "turbobit.net",
                        "rank": 1342,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/turbobit.net"
                    },
                    {
                        "url": "ranker.com",
                        "rank": 1448,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ranker.com"
                    },
                    {
                        "url": "abc.go.com",
                        "rank": 1491,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/abc.go.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "sammydress.com",
                        "rank": 1509,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sammydress.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "evite.com",
                        "rank": 1578,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/evite.com"
                    },
                    {
                        "url": "earthlink.net",
                        "rank": 1630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/earthlink.net"
                    },
                    {
                        "url": "payoneer.com",
                        "rank": 1641,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/payoneer.com"
                    },
                    {
                        "url": "emirates.com",
                        "rank": 1691,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/emirates.com"
                    },
                    {
                        "url": "radikal.com.tr",
                        "rank": 1723,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/radikal.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "layalina.com",
                        "rank": 1725,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/layalina.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "acer.com",
                        "rank": 1761,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/acer.com"
                    },
                    {
                        "url": "origin.com",
                        "rank": 1764,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/origin.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "recruit.co.jp",
                        "rank": 1791,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/recruit.co.jp",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "lotterypost.com",
                        "rank": 1806,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lotterypost.com"
                    },
                    {
                        "url": "ibtimes.co.uk",
                        "rank": 1838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ibtimes.co.uk",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "shine.com",
                        "rank": 1851,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shine.com"
                    },
                    {
                        "url": "zoopla.co.uk",
                        "rank": 1955,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/zoopla.co.uk"
                    },
                    {
                        "url": "starwoodhotels.com",
                        "rank": 1958,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/starwoodhotels.com"
                    },
                    {
                        "url": "kenh14.vn",
                        "rank": 1962,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kenh14.vn",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com"
                    },
                    {
                        "url": "rimanews.com",
                        "rank": 1989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rimanews.com"
                    },
                    {
                        "url": "qiwi.com",
                        "rank": 2063,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/qiwi.com"
                    },
                    {
                        "url": "autoblog.com",
                        "rank": 2124,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/autoblog.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "llbean.com",
                        "rank": 2148,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/llbean.com"
                    },
                    {
                        "url": "yalla-shoot.com",
                        "rank": 2166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yalla-shoot.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "creativemarket.com",
                        "rank": 2203,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/creativemarket.com"
                    },
                    {
                        "url": "ulta.com",
                        "rank": 2252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ulta.com"
                    },
                    {
                        "url": "ilsole24ore.com",
                        "rank": 2283,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ilsole24ore.com"
                    },
                    {
                        "url": "kotak.com",
                        "rank": 2289,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kotak.com"
                    },
                    {
                        "url": "betfair.com",
                        "rank": 2323,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/betfair.com"
                    },
                    {
                        "url": "lastampa.it",
                        "rank": 2340,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lastampa.it",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "mathworks.com",
                        "rank": 2389,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mathworks.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "yatra.com",
                        "rank": 2478,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/yatra.com"
                    },
                    {
                        "url": "justjared.com",
                        "rank": 2498,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/justjared.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "boston.com",
                        "rank": 2516,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/boston.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "siriusxm.com",
                        "rank": 2558,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/siriusxm.com"
                    },
                    {
                        "url": "vz.ru",
                        "rank": 2582,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vz.ru",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "telecomitalia.it",
                        "rank": 2599,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/telecomitalia.it",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "natwest.com",
                        "rank": 2615,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/natwest.com"
                    },
                    {
                        "url": "sony.com",
                        "rank": 2644,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sony.com"
                    },
                    {
                        "url": "enjoydressup.com",
                        "rank": 2660,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/enjoydressup.com"
                    },
                    {
                        "url": "immowelt.de",
                        "rank": 2672,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/immowelt.de"
                    },
                    {
                        "url": "encuentra24.com",
                        "rank": 2718,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/encuentra24.com"
                    },
                    {
                        "url": "viralands.com",
                        "rank": 2742,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/viralands.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kariyer.net",
                        "rank": 2743,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kariyer.net"
                    },
                    {
                        "url": "bmo.com",
                        "rank": 2766,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bmo.com"
                    },
                    {
                        "url": "techinsider.io",
                        "rank": 2790,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/techinsider.io"
                    },
                    {
                        "url": "telekom.de",
                        "rank": 2931,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/telekom.de"
                    },
                    {
                        "url": "kanald.com.tr",
                        "rank": 2977,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kanald.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "islamweb.net",
                        "rank": 2988,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/islamweb.net"
                    },
                    {
                        "url": "pons.com",
                        "rank": 2989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pons.com"
                    },
                    {
                        "url": "check24.de",
                        "rank": 2993,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/check24.de"
                    },
                    {
                        "url": "carmax.com",
                        "rank": 3022,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/carmax.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "hi5.com",
                        "rank": 3029,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hi5.com"
                    },
                    {
                        "url": "monsterindia.com",
                        "rank": 3061,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/monsterindia.com"
                    },
                    {
                        "url": "takealot.com",
                        "rank": 3114,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/takealot.com"
                    }
                ],
                "short": [
                    {
                        "url": "microsoft.com",
                        "rank": 40,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/microsoft.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn"
                    },
                    {
                        "url": "pixnet.net",
                        "rank": 86,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/pixnet.net"
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com"
                    },
                    {
                        "url": "wellsfargo.com",
                        "rank": 141,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/wellsfargo.com"
                    },
                    {
                        "url": "cnet.com",
                        "rank": 155,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnet.com"
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com"
                    },
                    {
                        "url": "shutterstock.com",
                        "rank": 258,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shutterstock.com"
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net"
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com"
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com"
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com"
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com"
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com"
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com"
                    },
                    {
                        "url": "hotnewhiphop.com",
                        "rank": 659,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotnewhiphop.com"
                    },
                    {
                        "url": "hotstar.com",
                        "rank": 660,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hotstar.com"
                    },
                    {
                        "url": "yadi.sk",
                        "rank": 687,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yadi.sk"
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com"
                    },
                    {
                        "url": "gamepedia.com",
                        "rank": 751,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamepedia.com"
                    },
                    {
                        "url": "prezi.com",
                        "rank": 775,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/prezi.com"
                    },
                    {
                        "url": "123rf.com",
                        "rank": 778,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/123rf.com"
                    },
                    {
                        "url": "hh.ru",
                        "rank": 838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hh.ru"
                    },
                    {
                        "url": "104.com.tw",
                        "rank": 849,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/104.com.tw"
                    },
                    {
                        "url": "vetogate.com",
                        "rank": 875,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vetogate.com"
                    },
                    {
                        "url": "cracked.com",
                        "rank": 889,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cracked.com"
                    },
                    {
                        "url": "focus.de",
                        "rank": 906,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/focus.de"
                    },
                    {
                        "url": "hubspot.com",
                        "rank": 916,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hubspot.com"
                    },
                    {
                        "url": "bedbathandbeyond.com",
                        "rank": 1012,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/bedbathandbeyond.com"
                    },
                    {
                        "url": "haberturk.com",
                        "rank": 1024,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/haberturk.com"
                    },
                    {
                        "url": "stanford.edu",
                        "rank": 1051,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/stanford.edu"
                    },
                    {
                        "url": "korabia.com",
                        "rank": 1052,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/korabia.com"
                    },
                    {
                        "url": "axisbank.com",
                        "rank": 1096,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/axisbank.com"
                    },
                    {
                        "url": "tagged.com",
                        "rank": 1106,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tagged.com"
                    },
                    {
                        "url": "today.com",
                        "rank": 1138,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/today.com"
                    },
                    {
                        "url": "entrepreneur.com",
                        "rank": 1141,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/entrepreneur.com"
                    },
                    {
                        "url": "iherb.com",
                        "rank": 1167,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/iherb.com"
                    },
                    {
                        "url": "cvs.com",
                        "rank": 1169,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cvs.com"
                    },
                    {
                        "url": "tim.it",
                        "rank": 1247,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/tim.it"
                    },
                    {
                        "url": "teamviewer.com",
                        "rank": 1253,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/teamviewer.com"
                    },
                    {
                        "url": "cdc.gov",
                        "rank": 1259,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cdc.gov"
                    },
                    {
                        "url": "hibapress.com",
                        "rank": 1299,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hibapress.com"
                    },
                    {
                        "url": "cars.com",
                        "rank": 1322,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/cars.com"
                    },
                    {
                        "url": "folha.uol.com.br",
                        "rank": 1336,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/folha.uol.com.br"
                    },
                    {
                        "url": "turbobit.net",
                        "rank": 1342,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/turbobit.net"
                    },
                    {
                        "url": "ranker.com",
                        "rank": 1448,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ranker.com"
                    },
                    {
                        "url": "abc.go.com",
                        "rank": 1491,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/abc.go.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "sammydress.com",
                        "rank": 1509,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sammydress.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "evite.com",
                        "rank": 1578,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/evite.com"
                    },
                    {
                        "url": "earthlink.net",
                        "rank": 1630,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/earthlink.net"
                    },
                    {
                        "url": "payoneer.com",
                        "rank": 1641,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/payoneer.com"
                    },
                    {
                        "url": "emirates.com",
                        "rank": 1691,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/emirates.com"
                    },
                    {
                        "url": "radikal.com.tr",
                        "rank": 1723,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/radikal.com.tr",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "layalina.com",
                        "rank": 1725,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/layalina.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "acer.com",
                        "rank": 1761,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/acer.com"
                    },
                    {
                        "url": "origin.com",
                        "rank": 1764,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/origin.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "recruit.co.jp",
                        "rank": 1791,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/recruit.co.jp",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "lotterypost.com",
                        "rank": 1806,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lotterypost.com"
                    },
                    {
                        "url": "ibtimes.co.uk",
                        "rank": 1838,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ibtimes.co.uk",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "shine.com",
                        "rank": 1851,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/shine.com"
                    },
                    {
                        "url": "zoopla.co.uk",
                        "rank": 1955,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/zoopla.co.uk"
                    },
                    {
                        "url": "starwoodhotels.com",
                        "rank": 1958,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/starwoodhotels.com"
                    },
                    {
                        "url": "kenh14.vn",
                        "rank": 1962,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kenh14.vn",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com"
                    },
                    {
                        "url": "rimanews.com",
                        "rank": 1989,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rimanews.com"
                    },
                    {
                        "url": "qiwi.com",
                        "rank": 2063,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/qiwi.com"
                    },
                    {
                        "url": "autoblog.com",
                        "rank": 2124,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/autoblog.com",
                        "lib": [
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "llbean.com",
                        "rank": 2148,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/llbean.com"
                    },
                    {
                        "url": "yalla-shoot.com",
                        "rank": 2166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/yalla-shoot.com",
                        "lib": [
                            "$.mobile"
                        ]
                    }
                ]
            },
            "builtWith": "true",
            "dist": "https://code.jquery.com/mobile/git/jquery.mobile-git.js",
            "description": "A unified, HTML5-based user interface system for all popular mobile device platforms, built on the rock-solid jQuery and jQuery UI foundation. Its lightweight code is built with progressive enhancement, and has a flexible, easily themeable design.",
            "logo": "images/mobile.svg",
            "currentWork": [
                "Leading all aspects of the project",
                "Re-writing declaritive initilization as a stand alone module",
                "improving testing",
                "porting widgets to / from jQuery UI",
                "re-writing navigation."
            ]
        },
        "jquery-ui": {
            "name": "jQuery UI",
            "repoName": "[ 'jquery-ui' ]",
            "role": "Team Member",
            "links": {
                "github": "https://github.com/jquery/jquery-ui",
                "issues": "http://bugs.jqueryui.com",
                "website": "http://jqueryui.com",
                "api": "http://api.jqueryui.com",
                "irc": "#jqueryui-dev",
                "demos": "http://jqueryui.com/demos/"
            },
            "libScore": {
                "name": "$.ui",
                "sites": [
                    {
                        "url": "pinterest.com",
                        "rank": 31,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "paypal.com",
                        "rank": 38,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/paypal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imgur.com",
                        "rank": 47,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imgur.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imdb.com",
                        "rank": 53,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imdb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rakuten.co.jp",
                        "rank": 64,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pornhub.com",
                        "rank": 65,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kat.cr",
                        "rank": 76,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kat.cr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "dropbox.com",
                        "rank": 87,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jd.com",
                        "rank": 90,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jd.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twitch.tv",
                        "rank": 121,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bankofamerica.com",
                        "rank": 127,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bankofamerica.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "adf.ly",
                        "rank": 132,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/adf.ly",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "huffingtonpost.com",
                        "rank": 134,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/huffingtonpost.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bilibili.com",
                        "rank": 142,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bilibili.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "globo.com",
                        "rank": 150,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/globo.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "intuit.com",
                        "rank": 166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/intuit.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "naver.jp",
                        "rank": 169,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/naver.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "snapdeal.com",
                        "rank": 171,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/snapdeal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taringa.net",
                        "rank": 172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taringa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "redtube.com",
                        "rank": 181,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redtube.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hclips.com",
                        "rank": 196,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hclips.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "9gag.com",
                        "rank": 201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/9gag.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "daum.net",
                        "rank": 205,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/daum.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "target.com",
                        "rank": 206,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/target.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zol.com.cn",
                        "rank": 208,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zol.com.cn",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bestbuy.com",
                        "rank": 227,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bestbuy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejournal.com",
                        "rank": 232,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejournal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nametests.com",
                        "rank": 238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nametests.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "deviantart.com",
                        "rank": 251,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deviantart.com",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "slickdeals.net",
                        "rank": 267,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/slickdeals.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "weebly.com",
                        "rank": 273,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/weebly.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "ruten.com.tw",
                        "rank": 279,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ruten.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "t-online.de",
                        "rank": 282,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/t-online.de",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "pandora.com",
                        "rank": 284,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pandora.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "popcash.net",
                        "rank": 290,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/popcash.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "liputan6.com",
                        "rank": 292,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/liputan6.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "1905.com",
                        "rank": 297,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/1905.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kaskus.co.id",
                        "rank": 303,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaskus.co.id",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "eksisozluk.com",
                        "rank": 309,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eksisozluk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hp.com",
                        "rank": 313,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "telegraph.co.uk",
                        "rank": 318,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/telegraph.co.uk",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sourceforge.net",
                        "rank": 321,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sourceforge.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru"
                    },
                    {
                        "url": "mashable.com",
                        "rank": 329,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mashable.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thesaurus.com",
                        "rank": 330,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thesaurus.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mercadolivre.com.br",
                        "rank": 335,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mercadolivre.com.br",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "doublepimp.com",
                        "rank": 341,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/doublepimp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ltn.com.tw",
                        "rank": 342,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ltn.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zendesk.com",
                        "rank": 354,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zendesk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "att.com",
                        "rank": 357,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/att.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sabah.com.tr",
                        "rank": 359,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sabah.com.tr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejasmin.com",
                        "rank": 366,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejasmin.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sahibinden.com",
                        "rank": 369,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sahibinden.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr"
                    },
                    {
                        "url": "kinogo.co",
                        "rank": 373,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinogo.co",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pinimg.com",
                        "rank": 378,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinimg.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "giphy.com",
                        "rank": 379,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/giphy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "irctc.co.in",
                        "rank": 386,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/irctc.co.in",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "macys.com",
                        "rank": 390,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/macys.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "blackboard.com",
                        "rank": 392,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/blackboard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "varzesh3.com",
                        "rank": 397,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/varzesh3.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kinopoisk.ru",
                        "rank": 401,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinopoisk.ru",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "oracle.com",
                        "rank": 403,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/oracle.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taleo.net",
                        "rank": 408,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taleo.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "citi.com",
                        "rank": 410,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/citi.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "reference.com",
                        "rank": 415,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/reference.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "digikala.com",
                        "rank": 417,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/digikala.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "spiegel.de",
                        "rank": 420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/spiegel.de",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "newegg.com",
                        "rank": 424,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/newegg.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "quikr.com",
                        "rank": 425,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/quikr.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airbnb.com",
                        "rank": 426,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airbnb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com"
                    },
                    {
                        "url": "infusionsoft.com",
                        "rank": 439,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infusionsoft.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "4shared.com",
                        "rank": 443,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/4shared.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bhaskar.com",
                        "rank": 450,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bhaskar.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tabelog.com",
                        "rank": 452,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tabelog.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com"
                    },
                    {
                        "url": "shopclues.com",
                        "rank": 457,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/shopclues.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gearbest.com",
                        "rank": 466,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/gearbest.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "meetup.com",
                        "rank": 469,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/meetup.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wunderground.com",
                        "rank": 470,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wunderground.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "urdupoint.com",
                        "rank": 474,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/urdupoint.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bleacherreport.com",
                        "rank": 475,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bleacherreport.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ero-advertising.com",
                        "rank": 499,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ero-advertising.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "freepik.com",
                        "rank": 511,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/freepik.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "udemy.com",
                        "rank": 512,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/udemy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zippyshare.com",
                        "rank": 515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zippyshare.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "discovercard.com",
                        "rank": 516,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/discovercard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nba.com",
                        "rank": 520,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nba.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "trulia.com",
                        "rank": 532,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/trulia.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xda-developers.com",
                        "rank": 543,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xda-developers.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "costco.com",
                        "rank": 544,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/costco.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kickstarter.com",
                        "rank": 545,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kickstarter.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "seesaa.net",
                        "rank": 546,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/seesaa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wayfair.com",
                        "rank": 553,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wayfair.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gamefaqs.com",
                        "rank": 559,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gamefaqs.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    }
                ],
                "short": [
                    {
                        "url": "pinterest.com",
                        "rank": 31,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinterest.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "paypal.com",
                        "rank": 38,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/paypal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imgur.com",
                        "rank": 47,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imgur.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "imdb.com",
                        "rank": 53,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/imdb.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rakuten.co.jp",
                        "rank": 64,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rakuten.co.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pornhub.com",
                        "rank": 65,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pornhub.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "tianya.cn",
                        "rank": 69,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tianya.cn",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "kat.cr",
                        "rank": 76,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kat.cr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "dropbox.com",
                        "rank": 87,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dropbox.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jd.com",
                        "rank": 90,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jd.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twitch.tv",
                        "rank": 121,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/twitch.tv",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bankofamerica.com",
                        "rank": 127,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bankofamerica.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "adf.ly",
                        "rank": 132,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/adf.ly",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "huffingtonpost.com",
                        "rank": 134,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/huffingtonpost.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bilibili.com",
                        "rank": 142,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bilibili.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "globo.com",
                        "rank": 150,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/globo.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "intuit.com",
                        "rank": 166,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/intuit.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "naver.jp",
                        "rank": 169,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/naver.jp",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "snapdeal.com",
                        "rank": 171,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/snapdeal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taringa.net",
                        "rank": 172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taringa.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "redtube.com",
                        "rank": 181,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redtube.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hclips.com",
                        "rank": 196,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hclips.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "9gag.com",
                        "rank": 201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/9gag.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "daum.net",
                        "rank": 205,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/daum.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "target.com",
                        "rank": 206,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/target.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zol.com.cn",
                        "rank": 208,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zol.com.cn",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "bestbuy.com",
                        "rank": 227,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bestbuy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejournal.com",
                        "rank": 232,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejournal.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nametests.com",
                        "rank": 238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nametests.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "deviantart.com",
                        "rank": 251,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deviantart.com",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "businessinsider.com",
                        "rank": 252,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/businessinsider.com",
                        "lib": [
                            "$.ui",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "slickdeals.net",
                        "rank": 267,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/slickdeals.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "weebly.com",
                        "rank": 273,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/weebly.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "xuite.net",
                        "rank": 275,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/xuite.net",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "ruten.com.tw",
                        "rank": 279,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ruten.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "t-online.de",
                        "rank": 282,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/t-online.de",
                        "lib": [
                            "$.ui"
                        ]
                    },
                    {
                        "url": "pandora.com",
                        "rank": 284,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pandora.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "popcash.net",
                        "rank": 290,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/popcash.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "liputan6.com",
                        "rank": 292,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/liputan6.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "1905.com",
                        "rank": 297,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/1905.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kaskus.co.id",
                        "rank": 303,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaskus.co.id",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ups.com",
                        "rank": 305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/ups.com",
                        "lib": [
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "eksisozluk.com",
                        "rank": 309,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eksisozluk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hp.com",
                        "rank": 313,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "telegraph.co.uk",
                        "rank": 318,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/telegraph.co.uk",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sourceforge.net",
                        "rank": 321,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sourceforge.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru"
                    },
                    {
                        "url": "mashable.com",
                        "rank": 329,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mashable.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thesaurus.com",
                        "rank": 330,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thesaurus.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mercadolivre.com.br",
                        "rank": 335,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mercadolivre.com.br",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "doublepimp.com",
                        "rank": 341,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/doublepimp.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ltn.com.tw",
                        "rank": 342,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ltn.com.tw",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "zendesk.com",
                        "rank": 354,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zendesk.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "att.com",
                        "rank": 357,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/att.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sabah.com.tr",
                        "rank": 359,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sabah.com.tr",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "livejasmin.com",
                        "rank": 366,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/livejasmin.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sahibinden.com",
                        "rank": 369,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sahibinden.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr"
                    },
                    {
                        "url": "kinogo.co",
                        "rank": 373,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinogo.co",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "pinimg.com",
                        "rank": 378,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/pinimg.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "giphy.com",
                        "rank": 379,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/giphy.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "irctc.co.in",
                        "rank": 386,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/irctc.co.in",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "macys.com",
                        "rank": 390,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/macys.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "blackboard.com",
                        "rank": 392,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/blackboard.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "varzesh3.com",
                        "rank": 397,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/varzesh3.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "kinopoisk.ru",
                        "rank": 401,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kinopoisk.ru",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "oracle.com",
                        "rank": 403,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/oracle.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "taleo.net",
                        "rank": 408,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/taleo.net",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "citi.com",
                        "rank": 410,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/citi.com",
                        "lib": [
                            "$.ui",
                            "jQuery"
                        ]
                    }
                ]
            },
            "builtWith": true,
            "description": "jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.",
            "dist": "https://code.jquery.com/ui/jquery-ui-git.js",
            "currentWork": [
                "Adding new option / feature to all widgets \"classes\" which allows customization of the classes on any element in a widget",
                "Adding checkboxradio widget",
                "Adding controlgroup widget",
                "Removing portions of jQuery core dependency",
                "Improving testing",
                "Converting demos to use AMD"
            ],
            "logo": "images/ui.svg"
        },
        "hammer.js": {
            "name": "Hammer.js",
            "repoName": "[ 'hammer.js' ]",
            "role": "Project Lead / Organization Owner",
            "links": {
                "github": "https://github.com/hammerjs/hammer.js",
                "issues": "https://github.com/hammerjs/hammer.js/issues",
                "website": "http://hammerjs.github.io/",
                "api": "http://hammerjs.github.io/getting-started/",
                "irc": "Comming Soon",
                "demos": "http://hammerjs.github.io/"
            },
            "libScore": {
                "name": "Hammer",
                "sites": [
                    {
                        "url": "xhamster.com",
                        "rank": 92,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                        "lib": [
                            "Hammer",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "dailymail.co.uk",
                        "rank": 135,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dailymail.co.uk",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "walmart.com",
                        "rank": 144,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/walmart.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "washingtonpost.com",
                        "rank": 182,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/washingtonpost.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rambler.ru",
                        "rank": 259,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rambler.ru",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "capitalone.com",
                        "rank": 269,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/capitalone.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "homedepot.com",
                        "rank": 270,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/homedepot.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "buzzlie.com",
                        "rank": 391,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/buzzlie.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "expedia.com",
                        "rank": 428,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/expedia.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "repubblica.it",
                        "rank": 481,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/repubblica.it",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "free.fr",
                        "rank": 487,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/free.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "theverge.com",
                        "rank": 510,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/theverge.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jimdo.com",
                        "rank": 556,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jimdo.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "independent.co.uk",
                        "rank": 561,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/independent.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "asana.com",
                        "rank": 663,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/asana.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twoo.com",
                        "rank": 686,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/twoo.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "cnbc.com",
                        "rank": 689,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sears.com",
                        "rank": 720,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sears.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "bodybuilding.com",
                        "rank": 735,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bodybuilding.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wattpad.com",
                        "rank": 767,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wattpad.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "webex.com",
                        "rank": 779,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/webex.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thedailybeast.com",
                        "rank": 824,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thedailybeast.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wired.com",
                        "rank": 828,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wired.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "vox.com",
                        "rank": 872,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vox.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "whitepages.com",
                        "rank": 876,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/whitepages.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "android.com",
                        "rank": 881,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/android.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "hilton.com",
                        "rank": 885,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hilton.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lefigaro.fr",
                        "rank": 957,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lefigaro.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "usnews.com",
                        "rank": 1037,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/usnews.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gumtree.com",
                        "rank": 1039,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gumtree.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lloydsbank.co.uk",
                        "rank": 1119,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lloydsbank.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jw.org",
                        "rank": 1158,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jw.org",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "samsclub.com",
                        "rank": 1159,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/samsclub.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "foxsports.com",
                        "rank": 1193,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/foxsports.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "littlethings.com",
                        "rank": 1201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/littlethings.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mail.com",
                        "rank": 1294,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mail.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "postbank.de",
                        "rank": 1362,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/postbank.de",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "msnbc.com",
                        "rank": 1364,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/msnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airasia.com",
                        "rank": 1418,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airasia.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "linternaute.com",
                        "rank": 1420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/linternaute.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "lightinthebox.com",
                        "rank": 1421,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lightinthebox.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ravelry.com",
                        "rank": 1431,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ravelry.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "greatergood.com",
                        "rank": 1461,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/greatergood.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "orbitz.com",
                        "rank": 1515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/orbitz.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nbc.com",
                        "rank": 1537,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nbc.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ubi.com",
                        "rank": 1584,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ubi.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "bsnl.in",
                        "rank": 1602,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bsnl.in",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "worldstarhiphop.com",
                        "rank": 1620,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/worldstarhiphop.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "thepennyhoarder.com",
                        "rank": 1623,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thepennyhoarder.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "careerbuilder.com",
                        "rank": 1647,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/careerbuilder.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "infobae.com",
                        "rank": 1672,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infobae.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "travelocity.com",
                        "rank": 1709,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/travelocity.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "kaspersky.com",
                        "rank": 1720,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaspersky.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nu.nl",
                        "rank": 1722,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nu.nl",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "cosmopolitan.com",
                        "rank": 1726,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cosmopolitan.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "vagalume.com.br",
                        "rank": 1734,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vagalume.com.br",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "goodhousekeeping.com",
                        "rank": 1746,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/goodhousekeeping.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "esquire.com",
                        "rank": 1770,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/esquire.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "easyjet.com",
                        "rank": 1784,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/easyjet.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "kmart.com",
                        "rank": 1902,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kmart.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elconfidencial.com",
                        "rank": 1915,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elconfidencial.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "rappler.com",
                        "rank": 1934,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rappler.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "tilestwra.com",
                        "rank": 1949,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tilestwra.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "trademe.co.nz",
                        "rank": 1954,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/trademe.co.nz",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "epicurious.com",
                        "rank": 1963,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/epicurious.com",
                        "lib": [
                            "Hammer",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "urbanoutfitters.com",
                        "rank": 2006,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/urbanoutfitters.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "zaman.com.tr",
                        "rank": 2023,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/zaman.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sap.com",
                        "rank": 2026,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sap.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "journaldesfemmes.com",
                        "rank": 2048,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/journaldesfemmes.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "dickssportinggoods.com",
                        "rank": 2074,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/dickssportinggoods.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "history.com",
                        "rank": 2094,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/history.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "sonyentertainmentnetwork.com",
                        "rank": 2129,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sonyentertainmentnetwork.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "christian-dogma.com",
                        "rank": 2163,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/christian-dogma.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "charter.net",
                        "rank": 2172,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/charter.net",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "gilt.com",
                        "rank": 2179,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gilt.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ford.com",
                        "rank": 2185,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ford.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "videoyoum7.com",
                        "rank": 2194,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/videoyoum7.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "redbubble.com",
                        "rank": 2238,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/redbubble.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "vip.com",
                        "rank": 2305,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vip.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "delfi.lt",
                        "rank": 2336,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/delfi.lt",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "deutsche-bank.de",
                        "rank": 2367,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/deutsche-bank.de",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sonymobile.com",
                        "rank": 2411,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sonymobile.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "extra.com.br",
                        "rank": 2431,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/extra.com.br",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "letras.mus.br",
                        "rank": 2434,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/letras.mus.br",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "polygon.com",
                        "rank": 2445,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/polygon.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elle.com",
                        "rank": 2464,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elle.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "tass.ru",
                        "rank": 2493,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/tass.ru",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sheknows.com",
                        "rank": 2497,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sheknows.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "allmusic.com",
                        "rank": 2533,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/allmusic.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "mediamarkt.de",
                        "rank": 2552,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mediamarkt.de",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sbrf.ru",
                        "rank": 2583,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sbrf.ru",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "boursorama.com",
                        "rank": 2617,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/boursorama.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "sony.com",
                        "rank": 2644,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sony.com",
                        "lib": [
                            "Hammer",
                            "$.mobile"
                        ]
                    }
                ],
                "short": [
                    {
                        "url": "xhamster.com",
                        "rank": 92,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/xhamster.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "nytimes.com",
                        "rank": 96,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/nytimes.com",
                        "lib": [
                            "Hammer",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "dailymail.co.uk",
                        "rank": 135,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/dailymail.co.uk",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "walmart.com",
                        "rank": 144,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/walmart.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "washingtonpost.com",
                        "rank": 182,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/washingtonpost.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "rambler.ru",
                        "rank": 259,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/rambler.ru",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "capitalone.com",
                        "rank": 269,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/capitalone.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "homedepot.com",
                        "rank": 270,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/homedepot.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "sberbank.ru",
                        "rank": 328,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/sberbank.ru",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "hurriyet.com.tr",
                        "rank": 370,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hurriyet.com.tr",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "buzzlie.com",
                        "rank": 391,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/buzzlie.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "expedia.com",
                        "rank": 428,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/expedia.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "playstation.com",
                        "rank": 436,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/playstation.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lowes.com",
                        "rank": 453,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lowes.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "repubblica.it",
                        "rank": 481,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/repubblica.it",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "free.fr",
                        "rank": 487,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/free.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "theverge.com",
                        "rank": 510,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/theverge.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jimdo.com",
                        "rank": 556,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jimdo.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "independent.co.uk",
                        "rank": 561,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/independent.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "ensonhaber.com",
                        "rank": 630,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ensonhaber.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "asana.com",
                        "rank": 663,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/asana.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "twoo.com",
                        "rank": 686,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/twoo.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "cnbc.com",
                        "rank": 689,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "sears.com",
                        "rank": 720,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/sears.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "eonline.com",
                        "rank": 731,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/eonline.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery",
                            "$.mobile"
                        ]
                    },
                    {
                        "url": "bodybuilding.com",
                        "rank": 735,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bodybuilding.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wattpad.com",
                        "rank": 767,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wattpad.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "webex.com",
                        "rank": 779,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/webex.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "thedailybeast.com",
                        "rank": 824,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thedailybeast.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "wired.com",
                        "rank": 828,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/wired.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "vox.com",
                        "rank": 872,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/vox.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "whitepages.com",
                        "rank": 876,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/whitepages.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "android.com",
                        "rank": 881,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/android.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "hilton.com",
                        "rank": 885,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/hilton.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lefigaro.fr",
                        "rank": 957,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lefigaro.fr",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "usnews.com",
                        "rank": 1037,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/usnews.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "gumtree.com",
                        "rank": 1039,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/gumtree.com",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "lloydsbank.co.uk",
                        "rank": 1119,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/lloydsbank.co.uk",
                        "lib": [
                            "Hammer",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "jw.org",
                        "rank": 1158,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/jw.org",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "samsclub.com",
                        "rank": 1159,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/samsclub.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "foxsports.com",
                        "rank": 1193,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/foxsports.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "littlethings.com",
                        "rank": 1201,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/littlethings.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "mail.com",
                        "rank": 1294,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/mail.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "postbank.de",
                        "rank": 1362,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/postbank.de",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "msnbc.com",
                        "rank": 1364,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/msnbc.com",
                        "lib": [
                            "Hammer",
                            "$.ui",
                            "jQuery"
                        ]
                    },
                    {
                        "url": "airasia.com",
                        "rank": 1418,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/airasia.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "linternaute.com",
                        "rank": 1420,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/linternaute.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "lightinthebox.com",
                        "rank": 1421,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/lightinthebox.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ravelry.com",
                        "rank": 1431,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ravelry.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "greatergood.com",
                        "rank": 1461,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/greatergood.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "orbitz.com",
                        "rank": 1515,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/orbitz.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nbc.com",
                        "rank": 1537,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nbc.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "ubi.com",
                        "rank": 1584,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/ubi.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "bsnl.in",
                        "rank": 1602,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/bsnl.in",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "worldstarhiphop.com",
                        "rank": 1620,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/worldstarhiphop.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "thepennyhoarder.com",
                        "rank": 1623,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/thepennyhoarder.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "careerbuilder.com",
                        "rank": 1647,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/careerbuilder.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "infobae.com",
                        "rank": 1672,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/infobae.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "travelocity.com",
                        "rank": 1709,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/travelocity.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "kaspersky.com",
                        "rank": 1720,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/kaspersky.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "nu.nl",
                        "rank": 1722,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/nu.nl",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "cosmopolitan.com",
                        "rank": 1726,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/cosmopolitan.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "vagalume.com.br",
                        "rank": 1734,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/vagalume.com.br",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "goodhousekeeping.com",
                        "rank": 1746,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/goodhousekeeping.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "esquire.com",
                        "rank": 1770,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/esquire.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "easyjet.com",
                        "rank": 1784,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/easyjet.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "kmart.com",
                        "rank": 1902,
                        "platform": "mobile",
                        "resource": "http://api.libscore.com/v1/sites/kmart.com",
                        "lib": [
                            "Hammer"
                        ]
                    },
                    {
                        "url": "elconfidencial.com",
                        "rank": 1915,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/elconfidencial.com",
                        "lib": [
                            "Hammer",
                            "$.ui"
                        ]
                    },
                    {
                        "url": "rappler.com",
                        "rank": 1934,
                        "platform": "desktop",
                        "resource": "http://api.libscore.com/v1/sites/rappler.com",
                        "lib": [
                            "Hammer"
                        ]
                    }
                ]
            },
            "builtWith": true,
            "description": "Hammer is a open-source library that can recognize gestures made by touch, mouse and pointerEvents. It doesn't have any dependencies, and it's small, only 3.96 kB minified + gzipped!",
            "dist": "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.4/hammer.js",
            "currentWork": [
                "Building Team",
                "Setting up organization",
                "Tranisition project from personal project to a community project",
                "Converting to a modular build",
                "Triage"
            ],
            "logo": "https://avatars2.githubusercontent.com/u/7997161?v=3&s=200"
        },
        "css-chassis": {
            "name": "Chassis",
            "role": "Co-Creator / Team Member",
            "repoName": "[ 'css-chassis'' ]",
            "links": {
                "github": "https://github.com/jquery/css-chassis",
                "issues": "https://github.com/jquery/css-chassis/issues",
                "website": "http://css-chassis.com",
                "api": "Coming Soon",
                "demos": "http://view.css-chassis.com/master/demos",
                "irc": "#css-chassis"
            },
            "description": "Chassis is an attempt at creating open standards designed for CSS libraries, JavaScript UI libraries, and web developers in general. This project will define standards for markup and class names for common widgets and patterns, as well as an implementation of those standards.",
            "logo": "images/chassis.svg",
            "currentWork": [
                "Adding and improving automated performance testing for Chassis",
                "Automated component comparison for testing the relative performace of componenets from different libraries",
                "Developing node based build system for use in custom automated builds in other projects"
            ]
        },
        "pep": {
            "name": "PEP: PointerEvents Polyfill",
            "role": "Team Member",
            "repoName": ".pep",
            "links": {
                "github": "https://github.com/jquery/pep",
                "issues": "https://github.com/jquery/pep/issues",
                "demos": "Coming Soon",
                "api": "https://github.com/jquery/pep",
                "irc": "#pep"
            },
            "description": "PointerEvents Polyfill: a unified event system for the web platform http://www.w3.org/TR/pointerevents/",
            "dist": "http://code.jquery.com/pep/0.3.0/pep.js",
            "logo": "images/pep.png",
            "currentWork": [
                "Updating code to new style guide",
                "Issue triage",
                "Improving automated testing"
            ]
        },
        "jquery-infrastructure": {
            "name": "jQuery Infrastructure",
            "repoName": "[ 'jquery-infrastructure' ]",
            "role": "Team Member",
            "links": {
                "github": "Private",
                "issues": "Private",
                "demos": "none",
                "api": "none",
                "website": "http://jquery.org",
                "irc": "#jquery-infrastructure"
            },
            "description": "Team responsible for all infrastructure of for the jQuery Foundations projects",
            "logo": "images/infrastructure.svg",
            "currentWork": [
                "Maintaining jQuery UI and Mobile infrastructure",
                "Setting up new infrastructure for Chassis Project",
                "Working on automated testing infrastructure"
            ]
        },
        "jquery-content": {
            "name": "jQuery Content",
            "role": "Team Member",
            "repoName": "[ 'jquery-content' ]",
            "links": {
                "github": "https://github.com/jquery/jquery-content",
                "issues": "https://github.com/jquery/jquery-content/issues",
                "website": "http://jquery.org",
                "demos": "none",
                "api": "none",
                "irc": "#jquery-content"
            },
            "description": "Team responsible for all content of for the jQuery Foundations websites",
            "logo": "images/content.png",
            "currentWork": [
                "Adding automated nightly testing of all websites using spider.js",
                "Creating on HTML validation tools"
            ]
        },
        "spider.js": {
            "name": "Spider.js",
            "role": "Creator",
            "repoName": "[ 'spider.js' ]",
            "links": {
                "github": "https://github.com/arschmitz/spider.js",
                "issues": "https://github.com/arschmitz/spider.js/issues",
                "api": "https://github.com/arschmitz/spider.js/",
                "demos": "none",
                "irc": "Ping me arschmitz "
            },
            "description": "A node module / CLI based on casper.js for crawling and checking websites for dead links, unnessasarry redirects, resource load errors and script erros",
            "dist": "https://raw.githubusercontent.com/arschmitz/spider.js/master/lib/tests.js",
            "logo": "images/spider-js.svg",
            "currentWork": [
                "Preparing 1.0 release",
                "Adding Slimer.js support",
                "Improving error output"
            ]
        },
        "jqueryui-bootstrap-adapter": {
            "name": "jQuery UI Bootstrap Adapter",
            "role": "Creator",
            "repoName": "[ 'jqueryui-bootstrap-adapter' ]",
            "links": {
                "github": "https://github.com/arschmitz/jqueryui-bootstrap-adapter",
                "issues": "https://github.com/arschmitz/jqueryui-bootstrap-adapter/issues",
                "website": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html",
                "irc": "Ping me arschmitz ",
                "api": "https://rawgit.com/arschmitz/jqueryui-bootstrap-adapter/master/index.html"
            },
            "description": "A set of default options and customizations for jQuery UI to use twitter bootstrap css",
            "logo": "images/bootstrapAdapter.svg",
            "currentWork": [
                "Porting jQuery Mobile as well",
                "Adding components without a direct coralary in both libraries",
                "Preparing 1.0 to conincide with jQuery UI 1.12 Release"
            ]
        }
    },
    "rants": {
        "professional": {
            "name": "professional",
            "title": "When i became a professional developer",
            "definition": {
                "word": "pro·fes·sion·al",
                "pronunciation": "prəˈfeSH(ə)n(ə)l/",
                "partOfSpeech": "adjective",
                "shortDefinition": "(of a person) engaged in a specified activity as one's main paid occupation rather than as a pastime.",
                "definition": [
                    "(of a person) engaged in a specified activity as one's main paid occupation rather than as a pastime."
                ]
            },
            "quote": {
                "body": "Who is a professional? A professional is someone who has a combination of competence, confidence and belief. A water diviner is a professional. A traditional midwife is a professional. A traditional bone setter is a professional. These are professionals all over the world. You find them in any inaccessible village around the world.",
                "sitation": "Sanjit \"Bunker\" Roy, Founder the Barefoot College"
            },
            "rant": [
                "I started making websites very very early on. My mother was a graphic artist and my step father was a network administrator. I learned very young to do graphics arts from my mom. She worked in the packaging industry and worked from home. Because of this i had access to the full suites of professional graphics tools like freehand, illustrator, and photoshop. My earliest ventures into graphics were designing stickers and t-shirts for friends.",
                "We got the internet as soon as there was service available in the rural area in which we lived. I remember the first time i used the internet it was purely text based in a DOS like prompt on the 386 my step father had just built. It was not long before i was buying books and teaching myself how to write HTML. Meanwhile I had also started to teach myself QBasic with a friend of mine.",
                "Websites at this time lacked a lot though in the way of interactivity and the wow factor a ~10 year old wanted. I remember all this changing when the first version of flash came out. IT meant I could do all the cool interactive things I had previously only dreamed about. I immediately dove headfirst into making web pages and animations with the awesome new software. It was not long after this i made my first webpage for money. It was a website for a my art teacher. I remember spending night after night trying to get everything just right.",
                "I continued making webpages for school assignments random people who happened to ask, and for myself just for fun for many years. In highschool I learned C++ and wrote it for the remainder of my time in highschool. I decided to go to college for physics, with minors in chemistry and math. At this point  Web Development, and or programming as a career never even really crossed my mind. To me these were things i did for fun or to get something done but not a career something i could see myself doing everyday long term.",
                "It was still a pastime…",
                "To pay my way through college i became a chef and a baker. After college with no real job prospects I continued on this path while working part time with a small graphics house doing commercial graphics ( a LOT of bread bags ). I did all the web development here but it was just small boring static sites and didn’t really interest me. It was still really just something to do and earn some extra money though. After my restaurant closed i tried to go full time with the graphics and web dev but it didn’t last long before the economy turned and the company could no longer afford my services.",
                "At this point i took a job as a shuttle and parts dispatcher with a local chain of car dealerships just to get by. When i started here it was a pen and paper job. The only thing that was ever done to keep track was a photocopied piece of graph paper. With a whole lot of time on my hands i decided to improve processes and made a spreadsheet with lots of macros and built in features to track and keep records of all deliveries and drivers. I also sat near the body shop which did vinyl car graphics and signs. To help pass the time i started to work helping designing the graphics. It was not long before all of this work got the attention of the GM of the company. After only 3 months on the job i received a message from the GM that he wanted to talk to me. He was not happy with the company's websites and wanted someone to lead the company's internet strategy and based on my work so far and previous experience he wanted to know if i would be interested in the position. ",
                "When i started this new position it was just to maintain existing sites through a series of builders. However as i talked to the GM and other managers it became clear their needs were much more substantial. For the first time i needed to build real products and real customer facing websites that actually required more than just basic HTML and CSS they needed CMS, inventory management, sales integration and much more. As i began to work on and deploy these new products i was always looking for the next thing to improve and work on. As i worked i learned to love the technologies i was using unlike C++ which constituted the bulk of my real programming experience, PHP was an absolutely joy to program in. I loved how i could quickly and easily make actual useful websites.  As interactivity became more important i even learned to embrace JavaScript which i had disdained and avoided when possible for so many years. It was at this point which i realized i had finally found my true calling and what i loved and wanted to do as my paid occupation. It just happened i had been doing it all along.",
                "This is when I became a professional."
            ]
        },
        "accessabile": {
            "definition": {
                "word": "ac·ces·si·ble",
                "pronunciation": "ăk-sĕs′ə-bəl",
                "partOfSpeech": "adjective",
                "shortDefinition": "Capable of being used or seen",
                "fullDefinition": [
                    "Providing access",
                    "Capable of being reached",
                    "Capable of being used or seen",
                    "Capable of being understood or appreciated"
                ]
            },
            "name": "accessabile",
            "title": "A moment when i got to see how my work on accessability helps real people",
            "quote": {
                "body": "“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”",
                "sitation": "Tim Berners-Lee, W3C Director and inventor of the World Wide Web"
            },
            "rant": [
                "I became passionate about accessibility early on, believing that everyone deserves equal access to the internet and the wonderful things, and wealth of information which it has to offer. However for me there was a turning point where it went from something i was conscious of to something i preached about.",
                "I was in washington D.C. for a summit on mobile accessibility representing the jQuery Foundation. After the conference was over I was back at my hotel enjoying the hot tub after swimming some laps, when a couple asked if i minded if they joined me. I said no and they began some small talk about how the husband was there for a banking seminar of some sort, and how she was an accountant and was just along for the trip. I told them about how i was a developer that worked mostly on mobile and i was there for an accessibility conference. This immediately peaked her interest.",
                "She began to tell me how she started losing  her sight in her 20's. She told me how she still had some vision, so she could walk around and get by fine. She then described her difficulties seeing computer screens, and how she has had needed to learn to use a screen screen reader and rely on the keyboard. She also told me how she was stuck using an old cell phone with physical buttons and no features, because of her sight she needed to be able to memorize the buttons. She then asked me about if i knew any good options for her.",
                "I started to tell her about the iPhone and how it had a built in screen reader, Voiceover, and how part of my job and why i was there, was to work with experts, on ways to make websites especially mobile ones more accessible. She said she was familiar with voiceover for mac but had no idea they had anything like that for phones. In Fact her husband already had an iPhone with them.She got out of the pool dried off and ran upstairs to get their phone asking if i could meet them back in the lobby to show her how to use voiceover on the iPhone. I spent about 30 minutes with her showing her the basics of voice over on the iPhone.",
                "I will forever remember the look on her face when she used her husband's iPhone for the first time and realized she could have and use a smartphone too. After this she told me how she could not wait to get home and buy a new phone, and asked if she could have my email address if she had an questions in the future.",
                "That was 4 years ago, I only ever received one email from her a week later thanking me again for showing her how to use the iPhone and telling me she had already bought her own and could never thank me enough."
            ]
        },
        "hammer": {
            "definition": {
                "word": "hammer",
                "pronunciation": "[ham-er]",
                "partOfSpeech": "verb",
                "shortDefinition": "To form, construct, or make with or as if with a hammer; build by repeated, vigorous, or strenuous effort (often followed by out or together):",
                "fullDefinition": [
                    "to shape or ornament (metal or a metal object) by controlled and repeated blows of a hammer; beat out",
                    "to form, construct, or make with or as if with a hammer; build by repeated, vigorous, or strenuous effort (often followed by out or together)",
                    "to produce with or by force (often followed by out)",
                    "to pound or hit forcefully"
                ]
            },
            "quote": {
                "body": "A worker may be the hammer's master, but the hammer still prevails. A tool knows exactly how it is meant to be handled, while the user of the tool can only have an approximate idea.",
                "sitation": "Milan Kundera, Writer"
            },
            "name": "hammer",
            "title": "Hammering on open source",
            "rant": [
                "Through my work leading and working on jQuery Mobile as well as jQuery UI I have a big investment in supporting things like touch devices and gestures. As a result of this i have followed the evolutions of the touch and pointer events specs very closely and work closely with several of the members of these working groups giving feedback as well as with browser vendors. It was through all this work by myself and others in the jQuery foundation that we can to adopt the Polymer Pointer Events polyfill and create PEP the new pointer events polyfill from the jQuery Foundation in cooperation with people from Microsoft, Mozillas, and the Dojo Foundation and initial project contribution from google.",
                "Anyway the point of all of this is that i follow any libraries / developments in this space very closely as a result i have been aware of the Hammer.js library for quite some time. It a great really small library for adding cross browser gesture support to any webpage or hybrid app. During the development process for jQuery Mobile  1.5 we began the process of working on PEP and switching to use just pointer events ( this is not a part of 1.5 to be clear we just started ) as a result i also began thinking about adopting a more robust 3rd party gesture lib to replace jQuery Mobile's limited gesture support. This inevitably brought me to start looking at Hammer.js.",
                "At this exact same time the creator of Hammer.js got a new job and no longer had any time at all to maintain the project and decided ( completely unaware that i was looking at hammer already ) to reach out to me about the future of Hammer.js and if i would be interested in taking the project over. Due to his limited time we slowly continued these talks over the course of 6 months we worked out a plan to move forward and recently i took over leading the Hammer.js project.",
                "In taking over the project i am moving this to be a truly community led project and building a team of interested contributors. For open source projects to survive and thrive they need a community of interested contributors to lead the charge. When a project hinges on a single person it can never be viable long term. The nature of open source work and that its is generally done in peoples free time and without compensation. This fact means that when a project hinges on a single person any life change can mean the end of a great project.",
                "This is exactly what almost happened with Hammer.js when we finally worked out a plan there had not been a commit on the project in 8 months and the community was starting to walk away from a great project they loved and used, because the \"project was dead”, only the original creator had any access to close issues or land PRs and he was no where to be found. Thankfully for Hammer.js it was not too late and within 24 hours of my posting looking for team members we have had nearly a dozen offers of help! The future is looking very promising for Hammer.js with a new team leading development ( and hope that the original creator will soon have some more time to contribute again as well ).",
                "To all the creators and leaders of open source projects out there. Its important if you have a growing open source project to make sure that the project will survive in your absence, when you have contributors that hand around talk to them and form a team. It does not need to be anything formal, just a way of ensuring continued development is possible without you. We all have a responsibility to our projects and the wonderful open source community that supports them to make sure they can have a future."
            ]
        }
    },
    "resume": {
        "moniker": "AS",
        "contact": {
            "website": "http://arschmitz.me",
            "email": "arschmitz@gmail.com",
            "twitter": "alexrschmitz",
            "github": "arschmitz",
            "irc": "arschmitz",
            "linkedIn": "https://www.linkedin.com/in/arschmitz"
        },
        "name": {
            "initials": "AS",
            "first": "Alexander",
            "last": "Schmitz",
            "middle": "Ryan",
            "nick": "Alex"
        },
        "talks": {
            "asia": {
                "key": "asia",
                "basic": {
                    "eventName": "jQuery Asia",
                    "date": "November 2012",
                    "talkTitle": "jQuery Mobile: Common Pitfalls and Gotchas",
                    "slides": "http://presentations.arschmitz.me/pitfalls/#/",
                    "website": "https://www.facebook.com/JQueryConferenceAsia"
                },
                "video": "TXOFOqsrVuU",
                "description": "jQuery Mobile makes developing mobile apps and sites easy, semantic and familiar. However those familiar with typical desktop patterns may find themselves banging their heads against the wall when something \"simple\" doesn't work as expected. This session will go through some of the most common problems and pitfalls facing those jumping into jQuery Mobile. Areas covered will include injecting and enhancing dynamic content, working with enhanced form elements, refactoring for pageinit vs $(document).ready(), and the navigation model / page events."
            },
            "austin": {
                "key": "austin",
                "basic": {
                    "eventName": "jQuery Austin",
                    "date": "September 2013",
                    "website": "http://events.jquery.org/2013/austin/",
                    "talkTitle": "jQuery Mobile: Optimizing Performance",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
                },
                "video": "bZTOV-55ivM",
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
            },
            "sandiego": {
                "key": "sandiego",
                "basic": {
                    "eventName": "jQuery San Diego",
                    "date": "February 2014",
                    "website": "http://events.jquery.org/2014/san-diego/",
                    "talkTitle": "jQuery Mobile: Optimizing Performance",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
                },
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
                "video": "BNS4u086Lg8"
            },
            "europe": {
                "key": "europe",
                "basic": {
                    "eventName": "jQuery Europe",
                    "date": "March 2014",
                    "website": "http://www.gentics.com/jquery-eu-2014/page/2014/eu.html",
                    "talkTitle": "jQuery Mobile: Optimizing Performance V2",
                    "slides": "http://presentations.arschmitz.me/mobile-performance/"
                },
                "video": "bZTOV-55ivM",
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
            },
            "amsterdam": {
                "key": "amsterdam",
                "basic": {
                    "date": "November 2013",
                    "eventName": "Booking.com - Amsterdam",
                    "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266",
                    "website": false,
                    "talkTitle": "jQuery Mobile: Optimizing Performance"
                },
                "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
                "video": "bZTOV-55ivM"
            },
            "chicago": {
                "key": "chicago",
                "basic": {
                    "eventName": "jQuery Chicago",
                    "date": "September 2014",
                    "website": "http://events.jquery.org/2014/chicago/",
                    "talkTitle": "The Path to 2.0",
                    "slides": "http://presentations.arschmitz.me/path-to-2.0/"
                },
                "description": "jQuery Mobile 1.5 brings lots of new features and a revamped navigation system, more performance optimization possibilities for advanced users and adoption of more widgets from jQuery UI. Lately though, the question I am asked isn't about what's going to be in 1.6, 1.7, and so on, but about the future of jQuery Mobile after the merger with jQuery UI, and what the future is for the jQuery Mobile project. I’ll go into our current road map and details (as many as are available right now) about the future of jQuery Mobile and what it will look like after 2.0",
                "video": "2qF7kW9SdJQ"
            },
            "pwmWebDevJquery": {
                "key": "pwmWebDevJquery",
                "basic": {
                    "eventName": "Portland Web Developer Meetup",
                    "date": "March 2014",
                    "website": "http://www.portlandwebworks.com/blog/fun-times-webdev-meeting",
                    "talkTitle": "jQuery Foundation overview / Mobile performance",
                    "slides": "http://presentations.arschmitz.me/jquery-foundation/"
                },
                "video": "bZTOV-55ivM",
                "description": "In depth talk on the jQuery Foundation, jQuery Mobile, and mobile performance in general"
            },
            "pwmWebDevNodeCLI": {
                "key": "pwmWebDevJquery",
                "basic": {
                    "eventName": "Portland Web Developer Meetup",
                    "slides": "unavailable",
                    "date": "January 2015",
                    "talkTitle": "Node for the masses",
                    "website": "http://www.meetup.com/me-webdev/events/219614954/"
                },
                "description": "Using node as a CLI on shared hosting / Nodeception",
                "video": "bZTOV-55ivM"
            },
            "jssummit2014": {
                "key": "jssummit2014",
                "basic": {
                    "eventName": "JavaScript Summit 2014",
                    "talkTitle": "The State of jQuery UI & Mobile",
                    "slides": "http://presentations.arschmitz.me/path-to-2.0-ee/",
                    "date": "November 2014",
                    "website": "http://environmentsforhumans.com/2014/javascript-summit/"
                },
                "description": "It's an exciting time for jQuery UI and Mobile. Big changes are coming to jQuery Mobile and jQuery UI this year as the projects start to merge. But what exactly does this mean? What is the future of the two libraries? Which one is going away? Are either going away? These and many others are the type of questions I have been receiving from many people in the community since we started talking about merging the projects in the spring of 2013. I will address these questions and many more, will give you some history behind the changes we are making as well as give some insight into the direction the projects are taking, and how we’re going to make integration with both projects easier for developers.",
                "video": "bZTOV-55ivM"
            },
            "jssummit2015": {
                "key": "jssummit2015",
                "basic": {
                    "eventName": "JavaScript Summit 2015",
                    "date": "February 2015",
                    "website": "http://environmentsforhumans.com/2015/javascript-summit/",
                    "talkTitle": "Chassis: Yet Another CSS Framework",
                    "slides": "https://docs.google.com/presentation/d/1_15yz1uT-oq17ZNsZTczGgwUh-TP15gGO6DFcz_XTJU/edit"
                },
                "description": "Chassis seeks to establish a standard of markup and structure for common components that can be used by both CSS frameworks and JS component libraries to allow for complete interoperability, modularity, and justice, for all. Throughout this process we've been collaborating with a variety of projects and community members including: Topcoat, Zurb Foundation, Cardinal, Famo.us, Yandex, Wordpress, Automattic, 10up, 960grid, Unsemantic, jQuery Mobile, jQuery UI, Intel App Framework, and Cascade CSS, as well as some collaborators from Adobe, Hulu, and Bootstrap.",
                "video": "bZTOV-55ivM"
            },
            "devAndDesign": {
                "key": "devAndDesign",
                "basic": {
                    "eventName": "Dev and Design",
                    "date": "September 03 - 04, 2015",
                    "website": "http://www.devandesign.me/",
                    "talkTitle": "You Can Touch This!",
                    "slides": "Coming Soon!"
                },
                "description": "Community is the core of the opensource software movment. Lets take some time to explore how this community works together for mutual benefit.",
                "video": "0TjxnrWT8Es"
            }
        },
        "workHistory": [
            {
                "name": "CÜR Media",
                "title": "Sr Engineer, Web Lead",
                "role": "Lead jQuery Mobile Project, Co-Creator Chassis CSS Framework, PEP Team Member, jQuery UI Team member.",
                "acheivments": "Improved Code Quality, consistency, and standards. Lead initiative to merge jQuery Mobile and UI Projects. Leading a project and its team of developers distributed across the world. Team member of many similarly distributed teams.",
                "time": "2013-2015"
            },
            {
                "name": "jQuery Foundation",
                "title": "Development Lead",
                "role": "Lead jQuery Mobile Project, Co-Creator Chassis CSS Framework, PEP Team Member, jQuery UI Team member.",
                "acheivments": "Improved Code Quality, consistency, and standards. Lead initiative to merge jQuery Mobile and UI Projects. Leading a project and its team of developers distributed across the world. Team member of many similarly distributed teams.",
                "time": "2013-2015"
            },
            {
                "name": "Filament Group",
                "title": "Consultant",
                "acheivments": "Worked helping develop a set of small modular JavaScript widgets for use various projects lead by the Filament Group, including the responsive redesigns of Ebay and the Lego Store.",
                "time": "2013-2013"
            },
            {
                "name": "Bill Dodge Auto Group",
                "title": "Internet Development Administrator",
                "acheivments": "Handle all internet related needs of the company, including developing custom applications and tools for use throughout the company, maintaining and building servers and websites.",
                "time": "2009-2013"
            },
            {
                "name": "Starr Graphics",
                "title": "Web Developer / Graphic Designer",
                "acheivments": "Handle all web development needs of clients. Help with graphics as needed.",
                "time": "2005-2009"
            },
            {
                "name": "Freelance",
                "title": "Web Developer / Graphic Designer",
                "time": "1996-2013"
            }
        ],
        "education": [
            {
                "name": "University of Southern Maine",
                "major": "Physics",
                "minor": "Math and Chemistry",
                "years": "2002-2006",
                "achievements": "Noiminated for National Honors"
            }
        ],
        "communityInvolvment": [
            {
                "name": "W3C",
                "role": "Member, Web Platform and Audio working groups"
            },
            {
                "name": "Google Summer of Code",
                "role": "Organization Admin / Mentor"
            },
            {
                "name": "Hammer.JS",
                "role": "Organization Owner / Leader"
            },
            {
                "name": "Node School Portland",
                "role": "Mentor"
            },
            {
                "name": "Portland Web Developers Group",
                "role": "Speaker / Helper / IRC admin / Bugger of people to talk"
            },
            {
                "name": "jQuery Boston",
                "role": "Member"
            }
        ],
        "skills": {
            "frontEnd": [
                {
                    "name": "JavaScript",
                    "level": 5
                },
                {
                    "name": "jQuery",
                    "level": 5
                },
                {
                    "name": "jQuery UI",
                    "level": 5
                },
                {
                    "name": "jQuery Mobile",
                    "level": 5
                },
                {
                    "name": "Sass",
                    "level": 4
                },
                {
                    "name": "CSS3",
                    "level": 4
                },
                {
                    "name": "HTML5",
                    "level": 4
                },
                {
                    "name": "Web Standards",
                    "level": 5
                }
            ],
            "testingAndBuild": [
                {
                    "name": "QUnit",
                    "level": 5
                },
                {
                    "name": "Grunt",
                    "level": 5
                },
                {
                    "name": "Automated Testing",
                    "level": 4
                },
                {
                    "name": "Git",
                    "level": 4
                },
                {
                    "name": "Intern",
                    "level": 3
                },
                {
                    "name": "WebDriver",
                    "level": 3
                }
            ],
            "backend": [
                {
                    "name": "Node.js",
                    "level": 4
                },
                {
                    "name": "PHP",
                    "level": 3
                }
            ]
        }
    },
    "sideProjects": {
        "arschmitz.github.io": {
            "name": "arschmitz.github.io",
            "role": "Creator",
            "repoName": "[ 'arschmitz.github.io' ]",
            "links": {
                "github": "https://github.com/arschmitz/arschmitz.github.io",
                "issues": "https://github.com/arschmitz/arschmitz.github.io/issues",
                "website": "http://arschmitz.me",
                "demos": "http://arschmitz.me/?gui&template=effects",
                "irc": "Ping me arschmitz ",
                "api": "http://arschmitz.me/?gui&template=help"
            },
            "description": "The webiste your currently viewing my little, just something that amuses me",
            "currentWork": [
                "Meandering"
            ]
        },
        "local-menu": {
            "name": "Local Menu",
            "role": "Creator",
            "repoName": "[ 'local-menu' ]",
            "links": {
                "github": "https://github.com/arschmitz/local-menu",
                "website": "https://github.com/arschmitz/local-menu",
                "issues": "https://github.com/arschmitz/local-menu/issues",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/local-menu"
            },
            "description": "Creates a menu of all the folders / files in the director compatible with xip.io",
            "currentWork": [
                "None"
            ]
        },
        "grunt-spider": {
            "name": "Grunt Spider",
            "role": "Creator",
            "repoName": "[ \"grunt-spider\" ]",
            "links": {
                "github": "https://github.com/arschmitz/grunt-spider",
                "description": "A grunt task for use with Spider.js",
                "issues": "https://github.com/arschmitz/grunt-spider/issues",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/grunt-spider"
            },
            "demos": "none",
            "currentWork": [
                "Updating api and readme"
            ]
        },
        "jquery-pr": {
            "name": "jQuery PR",
            "role": "Creator",
            "repoName": "[ \"jquery-pr\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-pr",
                "website": "https://github.com/arschmitz/jquery-pr",
                "api": "https://github.com/arschmitz/jquery-pr",
                "demos": "none",
                "irc": "Ping me arschmitz ",
                "issues": "https://github.com/arschmitz/jquery-pr/issues"
            },
            "description": "an extension for chrome to check jquery foundation PR's for cla/caa signitures commit message format and line lengths",
            "currentWork": [
                "Working on version 2",
                "Adding template text pasting",
                "adding link html validation",
                "Canned message insertion",
                "Labling"
            ]
        },
        "mobile-presenter": {
            "name": "Mobile Presenter",
            "role": "Creator",
            "repoName": "[ \"mobile-presenter\" ]",
            "links": {
                "github": "https://github.com/arschmitz/mobile-presenter",
                "issues": "https://github.com/arschmitz/mobile-presenter/issues",
                "website": "http://presentations.arschmitz.me",
                "irc": "Ping me arschmitz ",
                "api": "https://github.com/arschmitz/mobile-presenter",
                "demos": "http://presentations.arschmitz.me"
            },
            "description": "A slide deck based on codeignighter and jQuery Mobile, includes multi presentation support and follow along function with socket.io, and adaptive / responsive touch remote",
            "currentWork": [
                "None"
            ]
        },
        "ios-iframe-touchevents-fix": {
            "name": "iOS Iframe Touchevents Fix",
            "role": "Co-Creator",
            "repoName": "[ \"ios-iframe-touchevents-fix\" ]",
            "links": {
                "github": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "api": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "website": "https://github.com/gseguin/ios-iframe-touchevents-fix",
                "issues": "https://github.com/gseguin/ios-iframe-touchevents-fix/issues",
                "irc": "Ping arschmitz or gseguin "
            },
            "description": "Workaround for iOS' iframes touch events issue"
        },
        "jquery-mobile-onpage": {
            "name": "jquery Mobile onPage",
            "role": "creator",
            "repoName": "[ \"jquery-mobile-onpage\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-onpage",
                "issues": "https://github.com/arschmitz/jquery-mobile-onpage/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-onpage",
                "website": "https://github.com/arschmitz/jquery-mobile-onpage",
                "irc": "Ping me arschmitz "
            },
            "description": "Provides easy binding for jQuery Mobile page events an reduces the number of bindings needed in a modular project",
            "currentWork": [
                "Maintaining"
            ]
        },
        "jquery-mousewheel": {
            "name": "jQuery mousewheel",
            "repoName": "[ \"jquery-mousewheel\" ]",
            "role": "Team Member",
            "links": {
                "github": "https://github.com/jquery/jquery-mousewheel",
                "issues": "https://github.com/jquery/jquery-mousewheel/issues",
                "website": "https://github.com/jquery/jquery-mousewheel",
                "api": "https://github.com/jquery/jquery-mousewheel",
                "demos": "https://github.com/jquery/jquery-mousewheel",
                "irc": "#jqueryui-dev"
            },
            "description": "A jQuery plugin which adds a normalized mousewheel event",
            "currentWork": [
                "Removing dependency on jQuery core event and alias modules"
            ]
        },
        "node-amd-builder": {
            "name": "Node AMD Builder",
            "repoName": "[ \"node-amd-builder\" ]",
            "role": "Team Member",
            "github": "https://github.com/gseguin/node-amd-builder",
            "issues": "https://github.com/gseguin/node-amd-builder/issues",
            "website": "https://github.com/gseguin/node-amd-builder",
            "api": "https://github.com/gseguin/node-amd-builder",
            "demos": "none",
            "irc": "Ping arschmitz or gseguin ",
            "description": "A node web service backend for a custom AMD based download builder",
            "currentWork": [
                "None"
            ]
        },
        "jsass-vars": {
            "name": "JSass Vars",
            "role": "Creator",
            "repoName": "[ \"jsass-vars\" ]",
            "links": {
                "github": "https://github.com/arschmitz/JSass-vars",
                "issues": "https://github.com/arschmitz/JSass-vars/issues",
                "api": "https://github.com/arschmitz/JSass-vars",
                "website": "https://github.com/arschmitz/JSass-vars",
                "irc": "Ping me arschmitz "
            },
            "description": "A module to compile Javascript modules into valid scss variable files and a coresponding combined javascript file for use in the browser",
            "currentWork": [
                "Finalizing API",
                "Preparing V1"
            ]
        },
        "qunit-assert-classes": {
            "name": "QUnit Assert Classes",
            "role": "Creator",
            "repoName": "[ \"qunit-assert-classes\" ]",
            "links": {
                "github": "https://github.com/arschmitz/qunit-assert-classes",
                "issues": "https://github.com/arschmitz/qunit-assert-classes/issues",
                "api": "https://github.com/arschmitz/qunit-assert-classes",
                "website": "https://github.com/arschmitz/qunit-assert-classes",
                "irc": "Ping me arschmitz "
            },
            "description": "A set of assertions for checking thats an element has ( or does not have ) any number of classes. The check is order independent and gives a diff of the expected classes.",
            "currentWork": [
                "None"
            ]
        },
        "jquery-mobile-datepicker-wrapper": {
            "name": "jQuery Mobile Datepicker Wrapper",
            "role": "Creator",
            "repoName": "[ \"qunit-assert-classes\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "issues": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "website": "https://github.com/arschmitz/jquery-mobile-datepicker-wrapper",
                "irc": "Ping me arschmitz "
            },
            "description": "Wrapper to turn jquery ui datepicker into a mobile widget.",
            "currentWork": [
                "Bug Fixes"
            ]
        },
        "html-ocd": {
            "name": "HTML OCD",
            "role": "Creator",
            "repoName": "[ \"html-ocd\" ]",
            "links": {
                "github": "https://github.com/arschmitz/html-ocd",
                "issues": "https://github.com/arschmitz/html-ocd/issues",
                "api": "https://github.com/arschmitz/html-ocd",
                "website": "https://github.com/arschmitz/html-ocd",
                "irc": "Ping me arschmitz "
            },
            "description": "Verifiys html documents including running jshint and jscs on script tags and csslint and cssComb on style tags, and some basic accessability checks",
            "currentWork": [
                "Initial Development",
                "Adding CSS Comb diff",
                "Adding Accessability checks",
                "Finalizing API"
            ]
        },
        "jquery-tutorials": {
            "name": "jQuery Tutorials",
            "role": "Creator",
            "repoName": "[ \"jquery-tutorials\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-tutorials",
                "issues": "https://github.com/arschmitz/jquery-tutorials/issues",
                "api": "https://github.com/arschmitz/jquery-tutorials",
                "website": "https://github.com/arschmitz/jquery-tutorials",
                "irc": "Ping me arschmitz "
            },
            "description": "A set of interactive tutorials for the jQuery Learning Center http://learn.jquery.com",
            "currentWork": [
                "Initial Development",
                "Proof of more abstract non jQuery centric version"
            ]
        },
        "bearbonesbeer.com": {
            "name": "Bear Bones Beer",
            "role": "Creator",
            "repoName": "[ \"bearbonesbeer.com\" ]",
            "links": {
                "github": "https://github.com/arschmitz/bearbonesbeer.com",
                "issues": "https://github.com/arschmitz/bearbonesbeer.com/issues",
                "api": "none",
                "website": "bearbonesbeer.com",
                "irc": "Ping me arschmitz "
            },
            "description": "Website for the friends brewery Bear Bones Beer",
            "currentWork": [
                "Initial Development",
                "expanding Google sheets based content managment"
            ]
        },
        "limesearch": {
            "name": "Limesearch",
            "role": "Creator",
            "repoName": ".limesearch",
            "links": {
                "github": "https://github.com/arschmitz/limesearch",
                "issues": "https://github.com/arschmitz/limesearch/issues",
                "api": "https://github.com/arschmitz/limesearch",
                "website": "bearbonesbeer.com",
                "irc": "Ping me arschmitz "
            },
            "description": "A GUI search and view utility for limechat logs",
            "currentWork": [
                "Initial Development",
                "Improving search"
            ]
        },
        "jquery-phototable": {
            "name": "jQuery Phototable",
            "role": "Creator",
            "repoName": "[ \"jquery-phtotable\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-phototable",
                "issues": "https://github.com/arschmitz/jquery-phototable/issues",
                "api": "https://github.com/arschmitz/jquery-phototable",
                "website": "https://rawgit.com/arschmitz/jquery-phototable/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-phototable/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "An advanced drag and drop phototable plugin for jQuery UI and Mobile with facebook integration",
            "currentWork": [
                "Maitnence"
            ]
        },
        "jquery-mobile-event-debugger": {
            "name": "jQuery Mobile Event Debugger",
            "role": "Creator",
            "repoName": "[ \"jquery-mobile-event-debugger\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-event-debugger",
                "issues": "https://github.com/arschmitz/jquery-mobile-event-debugger/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-event-debugger",
                "website": "https://rawgit.com/arschmitz/jquery-mobile-event-debugger/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-mobile-event-debugger/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "A debugging tool for jQuery Mobile Events which ties into the API docs",
            "currentWork": [
                "Maitnence"
            ]
        },
        "simple-panel": {
            "name": "Simple Panel",
            "role": "Creator",
            "repoName": "[ \"simple-panel\" ]",
            "links": {
                "github": "https://github.com/arschmitz/simple-panel",
                "issues": "https://github.com/arschmitz/simple-panel/issues",
                "api": "https://github.com/arschmitz/simple-panel",
                "website": "https://rawgit.com/arschmitz/simple-panel/master/index.html",
                "demos": "https://rawgit.com/arschmitz/simple-panel/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "a prototype panel for jquery mobile using ui draggable",
            "currentWork": [
                "On Hold for jQuery Mobile V1.7"
            ]
        },
        "jquery-mobile-nestedlists": {
            "name": "jQuery Mobile Nested Lists",
            "role": "Creator",
            "repoName": "[ \"jquery-mobile-nestedlists\" ]",
            "links": {
                "github": "https://github.com/arschmitz/jquery-mobile-nestedlists",
                "issues": "https://github.com/arschmitz/jquery-mobile-nestedlists/issues",
                "api": "https://github.com/arschmitz/jquery-mobile-nestedlists",
                "website": "https://rawgit.com/arschmitz/jquery-mobile-nestedlists/master/index.html",
                "demos": "https://rawgit.com/arschmitz/jquery-mobile-nestedlists/master/index.html",
                "irc": "Ping me arschmitz "
            },
            "description": "Adds options for nested lists to jQuery mobile",
            "currentWork": [
                "Maitnence"
            ]
        }
    },
    "talks": {
        "asia": {
            "key": "asia",
            "basic": {
                "eventName": "jQuery Asia",
                "date": "November 2012",
                "talkTitle": "jQuery Mobile: Common Pitfalls and Gotchas",
                "slides": "http://presentations.arschmitz.me/pitfalls/#/",
                "website": "https://www.facebook.com/JQueryConferenceAsia"
            },
            "video": "TXOFOqsrVuU",
            "description": "jQuery Mobile makes developing mobile apps and sites easy, semantic and familiar. However those familiar with typical desktop patterns may find themselves banging their heads against the wall when something \"simple\" doesn't work as expected. This session will go through some of the most common problems and pitfalls facing those jumping into jQuery Mobile. Areas covered will include injecting and enhancing dynamic content, working with enhanced form elements, refactoring for pageinit vs $(document).ready(), and the navigation model / page events."
        },
        "austin": {
            "key": "austin",
            "basic": {
                "eventName": "jQuery Austin",
                "date": "September 2013",
                "website": "http://events.jquery.org/2013/austin/",
                "talkTitle": "jQuery Mobile: Optimizing Performance",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
            },
            "video": "bZTOV-55ivM",
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
        },
        "sandiego": {
            "key": "sandiego",
            "basic": {
                "eventName": "jQuery San Diego",
                "date": "February 2014",
                "website": "http://events.jquery.org/2014/san-diego/",
                "talkTitle": "jQuery Mobile: Optimizing Performance",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266"
            },
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
            "video": "BNS4u086Lg8"
        },
        "europe": {
            "key": "europe",
            "basic": {
                "eventName": "jQuery Europe",
                "date": "March 2014",
                "website": "http://www.gentics.com/jquery-eu-2014/page/2014/eu.html",
                "talkTitle": "jQuery Mobile: Optimizing Performance V2",
                "slides": "http://presentations.arschmitz.me/mobile-performance/"
            },
            "video": "bZTOV-55ivM",
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times."
        },
        "amsterdam": {
            "key": "amsterdam",
            "basic": {
                "date": "November 2013",
                "eventName": "Booking.com - Amsterdam",
                "slides": "http://www.slideshare.net/AlexanderSchmitz/austin-26252266",
                "website": false,
                "talkTitle": "jQuery Mobile: Optimizing Performance"
            },
            "description": "Performance is a major concern on mobile platforms. jQuery Mobile 1.4 adds a number of performance related options and features to help you speed up your mobile site along with a new theme designed to make your site render as fast as possible. Learn Tips and tricks to make your site as fast as it can. Covered in this talk will be not only framework optimizations but server side tricks to minimize transfer but page initialization times.",
            "video": "bZTOV-55ivM"
        },
        "chicago": {
            "key": "chicago",
            "basic": {
                "eventName": "jQuery Chicago",
                "date": "September 2014",
                "website": "http://events.jquery.org/2014/chicago/",
                "talkTitle": "The Path to 2.0",
                "slides": "http://presentations.arschmitz.me/path-to-2.0/"
            },
            "description": "jQuery Mobile 1.5 brings lots of new features and a revamped navigation system, more performance optimization possibilities for advanced users and adoption of more widgets from jQuery UI. Lately though, the question I am asked isn't about what's going to be in 1.6, 1.7, and so on, but about the future of jQuery Mobile after the merger with jQuery UI, and what the future is for the jQuery Mobile project. I’ll go into our current road map and details (as many as are available right now) about the future of jQuery Mobile and what it will look like after 2.0",
            "video": "2qF7kW9SdJQ"
        },
        "pwmWebDevJquery": {
            "key": "pwmWebDevJquery",
            "basic": {
                "eventName": "Portland Web Developer Meetup",
                "date": "March 2014",
                "website": "http://www.portlandwebworks.com/blog/fun-times-webdev-meeting",
                "talkTitle": "jQuery Foundation overview / Mobile performance",
                "slides": "http://presentations.arschmitz.me/jquery-foundation/"
            },
            "video": "bZTOV-55ivM",
            "description": "In depth talk on the jQuery Foundation, jQuery Mobile, and mobile performance in general"
        },
        "pwmWebDevNodeCLI": {
            "key": "pwmWebDevJquery",
            "basic": {
                "eventName": "Portland Web Developer Meetup",
                "slides": "unavailable",
                "date": "January 2015",
                "talkTitle": "Node for the masses",
                "website": "http://www.meetup.com/me-webdev/events/219614954/"
            },
            "description": "Using node as a CLI on shared hosting / Nodeception",
            "video": "bZTOV-55ivM"
        },
        "jssummit2014": {
            "key": "jssummit2014",
            "basic": {
                "eventName": "JavaScript Summit 2014",
                "talkTitle": "The State of jQuery UI & Mobile",
                "slides": "http://presentations.arschmitz.me/path-to-2.0-ee/",
                "date": "November 2014",
                "website": "http://environmentsforhumans.com/2014/javascript-summit/"
            },
            "description": "It's an exciting time for jQuery UI and Mobile. Big changes are coming to jQuery Mobile and jQuery UI this year as the projects start to merge. But what exactly does this mean? What is the future of the two libraries? Which one is going away? Are either going away? These and many others are the type of questions I have been receiving from many people in the community since we started talking about merging the projects in the spring of 2013. I will address these questions and many more, will give you some history behind the changes we are making as well as give some insight into the direction the projects are taking, and how we’re going to make integration with both projects easier for developers.",
            "video": "bZTOV-55ivM"
        },
        "jssummit2015": {
            "key": "jssummit2015",
            "basic": {
                "eventName": "JavaScript Summit 2015",
                "date": "February 2015",
                "website": "http://environmentsforhumans.com/2015/javascript-summit/",
                "talkTitle": "Chassis: Yet Another CSS Framework",
                "slides": "https://docs.google.com/presentation/d/1_15yz1uT-oq17ZNsZTczGgwUh-TP15gGO6DFcz_XTJU/edit"
            },
            "description": "Chassis seeks to establish a standard of markup and structure for common components that can be used by both CSS frameworks and JS component libraries to allow for complete interoperability, modularity, and justice, for all. Throughout this process we've been collaborating with a variety of projects and community members including: Topcoat, Zurb Foundation, Cardinal, Famo.us, Yandex, Wordpress, Automattic, 10up, 960grid, Unsemantic, jQuery Mobile, jQuery UI, Intel App Framework, and Cascade CSS, as well as some collaborators from Adobe, Hulu, and Bootstrap.",
            "video": "bZTOV-55ivM"
        },
        "devAndDesign": {
            "key": "devAndDesign",
            "basic": {
                "eventName": "Dev and Design",
                "date": "September 03 - 04, 2015",
                "website": "http://www.devandesign.me/",
                "talkTitle": "You Can Touch This!",
                "slides": "Coming Soon!"
            },
            "description": "Community is the core of the opensource software movment. Lets take some time to explore how this community works together for mutual benefit.",
            "video": "0TjxnrWT8Es"
        }
    },
    "menu": [
        "API",
        "aboutMe",
        "aboutTheSite",
        "community",
        "help",
        "projects",
        "rants",
        "resume",
        "sideProjects",
        "talks",
        "effects"
    ]
}