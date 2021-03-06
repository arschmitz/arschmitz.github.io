// Effects
window.effects = {
	height: $( window ).height(),
	width: $( window ).width(),
	getRandomColor: function() {
		var letters = '0123456789ABCDEF'.split( '' ),
			color = '#';
		for ( var i = 0; i < 6; i++ ) {
			color += letters[Math.floor( Math.random() * 16 )];
		}
		return color;
	},
	partyMode: function() {
		effects.saveStyle();
		$( "body *, body" ).each( function() {
			var that = this,
				interval = setInterval( function() {
					$( that ).animate(
						{
							backgroundColor: effects.getRandomColor(),
							color: effects.getRandomColor()
						},
						{
							duration: Math.floor( Math.random() * 700 ) + 10,
							queue: false
						}
					);
				}, Math.floor( Math.random() * 700 ) + 10 )
			effects.intervals.partyMode.push( interval );
		} );
	},
	iHaveTheSpins: function() {
		effects.saveStyle();
		$( "body *" ).each( function() {
			var that = this,
				interval = setInterval( function() {
					$( that ).animate( {
						rotateZ: Math.floor( Math.random() * 360 ) - 360 + "deg",
					},
					{
						duration: Math.floor( Math.random() * 700 ) + 10,
						queue: false
					} );
				}, Math.floor( Math.random() * 700 ) + 10 );
			effects.intervals.iHaveTheSpins.push( interval );
		} );
	},
	iAmTheSpoon: function() {
		effects.saveStyle();
		$( "body *" ).each( function() {
			var that = this,
				interval = setInterval( function() {
					$( that ).animate( {
						width: Math.floor( Math.random() * effects.width ),
						height: Math.floor( Math.random() * effects.height ),
						"border-radius": Math.floor( Math.random() * 100 ),
						position: "absolute",
						top: Math.floor( Math.random() * effects.height ),
						left: Math.floor( Math.random() * effects.width )
					},
					{
						duration: Math.floor( Math.random() * 700 ) + 10,
						queue: false
					} );
				}, Math.floor( Math.random() * 700 ) + 10 );
			effects.intervals.iAmTheSpoon.push( interval );
		} );
	},
	flashMob: function( effect, image, duration ) {
		effects.saveStyle();
		var elements = $( "body *" ).not( ":hidden" );
		var that = this,
			interval = setInterval( function() {
				if ( image ) {
					if ( typeof image !== "object" ) {
						image = [ image ];
					}
					$.each( image, function( i, v ) {
						var ruleObject = {
							"position": "fixed",
							"top": Math.floor( Math.random() * effects.height ) + "px",
							"left": Math.floor( Math.random() * effects.width ) + "px",
							"width": ( Math.floor( Math.random() * 240 ) + 50 )  + "px",
							"background": "none"
						},
						flashMob = $( "<img src='" + effects.images[ v ] + "'>" ).uniqueId(),
						id = flashMob.attr( "id" );

						effects.generateRule( ruleObject, "#" + id );

						$( "body" ).append( flashMob );
						effects.runEffect( effect, flashMob );
					} );
				}
				var element = elements.eq( Math.floor( Math.random() * elements.length - 1 ) );
				if ( !image ) {
					effects.runEffect( effect, element );
				}
			}, 500 );
		effects.intervals.flashMob.push( interval );
		if ( duration ) {
			setTimeout( function() {
				effects.stopTheMob();
			}, duration );
		}
	},
	stopTheMob: function() {
		$.each( effects.intervals.flashMob, function( index, interval ) {
			clearInterval( interval );
		} );
	},
	flashMobElements: false,
	visualize: function() {
		effects.saveStyle();
		effects.iHaveTheSpins( false );
		effects.partyMode( false );
		$( "body *" ).each( function() {
			$( this ).css( {
				height: 20,
				position: "fixed",
				top: "0",
				left: "50%",
				"margin-left": -( $( this ).width() / 2 ),
				overflow: "hidden"
			} );
		} );
	},
	generateRule: function( ruleObject, selector ) {
		var rule = selector + " { ";
		$.each( ruleObject, function( prop, value ) {
			rule += prop + " : " + value + ";";
		} );
		rule += " }";
		effects.stylesheet.append( rule );
	},
	runEffect: function( selectedEffect, element ) {

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

		options.queue = false;

		// callback function to bring a hidden box back
		function callback() {
			setTimeout( function() {
				$( element ).removeAttr( "style" );
			}, 1000 );
		}

		// Run the effect
		$( element ).effect( selectedEffect, options, 500, callback );
	},
	kill: function( e ) {
		if ( e.which === $.ui.keyCode.ESCAPE || e === true ) {
			$.each( effects.intervals, function( i, v ) {
				$.each( v, function( index, value ) {
					clearInterval( value );
				} );
				effects.intervals[ i ] = [];
			} );
			if ( effects.flashMobElements ) {
				$( "body>*" ).not( effects.flashMobElements ).remove();
			}
			setTimeout( function() {
				effects.restoreStyle();
			}, 1000 );
		}
	},
	styleSaved: false,
	saveStyle: function() {
		if ( !effects.styleSaved ) {
			$( "[style]" ).each( function() {
				$.data( this, "savedStyle", $( this ).attr( "style" ) );
			} );
			effects.flashMobElements = $( "body>*" );
			effects.styleSaved = true;
		}
	},
	restoreStyle: function() {
		$( "[style]" ).each( function() {
			$( this ).removeAttr( "style" );
		} );
		$( ":data(savedStyle)" ).each( function() {
			$( this ).attr( "style", $.data( this, "savedStyle" ) );
		} );
		effects.styleSaved = false;
		effects.flashMobElements = undefined;
	},
	images: {
		"bullethole": "http://pngimg.com/upload/bullet_hole_PNG6062.png",
		"explosion": "http://flashvhtml.com/html/img/action/explosion/Explosion_Sequence_A%208.png",
		"pony": "http://img3.wikia.nocookie.net/__cb20110915190300/mlp/images/f/fb/Canterlot_Castle_Rainbow_Dash_3.png",
		"battledroid": "https://www.sideshowtoy.com/wp-content/uploads/2013/08/100284-product-silo.png",
		"stormtrooper": "http://www.digitaltoolsforarchitects.com/wp-content/uploads/2012/12/Storm-Trooper_bw.png",
		"stardestroyer": "http://i86.photobucket.com/albums/k81/trekkie313/2212copy.png",
		"xwing": "http://thxalot.org/skits/gifdisko/Area51/img_transparent/gdxwing.gif",
		"tiefighter": "http://www.csit.parkland.edu/~ddallas/csc233/lectures/Images/tiefighter.png",
		"rebelcruiser": "http://img3.wikia.nocookie.net/__cb20150215073634/starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png"
	},
	intervals: {
		partyMode: [],
		iHaveTheSpins: [],
		iAmTheSpoon: [],
		flashMob: [],
		visualize: []
	},
	stylesheet: $( "<style>" ).appendTo( "head" )
};

// Determine if we on iPhone or iPad
var isiOS = false;
var agent = navigator.userAgent.toLowerCase();
if ( agent.indexOf( 'iphone' ) >= 0 || agent.indexOf( 'ipad' ) >= 0 ) {
	isiOS = true;
}

$.fn.doubletap = function( onDoubleTapCallback, onTapCallback, delay ) {
	var eventName, action;
	delay = delay == null ? 500 : delay;
	eventName = isiOS == true ? 'touchend' : 'click';
	$( this ).on( eventName, function( event ) {
		var now = new Date().getTime();
		var lastTouch = $( this ).data( 'lastTouch' ) || now + 1 /** the first time this will make delta a negative number */;
		var delta = now - lastTouch;
		clearTimeout( action );
		if ( delta < 500 && delta > 0 ) {
			if ( onDoubleTapCallback != null && typeof onDoubleTapCallback == 'function' ) {
				onDoubleTapCallback( event );
			}
		}else {
			$( this ).data( 'lastTouch', now );
			action = setTimeout( function( evt ) {
				if ( onTapCallback != null && typeof onTapCallback == 'function' ) {
					onTapCallback( evt );
				}
				clearTimeout( action );   // clear the timeout
			}, delay, [ event ] );
		}
		$( this ).data( 'lastTouch', now );
	} );
};

$( document ).doubletap( function() {
	effects.kill( true );
} );

$( window ).on( "resize", function() {
	effects.height = $( window ).height();
	effects.width = $( window ).width();
	$( "body" ).height( effects.height );
} );

$( document ).on( "update", function( e ) {
	console.log( gui.transition );
	$( "#transition" ).val( gui.transition );
	$( "#duration" ).val( gui.duration );
} );

$( document ).on( "keydown", effects.kill );
