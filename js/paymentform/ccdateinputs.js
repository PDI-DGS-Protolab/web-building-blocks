var form = new GlobalFormTools();

$(document).ready(function() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();

  var availableMonths = [ '01','02','03','04','05','06',
                        '07','08','09','10','11','12' ];

  var currentYear = currentDate.getFullYear().toString().substring(2, 4);

  var availableYears = new Array();
  availableYears.push(currentYear);
  var nextYear;

  for (var i = 0; i < 30; i++) { 
    nextYear = currentDate.getFullYear() + i + 1;
    availableYears.push(nextYear.toString().substring(2, 4));
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
    checkInputMonth();
  });

  $('#card-expiration-year').keyup(function(e) {
    checkInputYear();
  });

  $('#card-expiration-year').blur(function() {
    dateCheckOnBlur();
  });

  $('#card-expiration-month').blur(function() {
    dateCheckOnBlur();
  });

  $('#card-expiration-month').autocomplete({
    source: availableMonths
  });

  $('#card-expiration-year').autocomplete({
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableYears, request.term);
        response(results.slice(0, 7));
    }
  });
});

function checkInputMonth () {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString(); 

  if (inputYear == '' || inputYear == undefined || isMadeOfWhiteSpaces(inputYear)) {
    if (inputMonth == ''  || inputMonth == undefined || isMadeOfWhiteSpaces(inputMonth)) {
      $('#card-expiration-month').removeClass('negative-box');
      $('#card-expiration-error-container').text("");
      $('#card-expiration-error-container').hide();
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (onlyContainsDigits(inputMonth)) {
      if (inputMonth > 12 || inputMonth < 1) {
        $('#card-expiration-month').addClass('negative-box');
        $('#card-expiration-month').focus().val();
        $('#card-expiration-error-container').show();
        $('#card-expiration-error-container').text("Invalid Month entered.");
        $('#card-expiration-error-container').addClass('negative-check');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-month').removeClass('negative-box');
      }
    }
    else {
      $('#card-expiration-month').addClass('negative-box');
      $('#card-expiration-month').focus().val();
      $('#card-expiration-error-container').show();
      $('#card-expiration-error-container').text("You can input only digits.");
      $('#card-expiration-error-container').addClass('negative-check');
      $('#card-expiration-container').removeClass('correct-input');
    }
  }
  else {
    checkExpiration('month');
  }
}

function checkInputYear () {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString(); 

  if (inputMonth == ''  || inputMonth == undefined || isMadeOfWhiteSpaces(inputMonth)) {
    if (inputYear == '' || inputYear == undefined || isMadeOfWhiteSpaces(inputYear)) {
      $('#card-expiration-year').removeClass('negative-box');
      $('#card-expiration-error-container').text("");
      $('#card-expiration-error-container').hide();
      $('#card-expiration-container').removeClass('correct-input');
    }
    else if (onlyContainsDigits(inputYear)) {
      if (inputYear.length == 2 && inputYear < currentYear) {
        $('#card-expiration-year').addClass('negative-box');
        $('#card-expiration-year').focus().val();
        $('#card-expiration-error-container').show();
        $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration date.");
        $('#card-expiration-error-container').addClass('negative-check');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-year').removeClass('negative-box');
      }
    }
    else {
      $('#card-expiration-year').addClass('negative-box');
      $('#card-expiration-year').focus().val();
      $('#card-expiration-error-container').show();
      $('#card-expiration-error-container').text("You can input only digits.");
      $('#card-expiration-error-container').addClass('negative-check');
      $('#card-expiration-container').removeClass('correct-input');
    }
  }
  else {
    checkExpiration('year');
  }
}

function checkExpiration (modifiedElmnt) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth();
  var inputMonth = $('#card-expiration-month').val().toString();
  var inputYear = $('#card-expiration-year').val().toString();

  if (onlyContainsDigits(inputMonth) && onlyContainsDigits(inputYear)) {
    
  }
  else {
    $('#card-expiration-' + modifiedElmnt).addClass('negative-box');
    $('#card-expiration-' + modifiedElmnt).focus().val();
    $('#card-expiration-error-container').show();
    $('#card-expiration-error-container').text("You can input only digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-container').removeClass('correct-input');
  }
}

function dateCheck() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear().toString().substr(2, 4);
  var currentMonth = currentDate.getMonth();
  var inputMonth = $('#card-expiration-month').val();
  var inputYear = $('#card-expiration-year').val(); 


  if (!onlyContainsDigits(inputYear)) {
    $('#card-expiration-error-container').show();
    $('#card-expiration-year').addClass('negative-box');
    $('#card-expiration-month').addClass('negative-box');
    $('#card-expiration-error-container').text("You can input only digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-year').focus().val();
    $('#card-expiration-container').removeClass('correct-input');
  }
  else if (!onlyContainsDigits(inputMonth)) {
    $('#card-expiration-error-container').show();
    $('#card-expiration-year').addClass('negative-box');
    $('#card-expiration-month').addClass('negative-box');
    $('#card-expiration-error-container').text("You can input only digits.");
    $('#card-expiration-error-container').addClass('negative-check');
    $('#card-expiration-month').focus().val();
    $('#card-expiration-container').removeClass('correct-input');
  }
  else {
    if (inputMonth > 12 || inputMonth < 1) {
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
        $('#card-expiration-error-container').show();
        $('#card-expiration-year').addClass('negative-box');
        $('#card-expiration-month').addClass('negative-box');
        $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration date.");
        $('#card-expiration-error-container').addClass('negative-check');
        $('#card-expiration-year').focus().val();
        $('#card-expiration-container').removeClass('correct-input');
      }
      else if (inputMonth == '') {
        //Must input a month
        $('#card-expiration-month').attr('placeholder', currentMonth + 1);
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        //EVERYTHING OK!
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
      $('#card-expiration-error-container').text("");
      $('#card-expiration-error-container').hide();
      $('#card-expiration-year').removeClass('negative-box');
      $('#card-expiration-month').removeClass('negative-box');
      $('#card-expiration-container').removeClass('correct-input');
    }

    else if (inputYear.length == 2 && inputYear < currentYear) {
      //ERROR
      $('#card-expiration-error-container').show();
      $('#card-expiration-year').addClass('negative-box');
      $('#card-expiration-month').addClass('negative-box');
      $('#card-expiration-error-container').text("Your card has expired or you have chosen a wrong expiration date.");
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
        $('#card-expiration-error-container').text("");
        $('#card-expiration-error-container').hide();
        $('#card-expiration-month').removeClass('negative-box');
        $('#card-expiration-year').removeClass('negative-box');
        $('#card-expiration-container').removeClass('correct-input');
      }
      else {
        $('#card-expiration-error-container').text("");
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

function onlyContainsDigits (numberToAnalyze) {
  return /^\d*$/.test(numberToAnalyze);
}

function isMadeOfWhiteSpaces (name) {
  return name.match(/^\s*$/);
}