$(document).ready(function() {

    $(document).on('click','.download-btt', function() {
      
        var buttonTypes=['neutral','positive','negative','subdued'];

        var tmp = $(this).attr('id').split('-');
        var brand = tmp[0];
        var component = tmp[1];
        console.log('brand: '+brand+'; component: '+component);
        //We read the file that we want:
        //It only will work on localhost with firefox, with other 
        //browsers we must need the project deployed on a server(heroku for example)
        
        var htmlFile, jsFile, defCssFile,cssFile;

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

        if(component==='input'){
            htmlFile = '<!--To add a simple '+brand+' input:-->\n'+
                        getInputHtml(brand)+'\n\n'+
                        '<!--To add a refresheable '+brand+' input:-->\n'+
                        getInputRefreshHtml(brand)+'\n\n'+
                        '<!--To add a pluss/less '+brand+' input:-->\n'+
                        getInputPlussLessHtml(brand);
        }
        else if(component==='button'){
            htmlFile='';
            for (a in buttonTypes){
                htmlFile += 'To add a '+buttonTypes[a]+' '+brand+' button:\n'+
                            getButtonHtml(brand, buttonTypes[a])+'\n\n';
            }
        }
        else if(component==='table'){
            htmlFile='Not done yet';
        }

        var htmlFinal= getFileToShow(htmlFile);
        if(component!=='button' && component !=='table'){
            $.when(file21,file22,file3).done(function() {
                var jsFinal= getFileToShow(jsFile);
                var cssFinal= getFileToShow(defCssFile+'\n'+cssFile);
                $('#javascript-content').html('<pre class="brush: js;">'+jsFinal+'</pre>');
                $('#css-content').html('<pre class="brush: css;">'+cssFinal+'</pre>');
                $('#html-content').html('<pre class="brush: xml;">'+htmlFinal+'</pre>');
                //$("#testtest").html(htmlFinal);
                SyntaxHighlighter.highlight();
            });
        }
        else{
           $.when(file21,file22).done(function() {
                var cssFinal= getFileToShow(defCssFile+'\n'+cssFile);
                $('#javascript-content').html('No Javascript Code is needed for this component!');
                $('#css-content').html('<pre class="brush: css;">'+cssFinal+'</pre>');
                $('#html-content').html('<pre class="brush: xml;">'+htmlFinal+'</pre>');
                //$("#testtest").html(htmlFinal);
                SyntaxHighlighter.highlight();
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
        //Per evitar

        var jsTmp;
        var jsAll='';
        $('#javascript-content').html(jsAll);
        //adding all the javascripts
        for(a in c){
            if(c[a].component !== 'button' && c[a].component !== 'table' ){
                var file=$.get( 'js/'+c[a].component+'.js', function() {
                }).done(function( data ) {
                   jsTmp =data;
                }).fail(function(){
                    //alert('Could not load files!');
                });
                $.when(file).done(function() {
                    jsAll += jsTmp+'\n';
                    var jsFinal= getFileToShow(jsAll);
                    $('#javascript-content').html('<pre class="brush: js;">'+jsFinal+'</pre>');
                    SyntaxHighlighter.highlight();
                });
            }

        }
        if($('#javascript-content').html()===''){
            $('#javascript-content').html('No Javascript Code is needed for this components!');
        }

        var cssTmp,cssTmp2;
        var css='';
        var added={input:false,button:false,table:false};
        for(a in c){
            //check if already loaded something(default)
            var file1=$.get( 'css/default-'+c[a].component+'.css', function() {
            }).done(function( data2 ) {
                cssTmp=data2;
            }).fail(function(){
            //alert('Could not load files!');
            });
            var file2=$.get( 'css/'+c[a].brand+'/'+c[a].component+'.css', function() {
            }).done(function( data3 ) {
                cssTmp2=data3;
            }).fail(function(){
            //alert('Could not load files!');
            });
            $.when(file1,file2).done(function() {
                if(!added[c[a].component]){
                    css += cssTmp+'\n'+cssTmp2+'\n';
                    added[c[a].component]=true;
                }
                else{
                    css += cssTmp2+'\n';
                }

                var cssFinal= getFileToShow(css);
                $('#css-content').html('<pre class="brush: css;">'+cssFinal+'</pre>');
                SyntaxHighlighter.highlight();
            });
        }
        var htmlFile='';
        for(a in c){
            //check if already loaded something(default)
            if(c[a].component==='input'){
                if(c[a].type==='input'){
                    htmlFile += '<!--To add a simple '+c[a].brand+' input:-->\n'+
                                 getInputHtml(c[a].brand)+'\n\n';
                }
                else if(c[a].type==='special-input-refresh'){
                    htmlFile += '<!--To add a refresheable '+c[a].brand+' input:-->\n'+
                        getInputRefreshHtml(c[a].brand)+'\n\n';
                }
                else if(c[a].type==='special-input-plus-less'){
                    htmlFile +='<!--To add a pluss/less '+c[a].brand+' input:-->\n'+
                        getInputPlussLessHtml(c[a].brand)+'\n\n';
                }
            }
            else if(c[a].component==='button'){
                htmlFile += '<!--To add a '+c[a].type+' '+c[a].brand+' button:-->\n'+
                            getButtonHtml(c[a].brand,c[a].type)+'\n\n';
            }
            else if(c[a].component==='table'){
                htmlFile += '<!--Table not done yet-->';
            }
            
        }
        var htmlFinal= getFileToShow(htmlFile);
        $('#html-content').html('<pre class="brush: xml;">'+htmlFinal+'</pre>');
        SyntaxHighlighter.highlight();
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
     //.replace(/\n/g, '<br>')
     //.replace(/\s/g,'&nbsp;&nbsp;')
     ;
}