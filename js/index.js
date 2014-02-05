$().ready( function() {

	$('.brand-tab').click(function() {
    $(this).toggleClass('brand-clicked');
    $('.brand-tab').not(this).removeClass('brand-clicked');
		filter($(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    $('#right-container').removeClass('hidden');
    $('#all').toggleClass('brand-clicked');
    $('#visualization-container h3').text($(this).text());
    $('#iframe').attr('src', componentRoute($(this).attr('id')));
  });

});

function filter(brand) {
	console.log('filtro por ' + brand);
}

function componentRoute(component) {
  return 'templates/' + component + '.html';
}
