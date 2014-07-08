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
        }).done(function (data) {
            defCssFile = data;
        }).fail(function () {
            //alert('Could not load files!');
        });
        var componentCssRequest = $.get('css/' + brand + '/' + component + '.css', function () {
        }).done(function (data) {
            cssFile = data;
        }).fail(function () {
            //alert('Could not load files!');
        });
        if (component !== 'button' && component !== 'table'){
            var componentJsRequest = $.getScript('js/' + component + '.js', function () {
            }).done(function (data) {
               jsFile = data;
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
            for (type in buttonTypes) {
                htmlFile += 'To add a ' + buttonTypes[type] + ' ' + brand + ' button:\n' +
                            getDownloadButtonsHtml(brand, buttonTypes[type]) + '\n\n';
            }
        }
        else if (component === 'table') {
            htmlFile = 'Not done yet';
        }

        var outputHTML = getFileToShow(htmlFile);
        if (component !== 'button' && component !== 'table') {
            $.when(defaultCssRequest, componentCssRequest, componentJsRequest).done(function () {
                var outputJS = getFileToShow(jsFile);
                var outputCSS = getFileToShow(defCssFile + '\n' + cssFile);
                $('#javascript-content').html('<pre class="brush: js;">' + outputJS + '</pre>');
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                $('#html-content').html('<pre class="brush: xml;">' + outputHTML + '</pre>');
                //$("#testtest").html(htmlFinal);
                SyntaxHighlighter.highlight();
            });
        }
        else {
           $.when(defaultCssRequest, componentCssRequest).done(function () {
                var outputCSS = getFileToShow(defCssFile + '\n' + cssFile);
                $('#javascript-content').html('No Javascript Code is needed for this component!');
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                $('#html-content').html('<pre class="brush: xml;">' + outputHTML + '</pre>');
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
        var keepMeComponents = getKeepMeComponents();
        //Per evitar

        var jsFile1;
        var jsFile2;
        var outputJS1, outputJS2;
        //adding all the javascripts
        for (comp in keepMeComponents) {
            if (keepMeComponents[comp].component != 'payment-form' && keepMeComponents[comp].component != 'button') {
                var componentJsRequest = $.getScript( 'js/' + keepMeComponents[comp].component + '.js', function () {
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
            else if (keepMeComponents[comp].component == 'payment-form') {
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
            else if (keepMeComponents[comp].component == 'button') {
                $('#javascript-content').append('<a> No Javascript Code is needed for component "' + keepMeComponents[comp].component + '"</a>');
            }
        }

        var cssFile1, cssFile2;
        var cssFile = '';
        var added = {input:false, button:false, table:false};
        for (comp in keepMeComponents) {
            //check if already loaded something(default)
            var componentCssRequest1 = $.get('css/default-' + keepMeComponents[comp].component + '.css', function () {
            }).done(function (data) {
                cssFile1 = data;
            }).fail(function () {
            //alert('Could not load files!');
            });
            var componentCssRequest2 = $.get('css/' + keepMeComponents[comp].brand + '/' + keepMeComponents[comp].component + '.css', function () {
            }).done(function (data) {
                cssFile2 = data;
            }).fail(function () {
            //alert('Could not load files!');
            });
            $.when(componentCssRequest1, componentCssRequest2).done(function () {
                if (!added[keepMeComponents[comp].component]) {
                    cssFile += cssFile1 + '\n' + cssFile2 + '\n';
                    added[keepMeComponents[comp].component] = true;
                }
                else {
                    cssFile += cssFile2 + '\n';
                }

                var outputCSS = getFileToShow(cssFile);
                $('#css-content').html('<pre class="brush: css;">' + outputCSS + '</pre>');
                SyntaxHighlighter.highlight();
            });
        }
        var htmlFile='';
        for (comp in keepMeComponents) {
            //check if already loaded something(default)
            if (keepMeComponents[comp].component === 'input') {
                if (keepMeComponents[comp].type === 'input') {
                    htmlFile += '<!--To add a simple ' + keepMeComponents[comp].brand + ' input:-->\n' +
                                 getInputHtml(keepMeComponents[comp].brand) + '\n\n';
                }
                else if (keepMeComponents[comp].type === 'special-input-refresh') {
                    htmlFile += '<!--To add a refresheable ' + keepMeComponents[comp].brand + ' input:-->\n' +
                        getInputRefreshHtml(keepMeComponents[comp].brand) + '\n\n';
                }
                else if (keepMeComponents[comp].type === 'special-input-plus-less') {
                    htmlFile += '<!--To add a pluss/less ' + keepMeComponents[comp].brand + ' input:-->\n' +
                        getInputPlusLessHtml(keepMeComponents[comp].brand) + '\n\n';
                }
            }
            else if (keepMeComponents[comp].component === 'button') {
                htmlFile += '<!--To add ' + keepMeComponents[comp].type + ' ' + keepMeComponents[comp].brand + ' buttons:-->\n' +
                            getDownloadButtonsHtml(keepMeComponents[comp].brand,keepMeComponents[comp].type) + '\n\n';
            }
            else if(keepMeComponents[comp].component === 'table'){
                htmlFile += '<!--To add a ' + keepMeComponents[comp].brand + ' table:-->\n' +
                getTableHtml(keepMeComponents[comp].brand) + '\n\n';
            }
            else if(keepMeComponents[comp].component === 'payment-form'){
                htmlFile += '<!--To add a ' + keepMeComponents[comp].brand + ' payment form:-->\n' +
                getPaymentFormHtml(keepMeComponents[comp].brand) + '\n\n';
            }
            
        }
        var outputHTML = getFileToShow(htmlFile);
        $('#html-content').html('<pre class="brush: xml;">' + outputHTML + '</pre>');
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