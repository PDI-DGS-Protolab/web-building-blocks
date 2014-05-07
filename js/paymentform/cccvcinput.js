var form = new GlobalFormTools();

function cardCVCHelpMouseOver () {
  $('#CVC-hint').show();
}

function cardCVCHelpMouseLeave () {
  $('#CVC-hint').hide();
}

function cardCVCFocus () {
  if (!$('#card-CVC-error-container').is(':visible')) {
    var cvcHintElmnt = $('#card-CVC-hint-container');
    cvcHintElmnt.show();
    cvcHintElmnt.text("3 digits");
    $('#card-CVC-error-container').hide();
  }
}

function cardCVCKeyUp () {
  var cvcElmnt = $('#card-verification-code');
  var cvcErrorElmnt = $('#card-CVC-error-container');
  var str = cvcElmnt.val();

  if (!onlyContainsDigits(str) && str.length > 0) {
    $('#card-CVC-hint-container').hide();
    cvcErrorElmnt.show();
    cvcErrorElmnt.text("Not Valid");
    cvcErrorElmnt.addClass('negative-check');
    cvcElmnt.addClass('negative-box');
    cvcElmnt.removeClass('correct-input');
    cvcElmnt.focus().val();
    form.globalCheck();
  }
  else if (str.length == 0) {
    neutralCVCState();
    cvcElmnt.removeClass('correct-input');
    form.globalCheck();
  }
  else if (str.length == 3) {
    neutralCVCState();
    cvcElmnt.addClass('correct-input');
    form.globalCheck();
  }
  else if (str.length < 3) {
    cvcElmnt.removeClass('correct-input');
    form.globalCheck();
  }
  form.globalCheck();
}

function cardCVCBlur () {
  var cvcElmnt = $('#card-verification-code');
  var str = cvcElmnt.val();

  if (!onlyContainsDigits(str) && str.length > 0) {
    incorrectCVCBlurState("Not Valid");
    form.globalCheck();
  }
  else if (str.length != 0 && str.length < 3) {
    incorrectCVCBlurState("Incomplete");
    form.globalCheck();
  }
  else if (str.length == 0) {
    neutralCVCBlurState();
    cvcElmnt.removeClass('correct-input');
    form.globalCheck();
  }
  else {
    neutralCVCBlurState();
    cvcElmnt.addClass('correct-input');
    form.globalCheck();
  }
}

function neutralCVCState () {
  var cvcErrorElmnt = $('#card-CVC-error-container');

  $('#card-CVC-hint-container').show();
  cvcErrorElmnt.hide();
  cvcErrorElmnt.text("");
  cvcErrorElmnt.removeClass('negative-check');
  $('#card-verification-code').removeClass('negative-box');
}

function incorrectCVCBlurState (errorMsg) {
  var cvcElmnt = $('#card-verification-code');
  var cvcErrorElmnt = $('#card-CVC-error-container');

  $('#card-CVC-hint-container').hide();
  cvcErrorElmnt.show();
  cvcErrorElmnt.text(errorMsg);
  cvcErrorElmnt.addClass('negative-check');
  cvcElmnt.addClass('negative-box');
  cvcElmnt.removeClass('correct-input');
  cvcElmnt.focus().val();
}

function neutralCVCBlurState () {
  var cvcErrorElmnt = $('#card-CVC-error-container');
  var cvcHintElmnt = $('#card-CVC-hint-container');

  cvcHintElmnt.show();
  cvcHintElmnt.text("");
  cvcErrorElmnt.hide();
  cvcErrorElmnt.removeClass('negative-check');
  $('#card-verification-code').removeClass('negative-box');
}