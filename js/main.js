$(document).ready(function(){
  createTable(board);
  var data = [];
  $('table').find('tr').each(function(index,cell){ data.push(cell)});
  console.log(data);
 $('td').click(function(){$(this).addClass('selected')})

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
  },
  showMove: function(){
  }
};
var greyKnight = {
  image:"images/g-knight.png",
  move: function(){
  },
  showMove: function(){
  }
};
var greyBishop = {
  image:"images/g-bishop.png",
  move: function(){
  },
  showMove: function(){
  }
};
var greyKing = {
  image:"images/g-king.png",
  move: function(){
  },
  showMove: function(){
  }
};
var greyQueen = {
  image:"images/g-queen.png",
  move: function(){
  },
  showMove: function(){
  }
};
var greyPawn = {
  image:"images/g-pawn.png",
  move: function(){
  },
  showMove: function(){
  }
};

//Objects for orange pieces
var orangePawn = {
  image: "images/o-pawn.png",
  move: function(){
  },
  showMove: function(){
  },
};
var orangeRook = {
  image: "images/o-rook.png",
  move: function(){
  },
  showMove: function(){
  },
};
var orangeKnight = {
  image: "images/o-knight.png",
  move: function(){
  },
  showMove: function(){
  },
};
var orangeBishop = {
  image: "images/o-bishop.png",
  move: function(){
  },
  showMove: function(){
  },
};
var orangeQueen= {
  image: "images/o-queen.png",
  move: function(){
  },
  showMove: function(){
  },
};
var orangeKing = {
  image: "images/o-king.png",
  move: function(){
  },
  showMove: function(){
  },
};


var board = [[[greyRook,0],[greyKnight,0],[greyBishop,0],[greyQueen,0],[greyKing,0],[greyBishop,0],[greyKnight,0],[greyRook,0]],[[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0]],[[orangeRook,0],[orangeKnight,0],[orangeBishop,0],[orangeQueen,0],[orangeKing,0],[orangeBishop,0],[orangeKnight,0],[orangeRook,0]]];


//  if(this.className === "selected"){
//    var chessPiece = cell[x][y];
//    chessPiece.showMove();
//  }
