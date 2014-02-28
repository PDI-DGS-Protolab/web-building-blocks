$().ready( function() {
	$('.brand-tab').click(function() {
    switchActiveElements(this, '.brand-tab', 'active-brand');
		hideComponentsVisualization($('.active-comp').attr('data-component-container'), $(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    switchActiveElements(this, '.comp-tab', 'active-comp');
    $('#right-container').removeClass('hidden');
    if (!$('.brand-tab').hasClass('active-brand')) {
      $('#all').addClass('active-brand');
    }
    hideComponentsVisualization($(this).attr('data-component-container'), $('.active-brand').attr('id'));
  });

  $(".component-img").draggable({ 
      containment:"#right-container",
      revert: true,
      helper: 'clone' 
  });

  $("#testing-container").droppable({
      tolerance: 'fit',

      drop: function( event, ui ) {
        console.log(ui.draggable);

        var brand = "";
        if (ui.draggable.hasClass("telefonica")) {
          brand = "telefonica";
        } else if (ui.draggable.hasClass("movistar")) {
          brand = "movistar";
        } else if (ui.draggable.hasClass("vivo")) {
          brand = "vivo";
        } else if (ui.draggable.hasClass("o2")) {
          brand = "o2";
        }

        console.log(brand);

        if (ui.draggable.hasClass("input")) {
          addInput(ui.draggable, $(this), brand);
        } else if (ui.draggable.hasClass("button")) {
          addButton(ui.draggable, $(this), brand)
        }
    }
  });
});

function addInput(draggable, parent, brand) {
  if (draggable.hasClass("normal")) {
    parent.append('<div class="input-container"><input class="' + brand + '" id="full-name" type="text"></input><div id="input-hint"></div><div id="error-container"><a id="error-message"></a></div></div>');
  } else if (draggable.hasClass("refresh")) {
    parent.append('<div class="input-container"><input disabled class="' + brand + ' special-full-name" type="text"></input><button class="' + brand + ' btt-refresh btt-input"><img src="img/refresh.png"/></button></div>');
  } else if (draggable.hasClass("add")) {
    parent.append('<div id="#input-container-plus-less" class="input-container"><input class="' + brand + ' special-full-name" type="text"></input><button class="' + brand + ' btt-plus btt-input"><img src="img/more.png"/></button></div>');
  } else if (draggable.hasClass("quit")) {
    parent.append('<div id="#input-container-plus-less" class="input-container"><input class="' + brand + ' special-full-name" type="text"></input><button class="' + brand + ' btt-less btt-input"><img src="img/less.png"/></button></div>');
  }
}

function addButton(draggable, parent, brand) {

  
}

function hideComponentsVisualization(containerId, brand) {
  if (brand === "all") {
    $('.visualization-container').addClass('hidden');
    $('.' + containerId).removeClass('hidden');
    $('.brand-title.' + containerId).show();
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
