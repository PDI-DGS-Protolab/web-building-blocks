$(document).ready(function() {
  $(document).on('focus', '.input', function() {
     if( !$(this).parent().find('.error-container').is(':visible') ) {
      $(this).parent().find('.input-hint').show();
      $(this).parent().find('.input-hint').text($(this).attr("hint"));
      $(this).parent().find('.error-container').hide();
    }
  });

  $(document).on('keyup', '.input', function(e) {
    var str = $(this).val();
    if( !containsLetters(str)) {
      $(this).parent().find('.input-hint').hide();
      $(this).parent().find('.error-container').show();
      $(this).addClass('negative-box');
      $(this).parent().find('.error-message').text($(this).attr("error"));
      $(this).parent().find('.error-message').addClass('negative-check');
      nameCheck=false;
    }

    else if((str=='')||(str==undefined)) {
      $(this).parent().find('.input-hint').show();
      $(this).parent().find('.error-container').hide();
      $(this).parent().find('.error-message').text('');
      $(this).removeClass('negative-box');
      nameCheck=false;
    }

    else {
      $(this).removeClass('negative-box');
      $(this).parent().find('.error-container').hide();
      $(this).parent().find('.input-hint').show();
      $(this).parent().find('.input-hint').text($(this).attr("hint"));
      $(this).parent().find('.error-message').removeClass('negative-check');
      nameCheck=true;
    }
  });

  $(document).on('blur', '.input', function() {
    var str = $(this).val();
    $(this).parent().find('.input-hint').text('');
    if(!containsLetters(str)) {
      $(this).parent().find('.input-hint').hide();
      $(this).parent().find('.error-container').show();
      $(this).addClass('negative-box');
      $(this).parent().find('.error-message').text($(this).attr("error"));
      $(this).parent().find('.error-message').addClass('negative-check');
      nameCheck=false;
    }
  });

  $(document).on('click', '.btt-plus', function () {
    $(this).parent().parent().append('<div class="input-container">' + $(this).parent().html() + '</div>');
    $(this).removeClass('btt-plus').addClass('btt-less');
    $(this).html('<img src="img/less.png"/>');
  });

  $(document).on('click','.btt-less',function () {
    $(this).parent().remove();
  });
});

function containsLetters(name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}
