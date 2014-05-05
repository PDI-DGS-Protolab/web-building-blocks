var form = new GlobalFormTools();

$(document).ready(function() {
  $('#help-label').mouseover(function() {
    $('#CVC-hint').show();
  }); 

  $('#help-label').mouseleave(function() {
    $('#CVC-hint').hide();
  }); 

  $('#card-verification-code').focus(function() {
    if(!$('#card-CVC-error-container').is(':visible')) {
      var cvcHintElmnt = $('#card-CVC-hint-container');
      cvcHintElmnt.show();
      cvcHintElmnt.text('3 digits');
      $('#card-CVC-error-container').hide();
    }
  });  

  $('#card-verification-code').keyup(function(e) {
    var cvcElmnt = $(this);
    var cvcErrorElmnt = $('#card-CVC-error-container');
    var str = cvcElmnt.val();

    if(!onlyContainsDigits(str) && str.length > 0) { 
      $('#card-CVC-hint-container').hide();
      cvcErrorElmnt.show();
      cvcErrorElmnt.text('Not Valid.');
      cvcErrorElmnt.addClass('negative-check');
      cvcElmnt.addClass('negative-box');
      cvcElmnt.removeClass('correct-input');
      cvcElmnt.focus().val();
      form.globalCheck();
    }

    else if(str.length == 0){
      $('#card-CVC-hint-container').show();
      cvcErrorElmnt.hide();
      cvcErrorElmnt.text('');
      cvcErrorElmnt.removeClass('negative-check');
      cvcElmnt.removeClass('negative-box');
      cvcElmnt.removeClass('correct-input');
      form.globalCheck();
    }

    else if(str.length == 3){
      $('#card-CVC-hint-container').show();
      cvcErrorElmnt.hide();
      cvcErrorElmnt.removeClass('negative-check');
      cvcElmnt.removeClass('negative-box');
      cvcElmnt.addClass('correct-input');
      form.globalCheck();
    }
    else if (str.length < 3) {
      cvcElmnt.removeClass('correct-input');
      form.globalCheck();
    }
    form.globalCheck();
  }); 


  $('#card-verification-code').blur(function() {
    var cvcElmnt = $(this);
    var cvcErrorElmnt = $('#card-CVC-error-container');
    var cvcHintElmnt = $('#card-CVC-hint-container');
    var str = cvcElmnt.val();

    if (!onlyContainsDigits(str) && str.length > 0) { 
      cvcHintElmnt.hide();
      cvcErrorElmnt.show();
      cvcErrorElmnt.text('Not Valid.');
      cvcErrorElmnt.addClass('negative-check');
      cvcElmnt.addClass('negative-box');
      cvcElmnt.removeClass('correct-input');
      cvcElmnt.focus().val();
      form.globalCheck();
    }

    else if (str.length != 0 && str.length < 3){
      cvcHintElmnt.hide();
      cvcErrorElmnt.show();
      cvcErrorElmnt.text('Incomplete.');
      cvcErrorElmnt.addClass('negative-check');
      cvcElmnt.addClass('negative-box');
      cvcElmnt.removeClass('correct-input');
      cvcElmnt.focus().val();
      form.globalCheck();
    }
    else if (str.length == 0) {
      cvcHintElmnt.show();
      cvcHintElmnt.text('');
      cvcErrorElmnt.hide();
      cvcErrorElmnt.removeClass('negative-check');
      cvcElmnt.removeClass('negative-box');
      cvcElmnt.removeClass('correct-input');
      form.globalCheck();
    }

    else{
      cvcHintElmnt.show();
      cvcHintElmnt.text('');
      cvcErrorElmnt.hide();
      cvcErrorElmnt.removeClass('negative-check');
      cvcElmnt.removeClass('negative-box');
      cvcElmnt.addClass('correct-input');
      form.globalCheck();
    }
  });
});
