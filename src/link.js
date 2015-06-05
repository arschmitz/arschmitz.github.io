Handlebars.registerHelper( "call", function( template, item, classes ) {
	template = Handlebars.escapeExpression( template );
	item = typeof item === "string" ? Handlebars.escapeExpression( item ) : false;
	classes = typeof classes === "string" ? Handlebars.escapeExpression( classes ) : false;

	return new Handlebars.SafeString(
		"<a href=\"/?gui&template=" + template + ( item ? "&item=" + item : "" ) +
		"\" data-call=\"gui.render( '" + template + "' " + ( item ? ", '" + item +
		"'" : "" ) + " )\" " + ( classes ? "class=\"" + classes + "\"" : "" ) + ">"
	);
});

Handlebars.registerHelper( "title", function( template, item ) {
	template = Handlebars.escapeExpression( template );
	item = typeof item === "string" ? Handlebars.escapeExpression( item ) : false;

	var link = "<h1 class=\"site-title\">> <a href=\"/?gui&template=main\" data-call=\"gui.render( 'main' );\">arschmitz</a>.";

	if ( item ) {
		item = /^\[/.test( item ) ? item : "." + item;
		link += "<a href=\"/?gui&template=" + template + "\" data-call=\"gui.render( '" + template + "' )\">" + template.split( "." )[ 0 ] + "</a>" + item;
	} else {
		link += template.split( "." )[ 0 ];
	}

	link += ";</h1>";

	return new Handlebars.SafeString( link );
});


Handlebars.registerHelper( "link", function( link, classes ) {
	link = Handlebars.escapeExpression( link );
	classes = typeof classes === "string" ? Handlebars.escapeExpression( classes ) : false;
	return new Handlebars.SafeString(
		"<a href=\"" + link + "\" " + ( classes ? "class=\"" + classes + "\"" : "" ) + ">" + link + "</a>"
	);
});

Handlebars.registerHelper( "hlink", function( link, text, level ) {
	link = Handlebars.escapeExpression( link );
	level = Handlebars.escapeExpression( level );
	text = Handlebars.escapeExpression( text );

	return new Handlebars.SafeString(
		"<h" + level + "><span class=\"bold\">" + text + ": </span><a href=\"" + link + "\">" + link + "</a></h" + level + ">"
	);
});

Handlebars.registerHelper( "h", function( level, text, content ) {
	content = Handlebars.escapeExpression( content );
	level = Handlebars.escapeExpression( level );
	text = Handlebars.escapeExpression( text );

	return new Handlebars.SafeString(
		"<h" + level + "><span class=\"bold\">" + text + ": </span>" + content + "</h" + level + ">"
	);
});

Handlebars.registerHelper( "meter", function( level ) {
	var ret = "<span class='meter-level'>";
	for ( var i=0; i < 5; i++ ) {
		ret += i >= level ? "<span class='inactive'>" : "";
		ret += "▱";
		ret += i >= level ? "</span>" : "";
	}

	return new Handlebars.SafeString( ret + "</span>" );
} );

