// GUI Functions
( function() {
window.gui = {
	open: function( pop ) {
		$( "body" ).addClass( "gui" );
		if ( !gui.isOpen ) {
			gui.console.addClass( "gui-console", { duration: 1000 } );
		}
		$( ".prompt-switch input" ).prop( "checked", true );
		gui.console.resizable( {
			handles: "n",
			resize: function( e, ui ) {
				var height = ui.size.height / effects.height;

				ui.element.css( "height", ( height * 100 ) + "%" );
				gui.element.css( "height", ( 100 - ( height * 100 ) ) + "%" );
			}
		} );

		if ( !gui.isOpen ) {
			gui.element.addClass( "gui-open", { duration: 1000 } );
		}
		gui.updateHistory( { gui: true } );
		gui.isOpen = true;
		if ( pop !== false ) {
			gui.popState();
		}
	},
	close: function() {
		$( "body" ).removeClass( "gui" );
		gui.isOpen = false;
		gui.updateHistory( { gui: false } );
		gui.element.removeClass( "gui-open", { duration: 1000 } ).html( "" );
		gui.console.removeClass( "gui-console", { duration: 1000, complete: function() { gui.console.attr( "style", "" ); } } ).resizable( "destroy" );
		gui.marquee.html( "" );
	},
	updateHistory: function( update, title, replace ) {
		params = gui.queryParams();
		$.each( update, function( key, value ) {
			if ( value ) {
				params[ key ] = value;
			} else {
				delete params[ key ];
			}
		} );
		var searchString = "",
			first = "?";
		$.each( params, function( key, value ) {
			searchString += first + key + "=" + value;
			first = "&";
		} );
		history[ ( replace || "push" ) + "State" ]( {}, "arschmitz.me - GUI " + title, window.location.pathname + searchString );
	},
	render: function( templateName, item, setHistory ) {
		var parts = templateName.split( "." );

		if ( !item ) {
			gui.runTransition( arschmitz.templates[ parts[ 1 ] || parts[ 0 ] ]( arschmitz ) );

			if ( setHistory === false ) {
				return;
			}
			gui.updateHistory( { "template": templateName, item: false }, "- " + templateName );
		} else {
			gui.runTransition( arschmitz.templates[ parts[ 1 ] || parts[ 0 ] ]( arschmitz[ parts[ 0 ] ][ item ] ) );

			if ( setHistory === false ) {
				return;
			}
			gui.updateHistory( { template: templateName, item: item }, "- " + item );
		}
	},
	transition: "fade",
	duration: 500,
	runTransition: function( content ) {
		gui.element.hide( gui.transition, gui.duration, function() {
			gui.element.show( gui.transition, gui.duration, function() {
				$( ".gui-wrap" )[ 0 ].scrollTop = 0;
				gui.element.trigger( "update" );
				gui.startBackground();
				gui.addJSON();
			} ).html( content );
		} );
	},
	isOpen: false,
	startBackground: function() {
		var content = $( ".content" ).attr( "data-background" );

		if ( gui.marquee.length ) {
			$.ajax( {
				dataType: "text",
				url: content,
				success: function( data ) {
					$( ".gui-background-code" ).text( data );
				},
				error: function() {

					//alert();
				}
			} );
		}
	},
	popState: function() {
		var queryParams = gui.queryParams();

		if ( queryParams.gui ) {
			queryParams.template = queryParams.template || "main";
			if ( !gui.isOpen ) {
				gui.open( false );
			}
			if ( queryParams.item ) {
				gui.render( queryParams.template, queryParams.item, false );
			} else if ( queryParams.template ) {
				gui.render( queryParams.template, undefined, false );
			}
			if ( queryParams.prompt === "false" ) {
				prompt.close();
			}
		}
	},
	queryParams: function() {
		var queryParams = {};
		window.location.search.replace( "?", "" ).split( "&" ).forEach( function( value, index ) {
			var pair = value.split( "=" );
			if ( pair[ 0 ] !== "" ) {
				queryParams[ pair[ 0 ] ] = pair[ 1 ] || true;
			}
		} );
		return queryParams;
	},
	jsonClick: function( e ) {
		e.preventDefault();
		e.stopPropagation();
		var target = $( this );
		var parent = target.parent();
		if ( target.text() === "JSON" ) {
			$( e.target ).text( parent.is( ".content" ) ? "Template" : "Pretty" );
			parent.children().not( target ).not( ".json-link" ).wrapAll( "<span class='pretty-content'></span>" );
			parent.find( ".pretty-content" ).hide();
			var attr = parent.attr( "data-json" )
			parent.append( "<div class='json-box'><span class='json-content'>" + attr + ": " + prompt.syntaxHighlight( eval( attr ) ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" ) + "</span></div>" );
		} else if ( target.text() === "Template" ) {
			var params = gui.queryParams();
			if ( params.template ) {
				var parts = params.template.split( "." )
				template = parts[ 1 ] || parts [ 0 ];
			} else {
				template = "main";
			}

			var url = "templates/" + template + ".html";
			$( e.target ).text( "Pretty" );
			parent.children( ".json-box" ).remove();
			$.ajax( {
				url: url,
				success: function( data ) {
					parent.append( "<div class='json-box'>" + Handlebars.escapeExpression( data ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" ) + "</div>" );
				}
			} );
		} else {
			parent.children( ".json-box" ).remove();
			target.text( "JSON" );
			parent.children( ".pretty-content" ).children().unwrap();
		}
	},
	addJSON: function() {
		$( "[data-json]:not( :data(jsonAdded) )" ).append( "<a href class='json-link'>JSON</a>" ).data( "jsonAdded", true );
	}
}

Object.defineProperty( window, "GUI", {
	get: function() {
		gui.open();
		return "You may now drag the top of the console to resize it."
	}
} );

Object.defineProperty( window, "HELP", {
	get: function() {
		if ( !gui.isOpen ) {
			gui.open();
		}
		gui.render( "helpAndAPI" );
	}
} );

// Event Handlers
$( window ).on( "popstate", gui.popState );

$( document ).on( "change", "#transition", function() {
	gui.transition = $( this ).val();
} );

$( document ).on( "change", "#duration", function() {
	gui.duration = parseInt( $( this ).val(), 10 );
} );

$( document ).on( "click", "[data-call]", function( e ) {
	e.preventDefault();
	$( "#prompt" ).val( $( this ).attr( "data-call" ) );
	prompt.runCommand();
} );

$( function() {
	// Effects
	//$.fn.animate = $.fn.velocity;
	gui.console = $( ".console-wrap" );
	gui.element = $( ".gui-wrap" );
	gui.marquee = $( "marquee" );
	gui.popState();
	$( document ).on( "click", ".json-link", gui.jsonClick );

	gui.element.on( "update", function() {
		var params = gui.queryParams();
		if ( params.template === "projects.project" || gui.queryParams().template === "sideProjects.sideProject" ) {
			project = arschmitz[ params.template.split( "." )[ 0 ] ][ params.item ];
			project.type = params.template.split( "." )[ 0 ];
			if ( project.libScore ) {
				$.ajax( {
					url: "templates/libScore.html",
					success: function( data ) {
						var content = Handlebars.compile( data );
						$( ".libscore-box" ).append( content( project ) );
						gui.addJSON();
					}
				} );
			}
			$.ajax( {
				url: "https://api.github.com/repos/" + project.links.github.split( ".com/" )[ 1 ] + "/issues",
				success: function( data ) {
					arschmitz[ project.type ][ params.item ].currentIssues = data;

					$.ajax( {
						"url": "templates/issues.html",
						success: function( data ) {
							var content = Handlebars.compile( data );
							$( ".issue-box" ).append( content( project ) );
							gui.addJSON();
						}
					} );
				},
				error: function() {
					arschmitz[ project.type ][ params.item ].currentIssues = {};
					arschmitz[ project.type ][ params.item ].currentIssues.message = "API Limit reached please click the issues link in the section above to see current issues";
					$.ajax( {
						"url": "templates/issues.html",
						success: function( data ) {
							var content = Handlebars.compile( data );
							$( ".issue-box" ).append( content( project ) );
						}
					} );
				}
			} );
		}
		if ( params.template = "timeline.timeline" ) {
			window.sidescroll.init();
		}
	} );
} );
} )();
