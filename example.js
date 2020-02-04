const tab = new Array(40);
const board = new Array();

window.onload = writeBoards();
let b = 0;
let c = 0;
function riddleSolver(board) {
  do {
    horizontalle();
    verticalle();
    zeroUp();
  } while (b != 950 || c != 880);
  console.log(board);
}

function writeBoards() {
  for (i = 0; i < 25; i++) {
    const randomTab = tab.fill(0).map(el => Math.floor(Math.random() * 9) + 1);
    board[i] = randomTab;
  }
  console.log(board);
}

const horizontalle = () => {
  let n = 0;
  for (a = 0; a < 25; a++) {
    for (j = 0; j < 38; j++) {
      if (
        board[a][j] == board[a][j + 1] &&
        board[a][j] == board[a][j + 2] &&
        board[a][j] != 0
      ) {
        if (board[a][j + 1] == board[a][j + 3]) {
          (board[a][j] = 0),
            (board[a][j + 1] = 0),
            (board[a][j + 2] = 0),
            (board[a][j + 3] = 0);
        } else {
          (board[a][j] = 0), (board[a][j + 1] = 0), (board[a][j + 2] = 0);
        }
      } else {
        n++;
      }
    }
  }
  b = n;
};
const verticalle = () => {
  let v = 0;
  for (a = 0; a < 22; a++) {
    for (j = 0; j < 40; j++) {
      if (
        board[a][j] == board[a + 1][j] &&
        board[a][j] == board[a + 2][j] &&
        board[a][j] != 0
      ) {
        if (board[a][j] == board[a + 3][j]) {
          (board[a][j] = 0),
            (board[a + 1][j] = 0),
            (board[a + 2][j] = 0),
            (board[a + 3][j] = 0);
        } else {
          (board[a][j] = 0), (board[a + 1][j] = 0), (board[a + 2][j] = 0);
        }
      } else {
        v++;
      }
    }
  }
  c = v;
};
var nr = 0;
const zeroUp = () => {
  for (f = 0; f < 5; f++) {
    for (a = 24; a > 0; a--) {
      for (j = 0; j < 40; j++) {
        if (board[a][j] === 0) {
          nr = board[a - 1][j];
          board[a][j] = nr;
          board[a - 1][j] = 0;
        }
      }
    }
  }
};
