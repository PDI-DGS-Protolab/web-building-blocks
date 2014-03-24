$(document).on('click','.download-btt', function() {
  
    
    var tmp = $(this).attr('id').split('-');
    
    var brand = tmp[0];
    var component = tmp[1];
  
    console.log('brand: '+brand+'; component: '+component);
    //We read the file that we want:
    //It only will work on localhost with firefox, with other 
    //browsers we must need the project deployed on a server(heroku for example)
    //var htmlTemplate=readFileFromPath(component+'.html');
    //var defCss=readFileFromPath('../../css/default-'+component+'.css');
    //var css=readFileFromPath('../../css/'+brand+'/'+component+'.css');

    var htmlTemplate;
    var file1=$.get( 'templates/'+brand+'/'+component+'.html', function() {
    }).done(function( data ) {
        htmlTemplate=data;
    }).fail(function(){
        alert('Could not load files!')
    });

    $.when(file1).done(function() {
        console.log('Done all');
    });

    //console.log(htmlTemplate);
    //Created an empty zip file
    
});

