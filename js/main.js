var board = [[greenRook,greenKnight,greenBishop,greenQueen,greenKing,greenBishop,greenKnight,greenRook],[greenPawn,greenPawn,greenPawn,greenPawn,greenPawn,greenPawn,greenPawn,greenPawn],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn],[orangeRook,orangeKnight,orangeBishop,orangeQueen,orangeKing,orangeBishop,orangeKnight,orangeRook]];

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


//Objects for green Pieces
var greenRook = {
    image:"images/g-rook.png"
};
var greenKnight = {
    image:"images/g-knight.png"
};
var greenBishop = {
    image:"images/g-bishop.png"
};
var greenKing = {
    image:"images/g-king.png"
};
var greenQueen = {
    image:"images/g-queen.png"
};
var greenPawn = {
    image:"images/g-pawn.png"
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png"
};
var orangeRook = {
  image: "images/o-rook.png"
};
var orangeKnight = {
  image: "images/o-knight.png"
};
var orangeBishop = {
  image: "images/o-bishop.png"
};
var orangeQueen= { 
  image: "images/o-queen.png"
};
var orangeKing = {
  image: "images/o-king.png"
};
