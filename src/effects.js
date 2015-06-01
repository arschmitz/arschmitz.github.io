// Effects
$.fn.animate = $.fn.velocity;

window.effects = {
	height: $( window ).height(),
	width: $( window ).width(),
	getRandomColor: function() {
		var letters = '0123456789ABCDEF'.split(''),
			color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	},
	partyMode: function( save ){
		if ( save !== false ) {
			effects.saveStyle();
		}
		$( "body *, body" ).each(function(){
			var that = this,
				interval = setInterval(function(){
					$( that ).animate(
						{
							backgroundColor: effects.getRandomColor(),
							color: effects.getRandomColor()
						},
						{
							duration: Math.floor(Math.random() * 700) + 10,
							queue: false
						}
					);
				}, Math.floor(Math.random() * 700) + 10 )
			effects.intervals.partyMode.push( interval );
		});
	},
	iHaveTheSpins: function( save ){
		if ( save !== false ) {
			effects.saveStyle();
		}
		$( "body *" ).each(function(){
			var that = this,
				interval = setInterval( function(){
					$( that ).animate({
						rotateZ: Math.floor(Math.random() * 360) - 360 + "deg",
					},
					{
						duration: Math.floor(Math.random() * 700) + 10,
						queue: false
					} );
				}, Math.floor(Math.random() * 700) + 10 );
			effects.intervals.iHaveTheSpins.push( interval );
		});
	},
	iAmTheSpoon: function(){
		effects.saveStyle();
		$( "body *" ).each(function(){
			var that = this,
				interval = setInterval( function(){
					$( that ).animate({
						width: Math.floor(Math.random() * effects.width ),
						height: Math.floor(Math.random() * effects.height ),
						"border-radius": Math.floor(Math.random() * 100),
						position: "absolute",
						top: Math.floor(Math.random() * effects.height ),
						left: Math.floor(Math.random() * effects.width )
					},
					{
						duration: Math.floor(Math.random() * 700) + 10,
						queue: false
					} );
				}, Math.floor(Math.random() * 700) + 10 );
			effects.intervals.iAmTheSpoon.push( interval );
		});
	},
	boom: function( effect, image ){
		effects.saveStyle();
		effects.boomElements = $( "*" );
		var elements = $( "body *" ).not( ":hidden" );
		var that = this,
			interval = setInterval( function(){
				if ( image ) {
					if ( typeof image !== "object" ) {
						image = [ image ];
					}
					$.each( image, function( i, v ) {
						var ruleObject = {
							"position": "fixed",
							"top": Math.floor(Math.random() * effects.height ) + "px",
							"left": Math.floor(Math.random() * effects.width ) + "px",
							"width": ( Math.floor(Math.random() * 240 ) + 50 )  + "px",
							"background": "none"
						},
						boom = $( "<img src='" + effects.images[ v ] + "'>" ).uniqueId(),
						id = boom.attr( "id" );

						effects.generateRule( ruleObject, "#" + id );

						$( "body" ).append( boom );
						effects.runEffect( effect, boom );
					} );
				}
				var element = elements.eq( Math.floor( Math.random() * elements.length - 1 ) );
				if( !image ) {
					effects.runEffect( effect, element );
				}
			}, 100 );
		effects.intervals.boomBaby.push( interval );
	},
	boomElements: false,
	visualize: function(){
		effects.saveStyle();
		effects.iHaveTheSpins( false );
		effects.partyMode( false );
		$( "body *" ).each(function(){
			$( this ).css({
				height: 20,
				position: "fixed",
				top: "0",
				left: "50%",
				"margin-left": -( $( this ).width() / 2 ),
				overflow: "hidden"
			});
		});
	},
	generateRule: function( ruleObject, selector ) {
		var rule = selector + " { ";
		$.each( ruleObject, function( prop, value ) {
			rule += prop + " : " + value + ";";
		});
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
			setTimeout(function() {
				$( element ).removeAttr( "style" );
			}, 1000 );
		}

		// Run the effect
		$( element ).effect( selectedEffect, options, 500, callback );
	},
	kill: function( e ) {
		if ( e.which === $.ui.keyCode.ESCAPE ) {
			$.each( effects.intervals, function( i, v ){
				$.each( v, function( index, value ){
					clearInterval( value );
				});
				effects.intervals[ i ] = [];
			});
			if ( effects.boomElements ) {
				$( "*" ).not( effects.boomElements ).remove();
			}
			setTimeout( function(){
				effects.restoreStyle();
			}, 1000 );
		}
	},
	saveStyle: function() {
		$( "[style]" ).each(function(){
			$.data( this, "savedStyle", $( this ).attr( "style" ) );
		} );
	},
	restoreStyle: function() {
		$( "[style]" ).each( function(){
			$( this ).removeAttr( "style" );
		} );
		$( ":data(savedStyle)" ).each( function(){
			$( this ).attr( "style", $.data( this, "savedStyle" ) );
		} );
	},
	images: {
		"bullethole": "http://pngimg.com/upload/bullet_hole_PNG6062.png",
		"explosion": "http://flashvhtml.com/html/img/action/explosion/Explosion_Sequence_A%208.png",
		"pony": "http://img3.wikia.nocookie.net/__cb20110915190300/mlp/images/f/fb/Canterlot_Castle_Rainbow_Dash_3.png",
		"battledroid": "https://www.sideshowtoy.com/wp-content/uploads/2013/08/100284-product-silo.png",
		"stormtrooper": "http://www.digitaltoolsforarchitects.com/wp-content/uploads/2012/12/Storm-Trooper_bw.png",
		"stardestroyer": "http://i86.photobucket.com/albums/k81/trekkie313/2212copy.png",
		"xwing": "http://thxalot.org/skits/gifdisko/Area51/img_transparent/gdxwing.gif",
		"tiefighter": "http://www.csit.parkland.edu/~ddallas/csc233/lectures/Images/tiefighter.png"
	},
	intervals: {
		partyMode: [],
		iHaveTheSpins: [],
		iAmTheSpoon: [],
		boomBaby: [],
		visualize: []
	},
	stylesheet: $( "<style>" ).appendTo( "head")
};

$( window ).on( "resize", function(){
	effects.height = $( window ).height;
	effects.width = $( window ).width;
});

$( document ).on( "keydown", effects.kill );
