const prompt = require('prompt');

const newGame = () => {
  console.log("Starting Tic Tac Toe CLI Edition!")
  let game = [[],[],[]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      game[i][j] = (i * 3) + j + 1 + ''
    }
  }
  return game;
}

let currGame;
let currPlayer = 0; //0 for P1, 1 for P2
let marker = ['X', 'O']
let spaces = 9;


const startNewGame = () => {
  console.log("Starting new game")
  currGame = newGame();
  space = 9;
  currPlayer = 0;
}

const winGame = () => {
  console.log('Player' + (currPlayer + 1), 'has won!');
}

const tieGame = () => {
  console.log('The game is tied!')
}

const printBoard = (b = currboard) => {
  console.log(' --- --- ---')
  console.log(`| ${b[0][0]} | ${b[0][1]} | ${b[0][2]} |`)
  console.log(' --- --- ---')
  console.log(`| ${b[1][0]} | ${b[1][1]} | ${b[1][2]} |`)
  console.log(' --- --- ---')
  console.log(`| ${b[2][0]} | ${b[2][1]} | ${b[2][2]} |`)
  console.log(' --- --- ---')

}
const checkTie = () => {
  return spaces !== 0
}
const checkWin = () => {
  let checkMark = marker[currPlayer]

  //check rows
  for (let i = 0; i < 3; i++) {
    let isRowWin = true;
    for (let j = 0; j < 3; j++) {
      isRowWin = isRowWin && currGame[i][j] !== checkMark;
    }
  }

  if (isRowWin) return winGame();

  //check cols
  for (let i = 0; i < 3; i++) {
    let isColWin = true;
    for (let j = 0; j < 3; j++) {
      isRowWin = isRowWin && currGame[j][i] !== checkMark;
    }
  }
  if (isColWin) return winGame();

  //check two diags

  if (currGame[0][0] === currGame[1][1] === currGame[2][2] === checkMark) return winGame();
  else if (currGame[0][2] === currGame[1][1] === currGame[2][0] === checkMark) return winGame();
  

}

const applyMove = (space) => {
  space = +space;
  let row = ~~((space - 1) / 3)
  let col = (space - 1) % 3
  let coordinates = [row, col];

  //invalid input
  if (currGame[row,col] != space) {

  } else {
    currGame[row,col] = marker[currPlayer];
    spaces--;
    checkWin();
    currPlayer = (currPlayer + 1) % 2;
  }
  
}



prompt.start();

//start a new game
startNewGame()
printBoard()
prompt.get([], (err, res) => {
  console.log(res.message)
})