var VISA = '4';
var MASTERCARD = ['51', '52'];
var AMERICANEXPRESS = ['34', '37'];
var MAESTRO = ['5018', '5020', '5038', '5612', '5893', '6304', '6761', '6762', '6763', '0604', '6390'];



$(document).ready(function() {
  $('#card-number').focus(function() {
    if(!$('#check-boxCC').is(':visible')) {
      $('#error-spaceCC').text('Enter your credit card number without any spaces');
      $('#error-spaceCC').show();
      $('#check-boxCC').hide();
    }
  }); 

  //Credit Card Number Validation

  $('#card-number').keyup(function(e){

    var str = $(this).val();
    var cardNumberElmnt = $(this);

   //Card Type Validation
   if(str.length==0){
        $('#check-boxCC').hide();
        $('#error-spaceCC').show();
        $('#check-boxCC').text('');
        $(this).removeClass('negative-box');
        $('#check-boxCC').removeClass('negative-check');
        cardCheck=false;
    }
    else if(str.length!=0&&str.length<12){
      cardCheck=false;
    }
    if(isVisaCard(str.substr(0,1))){
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('visa');
      cardNumberElmnt.attr('maxlength', 16);
    }

    else if(isMastercardCard(str.substr(0,2))){
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('visa');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('mastercard');
      cardNumberElmnt.attr('maxlength', 16);
    }

    else if(isAmericanExpressCard(str.substr(0,2))){
      //american express
      cardNumberElmnt.removeClass('visa');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('american');
      cardNumberElmnt.attr('maxlength', 15);
    }

    else if(isMaestroCard(str.substr(0,4))){
      //maestro
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('visa');
      cardNumberElmnt.addClass('maestro');
      cardNumberElmnt.attr('maxlength', 19);
    }

    else{
      //card not supported
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.removeClass('visa');

      if(str.length==4&&/^\d*$/.test(str) == true){
        cardNumberElmnt.attr('maxlength', 4);
        $('#error-spaceCC').hide();
        $('#check-boxCC').show();
        cardNumberElmnt.addClass('negative-box');
        $('#check-boxCC').text('We do not support your card type.');
        $('#check-boxCC').addClass('negative-check');
        cardCheck=false;
      }
    }

    if(/^\d*$/.test(str) == false) { 
      $('#error-spaceCC').hide();
      $('#check-boxCC').show();
      $(this).addClass('negative-box');
      $('#check-boxCC').text('Illegal characters. You can input only numbers.');
      $('#check-boxCC').addClass('negative-check');
      cardCheck=false;
    }

    else if(str.length>4 && (/^\d*$/.test(str) == true)){
      $('#check-boxCC').hide();
      $('#error-spaceCC').show();
      $('#check-boxCC').text('');
      $(this).removeClass('negative-box');
      $('#check-boxCC').removeClass('negative-check');

      if(isVisaCard(str.substr(0,1))){
        //visa
        if(str.length==13||str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(isMastercardCard(str.substr(0,2))){
        //master card
        if(str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(isAmericanExpressCard(str.substr(0,2))){
        //american express
        if(str.length==15){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(isMaestroCard(str.substr(0,4))){
        if(str.length>12){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }
    }
    else if(str.length<4&& (/^\d*$/.test(str) == true)){
      $('#check-boxCC').hide();
      $('#error-spaceCC').show();
      $('#check-boxCC').text('');
      $(this).removeClass('negative-box');
      $('#check-boxCC').removeClass('negative-check');
    }
  }); 

  $('#card-number').blur(function() {
    var checkBoxCCElmnt = $('#check-boxCC');
    checkBoxCCElmnt.text('');
    var str = $(this).val();
    var errorMsg = checkBoxCCElmnt.text();
    
    if(/^\d*$/.test(str) == false) { 
      $('#error-spaceCC').hide();
      checkBoxCCElmnt.show();
      $(this).addClass('negative-box');
      checkBoxCCElmnt.text('Illegal characters. You can input only numbers.');
      checkBoxCCElmnt.addClass('negative-check');
      cardCheck=false;
      $(this).focus().val();
    }

    else if(str.length!=0&&str.length<4){
      $('#error-spaceCC').hide();
      checkBoxCCElmnt.show();
      $(this).addClass('negative-box');
      checkBoxCCElmnt.text('Invalid length.');
      checkBoxCCElmnt.addClass('negative-check');
      cardCheck=false;
      $(this).focus().val();
    }

    else if(str.length==4||str.length>4){

      if(isVisaCard(str.substr(0,1))){
        if(str.length!=13&&str.length!=16){
          $('#error-spaceCC').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          checkBoxCCElmnt.text('Invalid length. You should input 13 or 16 digits.(VISA)');
          checkBoxCCElmnt.addClass('negative-check');
          cardCheck=false;
          $(this).focus().val();
        }
      }
      else if(isMastercardCard(str.substr(0,2))){
        if(str.length!=16){
          $('#error-spaceCC').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          checkBoxCCElmnt.text('Invalid length. You should input 16 digits.(MC)');
          checkBoxCCElmnt.addClass('negative-check');
          cardCheck=false;
          $(this).focus().val();
        }
      }

      else if(isAmericanExpressCard(str.substr(0,2))){
        if(str.length!=15){
          $('#error-spaceCC').hide();
          checkBoxCCElmnt.show();
          $(this).addClass('negative-box');
          checkBoxCCElmnt.text('Invalid length. You should input 15 digits.(AE)');
          checkBoxCCElmnt.addClass('negative-check');
          cardCheck=false;
          $(this).focus().val();
        }
      }

      else if(isMaestroCard(str.substr(0,4))){
          if(str.length<12){
            $('#error-spaceCC').hide();
            checkBoxCCElmnt.show();
            $(this).addClass('negative-box');
            checkBoxCCElmnt.text('Invalid length. You should input at least 12 digits.(MAE)');
            checkBoxCCElmnt.removeClass('positive-check');
            checkBoxCCElmnt.addClass('negative-check');
            cardCheck=false;
            $(this).focus().val(); 
          }
        }

      }

      else if(str.length==0){//empty
        checkBoxCCElmnt.hide();
        $('#error-spaceCC').show();
        checkBoxCCElmnt.text('');
        $('#error-spaceCC').text('');
        $(this).removeClass('negative-box');
        checkBoxCCElmnt.removeClass('negative-check');
      }

      else{//ok
        checkBoxCCElmnt.hide();
        $('#error-spaceCC').show();
        checkBoxCCElmnt.text('');
        $('#error-spaceCC').text('');
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



function switchActiveCard () {

};