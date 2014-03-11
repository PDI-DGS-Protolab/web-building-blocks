$(document).on('click','.download-btt', function() {
  
    
    var tmp = $(this).attr('id').split('-');
    
    var brand = tmp[0];
    var component = tmp[1];
  
    console.log('brand: '+brand+'; component: '+component);
    //We read the file that we want:
    //It only will work on localhost with firefox, with other 
    //browsers we must need the project deployed on a server(heroku for example)
    var htmlTemplate=readFileFromPath(component+'.html');
    var defCss=readFileFromPath('../../css/default-'+component+'.css');
    var css=readFileFromPath('../../css/'+branch+'/'+component+'.css');
  
    //Created an empty zip file
    var zip=new JSZip();

    //added to zip a new document called input.html, and with content file1
    // usage: zip.file(filename,content);
    zip.file(component+'.html',htmlTemplate);
    zip.file('default-'+component+'.css',defCss);
    zip.file(component+'.css',css);
    if (component != 'button') {
      var js=readFileFromPath('../../js/'+component+'.js');
      zip.file(component+'.js',js);
    }
    //Generate the zip
    var content=zip.generate();
    //And download it
    location.href='data:application/zip;base64,'+content;
});

function readFileFromPath(filePath) {
  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {// code for IE6, IE5
    xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.open('GET',filePath,false);
  xmlhttp.send();

  xmlDoc=xmlhttp.responseText;
  return xmlDoc;
}