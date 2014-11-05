var x;
var y;
var newx;
var newY;
var data = [];

var turn = 0;

$(document).ready(function() {

  createTable(board);

});

function playersTurn() {
  if (turn % 2 === 0) {
    document.getElementById('players-turn').innerHTML =
      "Orange Player's Turn";
  } else if (turn % 2 != 0) {
    document.getElementById('players-turn').innerHTML = "Grey Player's Turn";
  }
}

function setXY(array) {
  for (i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].children.length; j++) {
      if (array[i].children[j].classList.contains('selected') === true) {
        x = i;
        y = j;
      }
      if (array[i].children[j].classList.contains('chosen') === true) {
        newX = i;
        newY = j;
      }
    }
  }
  board[x][y][1] = 2;
}

//Generate Table in the DOM
function createTable(board) {
  playersTurn();
  $('table').empty()
  board.forEach(function(row) {
    var $tr = $('<tr>');
    row.forEach(function(cell) {
      var $td = $('<td>');
      if (cell[0].image) {
        $td.css('background-image', "url(" + cell[0].image + ")");
      }
      if (cell[1] === 1) {
        $td.addClass('highlight');
        $td.css('background-color', '#aab668');
      }
      if (cell[1] === 2) {
        $td.addClass('selected');
      }
      $tr.append($td);
    });
    $('table').append($tr);
  });


  $('td').on('click', function() {

    board.forEach(function(row) {
      row.forEach(function(cell) {
        cell[1] = 0;
      })
    })
    if (this.classList.contains('highlight')) {
      this.classList.add('chosen')
      var data = [];
      $('table').find('tr').each(function(index, cell) {
        data.push(cell)
      });
      setXY(data);
      board[newX][newY][0] = board[x][y][0];
      board[x][y][0] = 0;
      createTable(board);
      kingCheck();
      turn++;
      playersTurn();
      return;
    } else {
      $('td').removeClass('selected');
      this.classList.add('selected');
      var data = [];
      $('table').find('tr').each(function(index, cell) {
        data.push(cell)
      });
      setXY(data);
      if (turn % 2 === 0 && board[x][y][0].team === "orange") {
        board[x][y][0].move(x, y);
        createTable(board);
      } else if (turn % 2 != 0 && board[x][y][0].team === "grey") {
        board[x][y][0].move(x, y);
        createTable(board);
      }
    }
  })
}

//Objects for grey pieces
var greyRook = {
  image: "images/g-rook.png",
  move: function(e, f) {
    //all squares left
    leftCheck(e, f);
    //all squares right
    rightCheck(e, f);
    //all squares below
    belowCheck(e, f);
    //all squares above
    aboveCheck(e, f);
  },
  team: "grey",
};

var greyKnight = {
  image: "images/g-knight.png",
  move: function(e, f) {
    knightMove(e, f);
  },
  team: "grey",
};
var greyBishop = {
  image: "images/g-bishop.png",
  move: function(e, f) {
    //all squares diag top-left
    topLeftCheck(e, f);
    //all squares diag top-right
    topRightCheck(e, f);
    //all squares diag bottom-right
    bottomRightCheck(e, f);
    //all squares diag bottom-left
    bottomLeftCheck(e, f);
  },
  team: "grey",
};
var greyKing = {
  image: "images/g-king.png",
  move: function() {
    kingMove();
  },
  team: "grey",
};
var greyQueen = {
  image: "images/g-queen.png",
  move: function(e, f) {
    //all squares left
    leftCheck(e, f);
    //all squares right
    rightCheck(e, f);
    //all squares below
    belowCheck(e, f);
    //all squares above
    aboveCheck(e, f);
    //all squares diag top-left
    topLeftCheck(e, f);
    //all squares diag top-right
    topRightCheck(e, f);
    //all squares diag bottom-right
    bottomRightCheck(e, f);
    //all squares diag bottom-left
    bottomLeftCheck(e, f);
  },
  team: "grey",
}
var greyPawn = {
  image:"images/g-pawn.png",
  move: function(c, d){
          //move ahead 1 spot
          if(c+1>=0 && c+1<board.length){
            if(!(board[c+1][d][0] && c>=0 && c<board.length)){
              board[c+1][d][1] = 1;
            }
          }
          //move diagonally right
          if(c+1>=0 && c+1<board.length && d+1>=0 && d+1<board[c].length)
            if(board[c+1][d+1][0]){
              if (!(board[c+1][d+1][0].team === board[c][d][0].team)){
                board[c+1][d+1][1] = 1;
              }
            }
          //move diagonally left
          if(c+1>=0 && c+1<board.length && d-1>=0 && d-1<board[c].length){
            if(board[c+1][d-1][0]){
              if(!(board[c+1][d-1][0].team === board[c][d][0].team)){
                board[c+1][d-1][1] = 1;
              }
            }
          }
         //move forward 2 spots on first move
         if (c === 1) {
          if(!(board[c+1][d][0])){
                 board[c+2][d][1] = 1;
          }
         }
  },
  team: "grey",
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png",
  move: function(c, d) {
    //move ahead 1 spot
    if (c - 1 >= 0 && c - 1 < board.length) {
      if (!(board[c - 1][d][0])) {
        board[c - 1][d][1] = 1;
      }
    }
    //move diagonally right
    if (c - 1 >= 0 && c - 1 < board.length && d + 1 >= 0 && d + 1 <
      board[c]
      .length) {
      if (board[c - 1][d + 1][0]) {
        if (!(board[c - 1][d + 1][0].team === board[c][d][0].team)) {
          board[c - 1][d + 1][1] = 1;
        }
      }
    }
    //move diagonally left
    if (c - 1 >= 0 && c - 1 < board.length && d - 1 >= 0 && d - 1 <
      board[c]
      .length) {
      if (board[c - 1][d - 1][0]) {
        if (!(board[c - 1][d - 1][0].team === board[c][d][0].team)) {
          board[c - 1][d - 1][1] = 1;
        }
      }
    }
    //move forward 2 spots on first move
     if (c === 6) {
       if(!(board[c-1][d][0])){
        board[c-2][d][1] = 1;
        }
     }
  },
  team: "orange",
};
var orangeRook = {
  image: "images/o-rook.png",
  move: function(e, f) {
    //all squares left
    leftCheck(e, f);
    //all squares right
    rightCheck(e, f);
    //all squares below
    belowCheck(e, f);
    //all squares above
    aboveCheck(e, f);
  },
  team: "orange",
};
var orangeKnight = {
  image: "images/o-knight.png",
  move: function(e, f) {
    knightMove(e, f);
  },
  team: "orange",
};

var orangeBishop = {
  image: "images/o-bishop.png",
  move: function(e, f) {
    //all squares diag top-left
    topLeftCheck(e, f);
    //all squares diag top-right
    topRightCheck(e, f);
    //all squares diag bottom-right
    bottomRightCheck(e, f);
    //all squares diag bottom-left
    bottomLeftCheck(e, f);
  },
  team: "orange",
};
var orangeQueen = {
  image: "images/o-queen.png",
  move: function(e, f) {
    //all squares left
    leftCheck(e, f);
    //all squares right
    rightCheck(e, f);
    //all squares below
    belowCheck(e, f);
    //all squares above
    aboveCheck(e, f);
    //all squares diag top-left
    topLeftCheck(e, f);
    //all squares diag top-right
    topRightCheck(e, f);
    //all squares diag bottom-right
    bottomRightCheck(e, f);
    //all squares diag bottom-left
    bottomLeftCheck(e, f);
  },
  team: "orange"
};
var orangeKing = {
  image: "images/o-king.png",
  move: function() {
    kingMove();
  },
  team: "orange",
};


var board = [
  [
    [greyRook, 0],
    [greyKnight, 0],
    [greyBishop, 0],
    [greyQueen, 0],
    [greyKing, 0],
    [greyBishop, 0],
    [greyKnight, 0],
    [greyRook, 0]
  ],
  [
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0],
    [greyPawn, 0]
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  [
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0],
    [orangePawn, 0]
  ],
  [
    [orangeRook, 0],
    [orangeKnight, 0],
    [orangeBishop, 0],
    [orangeQueen, 0],
    [orangeKing, 0],
    [orangeBishop, 0],
    [orangeKnight, 0],
    [orangeRook, 0]
  ]
];

function leftCheck(c, d) {
  //all squares left
  for (var i = d - 1; i > -1; i--) {
    if (board[c][i][0]) {
      if (!(board[c][i][0].team === board[c][d][0].team)) {
        board[c][i][1] = 1;
      }
      return;
    } else {
      board[c][i][1] = 1;
    }
  }
}

//all squares right
function rightCheck(c, d) {
  for (var i = d + 1; i < 8; i++) {
    if (board[c][i][0]) {
      if (!(board[c][i][0].team === board[c][d][0].team)) {
        board[c][i][1] = 1;
      }
      return;
    } else {
      board[c][i][1] = 1;
    }
  }
}

//all squares below
function belowCheck(c, d) {
  for (var i = c + 1; i < 8; i++) {
    if (board[i][d][0]) {
      if (!(board[i][d][0].team === board[c][d][0].team)) {
        board[i][d][1] = 1;
      }
      return;
    } else {
      board[i][d][1] = 1;
    }
  }
}

//all squares above
function aboveCheck(c, d) {
  for (var i = c - 1; i > -1; i--) {
    if (board[i][d][0]) {
      if (!(board[i][d][0].team === board[c][d][0].team)) {
        board[i][d][1] = 1;
      }
      return;
    } else {
      board[i][d][1] = 1;
    }
  }
}

//all squares diag top-left
function topLeftCheck(c, d) {
  for (var i = c - 1, j = d - 1; i >= 0 && j >= 0; i--, j--) {
    if (i >= 0 && j >= 0) {
      if (board[i][j][0]) {
        if (board[i][j][0].team === board[c][d][0].team) {
          return;
        } else {
          board[i][j][1] = 1;
          return;
        }
      } else {
        board[i][j][1] = 1;
      }
    }
  }
}

//all squares diag top-right
function topRightCheck(c, d) {
  for (var i = c - 1, j = d + 1; i >= 0 && j < 8; i--, j++) {
    if (i >= 0 && j < 8) {
      if (board[i][j][0]) {
        if (board[i][j][0].team === board[c][d][0].team) {
          return;
        } else {
          board[i][j][1] = 1;
          return;
        }
      } else {
        board[i][j][1] = 1;
      }
    }
  }
}

//all squares diag bottom-right
function bottomRightCheck(c, d) {
  for (var i = c + 1, j = d + 1; i < 8 && j < 8; i++, j++) {
    if (i < 8 && j < 8) {
      if (board[i][j][0]) {
        if (board[i][j][0].team === board[c][d][0].team) {
          return;
        } else {
          board[i][j][1] = 1;
          return;
        }
      } else {
        board[i][j][1] = 1;
      }
    }
  }
}

//all squares diag bottom-left
function bottomLeftCheck(c, d) {
  for (var i = c + 1, j = d - 1; i < 8 && j >= 0; i++, j--) {
    if (i < 8 && j >= 0) {
      if (board[i][j][0]) {
        if (board[i][j][0].team === board[c][d][0].team) {
          return;
        } else {
          board[i][j][1] = 1;
          return;
        }
      } else {
        board[i][j][1] = 1;
      }
    }
  }
}

function kingMove(c, d) {
  for (var i = c - 1; i <= c + 1; i++) {
    for (var j = d - 1; j <= d + 1; j++) {
      if (i >= 0 && i < 8 && j >= 0 && j < 7 && !(c === i && d === j) && !(
          board[i][j][0].team === board[c][d][0].team)) {
        board[i][j][1] = 1;
      }
    }
  }
}

function knightMove(c , d) {
  if (c + 2 < 8 && d + 1 < 8) {
    if (!(board[c + 2][d + 1][0].team === board[c][d][0].team)) {
      board[c + 2][d + 1][1] = 1;
    }
  }
  if (c + 2 < 8 && d - 1 >= 0) {
    if (!(board[c + 2][d - 1][0].team === board[c][d][0].team)) {
      board[c + 2][d - 1][1] = 1;
    }
  }
  if (c - 2 >= 0 && d + 1 < 8) {
    if (!(board[c - 2][d + 1][0].team === board[c][d][0].team)) {
      board[c - 2][d + 1][1] = 1;
    }
  }
  if (c - 2 >= 0 && d - 1 >= 0) {
    if (!(board[c - 2][d - 1][0].team === board[c][d][0].team)) {
      board[c - 2][d - 1][1] = 1;
    }
  }
  if (c + 1 < 8 && d + 2 < 8) {
    if (!(board[c + 1][d + 2][0].team === board[c][d][0].team)) {
      board[c + 1][d + 2][1] = 1;
    }
  }
  if (c + 1 < 8 && d - 2 >= 0) {
    if (!(board[c + 1][d - 2][0].team === board[c][d][0].team)) {
      board[c + 1][d - 2][1] = 1;
    }
  }
  if (c - 1 >= 0 && d + 2 < 8) {
    if (!(board[c - 1][d + 2][0].team === board[c][d][0].team)) {
      board[c - 1][d + 2][1] = 1;
    }
  }
  if (c - 1 >= 0 && d - 2 >= 0) {
    if (!(board[c - 1][d - 2][0].team === board[c][d][0].team)) {
      board[c - 1][d - 2][1] = 1;
    }
  }
}

function kingCheck(){
  for(var a = 0; a < board.length; a++){
    for(var b = 0; b < board.length; b++){
        if(board[a][b][0]){
          board[a][b][0].move(a, b);
        }
    }
  }
    for(var a = 0; a < board.length; a++){
        for(var b = 0; b < board.length; b++){
            if(board[a][b][0] === greyKing && board[a][b][1] === 1){
                alert("The grey king is in check.");
            } else if(board[a][b][0] === orangeKing && board[a][b][1] === 1){
                alert("The orange king is in check.");
           }
        }
    }
   for(var a = 0; a < board.length; a++){
    for(var b = 0; b < board.length; b++){
      board[a][b][1] = 0;
    }
   }
}
