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
    if(str.substr(0,1)=='4'){
      //visa
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('visa');
      cardNumberElmnt.attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='51'
          ||str.substr(0,2)=='52'){
      //master card
      cardNumberElmnt.removeClass('american');
      cardNumberElmnt.removeClass('visa');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('mastercard');
      cardNumberElmnt.attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='34'
          ||str.substr(0,2)=='37'){
      //american express
      cardNumberElmnt.removeClass('visa');
      cardNumberElmnt.removeClass('mastercard');
      cardNumberElmnt.removeClass('maestro');
      cardNumberElmnt.addClass('american');
      cardNumberElmnt.attr('maxlength', 15);
    }

    else if(str.substr(0,4)=='5018'
          ||str.substr(0,4)=='5020'
          ||str.substr(0,4)=='5038'
          ||str.substr(0,4)=='5612'
          ||str.substr(0,4)=='5893'
          ||str.substr(0,4)=='6304'
          ||str.substr(0,4)=='6761'
          ||str.substr(0,4)=='6762'
          ||str.substr(0,4)=='6763'
          ||str.substr(0,4)=='0604'
          ||str.substr(0,4)=='6390'){
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

      if(str.substr(0,1)=='4'){
        if(str.length==13||str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,2)=='51'
            ||str.substr(0,2)=='52'){
        if(str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,2)=='34'
            ||str.substr(0,2)=='37'){
        if(str.length==15){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,4)=='5018'
              ||str.substr(0,4)=='5020'
              ||str.substr(0,4)=='5038'
              ||str.substr(0,4)=='5612'
              ||str.substr(0,4)=='5893'
              ||str.substr(0,4)=='6304'
              ||str.substr(0,4)=='6761'
              ||str.substr(0,4)=='6762'
              ||str.substr(0,4)=='6763'
              ||str.substr(0,4)=='0604'
              ||str.substr(0,4)=='6390'){
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

      if(str.substr(0,1)=='4'){
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
      else if(str.substr(0,2)=='51'
            ||str.substr(0,2)=='52'){
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

      else if(str.substr(0,2)=='34'
            ||str.substr(0,2)=='37'){
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

      else if(str.substr(0,4)=='5018'
            ||str.substr(0,4)=='5020'
            ||str.substr(0,4)=='5038'
            ||str.substr(0,4)=='5612'
            ||str.substr(0,4)=='5893'
            ||str.substr(0,4)=='6304'
            ||str.substr(0,4)=='6761'
            ||str.substr(0,4)=='6762'
            ||str.substr(0,4)=='6763'
            ||str.substr(0,4)=='0604'
            ||str.substr(0,4)=='6390') {
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