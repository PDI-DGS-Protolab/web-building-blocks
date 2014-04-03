$(document).ready(function() {

    $(document).on('click','.download-btt', function() {
      
        
        var tmp = $(this).attr('id').split('-');
        
        var brand = tmp[0];
        var component = tmp[1];
        console.log('brand: '+brand+'; component: '+component);
        //We read the file that we want:
        //It only will work on localhost with firefox, with other 
        //browsers we must need the project deployed on a server(heroku for example)
        
        var htmlFile, jsFile, defCssFile,cssFile;

        var file1=$.get( 'templates/'+brand+'/'+component+'.html', function() {
        }).done(function( data ) {
            htmlFile=data;
        }).fail(function(){
            //alert('Could not load files!');
        });
        var file21=$.get( 'css/default-'+component+'.css', function() {
        }).done(function( data21 ) {
            defCssFile=data21;
        }).fail(function(){
            //alert('Could not load files!');
        });
        var file22=$.get( 'css/'+brand+'/'+component+'.css', function() {
        }).done(function( data22 ) {
            cssFile=data22;
        }).fail(function(){
            //alert('Could not load files!');
        });
        if(component!=='button' && component !=='table'){
            var file3=$.get( 'js/'+component+'.js', function() {
            }).done(function( data3 ) {
               jsFile=data3;
            }).fail(function(){
                //alert('Could not load files!');
            });
        }
        if(component!=='button' && component !=='table'){
            $.when(file1, file21,file22,file3).done(function() {
                var jsFinal= getFileToShow(jsFile);
                var cssFinal= getFileToShow(defCssFile+'\n'+cssFile);
                var htmlFinal= getFileToShow(htmlFile);
                $('#javascript-content').html(jsFinal);
                $('#css-content').html(cssFinal);
                $('#html-content').html(htmlFinal);
            });
        }
        else{
           $.when(file1, file21,file22).done(function() {
                var cssFinal= getFileToShow(defCssFile+'\n'+cssFile);
                var htmlFinal= getFileToShow(htmlFile);
                $('#javascript-content').html('No Javascript Code is needed for this component!');
                $('#css-content').html(cssFinal);
                $('#html-content').html(htmlFinal);
            }); 
        }
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


    $(document).on('click','.download-keep', function() {
        var c=getKeepMeComponents();

        var jsTmp;
        var jsAll='';
        //adding all the javascripts
        for(a in c){
            if(c[a].component!=='button' && c[a].component !=='table'){
                var file=$.get( 'js/'+c[a].component+'.js', function() {
                }).done(function( data ) {
                   jsTmp =data;
                }).fail(function(){
                    //alert('Could not load files!');
                });
                $.when(file).done(function() {
                    jsAll += jsTmp;
                    var jsFinal= getFileToShow(jsAll);
                    $('#javascript-content').html(jsFinal);
                });
            }
        }

        //We read the file that we want:
        //It only will work on localhost with firefox, with other 
        //browsers we must need the project deployed on a server(heroku for example)
        
        /*var htmlFile, jsFile, cssFile;

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
            
        });*/
        $('#download-text').tabs();
        $('#download-pop-up').dialog({width:900});
        //console.log(htmlTemplate);
        //Created an empty zip file
        
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