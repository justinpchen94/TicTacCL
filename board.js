let board = {};

board.newGame = () => {
  let game = [[],[],[]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      game[i][j] = (i * 3) + j + 1 + ''
    }
  }
  return game;
}

console.log(newGame())

let currGame;
let currPlayer = 0; //0 for P1, 1 for P2
let marker = ['X', 'O']
let spaces = 9;


board.startNewGame = () => {
  console.log("Starting new game")
  currGame = newGame();
}

board.winGame = () => {
  console.log('Player' + (currPlayer + 1), 'has won!');
}

board.tieGame = () => {
  console.log('The game is tied!')
}
board.checkWin = () => {
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

  //check if tie game
  if (spaces === 0) return tieGame();
  

}

board.applyMove = (space) => {
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

module.exports = board;