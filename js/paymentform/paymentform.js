function GlobalFormTools () {
	
  this.globalCheck = function() {
    if($('#card-holder-name').hasClass('correct-input')
      && $('#card-number-input').hasClass('correct-input')
      && $('#card-verification-code').hasClass('correct-input')
      &&(dateCh==true)
      ){
      $(":submit").removeAttr('disabled');
    }
    else{
      $(":submit").attr('disabled','disabled');
    }
  }
}