var fs = require( "fs-extra" );
var request = require( "superagent" );
var _ = require( "lodash" );

module.exports = function ( grunt ) {
	grunt.registerTask( "site", function() {
		var done = this.async();
		var coreData;
		var site = {};
		var sites = {};
		var temp = [];
		var sorted = [];
		var files = fs.readdirSync( process.cwd() + "/src/site" );
		files.forEach( function( name ) {
			site[ name.replace( /\.js/, "" ) ] = require( process.cwd() + "/src/site/" + name );
		} );
		var requests = [];
		[ "jquery", "jquery-ui", "jquery-mobile", "hammer.js" ].forEach( function( value ) {
			var isCore = value === "jquery";
			var name = isCore ? "jQuery" : site.projects[ value ].libScore.name;
			var libscore = new Promise( ( resolve, reject ) => {
				request
					.get( "http://api.libscore.com/v1/libraries/" + name )
					.end( ( err, res ) => {
						if ( err ) {
							reject( err );
						}

						var siteArr = JSON.parse( res.text ).sites;
						if ( !isCore ) {
							site.projects[ value ].libScore.sites = siteArr.slice( 0, 100 );
							site.projects[ value ].libScore.short = siteArr.slice( 0, 69 );
						} else {
							coreData = siteArr;
						}
						siteArr.forEach( ( result ) => {
							if ( !sites[ result.url ] ) {
								sites[ result.url ] = result;
							}
							sites[ result.url ].lib = sites[ result.url ].lib || [];
							if ( sites[ result.url ].lib.indexOf( value ) === -1 ) {
								sites[ result.url ].lib.push( name );
							}
						} );
						resolve();
					} );
			} );
			requests.push( libscore );
		} );

		Promise.all( requests ).then( () => {
			_.each( sites, ( value ) => {
				temp[ parseInt( value.rank, 10 ) ] = value;
			} );
			temp.forEach( function( value ) {
				sorted.push( value );
			} );
			site.aboutMe.libScore = sorted.slice( 0, 69 );
			site.menu = Object.keys( site );
			site.menu.push( "effects" );
			console.log( site.menu );
			fs.outputFileSync( process.cwd() + "/dist/site.js", "window.arschmitz=" + JSON.stringify( site, undefined, 4 ) );
			fs.outputJSONSync( process.cwd() + "/dist/site.json", site );
			done();
		} );
	} );
};
