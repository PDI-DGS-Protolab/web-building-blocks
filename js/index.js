$(document).ready(function() {
  
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
    +'<img src="img/components/telefonica/button/neutral-normal.png" class="telefonica component-img img-button neutral" title="This is the normal status for the neutral button."/>'
    +'<img src="img/components/telefonica/button/neutral-hover.png" class="telefonica component-img img-button neutral" title="This is the hover status for the neutral button."/>'
    +'<img src="img/components/telefonica/button/neutral-pressed.png" class="telefonica component-img img-button neutral" title="This is the pressed status for the neutral button."/>'
    +'<img src="img/components/telefonica/button/neutral-disable.png" class="telefonica component-img img-button neutral" title="This is the disabled status for the neutral button."/>'
    +'<img src="img/components/telefonica/button/positive-normal.png" class="telefonica component-img img-button positive" title="This is the normal status for the positive button."/>'
    +'<img src="img/components/telefonica/button/positive-hover.png" class="telefonica component-img img-button positive" title="This is the hover status for the positive button."/>'
    +'<img src="img/components/telefonica/button/positive-pressed.png" class="telefonica component-img img-button positive" title="This is the pressed status for the positive button."/>'
    +'<img src="img/components/telefonica/button/positive-disable.png" class="telefonica component-img img-button positive" title="This is the disabled status for the positive button."/>'
    +'<img src="img/components/telefonica/button/negative-normal.png" class="telefonica component-img img-button negative" title="This is the normal status for the negative button."/>'
    +'<img src="img/components/telefonica/button/negative-hover.png" class="telefonica component-img img-button negative" title="This is the hover status for the negative button."/>'
    +'<img src="img/components/telefonica/button/negative-pressed.png" class="telefonica component-img img-button negative" title="This is the pressed status for the negative button."/>'
    +'<img src="img/components/telefonica/button/negative-disable.png" class="telefonica component-img img-button negative" title="This is the disabled status for the negative button."/>'
    +'<img src="img/components/telefonica/button/subdued-normal.png" class="telefonica component-img img-button subdued" title="This is the normal status for the subdued button."/>'
    +'<img src="img/components/telefonica/button/subdued-hover.png" class="telefonica component-img img-button subdued" title="This is the hover status for the subdued button."/>'
    +'<img src="img/components/telefonica/button/subdued-pressed.png" class="telefonica component-img img-button subdued" title="This is the pressed status for the subdued button."/>'
    +'<img src="img/components/telefonica/button/subdued-disable.png" class="telefonica component-img img-button subdued" title="This is the disabled status for the subdued button."/>'
    +'<button type="submit" id="telefonica-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-movistar" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">Movistar</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/movistar/button/neutral-normal.png" class="movistar component-img img-button neutral" title="This is the normal status for the neutral button."/>'
    +'<img src="img/components/movistar/button/neutral-hover.png" class="movistar component-img img-button neutral" title="This is the hover status for the neutral button."/>'
    +'<img src="img/components/movistar/button/neutral-pressed.png" class="movistar component-img img-button neutral" title="This is the pressed status for the neutral button."/>'
    +'<img src="img/components/movistar/button/neutral-disable.png" class="movistar component-img img-button neutral" title="This is the disabled status for the neutral button."/>'
    +'<img src="img/components/movistar/button/positive-normal.png" class="movistar component-img img-button positive" title="This is the normal status for the positive button."/>'
    +'<img src="img/components/movistar/button/positive-hover.png" class="movistar component-img img-button positive" title="This is the hover status for the positive button."/>'
    +'<img src="img/components/movistar/button/positive-pressed.png" class="movistar component-img img-button positive" title="This is the pressed status for the positive button."/>'
    +'<img src="img/components/movistar/button/positive-disable.png" class="movistar component-img img-button positive" title="This is the disabled status for the positive button."/>'
    +'<img src="img/components/movistar/button/negative-normal.png" class="movistar component-img img-button negative" title="This is the normal status for the negative button."/>'
    +'<img src="img/components/movistar/button/negative-hover.png" class="movistar component-img img-button negative" title="This is the hover status for the negative button."/>'
    +'<img src="img/components/movistar/button/negative-pressed.png" class="movistar component-img img-button negative" title="This is the pressed status for the negative button."/>'
    +'<img src="img/components/movistar/button/negative-disable.png" class="movistar component-img img-button negative" title="This is the disabled status for the negative button."/>'
    +'<img src="img/components/movistar/button/subdued-normal.png" class="movistar component-img img-button subdued" title="This is the normal status for the subdued button."/>'
    +'<img src="img/components/movistar/button/subdued-hover.png" class="movistar component-img img-button subdued" title="This is the hover status for the subdued button."/>'
    +'<img src="img/components/movistar/button/subdued-pressed.png" class="movistar component-img img-button subdued" title="This is the pressed status for the subdued button."/>'
    +'<img src="img/components/movistar/button/subdued-disable.png" class="movistar component-img img-button subdued" title="This is the disabled status for the subdued button."/>'
    +'<button type="submit" id="movistar-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-vivo" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">Vivo</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/vivo/button/neutral-normal.png" class="vivo component-img img-button neutral" title="This is the normal status for the neutral button."/>'
    +'<img src="img/components/vivo/button/neutral-hover.png" class="vivo component-img img-button neutral" title="This is the hover status for the neutral button."/>'
    +'<img src="img/components/vivo/button/neutral-pressed.png" class="vivo component-img img-button neutral" title="This is the pressed status for the neutral button."/>'
    +'<img src="img/components/vivo/button/neutral-disable.png" class="vivo component-img img-button neutral" title="This is the disabled status for the neutral button."/>'
    +'<img src="img/components/vivo/button/positive-normal.png" class="vivo component-img img-button positive" title="This is the normal status for the positive button."/>'
    +'<img src="img/components/vivo/button/positive-hover.png" class="vivo component-img img-button positive" title="This is the hover status for the positive button."/>'
    +'<img src="img/components/vivo/button/positive-pressed.png" class="vivo component-img img-button positive" title="This is the pressed status for the positive button."/>'
    +'<img src="img/components/vivo/button/positive-disable.png" class="vivo component-img img-button positive" title="This is the disabled status for the positive button."/>'
    +'<img src="img/components/vivo/button/negative-normal.png" class="vivo component-img img-button negative" title="This is the normal status for the negative button."/>'
    +'<img src="img/components/vivo/button/negative-hover.png" class="vivo component-img img-button negative" title="This is the hover status for the negative button."/>'
    +'<img src="img/components/vivo/button/negative-pressed.png" class="vivo component-img img-button negative" title="This is the pressed status for the negative button."/>'
    +'<img src="img/components/vivo/button/negative-disable.png" class="vivo component-img img-button negative" title="This is the disabled status for the negative button."/>'
    +'<img src="img/components/vivo/button/subdued-normal.png" class="vivo component-img img-button subdued" title="This is the normal status for the subdued button."/>'
    +'<img src="img/components/vivo/button/subdued-hover.png" class="vivo component-img img-button subdued" title="This is the hover status for the subdued button."/>'
    +'<img src="img/components/vivo/button/subdued-pressed.png" class="vivo component-img img-button subdued" title="This is the pressed status for the subdued button."/>'
    +'<img src="img/components/vivo/button/subdued-disable.png" class="vivo component-img img-button subdued" title="This is the disabled status for the subdued button."/>'
    +'<button type="submit" id="vivo-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>'
  +'<div id="button-o2" class="visualization-container buttons-container">'
    +'<h3 class="brand-title buttons-container">O2</h3>'
    +'<h3 class="common-title">Buttons</h3>'
    +'<img src="img/components/o2/button/neutral-normal.png" class="o2 component-img img-button neutral" title="This is the normal status for the neutral button."/>'
    +'<img src="img/components/o2/button/neutral-hover.png" class="o2 component-img img-button neutral" title="This is the hover status for the neutral button."/>'
    +'<img src="img/components/o2/button/neutral-pressed.png" class="o2 component-img img-button neutral" title="This is the pressed status for the neutral button."/>'
    +'<img src="img/components/o2/button/neutral-disable.png" class="o2 component-img img-button neutral" title="This is the disabled status for the neutral button."/>'
    +'<img src="img/components/o2/button/positive-normal.png" class="o2 component-img img-button positive" title="This is the normal status for the positive button."/>'
    +'<img src="img/components/o2/button/positive-hover.png" class="o2 component-img img-button positive" title="This is the hover status for the positive button."/>'
    +'<img src="img/components/o2/button/positive-pressed.png" class="o2 component-img img-button positive" title="This is the pressed status for the positive button."/>'
    +'<img src="img/components/o2/button/positive-disable.png" class="o2 component-img img-button positive" title="This is the disabled status for the positive button."/>'
    +'<img src="img/components/o2/button/negative-normal.png" class="o2 component-img img-button negative" title="This is the normal status for the negative button."/>'
    +'<img src="img/components/o2/button/negative-hover.png" class="o2 component-img img-button negative" title="This is the hover status for the negative button."/>'
    +'<img src="img/components/o2/button/negative-pressed.png" class="o2 component-img img-button negative" title="This is the pressed status for the negative button."/>'
    +'<img src="img/components/o2/button/negative-disable.png" class="o2 component-img img-button negative" title="This is the disabled status for the negative button."/>'
    +'<img src="img/components/o2/button/subdued-normal.png" class="o2 component-img img-button subdued" title="This is the normal status for the subdued button."/>'
    +'<img src="img/components/o2/button/subdued-hover.png" class="o2 component-img img-button subdued" title="This is the hover status for the subdued button."/>'
    +'<img src="img/components/o2/button/subdued-pressed.png" class="o2 component-img img-button subdued" title="This is the pressed status for the subdued button."/>'
    +'<img src="img/components/o2/button/subdued-disable.png" class="o2 component-img img-button subdued" title="This is the disabled status for the subdued button."/>'
    +'<button type="submit" id="o2-button" class="download-btt">Download pack + guidelines</button>'
  +'</div>';
  
  $('#components-container').empty().append(htmlString);
  $('#components-container').ready(function() {
    $('img').tooltip({position: {my: 'left+15 center', at: 'right center'}});
  });

  $('#selection-container').tooltip({position: {my: 'left+10 center', at: 'right center'}});

  $('.brand-tab').click(function() {
    switchActiveElements(this, '.brand-tab', 'active-brand');
    hideComponentsVisualization($('.active-comp').attr('data-component-container'), $(this).attr('id'));
  });

  $('.comp-tab').click(function() {
    var lastComponent = $('.active-comp').attr('id');
    switchActiveElements(this, '.comp-tab', 'active-comp');
    $('#right-container').removeClass('hidden');
    if (!$('.brand-tab').hasClass('active-brand')) {
      $('#informative-text').addClass('hidden');
      $('#all').addClass('active-brand');
    }

    if (lastComponent != $(this).attr('id')) {
      if (lastComponent === 'table' && $(this).attr('id') === 'payment-form') {
        $('#table-building-container').addClass('hidden');        
        $('#payment-container').removeClass('hidden');
      }
      else if (lastComponent === 'payment-form' && $(this).attr('id') === 'table') {
        $('#payment-container').addClass('hidden');
        $('#table-building-container').removeClass('hidden');
        document.getElementById('payment-form-container').reset();
      }
      else if ($(this).attr('id') === 'table') {
        $('#components-container').addClass('hidden');
        $('#testing-container').addClass('hidden');
        $('#table-building-container').removeClass('hidden');
        $('#static-container').removeClass('static-container-no-table');
        $('#static-container').addClass('static-container-table');
        $('#selection-container').removeClass('selection-container-no-table');
        $('#selection-container').addClass('selection-container-table');
        $('#all').addClass('hidden');
        if ($('#all').hasClass('active-brand')) {
            switchActiveElements($('#telefonica'), '.brand-tab', 'active-brand');
            hideComponentsVisualization($(this).attr('data-component-container'), 'telefonica');
        }
      }
      else if ($(this).attr('id') === 'payment-form') {
        $('#components-container').addClass('hidden');
        $('#testing-container').addClass('hidden');
        $('#payment-container').removeClass('hidden');
        $('#static-container').removeClass('static-container-no-table');
        $('#static-container').addClass('static-container-table');
        $('#selection-container').removeClass('selection-container-no-table');
        $('#selection-container').addClass('selection-container-table');
        $('#all').addClass('hidden');
        if ($('#all').hasClass('active-brand')) {
            switchActiveElements($('#telefonica'), '.brand-tab', 'active-brand');
            hideComponentsVisualization($(this).attr('data-component-container'), 'telefonica');
        }
      }
      else if (lastComponent === 'table') {
        $('#all').removeClass('hidden');
        $('#table-building-container').addClass('hidden');
        $('#testing-container').removeClass('hidden');
        $('#components-container').removeClass('hidden');
        $('#selection-container').removeClass('selection-container-table');
        $('#selection-container').addClass('selection-container-no-table');
        $('#static-container').removeClass('static-container-table');
        $('#static-container').addClass('static-container-no-table');
        hideComponentsVisualization($(this).attr('data-component-container'), $('.active-brand').attr('id'));
      }
      else if (lastComponent === 'payment-form') {
        $('#all').removeClass('hidden');
        $('#payment-container').addClass('hidden');
        $('#testing-container').removeClass('hidden');
        $('#components-container').removeClass('hidden');
        $('#selection-container').removeClass('selection-container-table');
        $('#selection-container').addClass('selection-container-no-table');
        $('#static-container').removeClass('static-container-table');
        $('#static-container').addClass('static-container-no-table');
        document.getElementById('payment-form-container').reset();
        hideComponentsVisualization($(this).attr('data-component-container'), $('.active-brand').attr('id'));
      }
      else {
        hideComponentsVisualization($(this).attr('data-component-container'), $('.active-brand').attr('id'));
      }
    }
    else {
      switchActiveElements($('#all'), '.brand-tab', 'active-brand');
      hideComponentsVisualization($(this).attr('data-component-container'), $('.active-brand').attr('id'));
    }
  });

  $('.component-img, #table-building-container #table-container').draggable({ 
      containment: '#right-container',
      revert: true,
      helper: 'clone'
  });

  $('#testing-container, #selection-container').droppable({
      tolerance: 'pointer',
      drop: function(event, ui) {
        var components = $(this);
        var brand = getComponentBrand(ui.draggable);

        if (ui.draggable.hasClass('img-input')) {
          addInput(ui.draggable, components, brand);
        } else if (ui.draggable.hasClass('img-button')) {
          addButton(ui.draggable, components, brand);
        } else if (ui.draggable.attr('id') === ('table-container')) {
          addTable(ui.draggable, components, brand);
        }

        toggleQuitIcons($(components.find('.trash')).hasClass('on'), components.find(".quit-icon"));
    }
  });

  $('.trash').click(function() {
    var trash = $(this);
    if (trash.hasClass('on')) {
      trash.removeClass('on');
      trash.addClass('off');
    } else {
      trash.removeClass('off');
      trash.addClass('on');
    }
  });

  $('#trash-test').click(function() {
    var trashTest = $(this);
    toggleQuitIcons(trashTest.hasClass('on'), $('#testing-container .quit-icon'));
    toggleClearAll(trashTest.hasClass('on'), $('#clear-all-test'));
  });

  $('#trash-keep').click(function() {
    var trashKeep = $(this);
    toggleQuitIcons(trashKeep.hasClass('on'), $('#selection-container .quit-icon'));
    toggleClearAll(trashKeep.hasClass('on'), $('#clear-all-keep'));
  });

  $(document).on('click', '.quit-icon', function () {
    $(this).parent().remove();
  });

  $('#clear-all-test').click(function() {
    $('#testing-container .quit-icon').trigger('click');
    $('#trash-test').removeClass('on').addClass('off');
    toggleQuitIcons($('#trash-test').hasClass('on'), $('#selection-container .quit-icon'));
    toggleClearAll($('#trash-test').hasClass('on'), $('#clear-all-test'));
  });

  $('#clear-all-keep').click(function() {
    $('#selection-container .quit-icon').trigger('click');
    $('#trash-keep').removeClass('on').addClass('off');
    toggleQuitIcons($('#trash-keep').hasClass('on'), $('#selection-container .quit-icon'));
    toggleClearAll($('#trash-keep').hasClass('on'), $('#clear-all-keep'));
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

function getInputHtml(brand) {
  return  '<div class="input-container">\n'+
          '   <div class="quit-icon"></div>\n'+
          '   <input class="' + brand +  ' input" type="text" hint="Enter your full name as it appears on your card" error="Illegal characters. You can input only letters."></input>\n'+
          '   <div class="' + brand + ' input-hint"></div>\n'+
          '   <div class="' + brand +  ' error-container">\n'+
          '       <a class="' + brand +  ' error-message"></a>\n'+
          '   </div>\n'+
          '</div>';
}

function getInputRefreshHtml(brand) {
  return  '<div class="input-container">\n'+
          '   <div class="quit-icon"></div>\n'+
          '   <input disabled class="' + brand + ' special-input-refresh" type="text"></input>\n'+
          '   <button class="' + brand + ' btt-refresh btt-input"><img src="img/refresh.png"/></button>\n'+
          '</div>';
}

function getInputPlusLessHtml(brand) {
  return  '<div class="input-container-plus-less">\n'+
          '   <div class="input-container">\n'+
          '       <div class="quit-icon"></div>\n'+
          '       <input class="' + brand + ' special-input-plus-less" type="text"></input>\n'+
          '       <button class="' + brand + ' btt-plus btt-input"><img src="img/more.png"/></button>\n'+
          '   </div>\n'+
          '</div>';
}

function addInput(draggable, parent, brand) {
  if (draggable.hasClass('normal')) {
    parent.append(getInputHtml(brand));
  } else if (draggable.hasClass('refresh')) {
    parent.append(getInputRefreshHtml(brand));
  } else if (draggable.hasClass('add')) {
    parent.append(getInputPlusLessHtml(brand));
  } else if (draggable.hasClass('quit')) {
    parent.append('<div class="input-container-plus-less"><div class="input-container"><div class="quit-icon"></div><input class="' + brand + ' special-input-plus-less" type="text"></input><button class="' + brand + ' btt-less btt-input"><img src="img/less.png"/></button></div></div>');
  }
}

function getComponentBrand(component) {
  if (component.hasClass('telefonica')) {
    return'telefonica';
  } else if (component.hasClass('movistar')) {
    return 'movistar';
  } else if (component.hasClass('vivo')) {
    return 'vivo';
  } else if (component.hasClass('o2')) {
    return 'o2';
  }
}

function getButtonType(draggable) {
  if (draggable.hasClass('neutral') || draggable.hasClass('btt-neutral')) {
    return 'neutral';
  } else if (draggable.hasClass('positive') || draggable.hasClass('btt-positive')) {
    return 'positive';
  } else if (draggable.hasClass('negative') || draggable.hasClass('btt-negative')) {
    return 'negative';
  } else if (draggable.hasClass('subdued') || draggable.hasClass('btt-subdued')) {
    return 'subdued';
  }
}

function getButtonHtml(brand, type) {
  return '<div class="button-back" >\n'+
         '    <div class="quit-icon"></div>\n'+
         '    <button type="submit" class="' + brand + ' button btt-' + type + '" enabled="">\n'+ 
         '        '+toTitleCase(type) +'\n'+
         '    </button>\n'+
         '</div>';
}

function addButton(draggable, parent, brand) {
  var type = getButtonType(draggable);
  parent.append(getButtonHtml(brand, type));
}

function addTable(draggable, parent, brand) {
  if (draggable.find('table').hasClass('top-table')) {
    var rows = $('#' + draggable.attr('id') + ' tr').length;
    var cols = $('#' + draggable.attr('id') + ' td').length/rows;
    parent.append('<div class="keep-table-container" title="A table with ' + rows + ' rows and ' + cols + ' columns."><div class="quit-icon"></div><table class="top-table ' + brand + '" rows="' + rows + '" cols="' + cols + '"><thead><tr><td></td><td></td><td></td><td></td></tr></thead><tbody><tr class="even-line"><td></td><td></td><td></td><td></td></tr></tbody></table></div>');
  } else {
    var rows = $('#' + draggable.attr('id') + ' tr').length/2;
    var cols = $('#' + draggable.attr('id') + ' td').length/rows;
    parent.append('<div class="keep-table-container" title="A table with ' + rows + ' rows and ' + cols + ' columns."><div class="quit-icon"></div><table class="left-table ' + brand + '" rows="' + rows + '" cols="' + cols + '"><thead><tr><td></td></tr><tr><td></td></tr></thead><tbody><tr><td class="even-line"></td><td class="odd-line"></td><td class="even-line"></td></tr><tr><td class="even-line"></td><td class="odd-line"></td><td class="even-line"></td></tr></tbody></table></div>');
  }
}

function getKeepMeComponents() {
  var buttons = $('#selection-container').find('.button');
  var inputs = $('#selection-container').find('.input');
  var refresh = $('#selection-container').find('.special-input-refresh');
  var plusless = $('#selection-container').find('.special-input-plus-less');
  var topTables = $('#selection-container').find('.top-table');
  var leftTables = $('#selection-container').find('.left-table');
  
  components = {};
  for (var index = 0; index < buttons.length; ++index) {
    var type = getButtonType($(buttons[index]));
    var brand = getComponentBrand($(buttons[index]));
    components['button-'+type+'-'+brand] = {component: 'button', brand: brand, type: type};
  }

  for (var index = 0; index < inputs.length; ++index) {
    var brand = getComponentBrand($(inputs[index]));
    components['input-'+brand] = {component: 'input', brand: brand,type:'input'};
  }    

  for (var index = 0; index < refresh.length; ++index) {
    var brand = getComponentBrand($(refresh[index]));
    components['special-input-refresh-'+brand] = {component: 'input', brand: brand,type:'special-input-refresh'};
  }  

  for (var index = 0; index < plusless.length; ++index) {
    var brand = getComponentBrand($(plusless[index]));
    components['special-input-plus-less-'+brand] = {component: 'input', brand: brand,type:'special-input-plus-less'};
  }  

  for (var index = 0; index < topTables.length; ++index) {
    var brand = getComponentBrand($(topTables[index]));
    var rows = $(topTables[index]).attr('rows');
    var cols = $(topTables[index]).attr('cols');
    components['top-table-'+brand+"-"+rows+"-"+cols] = {component: 'table', brand: brand, rows: rows, cols: cols,type:'top-table'};
  }

  for (var index = 0; index < leftTables.length; ++index) {
    var brand = getComponentBrand($(leftTables[index]));
    var rows = $(leftTables[index]).attr('rows');
    var cols = $(leftTables[index]).attr('cols');
    components['left-table-'+brand+"-"+rows+"-"+cols] = {component: 'table', brand: brand, rows: rows, cols: cols,type:'left-table'};
  }      

  return components;
}


function hideComponentsVisualization(containerId, brand) {
  if (brand === 'all') {
    $('.visualization-container').addClass('hidden');
    $('.' + containerId).removeClass('hidden');
    $('.brand-title').show();
  }
  else {
    $('.visualization-container').addClass('hidden');
    component = $('.active-comp').attr('id');
    $('#' + component + '-' + brand).removeClass('hidden');
    $('#table-container').removeClass($('#table-container').attr('class'));
    $('#table-container').addClass(brand);
    $('#payment-testing-container').removeClass($('#payment-testing-container').attr('class'));
    $('#payment-testing-container').addClass(brand);
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