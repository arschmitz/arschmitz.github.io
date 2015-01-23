$(function(){
	var commands = [], pointer, trigger;

	$( "#prompt" ).on( "change", function(){
		var returnValue,
			command = $( this ).val();

		commands.push( command );
		pointer = commands.length;
		if( />>effect:/.test( command ) ) {
			runEffect( command.split( ":" )[ 1 ] );
			returnValue = "Running Effect " + command.split( ":" )[ 1 ];
		} else {
			try {
			returnValue = window.eval( command );
			} catch (e){}
			if ( typeof returnValue === "object" ) {
				returnValue = JSON.stringify( returnValue, null, 2 ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" );
			}
		}
		
		console.log( returnValue );
		$( "#output" ).append( "<div class='output-line'><span class='prompt-start'><</span>" + returnValue + "</div>" );
		$( "#prompt" ).val( "" );
		console.log( $( "body" ).height() )
		window.scrollTo( 0, $( "body" ).height() );
	});
	$( "#prompt" ).on( "keyup", function( e ) {
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
	}).on( "blur", function(){
		console.log( "blur" );
		$( this ).focus();
	});

	// run the currently selected effect
    function runEffect( selectedEffect ) {

      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }

      // run the effect
      $( "#output" ).effect( selectedEffect, options, 500, callback );
    };

    // callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#output" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };

});