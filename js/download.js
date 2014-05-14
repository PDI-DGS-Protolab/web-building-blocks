$(document).ready(function () {

    $(document).on('click', '.download-btt', function () {
      
        var buttonTypes = ['neutral', 'positive', 'negative', 'subdued'];

        var tmp = $(this).attr('id').split('-');
        var brand = tmp[0];
        var component = tmp[1];
        console.log('brand: ' + brand + '; component: ' + component);
        //We read the file that we want:
        //It only will work on localhost with firefox, with other 
        //browsers we must need the project deployed on a server(heroku for example)
        
        var htmlFile, jsFile, defCssFile, cssFile;

        var defaultCssRequest = $.get('css/default-' + component + '.css', function () {
        }).done(function (data21) {
            defCssFile = data21;
        }).fail(function () {
            //alert('Could not load files!');
        });
        var componentCssRequest = $.get('css/' + brand + '/' + component + '.css', function () {
        }).done(function (data22) {
            cssFile = data22;
        }).fail(function () {
            //alert('Could not load files!');
        });
        if (component !== 'button' && component !== 'table'){
            var componentJsRequest = $.getScript('js/' + component + '.js', function () {
            }).done(function (data3) {
               jsFile = data3;
            }).fail(function () {
                //alert('Could not load files!');
            });
        }

        if (component === 'input') {
            htmlFile = '<!--To add a simple ' + brand + ' input:-->\n' +
                        getInputHtml(brand) + '\n\n' +
                        '<!--To add a refresheable ' + brand + ' input:-->\n' +
                        getInputRefreshHtml(brand) + '\n\n' +
                        '<!--To add a pluss/less ' + brand + ' input:-->\n' +
                        getInputPlusLessHtml(brand);
        }
        else if (component === 'button') {
            htmlFile = '';
            for (a in buttonTypes) {
                htmlFile += 'To add a ' + buttonTypes[a] + ' ' + brand + ' button:\n' +
                            getButtonHtml(brand, buttonTypes[a]) + '\n\n';
            }
        }
        else if (component === 'table') {
            htmlFile = 'Not done yet';
        }

        var htmlFinal = getFileToShow(htmlFile);
        if (component !== 'button' && component !== 'table') {
            $.when(componentJsRequest).done(function () {
                var outputJS = getFileToShow(jsFile);
                $('#javascript-content').html('<pre class="brush: js;">' + outputJS + '</pre>');
                SyntaxHighlighter.highlight();
            });
            /*
            $.when(defaultCssRequest, componentCssRequest, componentJsRequest).done(function () {
                jsAll += jsFile + '\n';
                var outputJS = getFileToShow(jsAll);
                alert(outputJS);
                var outputCSS = getFileToShow(defCssFile + '\n' + cssFile);
                $('#javascript-content').html('<pre class="brush: js;">' + outputJS + '</pre>');
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                $('#html-content').html('<pre class="brush: xml;">' + htmlFinal + '</pre>');
                //$("#testtest").html(htmlFinal);
                SyntaxHighlighter.highlight();
            });
            */
        }
        else {
           $.when(defaultCssRequest, componentCssRequest).done(function () {
                var outputCSS = getFileToShow(defCssFile + '\n' + cssFile);
                $('#javascript-content').html('No Javascript Code is needed for this component!');
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                $('#html-content').html('<pre class="brush: xml;">' + htmlFinal + '</pre>');
                //$("#testtest").html(htmlFinal);
                SyntaxHighlighter.highlight();
            }); 
        }
        $('#download-text').tabs();
        $('#download-pop-up').dialog({width:900});
        //console.log(htmlTemplate);
        //Created an empty zip file
        
    });

    $(document).on('click', '.btt-close-download', function (){
            $('#download-pop-up').dialog('close');
            $('#javascript-content').html('');
            $('#css-content').html('');
            $('#html-content').html('');
    });


    $(document).on('click', '.download-keep', function () {
        var c = getKeepMeComponents();
        //Per evitar

        var jsFile1;
        var jsFile2;
        var outputJS1, outputJS2;
        //adding all the javascripts
        for (a in c) {
            if (c[a].component != 'payment-form' && c[a].component != 'button') {
                var componentJsRequest = $.getScript( 'js/' + c[a].component + '.js', function () {
                }).done(function (data) {
                   jsFile1 = data;
                }).fail(function (){
                    //alert('Could not load files!');
                });
                
                $.when(componentJsRequest).done(function () {
                    outputJS1 = jsFile1 + '\n';
                    outputJS1 = getFileToShow(outputJS1);
                    $('#javascript-content').append('<pre class="brush: js;">' + outputJS1 + '</pre>');
                    SyntaxHighlighter.highlight();
                });
            }
            else if (c[a].component == 'payment-form') {
                /*should be minified js of all the payment form files*/
                var componentJsRequest = $.getScript( 'js/paymentform/paymentform.js', function () {
                }).done(function (data) {
                   jsFile2 = data;
                }).fail(function (){
                    //alert('Could not load files!');
                });
                $.when(componentJsRequest).done(function () {
                    outputJS2 = jsFile2 + '\n';
                    outputJS2 = getFileToShow(outputJS2);
                    $('#javascript-content').append('<pre class="brush: js;">' + outputJS2 + '</pre>');
                    SyntaxHighlighter.highlight();
                });
            }
            else if (c[a].component == 'button') {
                $('#javascript-content').append('<a> No Javascript Code is needed for component "' + c[a].component + '"</a>');
            }
        }

        var cssTmp, cssTmp2;
        var css = '';
        var added = {input:false, button:false, table:false};
        for (a in c) {
            //check if already loaded something(default)
            var file1 = $.get('css/default-' + c[a].component + '.css', function () {
            }).done(function (data2) {
                cssTmp = data2;
            }).fail(function () {
            //alert('Could not load files!');
            });
            var file2 = $.get('css/' + c[a].brand + '/' + c[a].component + '.css', function () {
            }).done(function (data3) {
                cssTmp2 = data3;
            }).fail(function () {
            //alert('Could not load files!');
            });
            $.when(file1,file2).done(function () {
                if (!added[c[a].component]) {
                    css += cssTmp + '\n' + cssTmp2 + '\n';
                    added[c[a].component]=true;
                }
                else {
                    css += cssTmp2 + '\n';
                }

                var outputCSS = getFileToShow(css);
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                SyntaxHighlighter.highlight();
            });
        }
        var htmlFile='';
        for (a in c) {
            //check if already loaded something(default)
            if (c[a].component === 'input') {
                if (c[a].type === 'input') {
                    htmlFile += '<!--To add a simple ' + c[a].brand + ' input:-->\n' +
                                 getInputHtml(c[a].brand) + '\n\n';
                }
                else if (c[a].type === 'special-input-refresh') {
                    htmlFile += '<!--To add a refresheable ' + c[a].brand + ' input:-->\n' +
                        getInputRefreshHtml(c[a].brand) + '\n\n';
                }
                else if (c[a].type === 'special-input-plus-less') {
                    htmlFile += '<!--To add a pluss/less ' + c[a].brand + ' input:-->\n' +
                        getInputPlusLessHtml(c[a].brand) + '\n\n';
                }
            }
            else if (c[a].component==='button') {
                htmlFile += '<!--To add a ' + c[a].type + ' ' + c[a].brand + ' button:-->\n' +
                            getButtonHtml(c[a].brand,c[a].type) + '\n\n';
            }
            else if(c[a].component==='table'){
                htmlFile += '<!--Table not done yet-->' + '\n';
            }
            else if(c[a].component==='payment-form'){
                htmlFile += '<!--Payment form not done yet-->' + '\n';
            }
            
        }
        var htmlFinal = getFileToShow(htmlFile);
        $('#html-content').html('<pre class="brush: xml;">' + htmlFinal + '</pre>');
        SyntaxHighlighter.highlight();
        $('#download-text').tabs();
        $('#download-pop-up').dialog({width:900});
        //console.log(htmlTemplate);
        //Created an empty zip componentJsRequest
        
    });
});


function getFileToShow (rawFile) {
    return rawFile.replace(/&/g, '&amp;')
     .replace(/>/g, '&gt;')
     .replace(/</g, '&lt;')
     //.replace(/\n/g, '<br>')
     //.replace(/\s/g,'&nbsp;&nbsp;')
     ;
}