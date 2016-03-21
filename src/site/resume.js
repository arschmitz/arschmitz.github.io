var aboutMe = require( "./aboutMe" );
var talks = require( "./talks" );

module.exports = {
	moniker: "AS",
	contact: aboutMe.contact,
	name: aboutMe.name,
	talks: talks,
	workHistory: [
		{
			name: "CÜR Media",
			title: "Sr Engineer, Web Lead",
			role: "Lead web team, Sr Engineer.",
			acheivments: "Improved Code Quality, consistency, and standards. Reduce bug count from 300+ to zero in under 5 months. Implemented automated tests. Implemented build process.",
			time: "2015-Present"
		},
		{
			name: "jQuery Foundation",
			title: "Development Lead, W3C Representative",
			role: "W3C Representative, Lead jQuery Mobile Project, Co-Creator Chassis CSS Framework, PEP Team Member, jQuery UI Team member.",
			acheivments: "Improved Code Quality, consistency, and standards. Lead initiative to merge jQuery Mobile and UI Projects. Leading a project and its team of developers distributed across the world. Team member of many similarly distributed teams.",
			time: "2012-Present"
		},
		{
			name: "Filament Group",
			title: "Consultant",
			acheivments: "Worked helping develop a set of small modular JavaScript widgets for use various projects lead by the Filament Group, including the responsive redesigns of Ebay and the Lego Store.",
			time: "2013-2013"
		},
		{
			name: "Bill Dodge Auto Group",
			title: "Internet Development Administrator",
			acheivments: "Handle all internet related needs of the company, including developing custom applications and tools for use throughout the company, maintaining and building servers and websites.",
			time: "2009-2013"
		},
		{
			name: "Starr Graphics",
			title: "Web Developer / Graphic Designer",
			acheivments: "Handle all web development needs of clients. Help with graphics as needed.",
			time: "2005-2009"
		},
		{
			name: "Freelance",
			title: "Web Developer / Graphic Designer",
			time: "1996-2013"
		}
	],
	education: [
		{
			name: "University of Southern Maine",
			major: "Physics",
			minor: "Math and Chemistry",
			years: "2002-2006",
			achievements: "Noiminated for National Honors"
		}
	],
	communityInvolvment: [
		{
			name: "W3C",
			role: "Member, Web Platform and Audio working groups"
		},
		{
			name: "Google Summer of Code",
			role: "Organization Admin / Mentor"
		},
		{
			name: "Hammer.JS",
			role: "Organization Owner / Leader"
		},
		{
			name: "Node School Portland",
			role: "Mentor"
		},
		{
			name: "Portland Web Developers Group",
			role: "Speaker / Helper / IRC admin / Bugger of people to talk"
		},
		{
			name: "jQuery Boston",
			role: "Member"
		}
	],
	skills: {
		frontEnd: [
			{
				name: "JavaScript",
				level: 5
			},
			{
				name: "jQuery",
				level: 5
			},
			{
				name: "jQuery UI",
				level: 5
			},
			{
				name: "jQuery Mobile",
				level: 5
			},
			{
				name: "Sass",
				level: 4
			},
			{
				name: "CSS3",
				level: 4
			},
			{
				name: "HTML5",
				level: 4
			},
			{
				name: "Web Standards",
				level: 5
			}
		],
		testingAndBuild: [
			{
				name: "QUnit",
				level: 5
			},
			{
				name: "Grunt",
				level: 5
			},
			{
				name: "Automated Testing",
				level: 4
			},
			{
				name: "Git",
				level: 4
			},
			{
				name: "Intern",
				level: 3
			},
			{
				name: "WebDriver",
				level: 3
			}
		],
		backend: [
			{
				name: "Node.js",
				level: 4
			},
			{
				name: "PHP",
				level: 3
			}
		]
	}
};
