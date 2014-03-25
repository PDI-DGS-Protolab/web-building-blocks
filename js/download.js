$(document).ready(function() {

    $(document).on('click','.download-btt', function() {
      
        
        var tmp = $(this).attr('id').split('-');
        
        var brand = tmp[0];
        var component = tmp[1];
      
        console.log('brand: '+brand+'; component: '+component);
        //We read the file that we want:
        //It only will work on localhost with firefox, with other 
        //browsers we must need the project deployed on a server(heroku for example)
        
        var htmlFile, jsFile, cssFile;
        var file1=$.get( 'templates/'+brand+'/'+component+'.html', function() {
        }).done(function( data ) {
            htmlFile=data;
        }).fail(function(){
            //alert('Could not load files!');
        });
        var file2=$.get( 'css/'+brand+'/'+component+'.css', function() {
        }).done(function( data2 ) {
            cssFile=data2;
        }).fail(function(){
            //alert('Could not load files!');
        });
        var file3=$.get( 'js/'+component+'.js', function() {
        }).done(function( data3 ) {
           jsFile=data3;
        }).fail(function(){
            //alert('Could not load files!');
        });

        $.when(file1, file2, file3).done(function() {
            $('#javascript-content').text(jsFile);
            $('#css-content').text(cssFile);
            $('#html-content').text(htmlFile);

            
        });
        $('#download-text').tabs();
            $('#download-pop-up').dialog({width:600});
        //$('#download-text').tabs();
           // $('#download-pop-up').dialog({width:600});
        //console.log(htmlTemplate);
        //Created an empty zip file
        
    });

    $(document).on('click','.btt-close-download',function(){
            $('#download-pop-up').dialog('close');
    });

});