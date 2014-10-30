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


//Variables for Black Pieces
var blackRook {};
var blackKnight {};
var blackBishop {};
var blackKing {};
var blackQueen {};
var blackPawn {};

//white objects
var whitePawn = {};
var whiteRook = {};
var whiteKnight = {};
var whiteBishop = {};
var whiteQueen= {};
var whiteKing = {};


