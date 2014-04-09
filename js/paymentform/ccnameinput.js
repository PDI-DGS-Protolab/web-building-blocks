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
    if(!containsLetters(str)) {
      $('#card-name-hint-container').hide();
      $('#card-name-error-container').show();
      $(this).addClass('negative-box');
      $('#card-name-error-msg').text('Illegal characters. You can input only letters.');
      $('#card-name-error-msg').addClass('negative-check');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
    }

    else if((str == '') || (str == undefined) || (str.match(/^\s*$/))) {
      $('#card-name-hint-container').show();
      $('#card-name-error-container').hide();
      $('#card-name-error-msg').text('');
      $(this).removeClass('negative-box');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
    }

    else {
      $(this).removeClass('negative-box');
      $('#card-name-error-container').hide();
      $('#card-name-hint-container').show();
      $('#card-name-hint-container').text('Enter your full name as it appears on your card');
      $('#card-name-error-msg').removeClass('negative-check');
      $('#card-holder-name').addClass('correct-input');
      form.globalCheck();
    }
  });

  $('#card-holder-name').blur(function() {
    var str = $(this).val();
    $('#card-name-hint-container').text('');
    if(!containsLetters(str)) {
      $('#card-name-hint-container').hide();
      $('#card-name-error-container').show();
      $(this).addClass('negative-box');
      $('#card-name-error-msg').text('Illegal characters. You can input only letters.');
      $('#card-name-error-msg').addClass('negative-check');
      $('#card-holder-name').removeClass('correct-input');
      form.globalCheck();
      $('#card-holder-name').focus().val();
    }
  });
});

function containsLetters(name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}
