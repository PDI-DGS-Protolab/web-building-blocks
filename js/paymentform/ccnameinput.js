var form = new GlobalFormTools();

$(document).ready(function() {
  $('#card-holder-name').focus(function() {
    if(!$('#card-name-error-container').is(':visible') ) {
      $('#card-name-hint-container').show();
      $('#card-name-hint-container').text('Enter your full name as it appears on your card');
      $('#card-name-error-container').hide();
    }
  });

  $('#card-holder-name').keyup(function(e) {
    var str = $(this).val();
    if(!onlyContainsLetters(str)) {
      $('#card-name-hint-container').hide();
      $('#card-name-error-container').show();
      $(this).addClass('negative-box');
      $('#card-name-error-container').text('Illegal characters. You can input only letters.');
      $('#card-name-error-container').addClass('negative-check');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
    }

    else if((str == '') || (str == undefined) || isMadeOfWhiteSpaces(str)) {
      $('#card-name-hint-container').show();
      $('#card-name-error-container').hide();
      $('#card-name-error-container').text('');
      $(this).removeClass('negative-box');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
    }

    else {
      $(this).removeClass('negative-box');
      $('#card-name-error-container').hide();
      $('#card-name-hint-container').show();
      $('#card-name-hint-container').text('Enter your full name as it appears on your card');
      $('#card-name-error-container').removeClass('negative-check');
      $('#card-holder-name').addClass('correct-input');
      form.globalCheck();
    }
  });

  $('#card-holder-name').blur(function() {
    var str = $(this).val();
    $('#card-name-hint-container').text('');
    if((!onlyContainsLetters(str) || isMadeOfWhiteSpaces(str)) && str.length > 0) {
      $('#card-name-hint-container').hide();
      $('#card-name-error-container').show();
      $(this).addClass('negative-box');
      $('#card-name-error-container').text('Illegal characters. You can input only letters.');
      $('#card-name-error-container').addClass('negative-check');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
      $('#card-holder-name').focus().val();
    }
  });
});

function onlyContainsLetters (name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}

