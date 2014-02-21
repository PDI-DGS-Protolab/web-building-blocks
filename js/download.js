$(document).on('click','.download-btt', function() {
  
    
    var tmp = $(this).attr('id').split(' ');

    var component = tmp[0];
    var brand = tmp[1];
    
    console.log('brand: '+brand+'; component: '+component);
    //We read the file that we want:
    //It only will work on localhost with firefox, with other 
    //browsers we must need the project deployed on a server(heroku for example)
    var file1=readFileFromPath(component+'.html');
  
    //Created an empty zip file
    var zip=new JSZip();

    //added to zip a new document called input.html, and with content file1
    // usage: zip.file(filename,content);
    zip.file(component+'.html',file1);

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