$().ready( function() {
	$( '.brand-tab' ).click( function() {
    $( this ).toggleClass( 'brand-clicked' );
    $( '.brand-tab' ).not(this).removeClass( 'brand-clicked' );
		filter( $( this ).attr( 'id' ) );
  } );
} );

function filter( brand ) {
	console.log( 'filtro por ' + brand );
}
