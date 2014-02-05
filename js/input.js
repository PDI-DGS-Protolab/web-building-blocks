$(document).ready(function() {

 $('#full-name').focus(function() {
     if( !$("#error-container").is(':visible') ) {
      $("#input-hint").show();
      $("#input-hint").text("Enter your full name as it appears on your card");
      $("#error-container").hide();
    }
  }); 

  $('#full-name').keyup(function(e) {
    var str = $('#full-name').val();

    if(!containsLetters(str)) {
      $("#input-hint").hide();
      $("#error-container").show();
      $(this).addClass("negative-box");
      $("#error-message").text("Illegal characters. You can input only letters.");
      $("#error-message").addClass("negative-check");
      nameCheck=false;
    }

    else if((str=='')||(str==undefined)) {
      $("#input-hint").show();
      $("#error-container").hide();
      $("#error-message").text("");
      $(this).removeClass("negative-box");
      nameCheck=false;
    }

    else {
      $(this).removeClass("negative-box");
      $("#error-container").hide();
      $("#input-hint").show();
      $("#input-hint").text("Enter your full name as it appears on your card");
      $("#error-message").removeClass("negative-check");
      nameCheck=true;
    }
  });

  $('#full-name').blur(function() {
    var str = $('#full-name').val();
    $("#input-hint").text("");
    if(!containsLetters(str)) {
      $("#input-hint").hide();
      $("#error-container").show();
      $(this).addClass("negative-box");
      $("#error-message").text("Illegal characters. You can input only letters.");
      $("#error-message").addClass("negative-check");
      nameCheck=false;
      $('#full-name').focus().val();
    }
  }); 

});

$(document).on('click','#plus-btt',function () {
    $(this).parent().parent().append( '<div><br><input id="special-full-name" type="text"></input><button id="plus-btt" class="special-full-name-btt"><img src="../img/more.png"/></button></div>' );
    $(this).addClass("special-full-name-btt-less");
    $(this).removeClass("special-full-name-btt");
    $(this).html('<img src="../img/less.png" />');
    $(this).attr("id","less-btt");
});

$(document).on('click','#less-btt',function () {
    $(this).parent().remove();
});

function containsLetters(name) {
  return /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(name);
}