window.searchHash = {};
window.lookup = [];
window.searchObject = function( search, key, depth ) {
	window.searchObject.count += 1;
	function searcher( search, key, current ) {
		searchHash[ key ] = searchHash[ key ] || [];
		if ( search ) {
			$.each( search, function( index, value ) {
				if ( index === key  && index !== "searchHash" ) {
					searchHash[ key ].push( value );
				} else if ( typeof value === "object" && window.lookup.indexOf( value ) === -1  && index !== "searchHash" ) {
					console.log( "deeper..." );
					console.log( index )
					window.lookup.push( value );
					if ( search && current < depth ) {
						searcher( value, key, current + 1 );
					}
				}
			} );
		}
	}
	searcher( search, key, 0 );
	return searchHash[ key ].reverse().slice( 1 ).join( " " );
}

window.searchObject.count = 0;
