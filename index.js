const width = 125;
const height = width; //recommended to be square, but don't have to
const boxes_width = 3; // how many boxes to draw
const boxes_height = boxes_width; // must be a square to be tic tac toe game

const fill = true; // whether to make your blot machine play the TicTacToe game with himself, or make the board blank
const how_many_in_row_to_win = 3; // only needed when fill=true

setDocDimensions(width, height);
