describe('Focus related functions', function() {
   
    beforeEach(function(){
        $('body').append('<div id="input-container">'
            +'<input id="full-name" type="text"></input>'
            +'<div id="input-hint"></div>'
            +'<div id="error-container">'
            +'<a id="error-message"></a>'
            +'</div></div>');
    });

    afterEach(function(){
         $('#input-container').remove();
    });

    
    it('input-hint without text on non focus full-name state', function() {
        expect($('#input-hint')).toBeEmpty();
    });

    it('input-hint with info on focus full-name state', function() {
        $('#full-name').focus();
        expect($('#input-hint')).not.toBeEmpty();
    });

    it('error-container on focus full-name state is hidden', function() {
        $('#full-name').focus();
        expect($('#error-container')).toBeHidden();
    });
    
  
});


