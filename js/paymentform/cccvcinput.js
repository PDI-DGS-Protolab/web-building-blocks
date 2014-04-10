var form = new GlobalFormTools();

$(document).ready(function() {
  $('#help-label').mouseover(function() {
    $('#CVC-hint').show();
  }); 

  $('#help-label').mouseleave(function() {
    $('#CVC-hint').hide();
  }); 

  $('#card-verification-code').focus(function() {
    if(!$('#card-CVC-error-container').is(':visible')) {
      $('#card-CVC-hint-container').show();
      $('#card-CVC-hint-container').text('3 digits');
      $('#card-CVC-error-container').hide();
    }
  });  

  $('#card-verification-code').keyup(function(e) {
    var str = $('#card-verification-code').val();

    if(!onlyContainsDigits(str)) { 
      $('#card-CVC-hint-container').hide();
      $('#card-CVC-error-container').show();
      $('#card-verification-code').addClass('negative-box');
      $('#card-CVC-error-container').text('Not Valid.');
      $('#card-CVC-error-container').addClass('negative-check');
      $('#card-verification-code').focus().val();
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
    }

    else if(str.length == 0){
      $('#card-CVC-error-container').hide();
      $('#card-CVC-hint-container').show();
      $('#card-CVC-error-container').text('');
      $('#card-verification-code').removeClass('negative-box');
      $('#card-CVC-error-container').removeClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
    }

    else if(str.length == 3){
      $('#card-verification-code').removeClass('negative-box');
      $('#card-CVC-hint-container').show();
      $('#card-CVC-error-container').hide();
      $('#card-CVC-error-container').removeClass('negative-check');
      $('#card-verification-code').addClass('correct-input');
      form.globalCheck();
    }
    form.globalCheck();
  }); 


  $('#card-verification-code').blur(function() {

    var str = $('#card-verification-code').val();

    if (!onlyContainsDigits(str)) { 
      $('#card-CVC-hint-container').hide();
      $('#card-CVC-error-container').show();
      $('#card-verification-code').addClass('negative-box');
      $('#card-CVC-error-container').text('Not Valid.');
      $('#card-CVC-error-container').addClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
      $('#card-verification-code').focus().val();
    }

    else if (str.length != 0 && str.length < 3){
      $('#card-CVC-hint-container').hide();
      $('#card-CVC-error-container').show();
      $('#card-verification-code').addClass('negative-box');
      $('#card-CVC-error-container').text('Incomplete.');
      $('#card-CVC-error-container').addClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
      $('#card-verification-code').focus().val();
    }
    else if (str.length == 0) {
      $('#card-verification-code').removeClass('negative-box');
        $('#card-CVC-hint-container').show();
        $('#card-CVC-hint-container').text('');
        $('#card-CVC-error-container').hide();
        $('#card-CVC-error-container').removeClass('negative-check');
        $('#card-verification-code').removeClass('correct-input');
        form.globalCheck();
    }

    else{
        $('#card-verification-code').removeClass('negative-box');
        $('#card-CVC-hint-container').show();
        $('#card-CVC-hint-container').text('');
        $('#card-CVC-error-container').hide();
        $('#card-CVC-error-container').removeClass('negative-check');
        $('#card-verification-code').addClass('correct-input');
        form.globalCheck();
    }
  });
});

function onlyContainsDigits (numberToAnalyze) {
  return /^\d*$/.test(numberToAnalyze);
}
