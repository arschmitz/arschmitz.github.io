(function(){
var temp = []
	.concat( arschmitz.projects[ "jquery-ui" ].builtWith )
	.concat( arschmitz.projects[ "jquery-mobile" ].builtWith )
	.concat( arschmitz.projects[ "hammer.js" ].builtWith );

var sorted = [];
var finalSort = [];

$.each( temp, function( index, value ) {
	sorted[ parseInt( value.Quantcast, 10 ) ] = value;
});
sorted.forEach(function( value ){
	finalSort.push( value );
});

arschmitz.aboutMe.builtWith = finalSort;
})();