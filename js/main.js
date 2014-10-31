$(document).ready(function(){
  createTable(board);
  var data = [];
  $('table').find('tr').each(function(x,r){ data.push(r)});
  console.log(data);

});

//Generate Table in the DOM
function createTable(board){
  $('table').innerHTML = '';
  board.forEach(function(row){
    var $tr = $('<tr>');
    row.forEach(function(cell){
      var $td = $('<td>');
      $td.css('background-image', "url("+ cell.image + ")");
      $tr.append($td);
    });
    $('table').append($tr);
  });
}


//Objects for green Pieces
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


var board = [[greyRook,greyKnight,greyBishop,greyQueen,greyKing,greyBishop,greyKnight,greyRook],[greyPawn,greyPawn,greyPawn,greyPawn,greyPawn,greyPawn,greyPawn,greyPawn],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn,orangePawn],[orangeRook,orangeKnight,orangeBishop,orangeQueen,orangeKing,orangeBishop,orangeKnight,orangeRook]];






if(this.className === "selected"){
  var chessPiece = cell[x][y];
  chessPiece.showMove():
}
