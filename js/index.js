$(document).ready(function() {

 $('#input_full_name').focus(function() {
     if( !$("#errorSpaceNameX").is(':visible') ) {
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your full name as it appears on your card");
      $("#errorSpaceNameX").hide();
    }
  }); 

  $('#input_full_name').keyup(function(e){
    var str = $('#input_full_name').val();

    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").show();
      $(this).addClass("negativeBox");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negativeCheck");
      nameCheck=false;
    }

    else if((str=='')||(str==undefined)){
      $("#errorSpaceName").show();
      $("#errorSpaceNameX").hide();
      $("#checkBoxName").text("");
      $(this).removeClass("negativeBox");
      nameCheck=false;
    }

    else{
      $(this).removeClass("negativeBox");
      $("#errorSpaceNameX").hide();
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your full name as it appears on your card");
      $("#checkBoxName").removeClass("negativeCheck");
      nameCheck=true;
    }
  });

  $('#input_full_name').blur(function() {
    var str = $('#input_full_name').val();
    $("#errorSpaceName").text("");
    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").show();
      $(this).addClass("negativeBox");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negativeCheck");
      nameCheck=false;
      $('#input_full_name').focus().val();
    }
  }); 

});