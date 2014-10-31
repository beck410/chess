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


var board = [[[greyRook,0],[greyKnight,0],[greyBishop,0],[greyQueen,0],[greyKing,0],[greyBishop,0],[greyKnight,0],[greyRook,0]],[[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0],[greyPawn,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0],[orangePawn,0]],[[orangeRook,0],[orangeKnight,0],[orangeBishop,0],[orangeQueen,0],[orangeKing,0],[orangeBishop,0],[orangeKnight,0],[orangeRook,0]]];





//  if(this.className === "selected"){
//    var chessPiece = cell[x][y];
//    chessPiece.showMove();
//  }
