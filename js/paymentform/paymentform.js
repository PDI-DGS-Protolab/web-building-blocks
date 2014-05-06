$(document).ready(function() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear().toString().substring(2, 4);
  var availableMonths = ['01','02','03','04','05','06',
                        '07','08','09','10','11','12'];
  var availableYears = new Array();
  availableYears.push(currentYear);
  var nextYear;

  for (var i = 0; i < 30; i++) {
    nextYear = currentDate.getFullYear() + i + 1;
    availableYears.push(nextYear.toString().substring(2, 4));
  }
  
  $('#card-expiration-month').attr('placeholder', (currentMonth + 1).toString());
  $('#card-expiration-year').attr('placeholder', currentYear);

  $('#card-holder-name').focus(function() {
    cardNameFocus();
  });

  $('#card-holder-name').keyup(function(e) {
    cardNameKeyUp();
  });

  $('#card-holder-name').blur(function() {
    cardNameBlur();
  });

  $('#card-number-input').focus(function() {
    cardNumberFocus();
  });

  $('#card-number-input').keyup(function(e) {
    cardNumberKeyUp();
  });

  $('#card-number-input').blur(function() {
    cardNumberBlur();
  });

  $('#help-label').mouseover(function() {
    cardCVCHelpMouseOver();
  });

  $('#help-label').mouseleave(function() {
    cardCVCHelpMouseLeave();
  });

  $('#card-verification-code').focus(function() {
    cardCVCFocus();
  });

  $('#card-verification-code').keyup(function(e) {
    cardCVCKeyUp();
  });

  $('#card-verification-code').blur(function() {
    cardCVCBlur();
  });

  $('#card-expiration-month').focus(function() {
    cardMonthFocus();
  });

  $('#card-expiration-year').focus(function() {
    cardYearFocus();
  });

  $('#card-expiration-month').keyup(function(e) {
    checkInputMonth();
  });

  $('#card-expiration-year').keyup(function(e) {
    checkInputYear();
  });

  $('#card-expiration-month').blur(function() {
    checkExpirationOnBlur()
  });

  $('#card-expiration-year').blur(function() {
    checkExpirationOnBlur()
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
