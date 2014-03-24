$(document).ready(function(){

  $('#telefonica-table-container').html(getTable(4,4,'top'));
  $('#movistar-table-container').html(getTable(4,4,'top'));
  $('#vivo-table-container').html(getTable(4,4,'top'));

  $(document).on('click.select', function(event) {

    var telefonicaRow = $('#telefonica-row-value').val();
    var telefonicaColumn = $('#telefonica-column-value').val();
    var telefonicaType = $('#telefonica-type-value').val();
    var telefonicaCellInfo = $('#telefonica-cell-info-value').val();

    $('#telefonica-table-container').html(getTable(telefonicaRow,telefonicaColumn,telefonicaType,telefonicaCellInfo));

    var movistarRow = $('#movistar-row-value').val();
    var movistarColumn = $('#movistar-column-value').val();
    var movistarType = $('#movistar-type-value').val();
    var movistarCellInfo = $('#movistar-cell-info-value').val();

    $('#movistar-table-container').html(getTable(movistarRow,movistarColumn,movistarType,movistarCellInfo));


    var vivoRow = $('#vivo-row-value').val();
    var vivoColumn = $('#vivo-column-value').val();
    var vivoType = $('#vivo-type-value').val();
    var vivoCellInfo = $('#vivo-cell-info-value').val();

    $('#vivo-table-container').html(getTable(vivoRow,vivoColumn,vivoType,vivoCellInfo));

    if((telefonicaType=='left' && telefonicaCellInfo=='yes-info') || 
       (movistarType=='left' && movistarCellInfo=='yes-info') || 
       (vivoType=='left' && vivoCellInfo=='yes-info')) resizeLeftTableColumns();
    
  });
});

function getTable(row, column, type, info) {
  var table;
  
  if(type=='top') table=getTopHeaderTable(row,column,info);
  else if(type=='left') table=getLeftHeaderTable(row,column,info);
  

  return table;
}

function getTopHeaderTable(row, column, info) {
  var table;

  var headerInfo='';
  var rowInfo='';
  var bodyText='';
  table='<table class="top-table"><thead>';
  table+='<tr>';
  for(var i=0;i<column;i++){
    if(info=='yes-info') headerInfo='Header-Column: '+(i+1);
    table += '<td>'+ headerInfo +'</td>';
  }
  table += '</tr></thead><tbody>';
  for(var i=0;i<row-1;i++){
    if(info=='yes-info') rowInfo='Row: '+(i+1);
    if (i%2==0) table += '<tr class="even-line">';
    else table += '<tr class="odd-line">';
    for(var j=0;j<column;j++){
      if(info=='yes-info') bodyText=rowInfo+' Column: '+(j+1);
      table += '<td>'+ bodyText +'</td>';
      
    }
    table +='</tr>';
  }
  table += '</tbody></table>';

  return table;
}

function getLeftHeaderTable(row, column, info) {
  var table;

  var headerInfo='';
  var rowInfo='';
  var bodyText='';

  table='<table class="left-table"><thead>';
  for(var i=0;i<row;i++){
    if(info=='yes-info') headerInfo='Header-Row: '+(i+1);
    table += '<tr><td>'+ headerInfo +'</td></tr>';
  }
  table += '</thead><tbody>';
  for(var i=0;i<row;i++){
    if(info=='yes-info') rowInfo='Row: '+(i+1);
    table += '<tr>';
    for(var j=0;j<column-1;j++){
      if(info=='yes-info') bodyText=rowInfo+' Column: '+(j+1);
      if (j%2==0)table += '<td class="even-line">'+ bodyText +'</td>';
      else table += '<td class="odd-line">'+ bodyText +'</td>';
      
    }
    table +='</tr>';
  }
  table += '</tbody></table>';

  return table;
}

function resizeLeftTableColumns(){
  var thead=$('.left-table').children('thead');
  var maxSizeHead=0;

  thead.children().each(function() {
    maxSizeHead=Math.max(maxSizeHead,$(this).children().width());
  });

  thead.children().each(function() {
    $(this).children().width(maxSizeHead);
  });

  var tbody=$('.left-table').children('tbody');

  var maxSizeBody=new Array();
  tbody.children().each(function(){
    var i = 0;
    
    $(this).children().each(function()  {
      var actSize = $(this).width();
      if(isNaN(maxSizeBody[i])){
        maxSizeBody[i] = actSize;
      }
      else{
        maxSizeBody[i] = Math.max(maxSizeBody[i],actSize);
      }
      i++;
    });
  });

  tbody.children().each(function(){
    var i = 0;
    
    $(this).children().each(function()  {
      $(this).width(maxSizeBody[i]);
      i++;
    });
  });
}