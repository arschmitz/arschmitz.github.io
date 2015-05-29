// Effects
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split(''),
		color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

$.fn.rotate = function( angle, duration, easing, complete ) {
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
	};
function generateRule( ruleObject, selector ) {
		var rule = selector + " { ";
		$.each( ruleObject, function( prop, value ) {
			rule += prop + " : " + value + ";";
		});
		rule += " }";
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

// Run the currently selected effect
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
		}

	// Run the effect
	$( element ).effect( selectedEffect, options, 500, callback );
}
