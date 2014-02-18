$().ready( function() {
	$('.brand-tab').click(function() {
    switchActiveElements(this, '.brand-tab', 'active-brand');
		hideComponentsVisualization($(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    switchActiveElements(this, '.comp-tab', 'active-comp');
    $('#right-container').removeClass('hidden');
    if (!'.brand-tab.active-brand') {
      $('#all').addClass('active-brand');
    }
    var component = $(this).attr('id');

    $('#telefonica-ifr').attr('src', componentRoute(component, 'telefonica'));
    $('#movistar-ifr').attr('src', componentRoute(component, 'movistar'));
    $('#vivo-ifr').attr('src', componentRoute(component, 'vivo'));
    //$('#o2-ifr').attr('src', componentRoute(component, 'o2'));

    //console.log($('#telefonica-ifr').contents().find('body').height());
  });

});

function componentRoute(component, brand) {
  return 'templates/' + brand + '/' + component + '.html';
}

function hideComponentsVisualization(brand) {
  if (brand === "all") {
    $('.iframe').show();
    $('.brand-title').show();
  }
  else {
    $('.iframe').hide();
    $('#' + brand + '-ifr').show();
    $('.brand-title').hide();
  }
}

function switchActiveElements(element, elementClass, activeClass) {
  $(element).toggleClass(activeClass);
  $(elementClass).not(element).removeClass(activeClass);
}
