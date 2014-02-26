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
  });
});

function hideComponentsVisualization(brand) {
  if (brand === "all") {
    $('.visualization-container').removeClass('hidden');
    $('.brand-title').show();
  }
  else {
    $('.visualization-container').addClass('hidden');
    component = $('.active-comp').attr('id');
    $('#' + component + '-' + brand).removeClass('hidden');
    $('.brand-title').hide();
  }
}

function switchActiveElements(element, elementClass, activeClass) {
  $(element).addClass(activeClass);
  $(elementClass).not(element).removeClass(activeClass);
}
