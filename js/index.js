$().ready( function() {
  
  var htmlString = 
  '<div id="input-telefonica" class="visualization-container inputs-container">'
    +'<h3 class="brand-title components-container">Telefónica</h3>'
    +'<h3 class="common-title">Input Boxes</h3>'
    +'<img src="img/components/telefonica/input/normal.png" class="telefonica component-img img-input normal" title="This is the normal status for the input box, when it is not focused."/>'
    +'<img src="img/components/telefonica/input/focused.png" class="telefonica component-img img-input normal" title="This is the focused status for the input box."/>'
    +'<img src="img/components/telefonica/input/error.png" class="telefonica component-img img-input normal" title="This is the error status for the input box."/>'
    +'<img src="img/components/telefonica/input/succed.png" class="telefonica component-img img-input normal" title="This is the success status for the input box."/>'
    +'<img src="img/components/telefonica/input/refresh.png" class="telefonica component-img img-input refresh" title="This is a refreshable input box."/>'
    +'<img src="img/components/telefonica/input/add.png" class="telefonica component-img img-input add" title="You can create new input boxes using the addition button."/>'
    +'<img src="img/components/telefonica/input/quit.png" class="telefonica component-img img-input quit" title="You can delete this input box using the quit button."/>'
    +'<button type="submit" id="telefonica-input" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="input-movistar" class="visualization-container inputs-container">'
    +'<h3 class="brand-title components-container">Movistar</h3>'
    +'<h3 class="common-title">Input Boxes</h3>'
    +'<img src="img/components/movistar/input/normal.png" class="movistar component-img img-input normal" title="This is the normal status for the input box, when it is not focused."/>'
    +'<img src="img/components/movistar/input/focused.png" class="movistar component-img img-input normal" title="This is the focused status for the input box."/>'
    +'<img src="img/components/movistar/input/error.png" class="movistar component-img img-input normal" title="This is the error status for the input box."/>'
    +'<img src="img/components/movistar/input/succed.png" class="movistar component-img img-input normal" title="This is the success status for the input box."/>'
    +'<img src="img/components/movistar/input/refresh.png" class="movistar component-img img-input refresh" title="This is a refreshable input box."/>'
    +'<img src="img/components/movistar/input/add.png" class="movistar component-img img-input add" title="You can create new input boxes using the addition button."/>'
    +'<img src="img/components/movistar/input/quit.png" class="movistar component-img img-input quit" title="You can delete this input box using the quit button."/>'
    +'<button type="submit" id="movistar-input" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="input-vivo" class="visualization-container inputs-container">'
    +'<h3 class="brand-title components-container">Vivo</h3>'
    +'<h3 class="common-title">Input Boxes</h3>'
    +'<img src="img/components/vivo/input/normal.png" class="vivo component-img img-input normal" title="This is the normal status for the input box, when it is not focused."/>'
    +'<img src="img/components/vivo/input/focused.png" class="vivo component-img img-input normal" title="This is the focused status for the input box."/>'
    +'<img src="img/components/vivo/input/error.png" class="vivo component-img img-input normal" title="This is the error status for the input box."/>'
    +'<img src="img/components/vivo/input/succed.png" class="vivo component-img img-input normal" title="This is the success status for the input box."/>'
    +'<img src="img/components/vivo/input/refresh.png" class="vivo component-img img-input refresh" title="This is a refreshable input box."/>'
    +'<img src="img/components/vivo/input/add.png" class="vivo component-img img-input add" title="You can create new input boxes using the addition button."/>'
    +'<img src="img/components/vivo/input/quit.png" class="vivo component-img img-input quit" title="You can delete this input box using the quit button."/>'
    +'<button type="submit" id="vivo-input" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="input-o2" class="visualization-container inputs-container">'
    +'<h3 class="brand-title components-container">O2</h3>'
    +'<h3 class="common-title">Input Boxes</h3>'
    +'<img src="img/components/o2/input/normal.png" class="o2 component-img img-input normal" title="This is the normal status for the input box, when it is not focused."/>'
    +'<img src="img/components/o2/input/focused.png" class="o2 component-img img-input normal" title="This is the focused status for the input box."/>'
    +'<img src="img/components/o2/input/error.png" class="o2 component-img img-input normal" title="This is the error status for the input box."/>'
    +'<img src="img/components/o2/input/succed.png" class="o2 component-img img-input normal" title="This is the success status for the input box."/>'
    +'<img src="img/components/o2/input/refresh.png" class="o2 component-img img-input refresh" title="This is a refreshable input box."/>'
    +'<img src="img/components/o2/input/add.png" class="o2 component-img img-input add" title="You can create new input boxes using the addition button."/>'
    +'<img src="img/components/o2/input/quit.png" class="o2 component-img img-input quit" title="You can delete this input box using the quit button."/>'
    +'<button type="submit" id="o2-input" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-telefonica" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">Telefónica</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/telefonica/button/neutral-normal.png" class="telefonica component-img img-button neutral" title=""/>'
    +'<img src="img/components/telefonica/button/neutral-hover.png" class="telefonica component-img img-button neutral" title=""/>'
    +'<img src="img/components/telefonica/button/neutral-pressed.png" class="telefonica component-img img-button neutral" title=""/>'
    +'<img src="img/components/telefonica/button/neutral-disable.png" class="telefonica component-img img-button neutral" title=""/>'
    +'<img src="img/components/telefonica/button/positive-normal.png" class="telefonica component-img img-button positive" title=""/>'
    +'<img src="img/components/telefonica/button/positive-hover.png" class="telefonica component-img img-button positive" title=""/>'
    +'<img src="img/components/telefonica/button/positive-pressed.png" class="telefonica component-img img-button positive" title=""/>'
    +'<img src="img/components/telefonica/button/positive-disable.png" class="telefonica component-img img-button positive" title=""/>'
    +'<img src="img/components/telefonica/button/negative-normal.png" class="telefonica component-img img-button negative" title=""/>'
    +'<img src="img/components/telefonica/button/negative-hover.png" class="telefonica component-img img-button negative" title=""/>'
    +'<img src="img/components/telefonica/button/negative-pressed.png" class="telefonica component-img img-button negative" title=""/>'
    +'<img src="img/components/telefonica/button/negative-disable.png" class="telefonica component-img img-button negative" title=""/>'
    +'<img src="img/components/telefonica/button/subdued-normal.png" class="telefonica component-img img-button subdued" title=""/>'
    +'<img src="img/components/telefonica/button/subdued-hover.png" class="telefonica component-img img-button subdued" title=""/>'
    +'<img src="img/components/telefonica/button/subdued-pressed.png" class="telefonica component-img img-button subdued" title=""/>'
    +'<img src="img/components/telefonica/button/subdued-disable.png" class="telefonica component-img img-button subdued" title=""/>'
    +'<button type="submit" id="telefonica-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-movistar" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">Movistar</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/movistar/button/neutral-normal.png" class="movistar component-img img-button neutral" title=""/>'
    +'<img src="img/components/movistar/button/neutral-hover.png" class="movistar component-img img-button neutral" title=""/>'
    +'<img src="img/components/movistar/button/neutral-pressed.png" class="movistar component-img img-button neutral" title=""/>'
    +'<img src="img/components/movistar/button/neutral-disable.png" class="movistar component-img img-button neutral" title=""/>'
    +'<img src="img/components/movistar/button/positive-normal.png" class="movistar component-img img-button positive" title=""/>'
    +'<img src="img/components/movistar/button/positive-hover.png" class="movistar component-img img-button positive" title=""/>'
    +'<img src="img/components/movistar/button/positive-pressed.png" class="movistar component-img img-button positive" title=""/>'
    +'<img src="img/components/movistar/button/positive-disable.png" class="movistar component-img img-button positive" title=""/>'
    +'<img src="img/components/movistar/button/negative-normal.png" class="movistar component-img img-button negative" title=""/>'
    +'<img src="img/components/movistar/button/negative-hover.png" class="movistar component-img img-button negative" title=""/>'
    +'<img src="img/components/movistar/button/negative-pressed.png" class="movistar component-img img-button img-button negative" title=""/>'
    +'<img src="img/components/movistar/button/negative-disable.png" class="movistar component-img img-button negative" title=""/>'
    +'<img src="img/components/movistar/button/subdued-normal.png" class="movistar component-img img-button subdued" title=""/>'
    +'<img src="img/components/movistar/button/subdued-hover.png" class="movistar component-img img-button subdued" title=""/>'
    +'<img src="img/components/movistar/button/subdued-pressed.png" class="movistar component-img img-button subdued" title=""/>'
    +'<img src="img/components/movistar/button/subdued-disable.png" class="movistar component-img img-button subdued" title=""/>'
    +'<button type="submit" id="movistar-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-vivo" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">Vivo</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/vivo/button/neutral-normal.png" class="vivo component-img img-button neutral" title=""/>'
    +'<img src="img/components/vivo/button/neutral-hover.png" class="vivo component-img img-button neutral" title=""/>'
    +'<img src="img/components/vivo/button/neutral-pressed.png" class="vivo component-img img-button neutral" title=""/>'
    +'<img src="img/components/vivo/button/neutral-disable.png" class="vivo component-img img-button neutral" title=""/>'
    +'<img src="img/components/vivo/button/positive-normal.png" class="vivo component-img img-button positive" title=""/>'
    +'<img src="img/components/vivo/button/positive-hover.png" class="vivo component-img img-button positive" title=""/>'
    +'<img src="img/components/vivo/button/positive-pressed.png" class="vivo component-img img-button positive" title=""/>'
    +'<img src="img/components/vivo/button/positive-disable.png" class="vivo component-img img-button positive" title=""/>'
    +'<img src="img/components/vivo/button/negative-normal.png" class="vivo component-img img-button negative" title=""/>'
    +'<img src="img/components/vivo/button/negative-hover.png" class="vivo component-img img-button negative" title=""/>'
    +'<img src="img/components/vivo/button/negative-pressed.png" class="vivo component-img img-button img-button negative" title=""/>'
    +'<img src="img/components/vivo/button/negative-disable.png" class="vivo component-img img-button negative" title=""/>'
    +'<img src="img/components/vivo/button/subdued-normal.png" class="vivo component-img img-button subdued" title=""/>'
    +'<img src="img/components/vivo/button/subdued-hover.png" class="vivo component-img img-button subdued" title=""/>'
    +'<img src="img/components/vivo/button/subdued-pressed.png" class="vivo component-img img-button subdued" title=""/>'
    +'<img src="img/components/vivo/button/subdued-disable.png" class="vivo component-img img-button subdued" title=""/>'
    +'<button type="submit" id="vivo-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-o2" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">O2</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img class="o2 component-img img-button"/>'
    +'<button type="submit" id="o2-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>';
  
  $('#components-container').empty().append(htmlString);
  $('#components-container').ready(function() {
    $('img').tooltip({position: {my: 'left+15 center', at: 'right center'}});
  });

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

  $('.component-img').draggable({ 
      containment: '#right-container',
      revert: true,
      helper: 'clone' 
  });

  $('#testing-container, #selection-container').droppable({
      tolerance: 'fit',

      drop: function(event, ui) {
        var brand = '';
        if (ui.draggable.hasClass('telefonica')) {
          brand = 'telefonica';
        } else if (ui.draggable.hasClass('movistar')) {
          brand = 'movistar';
        } else if (ui.draggable.hasClass('vivo')) {
          brand = 'vivo';
        } else if (ui.draggable.hasClass('o2')) {
          brand = 'o2';
        }

        if (ui.draggable.hasClass('img-input')) {
          addInput(ui.draggable, $(this), brand);
        } else if (ui.draggable.hasClass('img-button')) {
          addButton(ui.draggable, $(this), brand)
        }

        toggleQuitIcons($($(this).find('.trash')).hasClass('on'), $(this).find(".quit-icon"));
    }
  });

  $('.trash').click(function() {
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
      $(this).addClass('on');
    }
  });

  $('#trash-test').click(function() {
    toggleQuitIcons($(this).hasClass('on'), $('#testing-container .quit-icon'));
    toggleClearAll($(this).hasClass('on'), $('#clear-all-test'));
  });

  $('#trash-keep').click(function() {
    toggleQuitIcons($(this).hasClass('on'), $('#selection-container .quit-icon'));
    toggleClearAll($(this).hasClass('on'), $('#clear-all-keep'));
  });

  $(document).on('click', '.quit-icon', function () {
    $(this).parent().remove();
  });

  $('#clear-all-test').click(function() {
    $('#testing-container .quit-icon').trigger('click');
  });

  $('#clear-all-keep').click(function() {
    $('#selection-container .quit-icon').trigger('click');
  });

  $('.clear-all').hide();
  $('.quit-icon').hide();
});

function toggleQuitIcons(toggle, icons) {
    if (toggle) {
      icons.show();
    } else {
      icons.hide();
    }
}

function toggleClearAll(toggle, text) {
    if (toggle) {
      text.show();
    } else {
      text.hide();
    }
}

function addInput(draggable, parent, brand) {
  if (draggable.hasClass('normal')) {
    parent.append('<div class="input-container"><div class="quit-icon"></div><input class="' + brand +  ' input" type="text"></input><div class="input-hint"></div><div class="' + brand +  ' error-container"><a class="' + brand +  ' error-message"></a></div></div>');
  } else if (draggable.hasClass('refresh')) {
    parent.append('<div class="input-container"><div class="quit-icon"></div><input disabled class="' + brand + ' special-input" type="text"></input><button class="' + brand + ' btt-refresh btt-input"><img src="img/refresh.png"/></button></div>');
  } else if (draggable.hasClass('add')) {
    parent.append('<div class=".input-container-plus-less"><div class="input-container"><div class="quit-icon"></div><input class="' + brand + ' special-input" type="text"></input><button class="' + brand + ' btt-plus btt-input"><img src="img/more.png"/></button></div></div>');
  } else if (draggable.hasClass('quit')) {
    parent.append('<div class=".input-container-plus-less"><div class="input-container"><div class="quit-icon"></div><input class="' + brand + ' special-input" type="text"></input><button class="' + brand + ' btt-less btt-input"><img src="img/less.png"/></button></div></div>');
  }
}

function getButtonType(draggable) {
  if (draggable.hasClass('neutral')) {
    return 'neutral';
  } else if (draggable.hasClass('positive')) {
    return 'positive';
  } else if (draggable.hasClass('negative')) {
    return 'negative';
  } else if (draggable.hasClass('subdued')) {
    return 'subdued';
  }
}

function addButton(draggable, parent, brand) {
  var type = getButtonType(draggable);
  parent.append('<div class="button-back" ><div class="quit-icon"></div><button type="submit" class="' + brand + ' button btt-' + type + '" enabled="">' + toTitleCase(type) + '</button></div>');
}

function hideComponentsVisualization(containerId, brand) {
  if (brand === 'all') {
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

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}