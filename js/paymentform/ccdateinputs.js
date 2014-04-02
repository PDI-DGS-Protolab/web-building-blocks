var form = new GlobalFormTools();

$(document).ready(function() {
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
});

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