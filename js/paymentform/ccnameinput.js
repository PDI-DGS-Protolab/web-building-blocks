var form = new GlobalFormTools();

$(document).ready(function() {
  $('#card-holder-name').focus(function() {
    if(!$('#card-name-error-container').is(':visible') ) {
      var cardNameHintElmnt = $('#card-name-hint-container');
      cardNameHintElmnt.show();
      cardNameHintElmnt.text('Enter your full name as it appears on your card');
      $('#card-name-error-container').hide();
    }
  });

  $('#card-holder-name').keyup(function(e) {
    var cardNameElmnt = $(this);
    var cardNameHintElmnt = $('#card-name-hint-container');
    var cardNameErrorElmnt = $('#card-name-error-container');
    var str = cardNameElmnt.val();

    if(!onlyContainsLetters(str)) {
      cardNameHintElmnt.hide();
      cardNameErrorElmnt.show();
      cardNameErrorElmnt.text('Illegal characters. You can input only letters.');
      cardNameErrorElmnt.addClass('negative-check');
      cardNameElmnt.addClass('negative-box');
      cardNameElmnt.removeClass('correct-input');
      form.globalCheck();
    }

    else if((str == '') || (str == undefined) || isMadeOfWhiteSpaces(str)) {
      cardNameHintElmnt.show();
      cardNameErrorElmnt.hide();
      cardNameErrorElmnt.text('');
      cardNameElmnt.removeClass('negative-box');
      cardNameElmnt.removeClass('correct-input');
      form.globalCheck();
    }

    else {
      cardNameHintElmnt.show();
      cardNameHintElmnt.text('Enter your full name as it appears on your card');
      cardNameErrorElmnt.hide();
      cardNameErrorElmnt.removeClass('negative-check');
      cardNameElmnt.removeClass('negative-box');
      cardNameElmnt.addClass('correct-input');
      form.globalCheck();
    }
  });

  $('#card-holder-name').blur(function() {
    var cardNameElmnt = $(this);
    var cardNameHintElmnt = $('#card-name-hint-container');
    var cardNameErrorElmnt = $('#card-name-error-container');
    var str = cardNameElmnt.val();
    
    cardNameHintElmnt.text('');
    if((!onlyContainsLetters(str) || isMadeOfWhiteSpaces(str)) && str.length > 0) {
      cardNameHintElmnt.hide();
      cardNameErrorElmnt.show();
      cardNameErrorElmnt.text('Illegal characters. You can input only letters.');
      cardNameErrorElmnt.addClass('negative-check');
      cardNameElmnt.addClass('negative-box');
      cardNameElmnt.removeClass('correct-input');
      cardNameElmnt.focus().val();
      form.globalCheck();
    }
  });
});

function onlyContainsLetters (name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}

