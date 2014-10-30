$(document).ready(function(){
  createTable(board);
});

function createTable(board){
  $(table).innerHTML = '';
  board.forEach(function(row){
  var $tr = $(<'tr'>);
  row.forEacf(cell){
    var $td = $('<td>');
    $tr.appendChild($td);
  });
  $(table).appendChild($td);
  });
}
