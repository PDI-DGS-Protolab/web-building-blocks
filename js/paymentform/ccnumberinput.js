var VISA = '4';
var MASTERCARD = ['51', '52'];
var AMERICANEXPRESS = ['34', '37'];
var MAESTRO = ['5018', '5020', '5038', '5612', '5893', '6304', '6761', '6762', '6763', '0604', '6390'];



$(document).ready(function() {
  $('#card-number-input').focus(function() {
    if(!$('#card-number-error-container').is(':visible')) {
      $('#card-number-hint-container').text('Enter your credit card number without any spaces');
      $('#card-number-hint-container').show();
      $('#card-number-error-container').hide();
    }
  }); 

  //Credit Card Number Validation

  $('#card-number-input').keyup(function(e){

    var str = $(this).val();
    var cardNumberElmnt = $(this);

   //Card Type Validation
   if(str.length==0){
        $('#card-number-error-container').hide();
        $('#card-number-hint-container').show();
        $('#card-number-error-msg').text('');
        $(this).removeClass('negative-box');
        $('#card-number-error-container').removeClass('negative-check');
        $('#card-number-input').removeClass('correct-input');

    }
    else if(str.length!=0&&str.length<12){
      $('#card-number-input').removeClass('correct-input');
    }
    if(isVisaCard(str.substr(0,1))){
      switchActiveCard(cardNumberElmnt, 'visa', 16);
    }

    else if(isMastercardCard(str.substr(0,2))){
      switchActiveCard(cardNumberElmnt, 'mastercard', 16);
    }

    else if(isAmericanExpressCard(str.substr(0,2))){
      switchActiveCard(cardNumberElmnt, 'american', 15);
    }

    else if(isMaestroCard(str.substr(0,4))){
      switchActiveCard(cardNumberElmnt, 'maestro', 19);
    }

    else{
      //card not supported
      clearCardClasses(cardNumberElmnt);

      if(str.length==4&&/^\d*$/.test(str) == true){
        cardNumberElmnt.attr('maxlength', 4);
        $('#card-number-hint-container').hide();
        $('#card-number-error-container').show();
        cardNumberElmnt.addClass('negative-box');
        $('#card-number-error-msg').text('We do not support your card type.');
        $('#card-number-error-container').addClass('negative-check');
        $('#card-number-input').removeClass('correct-input');
      }
    }

    if(/^\d*$/.test(str) == false) { 
      $('#card-number-hint-container').hide();
      $('#card-number-error-container').show();
      $(this).addClass('negative-box');
      $('#card-number-error-msg').text('Illegal characters. You can input only numbers.');
      $('#card-number-error-container').addClass('negative-check');
      $('#card-number-input').removeClass('correct-input');
    }

    else if(str.length>4 && (/^\d*$/.test(str) == true)){
      $('#card-number-error-container').hide();
      $('#card-number-hint-container').show();
      $('#card-number-error-msg').text('');
      $(this).removeClass('negative-box');
      $('#card-number-error-container').removeClass('negative-check');

      if(isVisaCard(str.substr(0,1))){
        //visa
        if(str.length==13||str.length==16){
          $('#card-number-input').addClass('correct-input');
        }
        else{
          $('#card-number-input').removeClass('correct-input');
        } 
      }

      else if(isMastercardCard(str.substr(0,2))){
        //master card
        if(str.length==16){
          $('#card-number-input').addClass('correct-input');
        }
        else{
          $('#card-number-input').removeClass('correct-input');
        } 
      }

      else if(isAmericanExpressCard(str.substr(0,2))){
        //american express
        if(str.length==15){
          $('#card-number-input').addClass('correct-input');
        }
        else{
          $('#card-number-input').removeClass('correct-input');
        } 
      }

      else if(isMaestroCard(str.substr(0,4))){
        if(str.length>12){
          $('#card-number-input').addClass('correct-input');
        }
        else{
          $('#card-number-input').removeClass('correct-input');
        } 
      }
    }
    else if(str.length<4&& (/^\d*$/.test(str) == true)){
      $('#card-number-error-container').hide();
      $('#card-number-hint-container').show();
      $('#card-number-error-msg').text('');
      $(this).removeClass('negative-box');
      $('#card-number-error-container').removeClass('negative-check');
    }
  }); 

  $('#card-number-input').blur(function() {
    var checkBoxCCElmnt = $('#card-number-error-container');
    $('#card-number-error-msg').text('');
    var str = $(this).val();
    var errorMsg = checkBoxCCElmnt.text();
    
    if(/^\d*$/.test(str) == false) { 
      $('#card-number-hint-container').hide();
      checkBoxCCElmnt.show();
      $(this).addClass('negative-box');
      $('#card-number-error-msg').text('Illegal characters. You can input only numbers.');
      checkBoxCCElmnt.addClass('negative-check');
      $('#card-number-input').removeClass('correct-input');
      $(this).focus().val();
    }

    else if(str.length!=0&&str.length<4){
      $('#card-number-hint-container').hide();
      checkBoxCCElmnt.show();
      $(this).addClass('negative-box');
      $('#card-number-error-msg').text('Invalid length.');
      checkBoxCCElmnt.addClass('negative-check');
      $('#card-number-input').removeClass('correct-input');
      $(this).focus().val();
    }

    else if(str.length==4||str.length>4){

      if(isVisaCard(str.substr(0,1))){
        if(str.length!=13&&str.length!=16){
          $('#card-number-hint-container').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          $('#card-number-error-msg').text('Invalid length. You should input 13 or 16 digits.(VISA)');
          checkBoxCCElmnt.addClass('negative-check');
          $('#card-number-input').removeClass('correct-input');
          $(this).focus().val();
        }
      }
      else if(isMastercardCard(str.substr(0,2))){
        if(str.length!=16){
          $('#card-number-hint-container').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          $('#card-number-error-msg').text('Invalid length. You should input 16 digits.(MC)');
          checkBoxCCElmnt.addClass('negative-check');
          $('#card-number-input').removeClass('correct-input');
          $(this).focus().val();
        }
      }

      else if(isAmericanExpressCard(str.substr(0,2))){
        if(str.length!=15){
          $('#card-number-hint-container').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          $('#card-number-error-msg').text('Invalid length. You should input 15 digits.(AE)');
          checkBoxCCElmnt.addClass('negative-check');
          $('#card-number-input').removeClass('correct-input');
          $(this).focus().val();
        }
      }

      else if(isMaestroCard(str.substr(0,4))){
          if(str.length<12){
            $('#card-number-hint-container').hide();
            checkBoxCCElmnt.show();
            $(this).addClass('negative-box');
            $('#card-number-error-msg').text('Invalid length. You should input at least 12 digits.(MAE)');
            checkBoxCCElmnt.removeClass('positive-check');
            checkBoxCCElmnt.addClass('negative-check');
            $('#card-number-input').removeClass('correct-input');
            $(this).focus().val(); 
          }
        }

      }

      else if(str.length==0){//empty
        checkBoxCCElmnt.hide();
        $('#card-number-hint-container').show();
        checkBoxCCElmnt.text('');
        $('#card-number-hint-container').text('');
        $(this).removeClass('negative-box');
        checkBoxCCElmnt.removeClass('negative-check');
      }

      else{//ok
        checkBoxCCElmnt.hide();
        $('#card-number-hint-container').show();
        checkBoxCCElmnt.text('');
        $('#card-number-hint-container').text('');
        $(this).removeClass('negative-box');
        checkBoxCCElmnt.removeClass('negative-check');

      }
  });
});

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
  var CCInput = $(element);
  
  clearCardClasses(CCInput);

  CCInput.addClass(newCardClass);
  CCInput.attr('maxlength', newCardLength);
};

function clearCardClasses(element) {
  var CCInput = $(element);
  
  CCInput.removeClass('visa');
  CCInput.removeClass('american');
  CCInput.removeClass('mastercard');
  CCInput.removeClass('maestro');
};