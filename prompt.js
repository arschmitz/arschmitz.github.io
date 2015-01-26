$(function(){
	var  commands = [], pointer, trigger;

	commands = $.parseJSON( localStorage.commands || "[]" );
	pointer = commands.length;
	console.log( commands );
	$( "body" ).height( $( window ).height() )
	$( "#prompt" ).on( "change", function(){
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
			} catch (e){}
			if ( typeof returnValue === "object" ) {
				returnValue = JSON.stringify( returnValue, null, 2 ).replace( /\n/g, "<br/>" ).replace( /\s\s/g, "<div class='tab'></div>" );
			}
		}

		$( "#output" ).append( "<div class='output-line'><span class='prompt-start'><</span>" + returnValue + "</div>" );
		$( "#prompt" ).val( "" );
		window.scrollTo( 0, $( "body" ).height() );
	});
	$( "#prompt" ).on( "keyup", function( e ) {
		console.log( pointer )
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
	var stylesheet = $( "<style>" ).appendTo( "head") ;
	window.images = {
		"bullethole": "http://pngimg.com/upload/bullet_hole_PNG6062.png",
		"explosion": "http://flashvhtml.com/html/img/action/explosion/Explosion_Sequence_A%208.png"
	}
	window.searchHash = {};
 	window.lookup = [];
	window.searchObject = function ( search, key, depth ){
		window.searchObject.count += 1;
		function searcher( search, key, current ){
			searchHash[ key ] = searchHash[ key ] || [];
			if ( search ) {
				$.each( search, function( index, value ){
					if( index === key  && index !== "searchHash" ){
						searchHash[ key ].push( value );
					} else if( typeof value === "object" && window.lookup.indexOf( value ) === -1  && index !== "searchHash" ) {
						console.log( "deeper..." );
						console.log( index )
						window.lookup.push( value );
						if( search && current < depth ) {
							searcher( value, key, current + 1 );
						}
					}
				});
			}
		}
		searcher( search, key, 0 );
		return searchHash[ key ].reverse().slice( 1 ).join( " " );
	}

	window.searchObject.count = 0;
	window.boomBaby = function( effect, image ){
		if ( effect === "kill" ) {
			$.each( window.boomBaby.intervals, function( index, value){
				clearInterval( window.boomBaby.intervals[index ] );
			});
			return;
		}
		var that = this,
			interval = setInterval( function(){
				var elements = $( "body *" );
				if ( image ) {
					var ruleObject = {
							"position": "fixed",
							"top": Math.floor(Math.random() * $( window ).height() ) + "px",
							"left": Math.floor(Math.random() * $( window ).width() ) + "px",
							"width": ( Math.floor(Math.random() * 240 ) + 50 )  + "px",
							"background": "none"
						},
						boom = $( "<img src='" + images[ image ] + "'>" ).uniqueId(),
						id = boom.attr( "id" );

					generateRule( ruleObject, "#" + id );

					$( "body" ).append( boom );
				}
				runEffect( effect, boom );
				runEffect( effect, elements.eq(Math.floor(Math.random() * elements.length - 1 ) ) );
			}, 100 );
		window.boomBaby.intervals.push( interval );
	}
	function generateRule( ruleObject, selector ) {
		var rule = selector + " { ";
		$.each( ruleObject, function( prop, value ) {
			rule += prop + " : " + value + ";";
		});
		rule += " }"
		stylesheet.append( rule );
	}
	window.boomBaby.intervals = [];
	window.visualize = function( kill ){
		iHaveTheSpins();
		partyMode();
		if ( kill === "kill" ) {
			iHaveTheSpins( "kill" );
			partyMode( "kill" );
			$.each( window.visualize.intervals, clearInterval );
			return;
		}
		$( "*" ).each(function(){
			var that = this,
				interval = setInterval( function(){

					console.log( " foo" )
					var width = Math.floor(Math.random() * $( window ).width() );
					$( that ).animate({
						width: width,
						"margin-left": - ( width / 2 )
					}, Math.floor(Math.random() * 700) + 10 );
				}, Math.floor(Math.random() * 700) + 10 );
			$( this ).css({
				height: 20,
				position: "fixed",
				top: "50%",
				left: "50%",
				overflow: "hidden"
			});
			window.visualize.intervals.push( interval );
		});
	}
	window.visualize.intervals = [];
	// run the currently selected effect
    function runEffect( selectedEffect, element ) {

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
      // callback function to bring a hidden box back
		function callback() {
			setTimeout(function() {
				$( element ).removeAttr( "style" );
			}, 1000 );
		};
      // run the effect
      $( element ).effect( selectedEffect, options, 500, callback );
    };
});
