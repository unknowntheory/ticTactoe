// var prompt = require('prompt');
lines = require('lines-js');
var prompt = require('prompt-promise');
// how to make a board
/*
__|__|__
__|__|__
|  |
[00,01,02]
[10,11,12]
[20,21,22]
x and y cord
*/
let Board = []
let players = {};
prompt('player1 name: ')
.then((value)=>{
  players[value] = [];
  return prompt('player2 name: ')
})
.then((value)=>{
  players[value] = []
  console.log(players)
  createBoard()

  letsPlay(Board)
})

//lets play
function letsPlay(currentBoard){


    displayBoard(currentBoard)
    checkDiagPlayer2(currentBoard)
    prompt('player 1 choose where to go: ')
    .then((results)=>{
      let arr = results.split(',');
      let x = +arr[0]
      let y = +arr[1]
      player1Move(x,y)
      checkDiagPlayer1(Board)
      return prompt('player2 choose where you go: ')
    })
    .then((results)=>{
      let arr = results.split(',');
      let x = +arr[0]
      let y = +arr[1]
      player2Move(x,y)
      console.log('-----------------------')
      letsPlay(Board)
    })

}

// letsPlay()
function checkDiagPlayer1(arr){
  let step = 0;
  for(let i = 0; i < 3; i++){
    if(arr[step][i] === 1){
      step++
    }
  }
  if(step === 3){
    console.log('winner winner chicken dinner player 1 wins');
     return;
  }
}
//player 2 win win
function checkDiagPlayer2(arr){
  let step = 0;
  for(let i = 0; i < 3; i++){
    if(arr[step][i] === 0){
      step++
    }
  }
  if(step === 3){
    console.log('winner winner chicken dinner player 2 wins');
     return;
  }
}
// check across
function row(arr){
  //loop down each row
  // check if 
}




//check below
//function handle player1 move
function player1Move(x,y){
  Board[x][y] = 1
  displayBoard(Board)

}

//function handle plaer2 move

function player2Move(x,y){
  Board[x][y] = 0
  displayBoard(Board)
}

//function create Board
function createBoard(){
  for( let i = 0; i < 3; i++) {
    Board.push([3,3,3])
  }
}
//create board
function displayBoard(board){
  console.log(Board.join('\n'))
  return Board.join('\n')
}
// createBoard()

// console.log(Board.join('\n'),'board')
