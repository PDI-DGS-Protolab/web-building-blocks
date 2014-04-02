var form = new GlobalFormTools();

$(document).on('focus', '#card-holder-name', function() {
   if( !$(this).parent().find('#card-name-error-container').is(':visible') ) {
    $(this).parent().find('#card-name-hint-container').show();
    $(this).parent().find('#card-name-hint-container').text('Enter your full name as it appears on your card');
    $(this).parent().find('#card-name-error-container').hide();
  }
});

$(document).on('keyup', '#card-holder-name', function(e) {
  var str = $(this).val();
  if(!containsLetters(str)) {
    $(this).parent().find('#card-name-hint-container').hide();
    $(this).parent().find('#card-name-error-container').show();
    $(this).addClass('negative-box');
    $(this).parent().find('#card-name-error-msg').text('Illegal characters. You can input only letters.');
    $(this).parent().find('#card-name-error-msg').addClass('negative-check');
    $('#card-holder-name').removeClass('correct-input');
    form.globalCheck();
  }

  else if((str=='')||(str==undefined)||(str.match(/^\s*$/))) {
    $(this).parent().find('#card-name-hint-container').show();
    $(this).parent().find('#card-name-error-container').hide();
    $(this).parent().find('#card-name-error-msg').text('');
    $(this).removeClass('negative-box');
    $('#card-holder-name').removeClass('correct-input');
    form.globalCheck();
  }

  else {
    $(this).removeClass('negative-box');
    $(this).parent().find('#card-name-error-container').hide();
    $(this).parent().find('#card-name-hint-container').show();
    $(this).parent().find('#card-name-hint-container').text('Enter your full name as it appears on your card');
    $(this).parent().find('#card-name-error-msg').removeClass('negative-check');
    $('#card-holder-name').addClass('correct-input');
    form.globalCheck();
  }
});

$(document).on('blur', '#card-holder-name', function() {
  var str = $(this).val();
  $(this).parent().find('#card-name-hint-container').text('');
  if(!containsLetters(str)) {
    $(this).parent().find('#card-name-hint-container').hide();
    $(this).parent().find('#card-name-error-container').show();
    $(this).addClass('negative-box');
    $(this).parent().find('#card-name-error-msg').text('Illegal characters. You can input only letters.');
    $(this).parent().find('#card-name-error-msg').addClass('negative-check');
    $('#card-holder-name').removeClass('correct-input');
    form.globalCheck();
  }
});

function containsLetters(name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}
