this["templates"] = this["templates"] || {};

this["templates"]["API"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n				<div class=\"api-section\">\n					<h2>window."
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n					<h3><span class=\"bold\">Description: </span>"
    + alias2(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</h3>\n				</div>\n				<h3 class=\"api-global-section\">\n					<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),".methods",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n					<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects.",(data && data.key),".properties",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"api-section-heading\">\n							<h2>Methods: </h2>\n						</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "						<div class=\"col-xs-12 project float-box\">\n							<h3><span class=\"bold\">Name: </span><code>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</code></h3>\n							<h4><span class=\"bold\">Description: </span>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</h4>\n						</div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"api-section-heading\">\n							<h2>Properties: </h2>\n						</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"API",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.description",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1>"
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h1>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"APIinstructions",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.instructions : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"API.globalObjects",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.API : depth0)) != null ? stack1.globalObjects : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["aboutMe"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "			<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.pastExperience[ '",(data && data.key),"' ]",{"name":"json","hash":{},"data":data}))
    + ">\n				<h1 class=\"project-name\"><span class=\"bold\">Company: </span>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n				<h4 class=\"project-website\"><span class=\"bold\">Title: </span>"
    + alias2(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n				<h4 class=\"project-github\"><span class=\"bold\">Time: </span>"
    + alias2(alias3((depth0 != null ? depth0.time : depth0), depth0))
    + "</h4>\n				<h4 class=\"project-api\"><span class=\"bold\">Responsibilities: </span></h4>\n				<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.responsibilities : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"6":function(depth0,helpers,partials,data) {
    return "				<li class=\"row\">\n					<h4><span class=\"bold\">Fact: </span>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h4>\n				</li>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<li class=\"libScore-item\">\n		<a href=\"http://"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n			<div class=\"col-xs-8\">\n				<h4><span class=\"bold\">Site: </span>"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Lib: </span>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.lib : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Rank: </span>"
    + alias2(alias1((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n			</div>\n		</a>\n	</li>\n";
},"9":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + ",";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content\" data-background=\"/src/me.js\" data-json=\"arschmitz.aboutMe\">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"aboutMe",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.avatar",{"name":"json","hash":{},"data":data}))
    + ">\n			<img class=\"about-avatar\" src=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\"/>\n		</div>\n		<div  "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.contact",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 last-lg last-md float-box project\">\n			<h2 class=\"project-name\"><span class=\"bold\">Email: </span><a href=\"mailto:"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "</a></h2>\n			<h4 class=\"project-website\"><span class=\"bold\">Twitter: </span><a href=\"http://twitter.com/"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1), depth0))
    + "</a></h4>\n			<h4 class=\"project-github\"><span class=\"bold\">Github: </span><a href=\"https://github.com/"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1), depth0))
    + "</a></h4>\n			<h4 class=\"project-api\"><span class=\"bold\">IRC: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.irc : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-issues\"><span class=\"bold\">LinkedIn: </span><a href=\""
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1), depth0))
    + "\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1), depth0))
    + "</a></h4>\n		</div>\n		<div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.basic",{"name":"json","hash":{},"data":data}))
    + ">\n			<h2 class=\"project-name\"><span class=\"bold\">Name: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n			<h4 class=\"project-website\"><span class=\"bold\">Age: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.age : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-api\"><span class=\"bold\">Profession: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.profession : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-issues\"><span class=\"bold\">Current Hats 🎩: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.basic : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.description",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h2 class=\"talk-description\"><span class=\"bold\">Description: </span></h2>\n			<h3>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h3>\n		</div>\n		<div "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutMe.currentPosition",{"name":"json","hash":{},"data":data}))
    + " class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1 class=\"project-name\"><span class=\"bold\">Organization: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.company : stack1), depth0))
    + "</h1>\n			<h4 class=\"project-website\"><span class=\"bold\">Title: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-github\"><span class=\"bold\">Time: </span>"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.time : stack1), depth0))
    + "</h4>\n			<h4 class=\"project-api\"><span class=\"bold\">Responsibilities: </span></h4>\n			<h4><ul>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.currentPosition : stack1)) != null ? stack1.responsibilities : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul></h4>\n		</div>\n	</div>\n	<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.pastExperience : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box\">\n			<h2><span class=\"bold\">Fun Facts:</span></h2>\n			<ul class=\"styled-list fun-facts\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.funFacts : stack1),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box\">\n			<h2><span class=\"bold\">Sites built with projects I help lead or work on:</span></h2>\n			<ul class=\"styled-list\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutMe : depth0)) != null ? stack1.libScore : stack1),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["aboutTheSite"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<h3>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-md-6 col-xs-12 float-box\">\n				<div class=\"api-section\">\n					<h2>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n				</div>\n				<h3 class=\"api-global-section\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.sections.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n					<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "							<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"aboutTheSite",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.intro",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutTheSite : depth0)) != null ? stack1.intro : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"aboutTheSite.sections",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.aboutTheSite : depth0)) != null ? stack1.sections : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["community"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		<div href class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\" data-json=\"arschmitz.community."
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n			<div class=\"row project-row\">\n				<div class=\"col-xs-2\">\n					<img class=\"community-logo\" src=\""
    + alias2(alias3((depth0 != null ? depth0.logo : depth0), depth0))
    + "\">\n				</div>\n				<div href class=\"col-xs-10\">\n					<h2 class=\"talks-name\"><span class=\"bold\">Organization: </span>"
    + alias2(alias3((depth0 != null ? depth0.organization : depth0), depth0))
    + "</h2>\n				</div>\n				<div href class=\"col-xs-12\">\n					"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,(depth0 != null ? depth0.website : depth0),"Website",3,{"name":"hlink","hash":{},"data":data}))
    + "\n					"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "					<h3 class=\"talks-title\"><span class=\"bold\">Work: </span>\n						<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return "							<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" data-json=\"arschmitz.community\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"community",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.community : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["effects"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"effects-page\" class=\"content\" data-background=\"/src/effects.js\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"effects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Effects:</h1>\n			<h3>This section is a playground for different effects and effects related function built into the website</h3>\n			<h3>Any effect can be aborted and the normal look restored by pressing the escape key or double tapping at any time</h3>\n			<h3 class=\"warning\">Some of the effects or combinations of effects on this page will simultaniously animate hundreds of elements at the same time and can lead to freezing in some cases attempt at your own risk :-) ! Remember hit escape or double tap at any time to rest and stop all animations</h3>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Transitions:</h1>\n			<h3>These settings control the default page transition for the website</h3>\n			<label for=\"transition\"><h4>transition:</h4></label>\n			<select id=\"transition\">\n				<option>blind</option>\n				<option>bounce</option>\n				<option>clip</option>\n				<option>drop</option>\n				<option>explode</option>\n				<option selected>fade</option>\n				<option>fold</option>\n				<option>highlight</option>\n				<option>puff</option>\n				<option>pulsate</option>\n				<option>scale</option>\n				<option>shake</option>\n				<option>size</option>\n				<option>slide</option>\n				<option>transfer</option>\n			</select>\n			<label for=\"duration\"><h4>duration:</h4></label>\n			<input type=\"number\" min=\"0\" max=\"10000\" id=\"duration\" value=\"200\">\n			<br/><br/>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Canned Effects:</h1>\n			<div class=\"row\">\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.iAmTheSpoon();\">effects.iAmTheSpoon();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.iHaveTheSpins();\">effects.iHaveTheSpins();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.partyMode();\">effects.partyMode();</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call=\"effects.visualize();\">effects.visualize();</button>\n			</div>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box project\">\n			<h1>Flashmob Effects:</h1>\n			<div class=\"row\">\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"bounce\", [ \"rebelcruiser\", \"xwing\" ], 10000 );'>Rebel Attack: effects.flashMob( \"drop\", [ \"rebelcruiser\", \"xwing\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"puff\", [ \"stardestroyer\", \"tiefighter\" ], 10000 );'>Imperial Attack: effects.flashMob( \"puff\", [ \"rebelcruiser\", \"xwing\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"size\", [ \"battledroid\" ], 10000 );'>Droid Blackhole: effects.flashMob( \"size\", [ \"battledroid\" ], 10000 );</button>\n				<button class=\"col-xs-10 col-xs-offset-1 effect-button\" data-call='effects.flashMob( \"explode\", \"explosion\", 10000 );'>Michael Bay: effects.flashMob( \"explode\", \"explosion\", 10000 );</button>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["help"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "				<h3>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<div class=\"col-xs-12 float-box\">\n				<div class=\"api-section\">\n					<h2><span class=\"bold\">Section: </span>"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h2>\n				</div>\n				<h3 class=\"api-global-section\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.sections.",(data && data.key),{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</h3>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "							<h4>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</h4>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"help",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.top",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1 class=\"bold\">Introduction:</h1>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.help : depth0)) != null ? stack1.top : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"help.sections",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.help : depth0)) != null ? stack1.sections : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["issues"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<li class=\"warning\"><h2>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.currentIssues : depth0)) != null ? stack1.message : stack1), depth0))
    + "</h2></li>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentIssues : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "		<li class=\"issue-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".currentIssues['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n			<a href=\""
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n				<div class=\"col-xs-2\">\n					<img src=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar_url : stack1), depth0))
    + "\" class=\"issue-avatar\">\n				</div>\n				<div class=\"col-xs-10\">\n					<h3 class=\"issue-title\">"
    + alias1(alias2((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n					<h4 class=\"issue-info\">#"
    + alias1(alias2((depth0 != null ? depth0.number : depth0), depth0))
    + " - Opened at "
    + alias1(alias2((depth0 != null ? depth0.created_at : depth0), depth0))
    + " by "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.login : stack1), depth0))
    + "</h4>\n				</div>\n			</a>\n		</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"styled-list\" "
    + this.escapeExpression((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".currentIssues",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.currentIssues : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true,"useDepths":true});

this["templates"]["libScore"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "	<li class=\"libScore-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".libScore.short['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n		<a href=\"http://"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n			<div class=\"col-xs-10\">\n				<h4><span class=\"bold\">Site: </span>"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n			</div>\n			<div class=\"col-xs-2\">\n				<h4><span class=\"bold\">Rank: </span>"
    + alias1(alias2((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n			</div>\n		</a>\n	</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"styled-list\" "
    + this.escapeExpression((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".libScore.short",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.libScore : depth0)) != null ? stack1['short'] : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true});

this["templates"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<div class=\"menu-button-wrap col-lg-2 col-md-4 col-sm-6 col-xs-12\">\n				<button data-call=\"gui.render( '"
    + alias2(alias1(depth0, depth0))
    + "' );\">"
    + alias2(alias1(depth0, depth0))
    + "</button>\n			</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"http://code.jquery.com/jquery-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"menu",{"name":"json","hash":{},"data":data}))
    + ">\n	<h1 class=\"site-title\">> arschmitz.me -  JavaScript is Beautiful</h1>\n	<div class=\"menu row\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"menu",{"name":"json","hash":{},"data":data}))
    + ">\n		<div class=\"col-lg-1 col-md-2 col-sm-3\"></div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menu : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"main-message\">\n		<h2><span class=\"bold\">Open Source: </span></h2>\n		<h4>I believe open source software is the corner stone of the internet.</h4>\n		<p>This website and everything else I work on is open source and available on github with an MIT license.</p>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "				<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box libscore-box\">\n			<h2><span class=\"bold\">Sites built with "
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ":</span></h2>\n			<ul class=\"styled-list\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.repoName : depth0),".libScore.short",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.libScore : depth0)) != null ? stack1['short'] : stack1),{"name":"each","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "				<li class=\"libScore-item\" "
    + alias1((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].type : depths[1]),(depths[1] != null ? depths[1].repoName : depths[1]),".libScore.short['",(data && data.key),"']",{"name":"json","hash":{},"data":data}))
    + ">\n					<a href=\"http://"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"row\">\n						<div class=\"col-xs-10\">\n							<h4><span class=\"bold\">Site: </span>"
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "</h4>\n						</div>\n						<div class=\"col-xs-2\">\n							<h4><span class=\"bold\">Rank: </span>"
    + alias1(alias2((depth0 != null ? depth0.rank : depth0), depth0))
    + "</h4>\n						</div>\n					</a>\n				</li>\n";
},"10":function(depth0,helpers,partials,data) {
    return "col-md-6";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"content project\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-6 col-sm-6 col-xs-12 float-box project-top\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".name",{"name":"json","hash":{},"data":data}))
    + ">\n			<div class=\"row\">\n				<h1 class=\"col-xs-5\">\n					<span class=\"bold\">Name: </span>\n				</h1>\n				<h1 class=\"col-xs-6\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n			</div>\n		</div>\n		<div class=\"col-lg-6 col-sm-6 col-xs-12 float-box project-top\">\n			<div class=\"row\">\n				<h1 class=\"col-xs-3\"><span class=\"bold project-logo-label\">Logo: </span> </h1>\n				<div class=\"col-xs-8\"><img class=\"project-logo\" src=\""
    + alias2(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/></div>\n			</div>\n		</div>\n		<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box project-second\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".links",{"name":"json","hash":{},"data":data}))
    + ">\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.github : stack1),"Github","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.api : stack1),"API","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.issues : stack1),"Issues","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.demos : stack1),"Demos","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			<h4 class=\"project-irc\"><span class=\"bold\">IRC: </span>"
    + alias2(((helper = (helper = helpers.irc || (depth0 != null ? depth0.irc : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"irc","hash":{},"data":data}) : helper)))
    + " on freenode</h4>\n		</div>\n		<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box project-second\">\n			<h3 class=\"project-description\"><span class=\"bold\">Description: </span></h3>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n			<h3 class=\"project-role\"><span class=\"bold\">My Role: </span>"
    + alias2(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"role","hash":{},"data":data}) : helper)))
    + "</h3>\n		</div>\n		<div class=\"col-lg-4 col-xs-12 float-box project-second\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"projects",(depth0 != null ? depth0.repoName : depth0),".currentWork",{"name":"json","hash":{},"data":data}))
    + ">\n		<h2><span class=\"bold\">Current Work: </span></h2>\n		<ul class=\"project-current-work\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentWork : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.libScore : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.builtWith : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " col-xs-12 float-box issue-box\">\n			<h2><span class=\"bold\">Recent issues:</span></h2>\n			\n		</div>\n	</div>\n</div>\n";
},"useData":true,"useDepths":true});

this["templates"]["projects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression, alias2=this.lambda;

  return "		"
    + alias1((helpers.call || (depth0 && depth0.call) || helpers.helperMissing).call(depth0,"projects.project",(data && data.key),"projects-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<img src=\""
    + alias1(alias2((depth0 != null ? depth0.logo : depth0), depth0))
    + "\" class=\"project-logo\"/>\n			<h1 class=\"projects-title\">"
    + alias1(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "</h1>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content projects\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" data-json=\"arschmitz.projects\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"projects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<a class=\"projects-link col-lg-4\"></a>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["rant"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"7":function(depth0,helpers,partials,data) {
    return "			<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants",".",(depth0 != null ? depth0.name : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"rants",(depth0 != null ? depth0.name : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"rant row\">\n		<div class=\"col-xs-12 float-box project\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".definition",{"name":"json","hash":{},"data":data}))
    + ">\n			<h1><span class=\"bold\">Title: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n			<h2><span class=\"bold\">Word: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.word : stack1), depth0))
    + "</h2>\n			<h3><span class=\"bold\">Pronunciation: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.pronunciation : stack1), depth0))
    + "</h3>\n			<h3><span class=\"bold\">Part of Speach: </span>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.partOfSpeech : stack1), depth0))
    + "</h3>\n			<h3><span class=\"bold\">Definition: </span></h3>\n			<h3>\n				<ol "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".definition.fullDefinition",{"name":"json","hash":{},"data":data}))
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.fullDefinition : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</ol>\n			</h3>\n		</div>\n		<br/>\n		<div class=\"col-xs-12 float-box project rant-box\">\n		<blockquote "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"rants.",(depth0 != null ? depth0.name : depth0),".quote",{"name":"json","hash":{},"data":data}))
    + ">\n			\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.quote : depth0)) != null ? stack1.body : stack1), depth0))
    + "\"\n			<br/>\n			<cite>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.quote : depth0)) != null ? stack1.sitation : stack1), depth0))
    + "</cite>\n		</blockquote>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rant : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["rants"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		"
    + alias2((helpers.call || (depth0 && depth0.call) || alias1).call(depth0,"rants.rant",(data && data.key),"col-xs-12 float-box project",{"name":"call","hash":{},"data":data}))
    + "\n			<h1 class=\"rant-title\">"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n			<h2>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.word : stack1), depth0))
    + "</h2>\n			<h3>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.definition : depth0)) != null ? stack1.shortDefinition : stack1), depth0))
    + "</h3>\n			<h2>"
    + alias2(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/mobile/git/jquery.mobile-git.js\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"rants",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rants : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<a class=\"projects-link col-xs-12\"></a>\n</div>\n";
},"useData":true});

this["templates"]["resume"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "						<div class=\"resume-job-box row\">\n							<div class=\"col-sm-2\">\n								<h5 class=\"year\">"
    + alias1(this.lambda((depth0 != null ? depth0.time : depth0), depth0))
    + "</h5>\n							</div>\n							<div class=\"col-sm-10\">\n								"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,3,"Title",(depth0 != null ? depth0.title : depth0),"title",{"name":"h","hash":{},"data":data}))
    + "\n								"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,4,"Company",(depth0 != null ? depth0.name : depth0),"company",{"name":"h","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.acheivments : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</div>\n						</div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "									"
    + this.escapeExpression((helpers.h || (depth0 && depth0.h) || helpers.helperMissing).call(depth0,5,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"8":function(depth0,helpers,partials,data) {
    return "									"
    + this.escapeExpression((helpers.h || (depth0 && depth0.h) || helpers.helperMissing).call(depth0,5,"Acheivments",(depth0 != null ? depth0.acheivments : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "						"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Organization",(depth0 != null ? depth0.name : depth0),{"name":"h","hash":{},"data":data}))
    + "\n						"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,4,"Role",(depth0 != null ? depth0.role : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "				<div class=\"resume-job-box row\">\n					<div class=\"col-sm-3 col-xs-12\">\n						<h5 class=\"year\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1), depth0))
    + "</h5>\n					</div>\n					<div class=\"col-sm-9 col-xs-12\">\n						"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,3,"Event",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1),{"name":"h","hash":{},"data":data}))
    + "\n						"
    + alias1((helpers.h || (depth0 && depth0.h) || alias2).call(depth0,4,"Title",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.title : stack1),{"name":"h","hash":{},"data":data}))
    + "\n					</div>\n				</div>\n";
},"14":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"School",(depth0 != null ? depth0.name : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Major",(depth0 != null ? depth0.major : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Minor",(depth0 != null ? depth0.minor : depth0),{"name":"h","hash":{},"data":data}))
    + "\n				"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,3,"Achievements",(depth0 != null ? depth0.acheivments : depth0),{"name":"h","hash":{},"data":data}))
    + "\n";
},"16":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "				<div class=\"row meter\">\n					<div class=\"col-xs-5\">\n						<h4>"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n					</div>\n					<div class=\"col-xs-7\">\n						<h4>"
    + alias1((helpers.meter || (depth0 && depth0.meter) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),{"name":"meter","hash":{},"data":data}))
    + "</h4>\n					</div>\n				</div>\n";
},"18":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "						<div class=\"row meter\">\n							<div class=\"col-xs-5\">\n								<h4>"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n							</div>\n							<div class=\"col-xs-7\">\n								<h4>"
    + alias1((helpers.meter || (depth0 && depth0.meter) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),{"name":"meter","hash":{},"data":data}))
    + "</h4>\n							</div>\n						</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"content resume\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-json=\"arschmitz.resume\">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"resume",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row\">\n		<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-4 resume-top float-box project\">\n			<div class=\"initials\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.initials : stack1), depth0))
    + "</div>\n		</div>\n		<div data-json=\"arschmitz.resume.name\" class=\"col-lg-5 col-md-5 col-sm-8 col-xs-8 name float-box project\">\n			<h1 class=\"first-name\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.first : stack1), depth0))
    + "</h1>\n			<h1 class=\"last-name\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.name : stack1)) != null ? stack1.last : stack1), depth0))
    + "</h1>\n		</div>\n		<div data-json=\"arschmitz.resume.contact\" class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 resume-contact float-box project\">\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.website : stack1),"Website",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1),"Email",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.github : stack1),"Github",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.linkedIn : stack1),"LinkedIn",4,{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.twitter : stack1),"Twitter",4,{"name":"hlink","hash":{},"data":data}))
    + "\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-md-7 work-history\">\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.workHistory\" class=\"col-xs-12 float-box\">\n					<h2 class=\"bold section-heading\">Work History</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.workHistory : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.communityInvolvment\" class=\"col-xs-12 float-box\">\n					<h2 class=\"bold section-heading\">Community Involvment</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.communityInvolvment : stack1),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n		<div data-json=\"arschmitz.resume.talks\" class=\"col-md-5 col-xs-12 talks float-box\">\n			<h2 class=\"bold section-heading\">Conference Talks</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.talks : stack1),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\">\n		<div data-json=\"arschmitz.resume.education\" class=\"col-xs-12 float-box\">\n			<h2 class=\"bold section-heading\">Education</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.education : stack1),{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12\">\n			<h2 class=\"bold section-heading\">Skills</h2>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div data-json=\"arschmitz.resume.skills.frontEnd\" class=\"col-xs-12 col-md-6 col-sm-6 float-box\">\n			<h2>Front End</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.frontEnd : stack1),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"col-xs-12 col-md-6 col-sm-6\">\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.skills.testingAndBuild\" class=\"col-xs-12 float-box\">\n				<h2>Testing and build tools</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.testingAndBuild : stack1),{"name":"each","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"row\">\n				<div data-json=\"arschmitz.resume.skills.backend\" class=\"col-xs-12 float-box\">\n					<h2>Back End</h2>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.resume : depth0)) != null ? stack1.skills : stack1)) != null ? stack1.backend : stack1),{"name":"each","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["sideProject"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"5":function(depth0,helpers,partials,data) {
    return "					<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + alias3((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"sideProjects",(depth0 != null ? depth0.repoName : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project\">\n		<div class=\"col-lg-6  col-md-6 col-sm-12 col-xs-12 float-box\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + ".links\">\n			<h1 class=\"project-name\"><span class=\"bold\">Name: </span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.github : stack1),"Github","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.api : stack1),"API","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.issues : stack1),"Issues","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias3((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.links : depth0)) != null ? stack1.demos : stack1),"Demos","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			<h4 class=\"project-irc\"><span class=\"bold\">IRC: </span>"
    + alias3(((helper = (helper = helpers.irc || (depth0 != null ? depth0.irc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"irc","hash":{},"data":data}) : helper)))
    + " on freenode</h4>\n		</div>\n		<div class=\"col-lg-6  col-md-6 col-sm-12 col-xs-12 float-box\">\n			<h3 class=\"project-description\"><span class=\"bold\">Description: </span>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h3>\n			<h3 class=\"project-role\"><span class=\"bold\">My Role: </span>"
    + alias3(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"role","hash":{},"data":data}) : helper)))
    + "</h3>\n			<h2><span class=\"bold\">Current Work: </span></h2>\n			<ul class=\"project-current-work\" data-json=\"arschmitz.sideProjects"
    + alias3(((helper = (helper = helpers.repoName || (depth0 != null ? depth0.repoName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repoName","hash":{},"data":data}) : helper)))
    + ".currentWork\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.currentWork : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12 float-box issue-box\">\n			<h2><span class=\"bold\">Recent issues:</span></h2>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["sideProjects"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "		"
    + alias1((helpers.call || (depth0 && depth0.call) || helpers.helperMissing).call(depth0,"sideProjects.sideProject",(data && data.key),"sideProjects-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<h2 class=\"sideProjects-title\">"
    + alias1(this.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/mobile/git/jquery.mobile-git.js\" data-json=\"arschmitz.sideProjects\">\n	"
    + this.escapeExpression((helpers.title || (depth0 && depth0.title) || helpers.helperMissing).call(depth0,"sideProjects",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sideProjects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<a class=\"projects-link col-lg-4\"></a>\n	<a class=\"projects-link col-lg-4\"></a>\n</div>\n";
},"useData":true});

this["templates"]["talk"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.dist || (depth0 != null ? depth0.dist : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dist","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "http://code.jquery.com/mobile/git/jquery.mobile-git.js";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"content\" data-background=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dist : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"talks",(depth0 != null ? depth0.key : depth0),{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project\">\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".video",{"name":"json","hash":{},"data":data}))
    + ">\n			<iframe class=\"video-frame\" src=\"https://www.youtube.com/embed/"
    + alias2(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"video","hash":{},"data":data}) : helper)))
    + "\" frameborder=\"0\" allowfullscreen></iframe>\n		</div>\n		<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".basic",{"name":"json","hash":{},"data":data}))
    + ">\n\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Event",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Date",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.h || (depth0 && depth0.h) || alias1).call(depth0,2,"Title",((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.talkTitle : stack1),{"name":"h","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.website : stack1),"Website","4",{"name":"hlink","hash":{},"data":data}))
    + "\n			"
    + alias2((helpers.hlink || (depth0 && depth0.hlink) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.slides : stack1),"Slides","4",{"name":"hlink","hash":{},"data":data}))
    + "\n		</div>\n	</div>\n	<div class=\"row project\">\n		<div class=\"col-xs-12 col-sm-12 col-lg-12 float-box\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(depth0 != null ? depth0.key : depth0),".description",{"name":"json","hash":{},"data":data}))
    + ">\n			<h3 class=\"talk-description\">Description: </h3>\n			<span>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</span>\n			<br/><br/>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["templates"]["talks"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		"
    + alias2((helpers.call || (depth0 && depth0.call) || alias1).call(depth0,"talks.talk",(data && data.key),"talks-link col-lg-4 col-md-6 col-sm-6 col-xs-12 float-box",{"name":"call","hash":{},"data":data}))
    + "\n			<span "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",".",(data && data.key),".basic",{"name":"json","hash":{},"data":data}))
    + ">\n				<h2 class=\"talks-name\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.eventName : stack1), depth0))
    + "</h2>\n				<h3 class=\"talks-title\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.talkTitle : stack1), depth0))
    + "</h3>\n				<h5 class=\"talks-date\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.basic : depth0)) != null ? stack1.date : stack1), depth0))
    + "</h5>\n			</span>\n		</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"content\" data-background=\"https://code.jquery.com/ui/jquery-ui-git.js\" "
    + alias2((helpers.json || (depth0 && depth0.json) || alias1).call(depth0,"talks",{"name":"json","hash":{},"data":data}))
    + ">\n	"
    + alias2((helpers.title || (depth0 && depth0.title) || alias1).call(depth0,"talks",{"name":"title","hash":{},"data":data}))
    + "\n	<div class=\"row project-row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.talks : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});

this["templates"]["timeline"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.divider : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<a class=\"timeline-link\" href=\"#bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.divider : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.everyOther || (depth0 && depth0.everyOther) || helpers.helperMissing).call(depth0,(data && data.index),2,{"name":"everyOther","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row\">\n					<div class=\"ss-left\">\n						<h2 id=\"bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n					</div>\n					<div class=\"ss-right\">\n						<h2>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h2>\n					</div>\n				</div>\n";
},"8":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row\">\n					<div class=\"ss-left\">\n						<h2>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h2>\n					</div>\n					<div class=\"ss-right\">\n						<h2 id=\"bookmark-"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n					</div>\n				</div>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.everyOther || (depth0 && depth0.everyOther) || helpers.helperMissing).call(depth0,(data && data.index),2,{"name":"everyOther","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row ss-"
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + "\">\n					<div class=\"ss-left\">\n						<span class=\"circle-wrap\"><a style=\"background-image:url("
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ")\" class=\"ss-circle\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a></span>\n					</div>\n					<div class=\"ss-right\">\n						<h3 class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\n							<a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</h3>\n					</div>\n					<div class=\"dialog-wrap\">\n						<div class=\"dialog "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<h4>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "<br>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n						<h5>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h5>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n				</div>\n";
},"12":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda((depth0 != null ? depth0.color : depth0), depth0));
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "							<pre class=\"hjs\"><code class=\"javascript\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</code></pre>\n";
},"15":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + "\n";
},"17":function(depth0,helpers,partials,data) {
    return "							<p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "				<div class=\"ss-row ss-"
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + "\">\n					<div class=\"ss-left\">\n						<h3 class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\n							<a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.codeSample : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</h3>\n					</div>\n					<div class=\"ss-right\">\n						<span class=\"circle-wrap\">\n							<a style=\"background-image:url("
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + ")\" class=\"ss-circle\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n						</span>\n					</div>\n					<div class=\"dialog-wrap\">\n						<div class=\"dialog "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<h4>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "<br/>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\n						<h5>"
    + alias2(alias1((depth0 != null ? depth0.detail : depth0), depth0))
    + "</h5>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n					</div>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"timeline\">\n	<h1>\n		<span class=\"ss-circle timeline-title-img\" style=\"background-image:url(/images/mchammer.jpg)\"></span>\n		<span class=\"timeline-title\">You Can't Touch This:</span>\n	</h1>\n	<h2 class=\"ss-subtitle\">A sordid 9 year history of touch input on the web</h2>\n	<div class=\"sticky-parent\">\n		<div id=\"ss-links\" class=\"ss-links\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timeline : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div id=\"ss-container\" class=\"ss-container\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timeline : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n";
},"useData":true});