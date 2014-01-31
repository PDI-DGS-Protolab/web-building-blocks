$(document).ready(function() {

 $('#input-full-name').focus(function() {
     if( !$("#error-space-name-x").is(':visible') ) {
      $("#error-space-name").show();
      $("#error-space-name").text("Enter your full name as it appears on your card");
      $("#error-space-name-x").hide();
    }
  }); 

  $('#input-full-name').keyup(function(e){
    var str = $('#input-full-name').val();

    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#error-space-name").hide();
      $("#error-space-name-x").show();
      $(this).addClass("negative-box");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negative-check");
      nameCheck=false;
    }

    else if((str=='')||(str==undefined)){
      $("#error-space-name").show();
      $("#error-space-name-x").hide();
      $("#checkBoxName").text("");
      $(this).removeClass("negative-box");
      nameCheck=false;
    }

    else{
      $(this).removeClass("negative-box");
      $("#error-space-name-x").hide();
      $("#error-space-name").show();
      $("#error-space-name").text("Enter your full name as it appears on your card");
      $("#checkBoxName").removeClass("negative-check");
      nameCheck=true;
    }
  });

  $('#input-full-name').blur(function() {
    var str = $('#input-full-name').val();
    $("#error-space-name").text("");
    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#error-space-name").hide();
      $("#error-space-name-x").show();
      $(this).addClass("negative-box");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negative-check");
      nameCheck=false;
      $('#input-full-name').focus().val();
    }
  }); 

});
