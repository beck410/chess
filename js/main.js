var x;
var y;
var newx;
var newY;
var data = [];

var turn = 0;

$(document).ready(function(){
  createTable(board);


});
  function setXY(array){
  for(i = 0; i< array.length ; i ++){
        for(var j=0 ; j <array[i].children.length; j++){
          if(array[i].children[j].classList.contains('selected') === true){
            x = i;
            y = j;
          }
          if(array[i].children[j].classList.contains('chosen') === true){
            newX = i;
            newY = j;
          }
    }
  }
  board[x][y][1] = 2;
}

//Generate Table in the DOM
function createTable(board){
  $('table').empty()
  board.forEach(function(row){
    var $tr = $('<tr>');
    row.forEach(function(cell){
      var $td = $('<td>');
      if(cell[0].image){
        $td.css('background-image', "url("+ cell[0].image + ")");
      }
      if(cell[1] === 1){
        $td.addClass('highlight');
        $td.css('background-color', '#aab668');
      }
      if(cell[1] === 2){
        $td.addClass('selected');
      }
      $tr.append($td);
      });
    $('table').append($tr);
    });

    $('td').on('click',function(){

      board.forEach(function(row){
        row.forEach(function(cell){
          cell[1]=0;
        })
      })
      if(this.classList.contains('highlight')){
        this.classList.add('chosen')
          var data = [];
          $('table').find('tr').each(function(index,cell){data.push(cell)});
          setXY(data);
          board[newX][newY][0] = board[x][y][0];
          board[x][y][0] = 0;
          createTable(board);
          turn++;
          return;
      } else{
        $('td').removeClass('selected');
        this.classList.add('selected');
        var data = [];
        $('table').find('tr').each(function(index,cell){data.push(cell)});
        setXY(data);
        if(turn%2 === 0 && board[x][y][0].team === "orange") {
          board[x][y][0].move();
          createTable(board);
        } else if(turn%2 != 0 && board[x][y][0].team ===   "grey"){
          board[x][y][0].move();
          createTable(board);
        }
      }
      kingCheck()
  }) 
}

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
  },
  team: "grey",
};

var greyKnight = {
  image:"images/g-knight.png",
  move: function(){
    knightMove();
  },
  team: "grey",
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
  },
  team: "grey",
};
var greyKing = {
  image:"images/g-king.png",
  move: function(){
    kingMove();
  },
  team: "grey",
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
  },
  team: "grey",
}
var greyPawn = {
  image:"images/g-pawn.png",
  move: function(){
          //move ahead 1 spot
          if(x+1>=0 && x+1<board.length){
            if(!(board[x+1][y][0] && x>=0 && x<board.length)){
              board[x+1][y][1] = 1;
            }
          }
          //move diagonally right
          if(x+1>=0 && x+1<board.length && y+1>=0 && y+1<board[x].length)
            if(board[x+1][y+1][0]){
              if (!(board[x+1][y+1][0].team === board[x][y][0].team)){
                board[x+1][y+1][1] = 1;
              }
            }
          //move diagonally left
          if(x+1>=0 && x+1<board.length && y-1>=0 && y-1<board[x].length){
            if(board[x+1][y-1][0]){
              if(!(board[x+1][y-1][0].team === board[x][y][0].team)){
                board[x+1][y-1][1] = 1;
              }
            }
          }
         //move forward 2 spots on first move
         if (x === 1) {
          if(!(board[x+1][y][0])){
                 board[x+2][y][1] = 1;
          }
         }

  },
  team: "grey",
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png",
  move: function(){
            //move ahead 1 spot
        if(x-1>=0 && x-1<board.length){
          if(!(board[x-1][y][0])){
            board[x-1][y][1] = 1;
          }
        }
        //move diagonally right
        if(x-1>=0 && x-1<board.length && y+1>=0 && y+1<board[x].length){
          if (board[x-1][y+1][0]){
            if(!(board[x-1][y+1][0].team === board[x][y][0].team )){
              board[x-1][y+1][1] = 1;
            }
          }
        }
        //move diagonally left
        if(x-1>=0 && x-1<board.length && y-1>=0 && y-1<board[x].length){
          if (board[x-1][y-1][0]){
            if (!(board[x-1][y-1][0].team === board[x][y][0].team)){
              board[x-1][y-1][1] = 1;
            }
          }
        }
        //move forward 2 spots on first move
        if (x === 6) {
          if(!(board[x-1][y][0])){
          board[x-2][y][1] = 1;
          }
        }
  },
  team: "orange",
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
  },
  team: "orange",
};
var orangeKnight = {
  image: "images/o-knight.png",
  move: function(){
    knightMove();
  },
  team: "orange",
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
  },
  team: "orange",
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
  },
  team: "orange"
};
var orangeKing = {
  image: "images/o-king.png",
  move: function(){
    kingMove();
  },
  team: "orange",
};


var board = [[[greyRook,0],[greyKnight,0],[greyBishop,0],[greyQueen,0],[greyKing,0],[greyBishop,0],[greyKnight,0],[greyRook,0]],[[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0]],[[orangeRook,0],[orangeKnight,0],[orangeBishop,0],[orangeQueen,0],[orangeKing,0],[orangeBishop,0],[orangeKnight,0],[orangeRook,0]]];

function leftCheck(){
  //all squares left
  for(var i=y-1; i>-1; i--){
    if(board[x][i][0]){
      if(!(board[x][i][0].team === board[x][y][0].team)){
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
      if(!(board[x][i][0].team === board[x][y][0].team)){
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
      if(!(board[i][y][0].team === board[x][y][0].team)){
        board[i][y][1] = 1;
      }
      return;
    } else{
        board[i][y][1] = 1;
    }
  }
}

//all squares above
function aboveCheck(){
  for(var i=x-1; i>-1; i--){
  if(board[i][y][0]){
    if(!(board[i][y][0].team === board[x][y][0].team)){
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
  for(var i=x-1, j=y-1; i>=0 && j>=0; i--, j--){
    if(i>=0 && j >=0){
      if(board[i][j][0]){
        if(board[i][j][0].team === board[x][y][0].team){
          return;
        }
        else{
          board[i][j][1] = 1;
          return;
        }
      } else{
        board[i][j][1] = 1;
      }
    }
  }
}

//all squares diag top-right
function topRightCheck(){
  for(var i=x-1, j=y+1; i>=0 && j<8; i--, j++){
  if(i>=0 && j <8){
    if(board[i][j][0]){
      if(board[i][j][0].team === board[x][y][0].team){
        return;
      }
      else{
        board[i][j][1] = 1;
        return;
      }
    } else{
      board[i][j][1] = 1;
    }
  }
}
}

//all squares diag bottom-right
function bottomRightCheck(){
  for(var i=x+1, j=y+1; i<8 && j<8; i++, j++){
    if(i<8 && j <8){
      if(board[i][j][0]){
        if(board[i][j][0].team === board[x][y][0].team){
          return;
        }
        else{
          board[i][j][1] = 1;
          return;
        }
      } else{
        board[i][j][1] = 1;
      }
    }
  }
}

//all squares diag bottom-left
function bottomLeftCheck(){
for(var i=x+1, j=y-1; i<8 && j>=0; i++, j--){
    if(i<8 && j >=0){
      if(board[i][j][0]){
        if(board[i][j][0].team === board[x][y][0].team){
          return;
        }
        else{
          board[i][j][1] = 1;
          return;
        }
      } else{
        board[i][j][1] = 1;
      }
    }
  }
}

function kingMove(){
  for(var i = x-1 ; i <= x+1 ; i++){
    for(var j = y-1 ; j <= y+1 ; j++){
      if(i >= 0 && i < 8 && j >= 0 && j < 7 && !( x === i && y === j)&& !(board[i][j][0].team === board[x][y][0].team) ){
            board[i][j][1] = 1;
      }
    }
  }
}

function knightMove(){
  if(x+2<8 && y+1 <8){
    if(!(board[x+2][y+1][0].team === board[x][y][0].team)){
      board[x+2][y+1][1] = 1;
    }
}
  if(x+2<8 && y-1 >=0){
    if(!(board[x+2][y-1][0].team === board[x][y][0].team)){
      board[x+2][y-1][1] = 1;
    }
  }
  if(x-2 >= 0 && y+1 < 8){
    if(!(board[x-2][y+1][0].team === board[x][y][0].team)){
      board[x-2][y+1][1] = 1;
    }
  }
  if(x-2 >= 0 && y-1 >= 0){
    if(!(board[x-2][y-1][0].team === board[x][y][0].team)){
      board[x-2][y-1][1] = 1;
    }
  }
  if(x+1 < 8 && y+2 < 8){
    if(!(board[x+1][y+2][0].team === board[x][y][0].team)){
      board[x+1][y+2][1] = 1;
    }
  }
  if(x+1 < 8 && y-2 >= 0){
    if(!(board[x+1][y-2][0].team === board[x][y][0].team)){
      board[x+1][y-2][1] = 1;
    }
  }
  if(x-1 >= 0 && y+2 < 8){
    if(!(board[x-1][y+2][0].team === board[x][y][0].team)){
      board[x-1][y+2][1] = 1;
    }
  }
  if(x-1 >= 0 && y-2 >=0){
    if(!(board[x-1][y-2][0].team === board[x][y][0].team)){
      board[x-1][y-2][1] = 1;
    }
  }
}

var kingCheck = function (){
  if(turn%2 === 0){
      for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j][0].team === 'orange'){
              board[i][j][0].move()
            } 
        }
      }
      for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j][0] === greyKing && board[i][j][1] === 1){
                alert("The grey king is in check.");
            }
        }
      }
  } 
  if(turn%2 === 1){
      for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j][0].team === 'grey'){
              board[i][j][0].move()
            } 
        }
      }
      for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j][0] === orangeKing && board[i][j][1] === 1){
                alert("The orange king is in check.");
            }
        }
      }   
  }  
}
