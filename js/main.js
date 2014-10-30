var board = [[0,0,0,0,0,0,],[0,0,0,0,0,0,],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,],[0,0,0,0,0,0],[0,0,0,0,0,0]]
//var board = [[blackRook,blackKnight,blackBishop,blackQueen,blackKing,blackBishop,blackKnight,blackRook],[blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn],[whiteRook,whiteKnight,whiteBishop,whiteQueen,whiteKing,whiteBishop,whiteKnight,whiteRook]];
$(document).ready(function(){
  createTable(board);
});

function createTable(board){
  $('table').innerHTML = '';
  board.forEach(function(row){
  var $tr = $('<tr>');
  row.forEach(function(cell){
    var $td = $('<td>');
    $tr.append($td);
  });
  $('table').append($tr);
  });
}
