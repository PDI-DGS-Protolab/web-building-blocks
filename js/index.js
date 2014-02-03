$().ready( function() {
	$( '.brand-tab' ).click( function() {
		filter( $( this ).attr( 'id' ) );
	} );
} );

function filter( brand ) {
	console.log( 'filtro por ' + brand );
}
