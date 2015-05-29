// GUI Functions
gui = {
	open: function( setHistory, renderMain ) {
		$( ".console-wrap" ).addClass( "gui-console", { duration: 1000 } );
		$( ".console-wrap" ).resizable( {
			handles: "n",
			resize: function( e, ui ) {
				$( ".gui-wrap" ).height( $( window ).height() - ui.size.height );
			}
		} );

		if ( setHistory !== false ) {
			history.pushState( {}, "arschmitz.me - GUI", window.location.pathname + "?gui" );
		}
		if ( renderMain !== false ) {
			gui.render( "main", undefined, false );
		}
		$( ".gui-wrap" ).addClass( "gui-open", { duration: 1000 } );
		gui.isOpen = true;
	},
	close: function() {
		gui.isOpen = false;
		$( ".gui-wrap" ).removeClass( "gui-open", { duration: 1000 } ).html( "" );
		$( ".console-wrap" ).removeClass( "gui-console", { duration: 1000 } ).resizable( "destroy" );
		$( "marquee" ).html( "" );
	},
	render: function( templateName, item, setHistory ) {
		var parts = templateName.split( "." );
		$.ajax({
			url: "templates/" + ( parts[ 1 ] || parts[ 0 ] ) + ".html",
			success: function( data ) {
				var content = Handlebars.compile( data );

				if ( !item) {
					$( ".gui-wrap" ).html( content( arschmitz ) );
					gui.startBackground();
					if ( setHistory === false ) {
						return;
					}
					history.pushState( {}, "arschmitz.me - GUI - " +
						templateName, window.location.pathname + "?gui&template=" + templateName );
				} else {
					$( ".gui-wrap" ).html( content( arschmitz[ parts[ 0 ] ][ item ] ) );

					gui.startBackground();
					if ( setHistory === false ) {
						return;
					}
					history.pushState( {}, "arschmitz.me - GUI - " +item, window.location.pathname +
						"?gui&template=" + templateName + "&item=" + item );
				}
			}
		});
	},
	isOpen: false,
	startBackground: function() {
		var marquee = $( "marquee" );
		var content = $( ".content" ).attr( "data-background" );

		if ( marquee.length ) {
			$.ajax( {
				dataType: "text",
				url: content,
				success: function( data ) {
					$( ".gui-background-code" ).text( data );
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
		console.log( "pop" );
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

Object.defineProperty( window, "openGUI", {
	get: function() {
		gui.open();
	}
} );
Object.defineProperty( window, "closeGUI", {
	get: function() {
		gui.close();
	}
} );

// Event Handlers

$( window ).on( "popstate", gui.popState );
$( document ).on( "click", "[data-call]", function( e ){
	console.log( "click" );
	$( "#prompt" ).val( $( this ).attr( "data-call" ) ).trigger( "change" );
});

(function(){
	// Prompt

	var  commands = [], pointer, trigger;

	commands = $.parseJSON( localStorage.commands || "[]" );
	pointer = commands.length;

	var prompt = {
		logError: function( e ) {
			return "<span class='error'>" + e.__proto__.name + ": " + e.message + "</span>";
		},
		syntaxRegex: /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
		syntaxHighlight: function(json) {
			if (typeof json != 'string') {
				json = JSON.stringify(json, undefined, 4);
			}
			json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			return json.replace( prompt.syntaxRegex, function (match) {
				var cls = 'number';
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'key';
					} else {
						cls = 'string';
					}
				} else if (/true|false/.test(match)) {
					cls = 'boolean';
				} else if (/null/.test(match)) {
					cls = 'null';
				}
				return '<span class="' + cls + '">' + match + '</span>';
			});
		},
		runCommand: function() {
			console.log( "run")
			var returnValue,
				command = $( this ).val();

			if ( command === "" ) {
				return;
			}

			commands.push( command );
			localStorage.commands = JSON.stringify( commands );
			pointer = commands.length;
			if( />>effect:/.test( command ) ) {
				runEffect( command.split( ":" )[ 1 ], ".body-wrap" );
				returnValue = "Running Effect " + command.split( ":" )[ 1 ];
			} else {
				try {
				returnValue = window.eval( command );
				} catch (e){
					returnValue = prompt.logError( e );
				}
				if ( typeof returnValue === "object" ) {
					try {
						returnValue = prompt.syntaxHighlight( returnValue ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" );
					} catch ( e ) {
						returnValue = prompt.logError( e );
					}
				}
			}
			$( "#output" ).append( "<div class='output-line'><span class='prompt-start'>></span>" + command + "<br/>" );
			$( "#output" ).append( "<span class='prompt-start'><</span>" + returnValue + "</div>" );
			$( "#prompt" ).val( "" );
			if ( !gui.isOpen ) {
				window.scrollTo( 0, $( "body" ).height() );
			} else {
				$( ".console-wrap" )[ 0 ].scrollTop = $( ".console-wrap" )[ 0 ].scrollHeight;
			}
		},
		keyup: function( e ) {
			if ( e.which === 38 && pointer - 1 >= 0 ) {
				pointer--;
				$( this ).val( commands[ pointer ] );
				trigger = true;
			} else if ( e.which === 40 && pointer + 1 < commands.length - 1) {
				pointer++;
				$( this ).val( commands[ pointer ] );
				trigger = true;
			} else if( e.which === 40 ){
				$( this ).val( "" );
				trigger = true;
			} else if ( e.which === 13 && trigger ) {
				$( this ).trigger( "change" );
				trigger = false;
			}
		}
	};

	$(function(){
		$( "body" ).height( $( window ).height() );
		gui.popState();
		$( document ).on( "click", "a", function( e ) {
			e.preventDefault();
		});
		$( "#prompt" ).on( "change", prompt.runCommand );
		$( "#prompt" ).on( "keyup", prompt.keyup ).on( "blur", function(){
			if ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ) {
				return;
			}
			$( this ).focus();
		});
	});
})();
