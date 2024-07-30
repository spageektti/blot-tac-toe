// general options
const width = 125;
const height = 125; // recommended to be square, but don't have to
const boxes_width = 3; // how many boxes to draw
const boxes_height = 3; // boxes must be squares to be tic tac toe game, but you can change it if you want

// fill-the-board options
const fill = true; // whether to make your blot machine play the TicTacToe game with himself, or make the board blank - works when the boxes are squares
const how_many_in_row_to_win = 3; // only needed when fill=true
// randomness options (only needed when fill=true)
const seed = 10342254;

// number of control points to draw the circle (O)
const numPoints = 8;

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
function generate_x(x, y) {
  return [
    [
      [x * drawable_size / boxes_width, y * drawable_size / boxes_width],
      [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width]
    ],
    [
      [x * drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width],
      [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width]
    ]
  ];
}

function generate_o(x, y) {
  const p1 = [x * drawable_size / boxes_width, y * drawable_size / boxes_width];
  const p2 = [x * drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width];
  const p3 = [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width - drawable_size / boxes_width];
  const p4 = [x * drawable_size / boxes_width - drawable_size / boxes_width, y * drawable_size / boxes_width];

  // center and radius of the circle
  const centerX = (p1[0] + p3[0]) / 2;
  const centerY = (p1[1] + p3[1]) / 2;
  const radius = Math.min(Math.abs(p1[0] - p3[0]), Math.abs(p1[1] - p3[1])) / 2;

  const controlPoints = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = 2 * Math.PI * i / numPoints;
    const pointX = centerX + radius * Math.cos(angle);
    const pointY = centerY + radius * Math.sin(angle);
    controlPoints.push([pointX, pointY]);
  }

  controlPoints.push(controlPoints[0])

  return [bt.catmullRom(controlPoints, 100)];
}

if (fill) {
  let x, y;
  for (let i = 0; i < boxes_width * boxes_height; i++) {
    x = bt.randIntInRange(1, boxes_width);
    y = bt.randIntInRange(1, boxes_height);

    console.log("wdwjh3", x, y)

    if (i % 2 == 0) {
      drawLines(generate_x(x, y))
    } else {
      drawLines(generate_o(x, y))
    }
  }
}
