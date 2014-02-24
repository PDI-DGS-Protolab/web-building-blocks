$().ready( function() {
	$('.brand-tab').click(function() {
    switchActiveElements(this, '.brand-tab', 'active-brand');
		hideComponentsVisualization($(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    switchActiveElements(this, '.comp-tab', 'active-comp');
    $('#right-container').removeClass('hidden');
    if (!$('.brand-tab').hasClass('active-brand')) {
      $('#all').addClass('active-brand');
    }
    var component = $(this).attr('id');

    $('#telefonica-ifr').attr('src', componentRoute(component, 'telefonica'));
    $('#movistar-ifr').attr('src', componentRoute(component, 'movistar'));
    $('#vivo-ifr').attr('src', componentRoute(component, 'vivo'));
    //$('#o2-ifr').attr('src', componentRoute(component, 'o2'));
  });

  
  function resizeIframe(iframe) {
    $(iframe).height($(iframe)[0].contentDocument.body.scrollHeight);
  }

  $('#telefonica-ifr').load(function() {
    resizeIframe('#telefonica-ifr');
  });

  $('#movistar-ifr').load(function() {
    resizeIframe('#movistar-ifr');
  });

  $('#vivo-ifr').load(function() {
    resizeIframe('#vivo-ifr');
  });

  $('#o2-ifr').load(function() {
    resizeIframe('#vivo-ifr');
  });

  $(window).resize(function() {
    resizeIframe('#telefonica-ifr');
    resizeIframe('#movistar-ifr');
    resizeIframe('#vivo-ifr');
    resizeIframe('#o2-ifr');
  });

});

function componentRoute(component, brand) {
  return 'templates/' + brand + '/' + component + '.html';
}

function hideComponentsVisualization(brand) {
  if (brand === "all") {
    $('.iframe').parent().removeClass('hidden');
    $('.brand-title').show();
  }
  else {
    $('.iframe').parent().addClass('hidden');
    $('#' + brand + '-ifr').parent().removeClass('hidden');
    $('.brand-title').hide();
  }
}

function switchActiveElements(element, elementClass, activeClass) {
  $(element).addClass(activeClass);
  $(elementClass).not(element).removeClass(activeClass);
}
