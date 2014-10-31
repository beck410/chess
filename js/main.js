var x;
  var y;
  var data = [];

$(document).ready(function(){
  createTable(board);
  $('td').click(function(){
  $(this).toggleClass('selected')
  var data = [];
  $('table').find('tr').each(function(index,cell){ data.push(cell)});
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
  }
};
var greyKnight = {
  image:"images/g-knight.png",
  move: function(){
  }
};
var greyBishop = {
  image:"images/g-bishop.png",
  move: function(){
  }
};
var greyKing = {
  image:"images/g-king.png",
  move: function(){
  }
};
var greyQueen = {
  image:"images/g-queen.png",
  move: function(){
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
    //all squares right
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

    //all squares below
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

    //all squares diag top-left
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

    //all squares diag top-right
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

    //all squares diag bottom-right
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
    //all squares diag bottom-left
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
};
var greyPawn = {
  image:"images/g-pawn.png",
  move: function(){
  }
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png",
  move: function(){
  }
};
var orangeRook = {
  image: "images/o-rook.png",
  move: function(){
  }
};
var orangeKnight = {
  image: "images/o-knight.png",
  move: function(){
  }
};
var orangeBishop = {
  image: "images/o-bishop.png",
  move: function(){
  }
};
var orangeQueen= {
  image: "images/o-queen.png",
  move: function(){
  },
};
var orangeKing = {
  image: "images/o-king.png",
  move: function(){
  },
};


var board = [[[greyRook,0],[greyKnight,0],[greyBishop,0],[greyQueen,0],[greyKing,0],[greyBishop,0],[greyKnight,0],[greyRook,0]],[[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0]],[[orangeRook,0],[orangeKnight,0],[orangeBishop,0],[orangeQueen,0],[orangeKing,0],[orangeBishop,0],[orangeKnight,0],[orangeRook,0]]];
