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

  for (var i = 0; i < 30; i++) { 
    nextYear = currentDate.getFullYear() + i + 1;
    availableYear.push(nextYear.toString().substring(2, 4));
  }
  
  $('#card-expiration-month').attr('placeholder', (currentMonth + 1).toString());
  $('#card-expiration-year').attr('placeholder', currentYear);

  $('#card-expiration-month').focus(function() {
    $('#card-expiration-month').attr('placeholder', '');
  });

  $('#card-expiration-year').focus(function() {
    $('#card-expiration-year').attr('placeholder', '');
  });

  $('#card-expiration-month').keyup(function(e) {
    dateCheck();
  });

  $('#card-expiration-year').keyup(function(e) {
    dateCheck();
  });

  $('#card-expiration-year').blur(function() {
    dateCheckOnBlur();
  });

  $('#card-expiration-month').blur(function() {
    dateCheckOnBlur();
  });

  $('#card-expiration-month').autocomplete({
    source: availableMonth
  });

  $('#card-expiration-year').autocomplete({
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
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString(); 


  if ((/^[0-9]*$/.test(inputYear) == false)) {
    $('#error-date-empty').hide();
    $('#card-expiration-error-container').show();
    $('#card-expiration-year').addClass('negative-box');
    $('#card-expiration-month').addClass('negative-box');
    $('#card-expiration-error-container').text("You can input only digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-year').focus().val();
    $('#card-expiration-container').removeClass('correct-input');
  }
  else if ((/^[0-9]*$/.test(inputMonth) == false)) {
    $('#error-date-empty').hide();
    $('#card-expiration-error-container').show();
    $('#card-expiration-year').addClass('negative-box');
    $('#card-expiration-month').addClass('negative-box');
    $('#card-expiration-error-container').text("You can input only digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-month').focus().val();
    $('#card-expiration-container').removeClass('correct-input');
  }
  else {
    if (inputMonth > 12) {
      $('#error-date-empty').hide();
      $('#card-expiration-error-container').show();
      $('#card-expiration-year').addClass('negative-box');
      $('#card-expiration-month').addClass('negative-box');
      $('#card-expiration-error-container').text("Invalid Month entered.");
      $('#card-expiration-error-container').addClass('negative-check');
      $('#card-expiration-year').focus().val();
      $('#card-expiration-container').removeClass('correct-input');
    }
    if (inputYear == currentYear) {
      if (inputMonth < currentMonth) {
        //ERROR
        $('#error-date-empty').hide();
        $('#card-expiration-error-container').show();
        $('#card-expiration-year').addClass('negative-box');
        $('#card-expiration-month').addClass('negative-box');
        $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration currentDate.");
        $('#card-expiration-error-container').addClass('negative-check');
        $('#card-expiration-year').focus().val();
        $('#card-expiration-container').removeClass('correct-input');
     }
      else if (inputMonth == '') {
        //Must input a month
        $('#card-expiration-month').attr('placeholder', currentMonth + 1);
        $('#error-date-empty').show();
        $('#error-date-empty').text("");
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        //EVERYTHING OK!
        $('#error-date-empty').show();
        $('#card-expiration-error-container').hide();
        $('#card-expiration-error-container').text("");
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-container').addClass('correct-input');
      }
    }
    else if (inputYear == '') {
      //Must input a year
      $('#card-expiration-year').attr('placeholder', currentYear);
      $('#error-date-empty').show();
      $('#error-date-empty').text("");
      $('#card-expiration-error-container').text("");
      $('#card-expiration-error-container').hide();
      $('#card-expiration-year').removeClass('negative-box');
      $('#card-expiration-month').removeClass('negative-box');
      $('#card-expiration-container').removeClass('correct-input');
    }

    else if (inputYear.length == 2 && inputYear < currentYear) {
      //ERROR
      $('#error-date-empty').hide();
      $('#card-expiration-error-container').show();
      $('#card-expiration-year').addClass('negative-box');
      $('#card-expiration-month').addClass('negative-box');
      $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration currentDate.");
      $('#card-expiration-error-container').addClass('negative-check');
      $('#card-expiration-year').focus().val();
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (inputYear.length == 1) {
      $('#card-expiration-container').removeClass('correct-input');
    }
    else {
      if (inputMonth == '') {
        //Must input a month
        $('#card-expiration-month').attr('placeholder', currentMonth + 1);
        $('#error-date-empty').show();
        $('#error-date-empty').text("");
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        $('#card-expiration-error-container').text("");
        $('#error-date-empty').show();
        $('#card-expiration-error-container').hide();
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-container').addClass('correct-input');
      }
    }
  }
  form.globalCheck();
}

function dateCheckOnBlur() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth();
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString();

  if (inputYear.length == 1) {
    $('#error-date-empty').hide();
    $('#card-expiration-error-container').show();
    $('#card-expiration-year').addClass('negative-box');
    $('#card-expiration-month').addClass('negative-box');
    $('#card-expiration-error-container').text("Invalid year's length. Please input 2 digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-year').focus().val();
    $('#card-expiration-container').removeClass('correct-input');
  }
  else if (inputYear.length == 0) {
    $('#card-expiration-year').attr('placeholder', currentYear );
    if (inputMonth.length == 0) {
      $('#card-expiration-month').attr('placeholder', currentMonth + 1);
    }
    $('#card-expiration-container').removeClass('correct-input');
  }

  if (inputMonth.length == 0) {
    $('#card-expiration-month').attr('placeholder', currentMonth + 1);
    if (inputYear.length == 0) {
      $('#card-expiration-year').attr('placeholder', currentYear );
    }
    $('#card-expiration-container').removeClass('correct-input');
  }
  form.globalCheck();
}