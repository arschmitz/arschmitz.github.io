$(function(){
	var commands = [], pointer, trigger;
	$( "body" ).height( $( window ).height() )
	$( "#prompt" ).on( "change", function(){
		var returnValue,
			command = $( this ).val();

		if ( command === "" ) {
			return;
		}

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

	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split(''),
			color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	window.partyMode = function( kill ){
		if ( kill === "kill" ) {
			$.each( window.partyMode.intervals, function(value){
				clearInterval( value )
			});
			return
		}
		$( "*" ).each(function(){
			var that = this,
				interval = setInterval(function(){
					$( that ).animate(
						{
							"background-color": getRandomColor(),
							color: getRandomColor()
						},
						Math.floor(Math.random() * 700) + 10
					);
				}, Math.floor(Math.random() * 700) + 10 )
			window.partyMode.intervals.push( interval );
		});
	}
	window.partyMode.intervals = [];
	$.fn.rotate = function(angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;

		return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
				$.style(e, 'transform', 'rotate(' + now + 'deg)');
				if (step) return step.apply(e, arguments);
			};

			$({deg: 0}).animate({deg: angle}, args);
		});
	};
	window.iHaveTheSpins = function( kill ){
		if ( kill === "kill" ) {
			$.each( window.iHaveTheSpins.intervals, clearInterval );
		}
		$( "*" ).each(function(){
			var that = this,
				interval = setInterval( function(){
					$( that ).rotate( Math.floor(Math.random() * 360) - 360,
						Math.floor(Math.random() * 700) + 10 );
				}, Math.floor(Math.random() * 700) + 10 );
			window.iHaveTheSpins.intervals.push( interval );
		});
	}
	window.iHaveTheSpins.intervals = [];
	window.iAmTheSpoon = function( kill ){
		if ( kill === "kill" ) {
			$.each( window.iAmTheSpoon.intervals, clearInterval );
			return;
		}
		$( "*" ).each(function(){
			var that = this,
				interval = setInterval( function(){
					$( that ).animate({
						width: Math.floor(Math.random() * $( window ).width() ),
						height: Math.floor(Math.random() * $( window ).height() ),
						"border-radius": Math.floor(Math.random() * 100),
						position: "absolute",
						top: Math.floor(Math.random() * $( window ).height() ),
						left: Math.floor(Math.random() * $( window ).width() )
					}, Math.floor(Math.random() * 700) + 10 );
				}, Math.floor(Math.random() * 700) + 10 );
			window.iAmTheSpoon.intervals.push( interval );
		});
	}
	window.iAmTheSpoon.intervals = [];

	// run the currently selected effect
    function runEffect( selectedEffect ) {

      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#prompt", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }

      // run the effect
      $( ".body-wrap" ).effect( selectedEffect, options, 500, callback );
    };

    // callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".body-wrap" ).removeAttr( "style" );
      }, 1000 );
    };

});