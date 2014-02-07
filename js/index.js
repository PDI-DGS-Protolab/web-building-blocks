$().ready( function() {

	$('.brand-tab').click(function() {
    $(this).toggleClass('brand-clicked');
    $('.brand-tab').not(this).removeClass('brand-clicked');
		hideComponentsVisualization($(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    $('#right-container').removeClass('hidden');
    $('#all').addClass('brand-clicked');
    var component = $(this).attr('id');
    $('#telefonica-ifr').attr('src', componentRoute(component, 'telefonica'));
    $('#movistar-ifr').attr('src', componentRoute(component, 'movistar'));
    $('#vivo-ifr').attr('src', componentRoute(component, 'vivo'));
    //$('#o2-ifr').attr('src', componentRoute(component, 'o2'));
  });

});

function componentRoute(component, brand) {
  return 'templates/' + brand + '/' + component + '.html';
}

function hideComponentsVisualization(brand) {
  if (brand === "all") {
    $('.iframe').show();
    $('.iframe').getElementsByClassName('brand-title').show();
  }
  else {
    $('.iframe').hide();
    $('#' + brand + '-ifr').show();
    $('.iframe').getElementsByClassName('brand-title').hide();
  }
}
