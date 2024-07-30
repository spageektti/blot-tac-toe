// general options
const width = 125;
const height = 125; // recommended to be square, but don't have to
const boxes_width = 3; // how many boxes to draw
const boxes_height = 3; // boxes must be squares to be tic tac toe game, but you can change it if you want

// fill-the-board options
const fill = true; // whether to make your blot machine play the TicTacToe game with himself, or make the board blank - works when the boxes are squares
const how_many_in_row_to_win = 3; // only needed when fill=true
// randomness options (only needed when fill=true)
const seed = 10342234;

bt.setRandSeed(seed);
const drawable_size = Math.min(width, height);

setDocDimensions(width, height);

// draw the board
let board = [];

// add vertical lines
for (let i = 1; i < boxes_width; i++) {
  board.push([
    [i * (drawable_size / boxes_width), 0],
    [i * (drawable_size / boxes_width), drawable_size]
  ]);
}

// add horizontal lines
for (let i = 1; i < boxes_height; i++) {
  board.push([
    [0, i * (drawable_size / boxes_height)],
    [drawable_size, i * (drawable_size / boxes_height)]
  ]);
}

// center
bt.translate(board, [width / 2, height / 2], bt.bounds(board).cc)

drawLines(board);

// fill the board with X and O
if (fill) {
  let x, y;
  for (let i = 0; i < /*boxes_width * boxes_height*/ 1; i++) {
    x = bt.randIntInRange(1, boxes_width);
    y = bt.randIntInRange(1, boxes_height);

    drawLines([
      [
        [x * drawable_size / boxes_width, y * drawable_size / boxes_width],
        [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width]
      ],
      [
        [x * drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width],
        [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width]
      ]
    ])
  }
}
