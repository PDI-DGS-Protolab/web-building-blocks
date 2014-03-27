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

  var date= new Date();
  var month= date.getMonth();

  var availableMonth = [ "01","02","03","04","05","06",
                        "07","08","09","10","11","12" ];

  var year= date.getFullYear().toString().substring(2,4);

  var availableYear = new Array();
  availableYear.push(year);
  var nextYear;

  for (var i=0;i<30;i++){ 
    nextYear=date.getFullYear()+i+1;
    availableYear.push(nextYear.toString().substring(2,4));
  }
  
  $("#credit-card-month-value").attr("placeholder", (month+1).toString());
  $("#credit-card-year-value").attr("placeholder", year);



 /*---------------------------CVC HELP----------------------------------------*/
  $('#help-label').mouseover(function() {
    $("#CVC-hint").show();
  }); 

  $('#help-label').mouseleave(function() {
    $("#CVC-hint").hide();
  }); 
 /*----------------------END: CVC HELP----------------------------------------*/


 /*-------------------------CREDIT CARD NUMBER FIELD--------------------------*/  

  //Credit Card Context
  $('#card-number').focus(function() {
    if(!$("#check-boxCC").is(':visible')) {
      $("#error-spaceCC").text("Enter your credit card number without any spaces");
      $("#error-spaceCC").show();
      $("#check-boxCC").hide();
    }
  }); 

  //Credit Card Number Validation

  $('#card-number').keyup(function(e){

    var str = $('#card-number').val();

   //Card Type Validation
   if(str.length==0){
        $("#check-boxCC").hide();
        $("#error-spaceCC").show();
        $("#check-boxCC").text("");
        $(this).removeClass("negative-box");
        $("#check-boxCC").removeClass("negative-check");
        cardCheck=false;
    }
    else if(str.length!=0&&str.length<12){
      cardCheck=false;
    }
    if(str.substr(0,1)=='4'){
      //visa
      $("#card-number").removeClass("american");
      $("#card-number").removeClass("mastercard");
      $("#card-number").removeClass("maestro");
      $("#card-number").addClass("visa");
      $('#card-number').attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='51'
          ||str.substr(0,2)=='52'){
      //master card
      $("#card-number").removeClass("american");
      $("#card-number").removeClass("visa");
      $("#card-number").removeClass("maestro");
      $("#card-number").addClass("mastercard");
      $('#card-number').attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='34'
          ||str.substr(0,2)=='37'){
      //american express
      $("#card-number").removeClass("visa");
      $("#card-number").removeClass("mastercard");
      $("#card-number").removeClass("maestro");
      $("#card-number").addClass("american");
      $('#card-number').attr('maxlength', 15);
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
      $("#card-number").removeClass("american");
      $("#card-number").removeClass("mastercard");
      $("#card-number").removeClass("visa");
      $("#card-number").addClass("maestro");
      $('#card-number').attr('maxlength', 19);
    }

    else{
      //card not supported
      $("#card-number").removeClass("american");
      $("#card-number").removeClass("mastercard");
      $("#card-number").removeClass("maestro");
      $("#card-number").removeClass("visa");

      if(str.length==4&&/^[0-9]*$/.test(str) == true){
        $('#card-number').attr('maxlength', 4);
        $("#error-spaceCC").hide();
        $("#check-boxCC").show();
        $('#card-number').addClass("negative-box");
        $("#check-boxCC").text("We do not support your card type.");
        $("#check-boxCC").addClass("negative-check");
        cardCheck=false;
      }
    }

    if(/^[0-9]*$/.test(str) == false) { 
      $("#error-spaceCC").hide();
      $("#check-boxCC").show();
      $(this).addClass("negative-box");
      $("#check-boxCC").text("Illegal characters. You can input only numbers.");
      $("#check-boxCC").addClass("negative-check");
      cardCheck=false;
    }

    else if(str.length>4 && (/^[0-9]*$/.test(str) == true)){
      $("#check-boxCC").hide();
      $("#error-spaceCC").show();
      $("#check-boxCC").text("");
      $(this).removeClass("negative-box");
      $("#check-boxCC").removeClass("negative-check");

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
    else if(str.length<4&& (/^[0-9]*$/.test(str) == true)){
      $("#check-boxCC").hide();
      $("#error-spaceCC").show();
      $("#check-boxCC").text("");
      $(this).removeClass("negative-box");
      $("#check-boxCC").removeClass("negative-check");
    }
  }); 


  $('#card-number').blur(function() {

    $("#check-boxCC").text("");
    var str = $('#card-number').val();
    var errorMsg=$('#check-boxCC').text();

    if(/^[0-9]*$/.test(str) == false) { 
      $("#error-spaceCC").hide();
      $("#check-boxCC").show();
      $(this).addClass("negative-box");
      $("#check-boxCC").text("Illegal characters. You can input only numbers.");
      $("#check-boxCC").addClass("negative-check");
      cardCheck=false;
      $('#card-number').focus().val();
    }

    else if(str.length!=0&&str.length<4){
      $("#error-spaceCC").hide();
      $("#check-boxCC").show();
      $(this).addClass("negative-box");
      $("#check-boxCC").text("Invalid length.");
      $("#check-boxCC").addClass("negative-check");
      cardCheck=false;
      $('#card-number').focus().val();
    }

    else if(str.length==4||str.length>4){

      if(str.substr(0,1)=='4'){
        if(str.length!=13&&str.length!=16){
          $("#error-spaceCC").hide();
          $("#check-boxCC").show();
          $(this).addClass("negative-box");
          $("#check-boxCC").text("Invalid length. You should input 13 or 16 digits.(VISA)");
          $("#check-boxCC").addClass("negative-check");
          cardCheck=false;
          $('#card-number').focus().val();
        }
      }
      else if(str.substr(0,2)=='51'
            ||str.substr(0,2)=='52'){
        if(str.length!=16){
          $("#error-spaceCC").hide();
          $("#check-boxCC").show();
          $(this).addClass("negative-box");
          $("#check-boxCC").text("Invalid length. You should input 16 digits.(MC)");
          $("#check-boxCC").addClass("negative-check");
          cardCheck=false;
          $('#card-number').focus().val();
        }
      }

      else if(str.substr(0,2)=='34'
            ||str.substr(0,2)=='37'){
        if(str.length!=15){
          $("#error-spaceCC").hide();
          $("#check-boxCC").show();
          $(this).addClass("negative-box");
          $("#check-boxCC").text("Invalid length. You should input 15 digits.(AE)");
          $("#check-boxCC").addClass("negative-check");
          cardCheck=false;
          $('#card-number').focus().val();
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
            $("#error-spaceCC").hide();
            $("#check-boxCC").show();
            $(this).addClass("negative-box");
            $("#check-boxCC").text("Invalid length. You should input at least 12 digits.(MAE)");
            $("#check-boxCC").removeClass("positive-check");
            $("#check-boxCC").addClass("negative-check");
            cardCheck=false;
            $('#card-number').focus().val(); 
          }
        }

      }

      else if(str.length==0){//empty
        $("#check-boxCC").hide();
        $("#error-spaceCC").show();
        $("#check-boxCC").text("");
        $("#error-spaceCC").text("");
        $(this).removeClass("negative-box");
        $("#check-boxCC").removeClass("negative-check");
      }

      else{//ok
        $("#check-boxCC").hide();
        $("#error-spaceCC").show();
        $("#check-boxCC").text("");
        $("#error-spaceCC").text("");
        $(this).removeClass("negative-box");
        $("#check-boxCC").removeClass("negative-check");

      }
   });
 /*---------------------------------------------------------------------------*/


 /*---------------------------------CVC FIELD---------------------------------*/
  $('#card-verification-code').focus(function() {
    if( !$("#check-boxCVC").is(':visible') ) {
      $("#error-spaceCVC").show();
      $("#error-spaceCVC").text("3 digits");
      $("#check-boxCVC").hide();
    }
  });  

  $('#card-verification-code').keyup(function(e) {
    var str = $('#card-verification-code').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $("#error-spaceCVC").hide();
      $("#check-boxCVC").show();
      $('#card-verification-code').addClass("negative-box");
      $("#check-boxCVC").text("Not Valid.");
      $("#check-boxCVC").addClass("negative-check");
      $('#card-verification-code').focus().val();
      cvcCheck=false;
    }

    else if(str.length==0){
      $("#check-boxCVC").hide();
      $("#error-spaceCVC").show();
      $("#check-boxCVC").text("");
      $('#card-verification-code').removeClass("negative-box");
      $("#check-boxCVC").removeClass("negative-check");
      cvcCheck=false;
    }

    else if(str.length==3){
        $('#card-verification-code').removeClass("negative-box");
        $("#error-spaceCVC").show();
        $("#check-boxCVC").hide();
        $("#check-boxCVC").removeClass("negative-check");
        cvcCheck=true;
    }
  }); 


  $('#card-verification-code').blur(function() {

    var str = $('#card-verification-code').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $("#error-spaceCVC").hide();
      $("#check-boxCVC").show();
      $('#card-verification-code').addClass("negative-box");
      $("#check-boxCVC").text("Not Valid.");
      $("#check-boxCVC").addClass("negative-check");
      cvcCheck=false;
      $('#card-verification-code').focus().val();
    }

    else if(str.length!=0&&str.length<3){
      $("#error-spaceCVC").hide();
      $("#check-boxCVC").show();
      $('#card-verification-code').addClass("negative-box");
      $("#check-boxCVC").text("Incomplete.");
      $("#check-boxCVC").addClass("negative-check");
      cvcCheck=false;
      $('#card-verification-code').focus().val();
    }
    else if(str.length==0){
      $('#card-verification-code').removeClass("negative-box");
        $("#error-spaceCVC").show();
        $("#error-spaceCVC").text("");
        $("#check-boxCVC").hide();
        $("#check-boxCVC").removeClass("negative-check");
        cvcCheck=false;
    }

    else{
        $('#card-verification-code').removeClass("negative-box");
        $("#error-spaceCVC").show();
        $("#error-spaceCVC").text("");
        $("#check-boxCVC").hide();
        $("#check-boxCVC").removeClass("negative-check");
        cvcCheck=true;
    }
   }); 

 /*---------------------------------------------------------------------------*/


 /*-------------------DATE FIELDS FORMATING AND CHECK-------------------------*/
  $('#credit-card-month-value').focus(function() {
    $("#credit-card-month-value").attr("placeholder", "");
  });

  $('#credit-card-year-value').focus(function() {
    $("#credit-card-year-value").attr("placeholder", "");
  });

  $('#credit-card-month-value').keyup(function(e) {
    dateCheck();
  });

  $('#credit-card-year-value').keyup(function(e) {
    dateCheck();
  });

  $('#credit-card-year-value').blur(function() {
    dateCheckOnBlur();
  });

  $('#credit-card-month-value').blur(function() {
    dateCheckOnBlur();
  });

  $("#credit-card-month-value").autocomplete({
    source: availableMonth
  });

  $("#credit-card-year-value").autocomplete({
    //source: availableYear
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableYear, request.term);
        response(results.slice(0, 7));
    }
  });

 /*--------------------------END:DATE FIELDS FORMATING------------------------*/



 /*----------------------------FINAL CHECK------------------------------------*/
  $('input[type="text"]').keyup(function(e){
    check(nameCheck,cardCheck, cvcCheck);
  });

  $('input[type="password"]').keyup(function(e){
    check(nameCheck,cardCheck, cvcCheck);
  });
 /*--------------------------END: FINAL CHECK---------------------------------*/
});

var dateCh=false;
function check(nameCheck,cardCheck, cvcCheck){

  if((nameCheck==true)
    &&(cardCheck==true)
    &&(cvcCheck==true)
    &&(dateCh==true)
    ){
    $(":submit").removeAttr("disabled");
  }
  else{
    $(":submit").attr('disabled','disabled');
  }
}

function dateCheck() {
  var d=new Date();
  var y=d.getFullYear().toString().substr(2,4);
  var m=d.getMonth();
  var selM= $('#credit-card-month-value').val().toString();
  var selY= $('#credit-card-year-value').val().toString(); 


  if((/^[0-9]*$/.test(selY) == false)){
    $("#error-date-empty").hide();
    $("#error-date").show();
    $("#credit-card-year-value").addClass("negative-box");
    $("#credit-card-month-value").addClass("negative-box");
    $("#check-box-date").text("You can input only digits.");
    $("#check-box-date").addClass("negative-check");
    $("#credit-card-year-value").focus().val();
    dateCh=false;
  }
  else if((/^[0-9]*$/.test(selM) == false)){
    $("#error-date-empty").hide();
    $("#error-date").show();
    $("#credit-card-year-value").addClass("negative-box");
    $("#credit-card-month-value").addClass("negative-box");
    $("#check-box-date").text("You can input only digits.");
    $("#check-box-date").addClass("negative-check");
    $("#credit-card-month-value").focus().val();
    dateCh=false;
  }
  else{
    if(selM>12){
      $("#error-date-empty").hide();
      $("#error-date").show();
      $("#credit-card-year-value").addClass("negative-box");
      $("#credit-card-month-value").addClass("negative-box");
      $("#check-box-date").text("Invalid Month entered.");
      $("#check-box-date").addClass("negative-check");
      $("#credit-card-year-value").focus().val();
      dateCh=false;
    }
    if(selY==y){
      if(selM<m){
        //ERROR
        $("#error-date-empty").hide();
        $("#error-date").show();
        $("#credit-card-year-value").addClass("negative-box");
        $("#credit-card-month-value").addClass("negative-box");
        $("#check-box-date").text("Your card has expired or you have chosen a wrong expiration date.");
        $("#check-box-date").addClass("negative-check");
        $("#credit-card-year-value").focus().val();
        dateCh=false;
     }
      else if(selM==""){
        //Must input a month
        $("#credit-card-month-value").attr("placeholder", m+1);
        $("#error-date-empty").show();
        $("#error-date-empty").text("");
        $("#check-box-date").text("");
        $("#error-date").hide();
        $("#credit-card-month-value").removeClass("negative-box");
        $("#credit-card-year-value").removeClass("negative-box");
        dateCh=false;
      }
      else{
        //EVERYTHING OK!
        $("#error-date-empty").show();
        $("#error-date").hide();
        $("#check-box-date").text("");
        $("#credit-card-year-value").removeClass("negative-box");
        $("#credit-card-month-value").removeClass("negative-box");
        dateCh=true;
      }
    }
    else if(selY==""){
      //Must input a year
      $("#credit-card-year-value").attr("placeholder", y);
      $("#error-date-empty").show();
      $("#error-date-empty").text("");
      $("#check-box-date").text("");
      $("#error-date").hide();
      $("#credit-card-year-value").removeClass("negative-box");
      $("#credit-card-month-value").removeClass("negative-box");
      dateCh=false;
    }

    else if(selY.length==2&&selY<y){
      //ERROR
      $("#error-date-empty").hide();
      $("#error-date").show();
      $("#credit-card-year-value").addClass("negative-box");
      $("#credit-card-month-value").addClass("negative-box");
      $("#check-box-date").text("Your card has expired or you have chosen a wrong expiration date.");
      $("#check-box-date").addClass("negative-check");
      $("#credit-card-year-value").focus().val();
      dateCh=false;
    }
    else if(selY.length==1){
      dateCh=false;
    }
    else{
      if(selM==""){
        //Must input a month
        $("#credit-card-month-value").attr("placeholder", m+1);
        $("#error-date-empty").show();
        $("#error-date-empty").text("");
        $("#check-box-date").text("");
        $("#error-date").hide();
        $("#credit-card-month-value").removeClass("negative-box");
        $("#credit-card-year-value").removeClass("negative-box");
        dateCh=false;
      }
      else{
        $("#check-box-date").text("");
        $("#error-date-empty").show();
        $("#error-date").hide();
        $("#credit-card-year-value").removeClass("negative-box");
        $("#credit-card-month-value").removeClass("negative-box");
        dateCh=true;
      }
    }
  }
}

function dateCheckOnBlur(){
  var d=new Date();
  var y=d.getFullYear().toString().substr(2,4);
  var m=d.getMonth();
  var selM= $('#credit-card-month-value').val().toString();
  var selY= $('#credit-card-year-value').val().toString();

  if(selY.length==1){
    $("#error-date-empty").hide();
    $("#error-date").show();
    $("#credit-card-year-value").addClass("negative-box");
    $("#credit-card-month-value").addClass("negative-box");
    $("#check-box-date").text("Invalid year's length. Please input 2 digits.");
    $("#check-box-date").addClass("negative-check");
    $("#credit-card-year-value").focus().val();
    dateCh=false;
  }
  else if(selY.length==0){
    $("#credit-card-year-value").attr("placeholder", y);
    if(selM.length==0){
      $("#credit-card-month-value").attr("placeholder", m+1);
    }
    dateCh=false;
  }

  if(selM.length==0){
    $("#credit-card-month-value").attr("placeholder", m+1);
    if(selY.length==0){
      $("#credit-card-year-value").attr("placeholder", y);
    }
    dateCh=false;
  }

}