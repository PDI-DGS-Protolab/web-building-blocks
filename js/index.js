$(document).ready(function () {

  $('.brand-tab').click(function () {
  });

  $('.comp-tab').click(function () {
  });

  var codeLayout = 
  '<div class="code-container">'
    +'<div class="css-tab">'
      +'<h4>Css link</h4>'
      +'<div class="css-content download-code">'
        +'<pre class="brush: css;">'
        +'</pre>'
      +'</div>'
    +'</div>'
    +'<div class="html-tab">'
      +'<h4>HTML code</h4>'
      +'<div class="html-content download-code">'
        +'<pre class="brush: xml;">'
        +'</pre>'
      +'</div>'
    +'</div>'
  +'</div>';

  $('.visualization-container').append(codeLayout);

  $('.visualization-container').each(function() {
    var visualizationContainer = $(this);
    var component = visualizationContainer.attr('data-comp-code');
    var buttonTypes = ['neutral', 'positive', 'negative', 'subdued'];
    var htmlFile = '';
    //In the future you should take the brand from the component defining the current brand
    var brand = 'movistar';

    if (component === 'input') {
      htmlFile = '<!--To add a simple ' + brand + ' input:-->\n' +
                  getInputHtml(brand) + '\n\n' +
                  '<!--To add a refresheable ' + brand + ' input:-->\n' +
                  getInputRefreshHtml(brand) + '\n\n' +
                  '<!--To add a pluss/less ' + brand + ' input:-->\n' +
                  getInputPlusLessHtml(brand);
    }
    else if (component === 'button') {
      for (type in buttonTypes) {
        htmlFile += '<!--To add ' + buttonTypes[type] + ' ' + brand + ' buttons:-->\n' +
                    getButtonsHtml(brand, buttonTypes[type]) + '\n\n';
      }
    }
    else if (component === 'table') {
      htmlFile = '<!--To add a ' + brand + ' table:-->\n' +
      getTableHtml(brand) + '\n\n';
    }
    else if(component === 'payment-form'){
      htmlFile += '<!--To add a ' + brand + ' payment form:-->\n' +
      getPaymentFormHtml(brand) + '\n\n';
    }

    var outputHTML = getFileToShow(htmlFile);
    visualizationContainer.find('.html-content').html('<pre class="brush: xml;">' + outputHTML + '</pre>');
            

    var cssLinks = '<link href="(your styles folder)/css/default-' + component + '.css" rel="stylesheet" type="text/css">'
                    + '\n'
                    +'<link href="(your styles folder)/css/' + brand + '/' + component + '.css" rel="stylesheet" type="text/css">';
    var outputCSS = getFileToShow(cssLinks + '\n');
    visualizationContainer.find('.css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');

    SyntaxHighlighter.highlight();
  });

});

function getInputHtml (brand) {
  return  '<div class="input-container">\n'+
          '   <div class="quit-icon"></div>\n'+
          '   <input class="' + brand +  ' input" type="text" hint="Enter your full name as it appears on your card" error="Illegal characters. You can input only letters."></input>\n'+
          '   <div class="' + brand + ' input-hint"></div>\n'+
          '   <div class="' + brand +  ' error-container">\n'+
          '       <a class="' + brand +  ' error-message"></a>\n'+
          '   </div>\n'+
          '</div>';
}

function getInputRefreshHtml (brand) {
  return  '<div class="input-container">\n'+
          '   <div class="quit-icon"></div>\n'+
          '   <input disabled class="' + brand + ' special-input-refresh" type="text"></input>\n'+
          '   <button class="' + brand + ' btt-refresh btt-input"><img src="img/refresh.png"/></button>\n'+
          '</div>';
}

function getInputPlusLessHtml (brand) {
  return  '<div class="input-container-plus-less">\n'+
          '   <div class="input-container">\n'+
          '       <div class="quit-icon"></div>\n'+
          '       <input class="' + brand + ' special-input-plus-less" type="text"></input>\n'+
          '       <button class="' + brand + ' btt-plus btt-input"><img src="img/more.png"/></button>\n'+
          '   </div>\n'+
          '</div>';
}

function getTableHtml (brand) {
    var tableHtml = $('#table-container').html();
    return  '<div id="table-container" class="telefonica">\n'+
            '   ' + tableHtml + '\n' +
            '</div>';
}

function getPaymentFormHtml (brand) {
  return    '<div id="payment-testing-container" class="' + brand + '">\n'+
            '   <form id="payment-form-container" method="POST">\n'+
            '       <fieldset id="payment-content">\n'+
            '          <div class="header">\n'+
            '              Header\n'+
            '          </div>\n'+
            '          <div class="spaceX"></div>\n'+
            '          <label for="card-holder-name" class="text-label">Full Name</label>\n'+
            '          <div class="space025X"></div>\n'+
            '          <input id="card-holder-name" class="card-input" name="credit_card[full_name]" type="text"/>\n'+
            '          <div id="card-name-hint-container" class="card-hint"></div>\n'+
            '          <div id="card-name-error-container" class="card-error"></div>\n'+
            '          <div id="CVC-hint">\n'+
            '              <p>3-digit number on the back of your card</p>\n'+
            '          </div>\n'+
            '          <label for="card-number-input" class="text-label CC-label">Credit Card Number</label>\n'+
            '          <label for="card-verification-code" class="text-label CVC-label">CVC Code</label>\n'+
            '          <label id="help-label" for="help" class="help-security-code">?</label>\n'+
            '          <div class="space025X clearing"></div>\n'+
            '          <div id="card-number-container">\n'+
            '              <input autocomplete="off" id="card-number-input" name="credit_card[number]" type="text" class="card-input"/>\n'+
            '              <div id="card-number-hint-container" class="card-hint"></div>\n'+
            '              <div id="card-number-error-container" class="card-error"></div>\n'+
            '          </div>\n'+
            '          <div id="card-CVC-container">\n'+
            '              <input autocomplete="off" id="card-verification-code" name="credit_card[verification_code]" type="password" class="card-input" maxlength="3"/>\n'+
            '              <div id="card-CVC-hint-container" class="card-hint"></div>\n'+
            '              <div id="card-CVC-error-container" class="card-error"></div>\n'+
            '          </div>\n'+
            '          <div id="card-expiration-container">\n'+
            '              <label for="card-expiration-month" class="text-label">Expiration Date</label>\n'+
            '              <div class="space025X"></div>\n'+
            '              <input autocomplete="off" id="card-expiration-month" name="credit_card[month]" type="text" class="card-input date-input" maxlength="2"/>\n'+
            '              <span>/</span>\n'+
            '              <input autocomplete="off" id="card-expiration-year" name="credit_card[year]" type="text" class="card-input date-input" maxlength="2"/>\n'+
            '              <div id="card-expiration-error-container" class="card-error"></div>\n'+
            '              <div class="space05X"></div>\n'+
            '          </div>\n'+
            '          <div class="back-submit">\n'+
            '              <button type="submit" class="submit-button btt-neutral" disabled>Submit Payment</button>\n'+
            '          </div>\n'+
            '          <div class="last-space"></div>\n'+
            '      </fieldset>\n'+
            '   </form>\n'+
            '</div>';
}

function addInput (draggable, parent, brand) {
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

function getComponentBrand (component) {
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

function getButtonType (draggable) {
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

$(document).on('click', '.size-button', function () {
  var radioPressed = $(this);
  var radioButtons = radioPressed.parent().children();
  $(radioButtons).not(radioPressed).removeAttr('checked');
  var currentButton = radioPressed.closest('.button-back').find('.button');
  if (radioPressed.val() == 'small') {
    currentButton.addClass('small');
    currentButton.removeClass('medium');
    currentButton.removeClass('large');
  }
  else if (radioPressed.val() == 'medium') {
    currentButton.addClass('medium');
    currentButton.removeClass('small');
    currentButton.removeClass('large');
  }
  else if (radioPressed.val() == 'large') { 
    currentButton.addClass('large');
    currentButton.removeClass('small');
    currentButton.removeClass('medium');
  }
});

function getButtonHtml (brand, type) {
  return '<div class="button-back ' + brand + '"' + '>\n' +
         '    <div class="quit-icon"></div>\n' +
         '    <button type="submit" class="' + brand + ' button medium btt-' + type + '" enabled="">\n' + 
         '        ' + toTitleCase(type) +'\n' +
         '    </button>\n' +
         '    <div class="radio-container">' + '\n' +
         '        <input type="radio" class="size-button" value="small"><label class="radio-label">S</label>\n' +
         '        <input type="radio" class="size-button" value="medium" checked><label class="radio-label">M</label>\n' +
         '        <input type="radio" class="size-button" value="large"><label class="radio-label">L</label>\n' +
         '    </div>\n' +
         '</div>';
}

function getButtonsHtml (brand, type) {
  return '<div class="button-back ' + brand + '"' + '>\n' +
     '    <button type="submit" class="' + brand + ' button small btt-' + type + '" enabled="">\n' + 
     '        ' + toTitleCase(type) +'\n' +
     '    </button>\n' +
     '</div>\n' + 
     '<div class="button-back ' + brand + '"' + '>\n' +
     '    <button type="submit" class="' + brand + ' button medium btt-' + type + '" enabled="">\n' + 
     '        ' + toTitleCase(type) +'\n' +
     '    </button>\n' +
     '</div>\n' +
     '<div class="button-back ' + brand + '"' + '>\n' +
     '    <button type="submit" class="' + brand + ' button large btt-' + type + '" enabled="">\n' + 
     '        ' + toTitleCase(type) +'\n' +
     '    </button>\n' +
     '</div>';
}

function addButton (draggable, parent, brand) {
  var type = getButtonType(draggable);
  parent.append(getButtonHtml(brand, type));
}

function addTable (draggable, parent, brand) {
  if (draggable.find('table').hasClass('top-table')) {
    var rows = $('#' + draggable.attr('id') + ' tr').length;
    var cols = $('#' + draggable.attr('id') + ' td').length/rows;
    parent.append('<div class="keep-table-bottom" title="A table with ' + rows + ' rows and ' + cols + ' columns."><div class="quit-icon"></div><table class="top-table table-img ' + brand + '" rows="' + rows + '" cols="' + cols + '"><thead><tr><td></td><td></td><td></td><td></td></tr></thead><tbody><tr class="even-line"><td></td><td></td><td></td><td></td></tr></tbody></table></div>');
  } else {
    var rows = $('#' + draggable.attr('id') + ' tr').length/2;
    var cols = $('#' + draggable.attr('id') + ' td').length/rows;
    parent.append('<div class="keep-table-bottom" title="A table with ' + rows + ' rows and ' + cols + ' columns."><div class="quit-icon"></div><table class="left-table table-img ' + brand + '" rows="' + rows + '" cols="' + cols + '"><thead><tr><td></td></tr><tr><td></td></tr></thead><tbody><tr><td class="even-line"></td><td class="odd-line"></td><td class="even-line"></td></tr><tr><td class="even-line"></td><td class="odd-line"></td><td class="even-line"></td></tr></tbody></table></div>');
  }
}

function addPaymentForm (draggable, parent, brand) {
  parent.append('<div class="keep-payment-form-bottom" title= "' + brand + ' payment form."><div class="quit-icon"></div><img src="img/components/paymentform/payment-form.png" class="payment-form-img ' + brand + '"/>');
}

function addDatePicker (draggable, parent, brand) {
  parent.append('<input type="text" id="date-picker-input" class="' + brand + '"">');
}

function getKeepMeComponents () {
  var buttons = $('#selection-container').find('.button');
  var inputs = $('#selection-container').find('.input');
  var refresh = $('#selection-container').find('.special-input-refresh');
  var plusless = $('#selection-container').find('.special-input-plus-less');
  var topTables = $('#selection-container').find('.top-table');
  var leftTables = $('#selection-container').find('.left-table');
  var paymentforms = $('#selection-container').find('.payment-form-img');
  
  components = {};
  for (var index = 0; index < buttons.length; ++index) {
    var type = getButtonType($(buttons[index]));
    var brand = getComponentBrand($(buttons[index]));
    components['button-' + type + '-' + brand] = {component: 'button', brand: brand, type: type};
  }

  for (var index = 0; index < inputs.length; ++index) {
    var brand = getComponentBrand($(inputs[index]));
    components['input-' + brand] = {component: 'input', brand: brand, type: 'input'};
  }    

  for (var index = 0; index < refresh.length; ++index) {
    var brand = getComponentBrand($(refresh[index]));
    components['special-input-refresh-' + brand] = {component: 'input', brand: brand, type: 'special-input-refresh'};
  }  

  for (var index = 0; index < plusless.length; ++index) {
    var brand = getComponentBrand($(plusless[index]));
    components['special-input-plus-less-' + brand] = {component: 'input', brand: brand, type: 'special-input-plus-less'};
  }  

  for (var index = 0; index < topTables.length; ++index) {
    var brand = getComponentBrand($(topTables[index]));
    var rows = $(topTables[index]).attr('rows');
    var cols = $(topTables[index]).attr('cols');
    components['top-table-' + brand + "-" + rows + "-" + cols] = {component: 'table', brand: brand, rows: rows, cols: cols, type: 'top-table'};
  }

  for (var index = 0; index < leftTables.length; ++index) {
    var brand = getComponentBrand($(leftTables[index]));
    var rows = $(leftTables[index]).attr('rows');
    var cols = $(leftTables[index]).attr('cols');
    components['left-table-' + brand + "-" + rows + "-" + cols] = {component: 'table', brand: brand, rows: rows, cols: cols, type: 'left-table'};
  }

  for (var index = 0; index < paymentforms.length; ++index) {
    var brand = getComponentBrand($(paymentforms[index]));
    components['payment-form-img-' + brand] = {component: 'payment-form', brand: brand, type: 'payment-form-img'};
  }
  return components;
}


function hideComponentsVisualization (containerId, brand) {
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

function switchActiveElements (element, elementClass, activeClass) {
  $(element).addClass(activeClass);
  $(elementClass).not(element).removeClass(activeClass);
}

function toTitleCase (str) {
  return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
  });
}