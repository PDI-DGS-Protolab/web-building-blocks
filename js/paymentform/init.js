$(document).ready(function() {

  var nameCheck=false;
  var cardCheck=false;
  var cvcCheck=false;

  $('.submit-button').mouseover(function(){
    $('.back-submit').css('background-color','rgba(72,72,72,1.0)');
  });

  $('.submit-button').mouseout(function(){
    $('.back-submit').css('background-color','rgba(72,72,72,0.0)');
  });


 /*----------------------------FINAL CHECK------------------------------------*/
  $('input[type="text"]').keyup(function(e){
    check();
  });

  $('input[type="password"]').keyup(function(e){
    check();
  });
 /*--------------------------END: FINAL CHECK---------------------------------*/
});

var dateCh=false;
function check(){

  if($('#card-holder-name').hasClass('correct-input')
    && $('#card-number-input').hasClass('correct-input')
    && $('#card-verification-code').hasClass('correct-input')
    &&(dateCh==true)
    ){
    $(":submit").removeAttr('disabled');
  }
  else{
    $(":submit").attr('disabled','disabled');
  }
}


