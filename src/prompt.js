(function(){
	var commands = $.parseJSON( localStorage.commands || "[]" );
	var pointer = commands.length;
	var trigger;

	window.prompt = {
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
			var returnValue,
				command = $( "#prompt" ).val();

			if ( command === "" ) {
				return;
			}

			commands.push( command );
			try {
				localStorage.commands = JSON.stringify( commands );
			} catch( e ) {}
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
				$( ".console-wrap .scroll-wrap" )[ 0 ].scrollTop = $( ".console-wrap" )[ 0 ].scrollHeight;
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
		$( "#prompt" ).on( "change", prompt.runCommand );
		$( "#runPrompt" ).on( "click", prompt.runCommand );
		$( "#prompt" ).on( "keyup", prompt.keyup ).on( "blur", function(){
			if ( ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ) || gui.isOpen ) {
				return;
			}
			$( this ).focus();
		});
	});
})();
