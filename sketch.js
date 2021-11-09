const DOT_DIAMETER = 20;
const SPEED = 0.20;

let grid;
let t = 0;

function setup() {
  createCanvas(innerWidth * 0.75, innerHeight * 0.55);
  grid = new Array(floor(height/DOT_DIAMETER));
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(floor(width/DOT_DIAMETER));
  }
}

function draw() {
  background(220);
  sineUpdateGrid();
  drawGrid();
  t += SPEED;
  frameRate(30)
}

function drawGrid() {
  noStroke()
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // console.log(col, row)
      if (grid[row][col] == 1) {
        fill(202, 231, 193)
      } else {
        fill(88)
      }
      circle(col*DOT_DIAMETER+.5*DOT_DIAMETER, row*DOT_DIAMETER+.5*DOT_DIAMETER, DOT_DIAMETER);
    }
  }
}

function sineUpdateGrid() {
  sineInterpolate = new Array(grid[0].length);
  for (let i = 0; i < sineInterpolate.length; i++) {
    sineInterpolate[i] = round(map(sin(t + i * SPEED), -1, 1, 0, grid.length-1));
    // print(sineInterpolate[i])
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (sineInterpolate[col] == row) {
        grid[row][col] = 1
      } else {
        grid[row][col] = 0
      }
    }
  }
}
