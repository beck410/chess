var board = [[blackRook,blackKnight,blackBishop,blackQueen,blackKing,blackBishop,blackKnight,blackRook],[blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn],[whiteRook,whiteKnight,whiteBishop,whiteQueen,whiteKing,whiteBishop,whiteKnight,whiteRook]];

$(document).ready(function(){
  createTable(board);
});

//Generate Table in the DOM
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
var blackRook = {
    image:"images/blackrook.png",
};
var blackKnight = {
    image:"images/blackknight.png",
};
var blackBishop = {
    image:"images/blackbishop.png",
};
var blackKing = {
    image:"images/blackking.png",
};
var blackQueen = {
    image:"images/blackqueen.png",
};
var blackPawn = {
    image:"images/blackpawn.png",
};

//white objects
var whitePawn = {
  image: "images/whitepawn.png",
};
var whiteRook = {
  image: "images/whiterook.png",
};
var whiteKnight = {
  image: "images/whiteknight.png",
};
var whiteBishop = {
  image: "images/whitebishop.png",
};
var whiteQueen= {
  image: "images/whitequeen.png",
};
var whiteKing = {
  image: "images/whiteking.png",
};
