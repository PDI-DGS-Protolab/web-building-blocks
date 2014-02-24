describe('Jquery tested for all input javascript functions', function() {

    beforeEach(function() {
        $('body').append('<div id="input-container">'
            +'<input id="full-name" type="text"></input>'
            +'<div id="input-hint"></div>'
            +'<div id="error-container">'
            +'<a id="error-message"></a>'
            +'</div></div>');
    });

    afterEach(function() {
        $('#input-container').remove();
    });
    

    describe('Focus related actions', function() {
        
        it('div with id input-hint without text on non focus input with id full-name state', function() {
            expect($('#input-hint')).toBeEmpty();
        });

        it('div with id input-hint have text on focus input with id full-name state', function() {
            $('#full-name').focus();
            expect($('#input-hint')).not.toBeEmpty();
        });

        it('div with id error-container is hidden on focus input with id full-name state', function() {
            $('#full-name').focus();
            expect($('#error-container')).toBeHidden();
        });
    
    });//End of Focus actions describe

    describe('Keyup related actions', function() {
       
        describe('When input have illegal characters:', function() {  

            beforeEach(function() {
                $('#full-name').val('0');
                $('#full-name').keyup();
            });

            it('div with id input-hint is not visible', function() {
                expect($('#input-hint')).toBeHidden();
            });

            it('div with id error-container is visible', function() {
                expect($('#error-container')).not.toBeHidden();
            });

            it('input with id full-name have negative-box class', function() {
                expect($('#full-name')).toHaveClass('negative-box');
            });

            it('div with id error-message have text', function() {
                expect($('#error-message')).not.toBeEmpty();
            });

            it('div with id error-message have negative-check class', function() {
                expect($('#error-message')).toHaveClass('negative-check');
            });

        });//End of keyup illegal characters actions describe

        describe('When the input is empty, no characters:', function() {  

            beforeEach(function() {
                $('#full-name').val('0');
                $('#full-name').keyup();
                $('#full-name').val('');
                $('#full-name').keyup();
            });

            it('div with id input-hint is visible', function() {
                expect($('#input-hint')).not.toBeHidden();
            });

            it('div with id error-container is not visible', function() {
                expect($('#error-container')).toBeHidden();
            });

            it('div with id error-message is empty', function() {
                expect($('#error-message')).toBeEmpty();
            });

            it('input with id full-name didn\'t have negative-box class', function() {
                expect($('#full-name')).not.toHaveClass('negative-box');
            });
            
        });//End of keyup empty input actions describe

        describe('When everything is ok, no illegal characters:', function() {  

            beforeEach(function() {
                $('#full-name').val('Test');
                $('#full-name').keyup();
            });

            it('input with id full-name didn\'t have negative-box class', function() {
                expect($('#full-name')).not.toHaveClass('negative-box');
            });

            it('div with id error-container is not visible', function() {
                expect($('#error-container')).toBeHidden();
            });

            it('div with id input-hint is visible', function() {
                expect($('#input-hint')).not.toBeHidden();
            });

            it('div with id input-hint have text', function() {
                expect($('#input-hint')).not.toBeEmpty();
            });

            it('div with id error-message didn\'t have negative-check class', function() {
                expect($('#error-message')).not.toHaveClass('negative-check');
            });            
            
        });//End of keyup everything ok actions describe
       
    });//End of Keyup actions describe

    describe('Keyup related actions', function() {

        it('div with id input-hint have not text on blur input with id full-name', function() {
            $('#input-hint').text('Test');
            $('#full-name').blur();
            expect($('#input-hint')).toBeEmpty();
        });

        describe('When input have illegal characters:', function() {  

            beforeEach(function() {
                $('#full-name').val('0');
                $('#full-name').blur();
            });

            it('div with id input-hint is not visible', function() {
                expect($('#input-hint')).toBeHidden();
            });

            it('div with id error-container is visible', function() {
                expect($('#error-container')).not.toBeHidden();
            });

            it('input with id full-name have negative-box class', function() {
                expect($('#full-name')).toHaveClass('negative-box');
            });

            it('div with id error-message have text', function() {
                expect($('#error-message')).not.toBeEmpty();
            });

            it('div with id error-message have negative-check class', function() {
                expect($('#error-message')).toHaveClass('negative-check');
            });

            it('input with id full-name must be focused', function() {
                expect($('#full-name').is(':focus')).toBeTrully;
            });

        });//End of blur illegal characters actions describe


    });//End of Blur actions describe



});//End of Input global describe