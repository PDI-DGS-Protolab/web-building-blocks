var form = new GlobalFormTools();

$(document).ready(function() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();

  var availableMonths = [ '01','02','03','04','05','06',
                        '07','08','09','10','11','12' ];

  var currentYear = currentDate.getFullYear().toString().substring(2, 4);

  var availableYears = new Array();
  availableYears.push(currentYear);
  var nextYear;

  for (var i = 0; i < 30; i++) { 
    nextYear = currentDate.getFullYear() + i + 1;
    availableYears.push(nextYear.toString().substring(2, 4));
  }
  
  $('#card-expiration-month').attr('placeholder', (currentMonth + 1).toString());
  $('#card-expiration-year').attr('placeholder', currentYear);

  $('#card-expiration-month').focus(function() {
    $('#card-expiration-month').attr('placeholder', '');
  });

  $('#card-expiration-year').focus(function() {
    $('#card-expiration-year').attr('placeholder', '');
  });

  $('#card-expiration-month').keyup(function(e) {
    checkInputMonth();
  });

  $('#card-expiration-year').keyup(function(e) {
    checkInputYear();
  });

  $('#card-expiration-year').blur(function() {
    checkExpirationOnBlur();
  });

  $('#card-expiration-month').blur(function() {
    checkExpirationOnBlur();
  });

  $('#card-expiration-month').autocomplete({
    source: availableMonths
  });

  $('#card-expiration-year').autocomplete({
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableYears, request.term);
        response(results.slice(0, 7));
    }
  });
});

function checkInputMonth () {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString(); 

  if (isVoid(inputYear)) {
    if (isVoid(inputMonth)) {
      $('#card-expiration-container').removeClass('correct-input');
      resetErrorContainer(['month']);
    }
    else if (onlyContainsDigits(inputMonth)) {
      if (!isValidMonth(inputMonth)) {
        invalidMonthState();
      }
      else {
        $('#card-expiration-month').removeClass('negative-box');
        resetErrorContainer([]);
      }
    }
    else {
      notOnlyDigitsState('month');
    }
  }
  else {
    checkExpiration('month');
  }
  form.globalCheck();
}

function checkInputYear () {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString(); 

  if (isVoid(inputMonth)) {
    if (isVoid(inputYear)) {
      $('#card-expiration-container').removeClass('correct-input');
      resetErrorContainer(['year']);
    }
    else if (onlyContainsDigits(inputYear)) {
      if (inputYear.length == 2 && !isValidYear(inputYear, currentYear)) {
        expiredCardState();
      }
      else {
        $('#card-expiration-year').removeClass('negative-box');
        resetErrorContainer([]);
      }
    }
    else {
      notOnlyDigitsState('year');
    }
  }
  else {
    checkExpiration('year');
  }
  form.globalCheck();
}

function checkExpiration (modifiedElmnt) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth() + 1;
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString();

  if (onlyContainsDigits(inputMonth) && onlyContainsDigits(inputYear)) {
    if (isValidDate(inputMonth, currentMonth, inputYear, currentYear) && inputYear.length == 2) {
      resetErrorContainer(['month', 'year']);
      $('#card-expiration-container').addClass('correct-input');
    }
    else {
      if (modifiedElmnt == 'month') {
        if (isVoid(inputMonth)) {
          $('#card-expiration-container').removeClass('correct-input');
          resetErrorContainer(['month']);
        }
        else if (inputMonth < 1) {
          $('#card-expiration-container').removeClass('correct-input');
          resetErrorContainer(['month']);
        }
        else if (!isValidMonth(inputMonth)) {
          invalidMonthState();
        }
        else if (isValidMonth(inputMonth)) {
          resetErrorContainer(['month']); 
        }
      }
      else if (modifiedElmnt == 'year') {
        if (isVoid(inputYear)) {
          $('#card-expiration-container').removeClass('correct-input');
          resetErrorContainer(['year']);
        }
        else if (inputYear.length == 1) {
          $('#card-expiration-container').removeClass('correct-input');
          resetErrorContainer(['year']);
        }
        else if (inputYear.length == 2 && !isValidYear(inputYear, currentYear)) {
          expiredCardState();
        }
        else if (isValidYear(inputYear, currentYear)) {
          resetErrorContainer(['year']);
        }
        else {
          expiredCardState();
        }
      }
    }
  }
  else if (isVoid(inputMonth)) {
    $('#card-expiration-container').removeClass('correct-input');
    resetErrorContainer(['month']);
  }
  else if (isVoid(inputYear)) {
    $('#card-expiration-container').removeClass('correct-input');
    resetErrorContainer(['year']);
  }
  else {
    notOnlyDigitsState(modifiedElmnt);
  }
}

function checkExpirationOnBlur() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth() + 1;
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString();

  if (onlyContainsDigits(inputMonth) && onlyContainsDigits(inputYear) && inputYear.length == 2) {
    if (!isValidDate(inputMonth, currentMonth, inputYear, currentYear)) {

      if (!isValidMonth(inputMonth)) {
        $('#card-expiration-month').focus().val();
      }
      else if (!isValidYear(inputYear, currentYear)) {
        $('#card-expiration-year').focus().val();
      }
    }
  }

  else {
    if (inputYear.length == 0) {
      $('#card-expiration-year').attr('placeholder', currentYear );
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (onlyContainsDigits(inputYear)) {
      if (inputYear.length == 1) {
        $('#card-expiration-year').addClass('negative-box');
        $('#card-expiration-year').focus().val();
        $('#card-expiration-error-container').show();
        $('#card-expiration-error-container').text("Invalid year's length. Please input 2 digits.");
        $('#card-expiration-error-container').addClass('negative-check');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else if (inputYear.length == 2 && !isValidYear(inputYear, currentYear)){
        $('#card-expiration-year').focus().val();
      }
    }
    else {
      $('#card-expiration-year').focus().val();
    }

    if (inputMonth.length == 0) {
      $('#card-expiration-month').attr('placeholder', currentMonth);
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (!onlyContainsDigits(inputMonth) || !isValidMonth(inputMonth)) {
      $('#card-expiration-month').focus().val();
    }
  }

  form.globalCheck();
}

function isVoid (number) {
  return number == undefined || isMadeOfWhiteSpaces(number);
}

function isValidMonth (inputMonth) {
  return (inputMonth < 13 && inputMonth > 0);
}

function isValidYear (inputYear, currentYear) {
  return inputYear >= currentYear;
}

function isValidDate (inputMonth, currentMonth, inputYear, currentYear) {
  if (isValidMonth(inputMonth) && isValidYear(inputYear, currentYear) && inputYear.length == 2) {
    if (inputYear > currentYear) {
      return true;
    }
    else if (inputYear == currentYear && inputMonth >= currentMonth) {
      return true;
    }
  }
  return false;
}

function invalidMonthState () {
  $('#card-expiration-month').addClass('negative-box');
  $('#card-expiration-month').focus().val();
  $('#card-expiration-error-container').show();
  $('#card-expiration-error-container').text("Invalid Month entered.");
  $('#card-expiration-error-container').addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function notOnlyDigitsState (elmnt) {
  $('#card-expiration-' + elmnt).addClass('negative-box');
  $('#card-expiration-' + elmnt).focus().val();
  $('#card-expiration-error-container').show();
  $('#card-expiration-error-container').text("You can input only digits.");
  $('#card-expiration-error-container').addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function expiredCardState () {
  $('#card-expiration-year').addClass('negative-box');
  $('#card-expiration-year').focus().val();
  $('#card-expiration-error-container').show();
  $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration date.");
  $('#card-expiration-error-container').addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function resetErrorContainer (elmnts) {
  $('#card-expiration-error-container').hide();
  $('#card-expiration-error-container').text("");
  if (!$('#card-expiration-container').hasClass('correct-input')) {
    for (var i = 0; i < elmnts.length; ++i) {
      $('#card-expiration-' + elmnts[i]).removeClass('negative-box');
    }
  }
}
