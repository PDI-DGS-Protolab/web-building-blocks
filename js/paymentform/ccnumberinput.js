var VISA = '4';
var MASTERCARD = ['51', '52'];
var AMERICANEXPRESS = ['34', '37'];
var MAESTRO = ['5018', '5020', '5038', '5612', '5893', '6304', '6761', '6762', '6763', '0604', '6390'];

var VISAMINLENGTH = 13;
var VISAMAXLENGTH = 16;
var MASTERCARDLENGTH = 16;
var AMERICANEXPRESSLENGTH = 15;
var MAESTROMINLENGTH = 12;
var MAESTROMAXLENGTH = 19;

var form = new GlobalFormTools();

function cardNumberFocus () {
  if (!$('#card-number-error-container').is(':visible')) {
    var cardHintElmnt = $('#card-number-hint-container');
    cardHintElmnt.text("Enter your credit card number without any spaces");
    cardHintElmnt.show();
    $('#card-number-error-container').hide();
  }
}

function cardNumberKeyUp () {
  var cardNumberElmnt = $('#card-number-input');
  var cardErrorElmnt = $('#card-number-error-container');
  var str = cardNumberElmnt.val();

  if (str.length == 0) {
    clearCardClasses(cardNumberElmnt);
    $('#card-number-hint-container').show();
    cardErrorElmnt.hide();
    cardErrorElmnt.text("");
    cardErrorElmnt.removeClass('negative-check');
    cardNumberElmnt.removeClass('negative-box');
    cardNumberElmnt.removeClass('correct-input');
  }
  else {
    if (str.length < 12) {
      cardNumberElmnt.removeClass('correct-input');
    }

    if (!onlyContainsDigits(str)) {
      invalidCardState('Illegal characters. You can input only numbers.');
    }
    else {
      if (isVisaCard(str.substr(0, 1))) {
        switchActiveCard(cardNumberElmnt, 'visa', VISAMAXLENGTH);
      }
      else if (isMastercardCard(str.substr(0, 2))) {
        switchActiveCard(cardNumberElmnt, 'mastercard', MASTERCARDLENGTH);
      }
      else if (isAmericanExpressCard(str.substr(0, 2))) {
        switchActiveCard(cardNumberElmnt, 'american', AMERICANEXPRESSLENGTH);
      }
      else if (isMaestroCard(str.substr(0, 4))) {
        switchActiveCard(cardNumberElmnt, 'maestro', MAESTROMAXLENGTH);
      }
      else {
        clearCardClasses(cardNumberElmnt);
        if (str.length == 4 && onlyContainsDigits(str)) {
          cardNumberElmnt.attr('maxlength', 4);
          invalidCardState('We do not support your card type.');
        }
      }

      if (str.length > 4) {
        $('#card-number-hint-container').show();
        cardErrorElmnt.hide();
        cardErrorElmnt.text("");
        cardErrorElmnt.removeClass('negative-check');
        cardNumberElmnt.removeClass('negative-box');
        if (isVisaCard(str.substr(0, 1))) {
          if (str.length == VISAMINLENGTH || str.length == VISAMAXLENGTH){
            cardNumberElmnt.addClass('correct-input');
          }
          else {
            cardNumberElmnt.removeClass('correct-input');
          }
        }
        else if (isMastercardCard(str.substr(0, 2))) {
          if (str.length == MASTERCARDLENGTH) {
            cardNumberElmnt.addClass('correct-input');
          }
          else {
            cardNumberElmnt.removeClass('correct-input');
          }
        }
        else if (isAmericanExpressCard(str.substr(0, 2))) {
          if (str.length == AMERICANEXPRESSLENGTH) {
            cardNumberElmnt.addClass('correct-input');
          }
          else {
            cardNumberElmnt.removeClass('correct-input');
          }
        }
        else if (isMaestroCard(str.substr(0, 4))) {
          if (str.length > MAESTROMINLENGTH) {
            cardNumberElmnt.addClass('correct-input');
          }
          else {
            cardNumberElmnt.removeClass('correct-input');
          }
        }
      }
      else if (str.length < 4) {
        $('#card-number-hint-container').show();
        cardErrorElmnt.hide();
        cardErrorElmnt.text("");
        cardErrorElmnt.removeClass('negative-check');
        cardNumberElmnt.removeClass('negative-box');
      }
    }
  }
  form.globalCheck();
}

function cardNumberBlur () {
  var cardNumberElmnt = $('#card-number-input');
  var cardErrorElmnt = $('#card-number-error-container');
  var str = cardNumberElmnt.val();
  var errorMsg = cardErrorElmnt.text();
  
  if (!onlyContainsDigits(str) && str.length > 0) {
    invalidCardState('Illegal characters. You can input only numbers.');
    cardNumberElmnt.focus().val();
  }
  else if (str.length > 0 && str.length < 4) {
    invalidCardState('Invalid length.');
    cardNumberElmnt.focus().val();
  }
  else if (str.length >= 4) {
    if (isVisaCard(str.substr(0, 1))) {
      if (str.length != VISAMINLENGTH && str.length != VISAMAXLENGTH) {
        invalidCardState('Invalid length. You should input 13 or 16 digits.(VISA)');
        cardNumberElmnt.focus().val();
      }
      else {
        cardNumberIsCorrect();
      }
    }
    else if (isMastercardCard(str.substr(0, 2))) {
      if (str.length != MASTERCARDLENGTH) {
        invalidCardState('Invalid length. You should input 16 digits.(MC)');
        cardNumberElmnt.focus().val();
      }
      else {
        cardNumberIsCorrect();
      }
    }
    else if (isAmericanExpressCard(str.substr(0, 2))) {
      if (str.length != AMERICANEXPRESSLENGTH) {
        invalidCardState('Invalid length. You should input 15 digits.(AE)');
        cardNumberElmnt.focus().val();
      }
      else {
        cardNumberIsCorrect();
      }
    }
    else if (isMaestroCard(str.substr(0, 4))) {
      if (str.length < MAESTROMINLENGTH) {
        invalidCardState('Invalid length. You should input at least 12 digits.(MAE)');
        cardNumberElmnt.focus().val();
      }
      else {
        cardNumberIsCorrect();
      }
    }
    else {
      cardNumberElmnt.focus().val();
    }
  }
  else if (str.length == 0) {
    var cardNumberHintElmnt = $('#card-number-hint-container');

    cardNumberHintElmnt.show();
    cardNumberHintElmnt.text("");
    cardErrorElmnt.hide();
    cardErrorElmnt.text("");
    cardErrorElmnt.removeClass('negative-check');
    cardNumberElmnt.removeClass('negative-box');
  }
  else {
    cardNumberIsCorrect();
  }
  form.globalCheck();
}

function isVisaCard (firstInputDigit) {
  return (firstInputDigit == VISA);
};

function isMastercardCard (firstTwoInputDigits) {
  if ($.inArray(firstTwoInputDigits, MASTERCARD) > -1) {
    return true;
  }
  return false;
};

function isAmericanExpressCard (firstTwoInputDigits) {
  if ($.inArray(firstTwoInputDigits, AMERICANEXPRESS) > -1) {
    return true;
  }
  return false;
};

function isMaestroCard (firstFourInputDigits) {
  if ($.inArray(firstFourInputDigits, MAESTRO) > -1) {
    return true;
  }
  return false;
};

function switchActiveCard (element, newCardClass, newCardLength) {
  var cardNumberElmnt = $(element);
  
  clearCardClasses(cardNumberElmnt);
  cardNumberElmnt.addClass(newCardClass);
  cardNumberElmnt.attr('maxlength', newCardLength);
};

function clearCardClasses (element) {
  var cardNumberElmnt = $(element);
  
  cardNumberElmnt.removeClass('visa');
  cardNumberElmnt.removeClass('american');
  cardNumberElmnt.removeClass('mastercard');
  cardNumberElmnt.removeClass('maestro');
};

function cardNumberIsCorrect () {
  var cardErrorElmnt = $('#card-number-error-container');
  var cardHintContainer = $('#card-number-hint-container');

  cardErrorElmnt.hide();
  cardErrorElmnt.text("");
  cardErrorElmnt.removeClass('negative-check');
  cardHintContainer.show();
  cardHintContainer.text("");
  $('#card-number-input').removeClass('negative-box');
}

function invalidCardState (errorMsg) {
  var cardNumberElmnt = $('#card-number-input');
  var cardErrorElmnt = $('#card-number-error-container');

  $('#card-number-hint-container').hide();
  cardErrorElmnt.show();
  cardErrorElmnt.text(errorMsg);
  cardErrorElmnt.addClass('negative-check');
  cardNumberElmnt.addClass('negative-box');
  cardNumberElmnt.removeClass('correct-input');
}