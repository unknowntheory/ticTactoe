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

    let round = 0
    if(round !== 0){
      console.log(`round ${round} fight ;)` )
    }

    displayBoard(currentBoard)
    prompt('player 1 choose where to go: ')
    .then((results)=>{
      let arr = results.split(',');
      let x = +arr[0]
      let y = +arr[1]
      player1Move(x,y)
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



//function handle player1 move
function player1Move(x,y){
  Board[x][y] = 1
  displayBoard(Board)

}

//function handle plaer2 move

function player2Move(x,y){
  Board[x][y] = 1
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
