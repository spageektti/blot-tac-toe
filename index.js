// general options
const width = 125;
const height = width; //recommended to be square, but don't have to
const boxes_width = 3; // how many boxes to draw
const boxes_height = boxes_width; // must be a square to be tic tac toe game

// fill-the-board options
const fill = true; // whether to make your blot machine play the TicTacToe game with himself, or make the board blank
const how_many_in_row_to_win = 3; // only needed when fill=true
// randomness options (only needed when fill=true)


setDocDimensions(width, height);

// draw the board
let board = [];

// add vertical lines
for (let i = 1; i < boxes_width; i++) {
  board.push([
    [i * (width / boxes_width), 0],
    [i * (width / boxes_width), width]
  ]);
}

// add horizontal lines
for (let i = 1; i < boxes_height; i++) {
  board.push([
    [0, i * (height / boxes_height)],
    [width, i * (height / boxes_height)]
  ]);
}

drawLines(board);
