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
let players = {}
let Board =    [['__|','__','|__'],['__|','__','|__'],['  |','  ','|  ']]
prompt('player1: ')
.then((name1)=>{
  players[name1] = []
  console.log(`${name1} saved`);
  return prompt('player2: ')
})
.then((name2)=>{
  players[name2] = []
  console.log(`${name2} saved`);
  return Board
})
.then((board)=>{
  console.log('lets play tic tac toe');
  console.log(board.join('\n'));
  return prompt(' player one choose your cordinates ex: 1,1: ')
})
.then((cords)=>{
  let getPlayerName = Object.keys(players)[0]
  players[getPlayerName].push(cords)
})

function setCord(str){
// split on the comma
//have cords be [e][x]
//set Board cords to [x]
let arr = str.split('')
let cords = [arr[0],arr[1]]

}


// console.log(Board.join('\n'),'board')
