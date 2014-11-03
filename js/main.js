var x;
  var y;
  var data = [];

$(document).ready(function(){
  createTable(board);
  $('td').click(function(){
  var $td = $('td');    
  if (this.classList.contains('selected')){
  $(this).removeClass('selected');
  return;
  }
    for (var i = 0; i < $td.length; i++){
      if ($td[i].classList.contains('selected')) {
         alert("You already have a piece selected"); 
         return;
      }
    }
  $(this).addClass('selected');
  
  var data = [];
  $('table').find('tr').each(function(index,cell){data.push(cell)});
  console.log(data);
    setXY(data);
  })

  function setXY(array){
  //  array.forEach(function(row, i){
  for(i = 0; i< array.length ; i ++){
        for(var j=0 ; j <array[i].children.length; j++){
          if(array[i].children[j].classList.contains('selected') === true){
            x = i;
            y = j;
          }
        }
    }
  }
});

//Generate Table in the DOM
function createTable(board){
  $('table').innerHTML = '';
  board.forEach(function(row){
    var $tr = $('<tr>');
    row.forEach(function(cell){
      var $td = $('<td>');
      if(cell[0].image){
        $td.css('background-image', "url("+ cell[0].image + ")");
      }
      if(cell[1] === 1){
        $td.addClass('highlight');
      }
      $tr.append($td);
      });
    $('table').append($tr);
    });
}

//Diagonal Movement
//
//Top Left
//for (var i = x, j = y; i <= 0, j <= 0; x--, y--
//
//Top Right
//for (var i = x, j = y; i <= 0, j <= 0; x--, y++
//
//Bottom Left
//for (var i = x, j = y; i <= 0, j <= 0; x++, y--
//
//Bottom Right
//for (var i = x, j = y; i <= 0, j <= 0; x++, y++
//
//Vertical/Horizontal Movement
//
//Left
//for (var i = x; i <= 0; x--
//
//Right
//for (var i = x; i <= 0; x++
//
//Up
//for (var j = y; j <= 0; y--
//
//Down
//for (var j = y; j <= 0; y++

//Objects for grey pieces
var greyRook = {
  image:"images/g-rook.png",
  move: function(){
    //all squares left
    leftCheck();
    //all squares right
    rightCheck();
    //all squares below
    belowCheck();
    //all squares above
    aboveCheck();
  }
};

var greyKnight = {
  image:"images/g-knight.png",
  move: function(){
    knightMove();
  }
};
var greyBishop = {
  image:"images/g-bishop.png",
  move: function(){
    //all squares diag top-left
    topLeftCheck();
    //all squares diag top-right
    topRightCheck();
    //all squares diag bottom-right
    bottomRightCheck();
    //all squares diag bottom-left
    bottomLeftCheck();
  }
};
var greyKing = {
  image:"images/g-king.png",
  move: function(){
    kingMove();
  }
};
var greyQueen = {
  image:"images/g-queen.png",
  move: function(){
    //all squares left
    leftCheck();
    //all squares right
    rightCheck();
    //all squares below
    belowCheck();
    //all squares above
    aboveCheck();
    //all squares diag top-left
    topLeftCheck();
    //all squares diag top-right
    topRightCheck();
    //all squares diag bottom-right
    bottomRightCheck();
    //all squares diag bottom-left
    bottomLeftCheck();
  }
}
var greyPawn = {
  image:"images/g-pawn.png",
  move: function(){
          //move ahead 1 spot
          if (board[x-1][y][0]){
                  board[x-1][y][1] = 1;
                   }
          //move diagonally right
          if (board[x-1][y+1][1]){
                  if (!(teammates === teammates)){
                          board[x-1][y+1][1] = 1;
                           }
                         }
          //move diagonally left
          if (board[x-1][y-1][1]){
                  if (!(teammates === teammates)){
                          board[x-1][y-1][1] = 1;
                           }
                         }
         //move forward 2 spots on first move
         if (x === 1) {
                 board[x-2][y][1] = 1;
                  }

  }
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png",
  move: function(){
            //move ahead 1 spot
          if (board[x+1][y][0]){
                 board[x+1][y][1] = 1;
                   }
          //move diagonally right
          if (board[x+1][y+1][1]){
                  if (!(teammates === teammates)){
                          board[x+1][y+1][1] = 1;
                           }
                         }
          //move diagonally left
          if (board[x+1][y-1][1]){
                  if (!(teammates === teammates)){
                          board[x+1][y-1][1] = 1;
                           }
                         }
         //move forward 2 spots on first move
         if (x === 6) {
                 board[x+2][y][1] = 1;
                  }
  }
};
var orangeRook = {
  image: "images/o-rook.png",
  move: function(){
    //all squares left
    leftCheck();
    //all squares right
    rightCheck();
    //all squares below
    belowCheck();
    //all squares above
    aboveCheck();
  }
};
var orangeKnight = {
  image: "images/o-knight.png",
  move: function(){
    knightMove();
  }
};

var orangeBishop = {
  image: "images/o-bishop.png",
  move: function(){
    //all squares diag top-left
    topLeftCheck();
    //all squares diag top-right
    topRightCheck();
    //all squares diag bottom-right
    bottomRightCheck();
    //all squares diag bottom-left
    bottomLeftCheck();
  }
};
var orangeQueen= {
  image: "images/o-queen.png",
  move: function(){
    //all squares left
    leftCheck();
    //all squares right
    rightCheck();
    //all squares below
    belowCheck();
    //all squares above
    aboveCheck();
    //all squares diag top-left
    topLeftCheck();
    //all squares diag top-right
    topRightCheck();
    //all squares diag bottom-right
    bottomRightCheck();
    //all squares diag bottom-left
    bottomLeftCheck();
  }
}
var orangeKing = {
  image: "images/o-king.png",
  move: function(){
    kingMove();
  }
};


var board = [[[greyRook,0],[greyKnight,0],[greyBishop,0],[greyQueen,0],[greyKing,0],[greyBishop,0],[greyKnight,0],[greyRook,0]],[[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0]],[[orangeRook,0],[orangeKnight,0],[orangeBishop,0],[orangeQueen,0],[orangeKing,0],[orangeBishop,0],[orangeKnight,0],[orangeRook,0]]];

function leftCheck(){
  //all squares left
  for(var i=y-i; i<=0; i--){
    if(board[x][i][0]){
      if(board[x][i][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[x][i][1] = 1;
      }
      return;
    } else{
      board[x][i][1] = 1;
    }
  }
}

//all squares right
function rightCheck(){
  for(var i=y+1; i<8; i++){
    if(board[x][i][0]){
      if(board[x][i][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[x][i][1] = 1;
      }
      return;
    } else{
      board[x][i][1] = 1;
    }
  }
}

//all squares below
function belowCheck(){
  for(var i=x+1; i<8; i++){
    if(board[i][y][0]){
      if(board[i][y][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][y][1] = 1;
      }
      return;
    } else{
      board[i][y][1] = 1;
    }
  }
}

    //all squares above
    for(var i=x-1; i<=0; i--) {
      if(board[i][y][0]){
        if(board[i][y][0].team === board[x][y][0].team){
          return;
        }
        else{
          board[i][y][1] = 1;
        }
        return;
      }
      else{
        board[i][y][1] = 1;
      }
      return;
    } else{
      board[i][y][1] = 1;
    }
  }
}

//all squares diag top-left
function  topLeftCheck(){
  for(var i=x, j=y; i<0 || j<=0; i--, j--){
    if(board[i][j][0]){
      if(board[i][j][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][j][1] = 1;
      }
      return;
    } else{
      board[i][j][1] = 1;
    }
  }
}

//all squares diag top-right
function topRightCheck(){
  for(var i=x, j=y; i<=0 || j<=0; i--, j++){
    if(board[i][j][0]){
      if(board[i][j][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][j][1] = 1;
      }
      return;
    } else{
      board[i][j][1] = 1;
    }
  }
}

//all squares diag bottom-right
function bottomRightCheck(){
  for(var i=x, j=y; i<=0 || j<=0; i++, j++){
    if(board[i][j][0]){
      if(board[i][j][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][j][1] = 1;
      }
      return;
    } else{
      board[i][j][1] = 1;
    }
  }
}

//all squares diag bottom-left
function bottomLeftCheck(){
  for(var i=x, j=y; i<=0 || j<=0; i++, j--){
    if(board[i][j][0]){
      if(board[i][j][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][j][1] = 1;
      }
      return;
    } else{
      board[i][j][1] = 1;
    }
  }
}

function kingMove(){
  for(var i = x-1 ; i <= x+1 ; i++){
    for(var j = y-1 ; j <= y+1 ; j++){
      if(x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length && !( x === i && y === j) && !(board[i][j][0].team === board[x][y][0].team)){
            board[i][j][1] = 1;
      }
    }
  }
}

function knightMove(){
  if(!(board[x+2][y+1][0].team === board[x][y].team)){
    board[x+2][y+1][1] = 1;
  }
  if(board[x+2][y-1]){
    if(!(board[x+2][y-1][0].team === board[x][y].team)){
      board[x+2][y-1][1] = 1;
    }
  }
  if(board[x+2][y+1]){
    if(!(board[x+2][y+1][0].team === board[x][y].team)){
      board[x+2][y+1][1] = 1;
    }
  }
  if(board[x-2][y+1]){
    if(!(board[x-2][y+1][0].team === board[x][y].team)){
      board[x-2][y+1][1] = 1;
    }
  }
  if(board[x-2][y-1]){
    if(!(board[x-2][y-1][0].team === board[x][y].team)){
      board[x-2][y-1][1] = 1;
    }
  }
  if(board[x+1][y+2]){
    if(!(board[x+1][y+2][0].team === board[x][y].team)){
      board[x+1][y+2][1] = 1;
    }
  }
  if(board[x+1][y-2]){
    if(!(board[x+1][y-2][0].team === board[x][y].team)){
      board[x+1][y-2][1] = 1;
    }
  }
  if(board[x-1][y+2]){
    if(!(board[x-1][y+2][0].team === board[x][y].team)){
      board[x-1][y+2][1] = 1;
    }
  }
  if(board[x-1][y-2]){
    if(!(board[x-1][y-2][0].team === board[x][y].team)){
      board[x-1][y-2][1] = 1;
    }
  }
}
