var form = new GlobalFormTools();

$(document).ready(function() {
  $('#help-label').mouseover(function() {
    $('#CVC-hint').show();
  }); 

  $('#help-label').mouseleave(function() {
    $('#CVC-hint').hide();
  }); 

  $('#card-verification-code').focus(function() {
    if(!$('#check-boxCVC').is(':visible')) {
      $('#error-spaceCVC').show();
      $('#error-spaceCVC').text('3 digits');
      $('#check-boxCVC').hide();
    }
  });  

  $('#card-verification-code').keyup(function(e) {
    var str = $('#card-verification-code').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $('#error-spaceCVC').hide();
      $('#check-boxCVC').show();
      $('#card-verification-code').addClass('negative-box');
      $('#check-boxCVC').text('Not Valid.');
      $('#check-boxCVC').addClass('negative-check');
      $('#card-verification-code').focus().val();
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
    }

    else if(str.length == 0){
      $('#check-boxCVC').hide();
      $('#error-spaceCVC').show();
      $('#check-boxCVC').text('');
      $('#card-verification-code').removeClass('negative-box');
      $('#check-boxCVC').removeClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
    }

    else if(str.length == 3){
      $('#card-verification-code').removeClass('negative-box');
      $('#error-spaceCVC').show();
      $('#check-boxCVC').hide();
      $('#check-boxCVC').removeClass('negative-check');
      $('#card-verification-code').addClass('correct-input');
      form.globalCheck();
    }

    else if (str.length < 3) {
      $('#error-spaceCVC').hide();
      $('#check-boxCVC').show();
      $('#card-verification-code').addClass('negative-box');
      $('#check-boxCVC').text('Incomplete.');
      $('#check-boxCVC').addClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
    }
    form.globalCheck();
  }); 


  $('#card-verification-code').blur(function() {

    var str = $('#card-verification-code').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $('#error-spaceCVC').hide();
      $('#check-boxCVC').show();
      $('#card-verification-code').addClass('negative-box');
      $('#check-boxCVC').text('Not Valid.');
      $('#check-boxCVC').addClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
      $('#card-verification-code').focus().val();
    }

    else if(str.length!=0&&str.length < 3){
      $('#error-spaceCVC').hide();
      $('#check-boxCVC').show();
      $('#card-verification-code').addClass('negative-box');
      $('#check-boxCVC').text('Incomplete.');
      $('#check-boxCVC').addClass('negative-check');
      $('#card-verification-code').removeClass('correct-input');
      form.globalCheck();
      $('#card-verification-code').focus().val();
    }
    else if(str.length == 0){
      $('#card-verification-code').removeClass('negative-box');
        $('#error-spaceCVC').show();
        $('#error-spaceCVC').text('');
        $('#check-boxCVC').hide();
        $('#check-boxCVC').removeClass('negative-check');
        $('#card-verification-code').removeClass('correct-input');
        form.globalCheck();
    }

    else{
        $('#card-verification-code').removeClass('negative-box');
        $('#error-spaceCVC').show();
        $('#error-spaceCVC').text('');
        $('#check-boxCVC').hide();
        $('#check-boxCVC').removeClass('negative-check');
        $('#card-verification-code').addClass('correct-input');
        form.globalCheck();
    }
  });
});
