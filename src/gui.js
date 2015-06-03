// GUI Functions
(function(){
window.gui = {
	open: function( setHistory, renderMain ) {
		if ( !gui.isOpen ) {
			gui.console.addClass( "gui-console", { duration: 1000 } );
		}
		gui.console.resizable( {
			handles: "n",
			resize: function( e, ui ) {
				gui.element.height( $( window ).height() - ui.size.height );
			}
		} );

		if ( setHistory !== false ) {
			history.pushState( {}, "arschmitz.me - GUI", window.location.pathname + "?gui" );
		}
		if ( renderMain !== false ) {
			gui.render( "main", undefined, false );
		}
		if ( !gui.isOpen ) {
			gui.element.addClass( "gui-open", { duration: 1000 } );
		}
		gui.isOpen = true;
	},
	close: function() {
		gui.isOpen = false;
		gui.element.removeClass( "gui-open", { duration: 1000 } ).html( "" );
		gui.console.removeClass( "gui-console", { duration: 1000 } ).resizable( "destroy" );
		gui.marquee.html( "" );
	},
	render: function( templateName, item, setHistory ) {
		var parts = templateName.split( "." );
		var url = "templates/" + ( parts[ 1 ] || parts[ 0 ] ) + ".html"
		$.ajax({
			url: url,
			success: function( data ) {
				var content = Handlebars.compile( data );

				if ( !item) {
					gui.runTransition( content( arschmitz ) );

					if ( setHistory === false ) {
						return;
					}
					history.pushState( {}, "arschmitz.me - GUI - " +
						templateName, window.location.pathname + "?gui&template=" + templateName );
				} else {
					gui.runTransition( content( arschmitz[ parts[ 0 ] ][ item ] ) );

					if ( setHistory === false ) {
						return;
					}
					history.pushState( {}, "arschmitz.me - GUI - " +item, window.location.pathname +
						"?gui&template=" + templateName + "&item=" + item );
				}
			},
			error: function( jqxhr, status, error ) {
				$( "#output" ).append( "<div class='output-line'><span class='prompt-start'><</span> <span class='error'>GET " + url + " " + jqxhr.status + " (" + error + ")</span></div>" );
			}
		});
	},
	transition: "fade",
	duration: 200,
	runTransition: function( content ) {
		gui.element.hide( gui.transition, gui.duration, function(){
			gui.element.show( gui.transition, gui.duration, function() {
				gui.element.trigger( "update" );
				gui.startBackground();
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
		var queryParams = {}
		window.location.search.replace( "?", "" ).split( "&" ).forEach(function( value, index ) {
			var pair = value.split( "=" );
			queryParams[ pair[ 0 ] ] = pair[ 1 ] || true;
		});

		if ( queryParams.gui ) {
			if ( queryParams.item ) {
				gui.open( false, false );
				gui.render( queryParams.template, queryParams.item, false );
			} else if ( queryParams.template ) {
				gui.open( false, false );
				gui.render( queryParams.template, undefined, false );
			} else {
				gui.open( false );
			}
		}
	}
}

Object.defineProperty( window, "GUI", {
	get: function() {
		gui.open();
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

$( document ).on( "click", "[data-call]", function( e ){
	e.preventDefault();
	$( "#prompt" ).val( $( this ).attr( "data-call" ) ).trigger( "change" );
});

$( function(){
	gui.console = $( ".console-wrap" );
	gui.element = $( ".gui-wrap" );
	gui.marquee = $( "marquee" );
	gui.popState();
});
})();