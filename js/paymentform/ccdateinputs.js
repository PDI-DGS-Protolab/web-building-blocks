var form = new GlobalFormTools();

function cardMonthFocus () {
  $('#card-expiration-month').attr('placeholder', '');
}

function cardYearFocus () {
  $('#card-expiration-year').attr('placeholder', '');
}

function checkInputMonth () {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString();

  if (isVoid(inputYear)) {
    if (isVoid(inputMonth)) {
      $('#card-expiration-container').removeClass('correct-input');
      $('#card-expiration-month').val("");
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
      $('#card-expiration-year').val("");
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
        else if (inputYear == currentYear && inputMonth < currentMonth) {
          expiredCardState();
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
        else if (inputYear == currentYear && inputMonth < currentMonth) {
          expiredCardState();
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
    $('#card-expiration-month').val("");
    resetErrorContainer(['month']);
  }
  else if (isVoid(inputYear)) {
    $('#card-expiration-container').removeClass('correct-input');
    $('#card-expiration-year').val("");
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

  if (onlyContainsDigits(inputMonth) && onlyContainsDigits(inputYear) && inputYear.length == 2 && inputMonth.length > 0) {
    if (!isValidDate(inputMonth, currentMonth, inputYear, currentYear)) {
      if (inputYear == currentYear && inputMonth < currentMonth) {
        $('#card-expiration-year').focus().val();
      }
      else if (!isValidMonth(inputMonth)) {
        $('#card-expiration-month').focus().val();
      }
      else if (!isValidYear(inputYear, currentYear)) {
        $('#card-expiration-year').focus().val();
      }
    }
  }
  else {
    if (inputYear.length == 0) {
      $('#card-expiration-year').attr('placeholder', currentYear);
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (isVoid(inputYear)) {
      $('#card-expiration-year').attr('placeholder', currentYear);
      $('#card-expiration-container').removeClass('correct-input');
      $('#card-expiration-year').val("");
    }
    else if (onlyContainsDigits(inputYear)) {
      if (inputYear.length == 1) {
        var expirationErrorElmnt = $('#card-expiration-error-container');
        $('#card-expiration-year').addClass('negative-box');
        $('#card-expiration-year').focus().val();
        expirationErrorElmnt.show();
        expirationErrorElmnt.text("Invalid year's length. Please input 2 digits.");
        expirationErrorElmnt.addClass('negative-check');
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
    else if (isVoid(inputMonth)) {
      $('#card-expiration-month').attr('placeholder', currentMonth);
      $('#card-expiration-container').removeClass('correct-input');
      $('#card-expiration-month').val("");
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
  var expirationMonthElmnt = $('#card-expiration-month');
  var expirationErrorElmnt = $('#card-expiration-error-container');

  expirationMonthElmnt.addClass('negative-box');
  expirationMonthElmnt.focus().val();
  expirationErrorElmnt.show();
  expirationErrorElmnt.text("Invalid Month entered.");
  expirationErrorElmnt.addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function notOnlyDigitsState (elmnt) {
  var expirationErrorElmnt = $('#card-expiration-error-container');

  $('#card-expiration-' + elmnt).addClass('negative-box');
  $('#card-expiration-' + elmnt).focus().val();
  expirationErrorElmnt.show();
  expirationErrorElmnt.text("You can input only digits.");
  expirationErrorElmnt.addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function expiredCardState () {
  var expirationYearElmnt = $('#card-expiration-year')
  var expirationErrorElmnt = $('#card-expiration-error-container');

  expirationYearElmnt.addClass('negative-box');
  expirationYearElmnt.focus().val();
  expirationErrorElmnt.show();
  expirationErrorElmnt.text("Your card has expired or you have chosen a wrong expiration date.");
  expirationErrorElmnt.addClass('negative-check');
  $('#card-expiration-container').removeClass('correct-input');
}

function resetErrorContainer (elmnts) {
  var expirationErrorElmnt = $('#card-expiration-error-container');

  expirationErrorElmnt.hide();
  expirationErrorElmnt.text("");
  if (!$('#card-expiration-container').hasClass('correct-input')) {
    var it = elmnts.length;
    do {
      $('#card-expiration-' + elmnts[it]).removeClass('negative-box');
    } while (it--);
  }
}
