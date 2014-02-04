$().ready( function() {

	$('.brand-tab').click(function() {
    $(this).toggleClass('brand-clicked');
    $('.brand-tab').not(this).removeClass('brand-clicked');
		filter($(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    $('#iframe').src = componentRoute($(this).attr('id'));
    console.log($('#iframe').src);
  });

});

function filter(brand) {
	console.log('filtro por ' + brand);
}

function componentRoute(component) {
  return '../templates/' + component + '.html';
}
