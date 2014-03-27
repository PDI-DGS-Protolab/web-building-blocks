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
            var jsFinal= getFileToShow(jsFile);
            var cssFinal= getFileToShow(cssFile);
            var htmlFinal= getFileToShow(htmlFile);
            $('#javascript-content').html(jsFinal);
            $('#css-content').html(cssFinal);
            $('#html-content').html(htmlFinal);

            
        });
        $('#download-text').tabs();
        $('#download-pop-up').dialog({width:900});
        //console.log(htmlTemplate);
        //Created an empty zip file
        
    });

    $(document).on('click','.btt-close-download',function(){
            $('#download-pop-up').dialog('close');
            $('#javascript-content').html('');
            $('#css-content').html('');
            $('#html-content').html('');
    });

});

function getFileToShow(rawFile){
    return rawFile.replace(/&/g, '&amp;')
     .replace(/>/g, '&gt;')
     .replace(/</g, '&lt;')
     .replace(/\n/g, '<br>')
     .replace(/\s/g,'&nbsp;&nbsp;')
     ;
}