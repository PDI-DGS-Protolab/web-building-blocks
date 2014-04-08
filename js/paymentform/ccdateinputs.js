var form = new GlobalFormTools();

$(document).ready(function() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();

  var availableMonth = [ '01','02','03','04','05','06',
                        '07','08','09','10','11','12' ];

  var currentYear = currentDate.getFullYear().toString().substring(2, 4);

  var availableYear = new Array();
  availableYear.push(currentYear);
  var nextYear;

  for (var i = 0; i < 30; i++){ 
    nextYear = currentDate.getFullYear() + i + 1;
    availableYear.push(nextYear.toString().substring(2, 4));
  }
  
  $('#credit-card-month-value').attr('placeholder', (currentMonth+1).toString());
  $('#credit-card-year-value').attr('placeholder', currentYear);

  $('#credit-card-month-value').focus(function() {
    $('#credit-card-month-value').attr('placeholder', '');
  });

  $('#credit-card-year-value').focus(function() {
    $('#credit-card-year-value').attr('placeholder', '');
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

  $('#credit-card-month-value').autocomplete({
    source: availableMonth
  });

  $('#credit-card-year-value').autocomplete({
    //source: availableYear
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableYear, request.term);
        response(results.slice(0, 7));
    }
  });
});

function dateCheck() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth();
  var selM = $('#credit-card-month-value').val().toString();
  var selY = $('#credit-card-year-value').val().toString(); 


  if((/^[0-9]*$/.test(selY) == false)){
    $('#error-date-empty').hide();
    $('#error-date').show();
    $('#credit-card-year-value').addClass('negative-box');
    $('#credit-card-month-value').addClass('negative-box');
    $('#check-box-date').text("You can input only digits.");
    $('#check-box-date').addClass('negative-check');
    $('#credit-card-year-value').focus().val();
    $('#card-date-container').removeClass('correct-input');
  }
  else if((/^[0-9]*$/.test(selM) == false)){
    $('#error-date-empty').hide();
    $('#error-date').show();
    $('#credit-card-year-value').addClass('negative-box');
    $('#credit-card-month-value').addClass('negative-box');
    $('#check-box-date').text("You can input only digits.");
    $('#check-box-date').addClass('negative-check');
    $('#credit-card-month-value').focus().val();
    $('#card-date-container').removeClass('correct-input');
  }
  else{
    if(selM > 12){
      $('#error-date-empty').hide();
      $('#error-date').show();
      $('#credit-card-year-value').addClass('negative-box');
      $('#credit-card-month-value').addClass('negative-box');
      $('#check-box-date').text("Invalid Month entered.");
      $('#check-box-date').addClass('negative-check');
      $('#credit-card-year-value').focus().val();
      $('#card-date-container').removeClass('correct-input');
    }
    if(selY == currentYear){
      if(selM < currentMonth){
        //ERROR
        $('#error-date-empty').hide();
        $('#error-date').show();
        $('#credit-card-year-value').addClass('negative-box');
        $('#credit-card-month-value').addClass('negative-box');
        $('#check-box-date').text("Your card has expired or you have chosen a wrong expiration currentDate.");
        $('#check-box-date').addClass('negative-check');
        $('#credit-card-year-value').focus().val();
        $('#card-date-container').removeClass('correct-input');
     }
      else if(selM == ''){
        //Must input a month
        $('#credit-card-month-value').attr('placeholder', currentMonth + 1);
        $('#error-date-empty').show();
        $('#error-date-empty').text("");
        $('#check-box-date').text("");
        $('#error-date').hide();
        $('#credit-card-month-value').removeClass('negative-box');
        $('#credit-card-year-value').removeClass('negative-box');
        $('#card-date-container').removeClass('correct-input');
      }
      else{
        //EVERYTHING OK!
        $('#error-date-empty').show();
        $('#error-date').hide();
        $('#check-box-date').text("");
        $('#credit-card-year-value').removeClass('negative-box');
        $('#credit-card-month-value').removeClass('negative-box');
        $('#card-date-container').addClass('correct-input');
      }
    }
    else if(selY == ''){
      //Must input a year
      $('#credit-card-year-value').attr('placeholder', currentYear);
      $('#error-date-empty').show();
      $('#error-date-empty').text("");
      $('#check-box-date').text("");
      $('#error-date').hide();
      $('#credit-card-year-value').removeClass('negative-box');
      $('#credit-card-month-value').removeClass('negative-box');
      $('#card-date-container').removeClass('correct-input');
    }

    else if(selY.length == 2 && selY < currentYear){
      //ERROR
      $('#error-date-empty').hide();
      $('#error-date').show();
      $('#credit-card-year-value').addClass('negative-box');
      $('#credit-card-month-value').addClass('negative-box');
      $('#check-box-date').text("Your card has expired or you have chosen a wrong expiration currentDate.");
      $('#check-box-date').addClass('negative-check');
      $('#credit-card-year-value').focus().val();
      $('#card-date-container').removeClass('correct-input');
    }
    else if(selY.length == 1){
      $('#card-date-container').removeClass('correct-input');
    }
    else{
      if(selM == ''){
        //Must input a month
        $('#credit-card-month-value').attr('placeholder', currentMonth + 1);
        $('#error-date-empty').show();
        $('#error-date-empty').text("");
        $('#check-box-date').text("");
        $('#error-date').hide();
        $('#credit-card-month-value').removeClass('negative-box');
        $('#credit-card-year-value').removeClass('negative-box');
        $('#card-date-container').removeClass('correct-input');
      }
      else{
        $('#check-box-date').text("");
        $('#error-date-empty').show();
        $('#error-date').hide();
        $('#credit-card-year-value').removeClass('negative-box');
        $('#credit-card-month-value').removeClass('negative-box');
        $('#card-date-container').addClass('correct-input');
      }
    }
  }
  form.globalCheck();
}

function dateCheckOnBlur(){
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth();
  var selM = $('#credit-card-month-value').val().toString();
  var selY = $('#credit-card-year-value').val().toString();

  if(selY.length == 1){
    $('#error-date-empty').hide();
    $('#error-date').show();
    $('#credit-card-year-value').addClass('negative-box');
    $('#credit-card-month-value').addClass('negative-box');
    $('#check-box-date').text("Invalid year's length. Please input 2 digits.");
    $('#check-box-date').addClass('negative-check');
    $('#credit-card-year-value').focus().val();
    $('#card-date-container').removeClass('correct-input');
  }
  else if(selY.length == 0){
    $('#credit-card-year-value').attr('placeholder', currentYear );
    if(selM.length == 0){
      $('#credit-card-month-value').attr('placeholder', currentMonth + 1);
    }
    $('#card-date-container').removeClass('correct-input');
  }

  if(selM.length == 0){
    $('#credit-card-month-value').attr('placeholder', currentMonth + 1);
    if(selY.length == 0){
      $('#credit-card-year-value').attr('placeholder', currentYear );
    }
    $('#card-date-container').removeClass('correct-input');
  }
  form.globalCheck();
}