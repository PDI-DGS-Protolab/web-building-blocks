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

  $(".component-img").draggable({ 
      containment:"#right-container",
      revert: true
  });

  $("#testing-container").droppable({
      tolerance: 'fit',

      drop: function( event, ui ) {
        if (ui.draggable.hasClass("normal")) {
          $(this).append('<div class="input-container"><input id="full-name" type="text"></input><div id="input-hint"></div><div id="error-container"><a id="error-message"></a></div></div>');
        } else if (ui.draggable.hasClass("refresh")) {
          $(this).append('<div class="input-container"><input disabled class="special-full-name" type="text"></input><button class="refresh-btt btt-input"><img src="img/refresh.png"/></button></div>');
        } else if (ui.draggable.hasClass("add")) {
          $(this).append('<div class="input-container"><input class="special-full-name" type="text"></input><button class="plus-btt btt-input"><img src="img/more.png"/></button></div>');
        } else if (ui.draggable.hasClass("quit")) {
          $(this).append('<div class="input-container"><input class="special-full-name" type="text"></input><button class="less-btt btt-input"><img src="img/less.png"/></button></div>');
      }
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
