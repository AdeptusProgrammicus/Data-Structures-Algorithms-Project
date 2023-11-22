// implementation goes here
class Matrix {
  constructor(x, y) {
    this.first = x;
    this.second = y;
  }
}

// Check if it is possible to go to (x, y) from the current
// position. The function returns false if the cell has
// value 0 or already visited
function isSafe(matrix, visited, x, y) {
  return (
    x >= 0 &&
    x < matrix.length &&
    y >= 0 &&
    y < matrix[0].length &&
    matrix[x][y] == 1 &&
    !visited[x][y]
  );
}

function findShortestPath(matrix, visited, i, j, x, y, min_dist, dist) {
  if (i == x && j == y) {
    min_dist = Math.min(dist, min_dist);
    return min_dist;
  }
  // set (i, j) cell as visited
  visited[i][j] = true;
  // go to the bottom cell
  if (isSafe(matrix, visited, i + 1, j)) {
    min_dist = findShortestPath(
      matrix,
      visited,
      i + 1,
      j,
      x,
      y,
      min_dist,
      dist + 1
    );
  }
  // go to the right cell
  if (isSafe(matrix, visited, i, j + 1)) {
    min_dist = findShortestPath(
      matrix,
      visited,
      i,
      j + 1,
      x,
      y,
      min_dist,
      dist + 1
    );
  }
  // go to the top cell
  if (isSafe(matrix, visited, i - 1, j)) {
    min_dist = findShortestPath(
      matrix,
      visited,
      i - 1,
      j,
      x,
      y,
      min_dist,
      dist + 1
    );
  }
  // go to the left cell
  if (isSafe(matrix, visited, i, j - 1)) {
    min_dist = findShortestPath(
      matrix,
      visited,
      i,
      j - 1,
      x,
      y,
      min_dist,
      dist + 1
    );
  }
  // backtrack: remove (i, j) from the visited matrix
  visited[i][j] = false;
  return min_dist;
}

// Wrapper over findShortestPath() function
function findShortestPathLength(matrix, src, dest) {
  if (
    matrix.length == 0 ||
    matrix[src.first][src.second] == 0 ||
    matrix[dest.first][dest.second] == 0
  )
    return -1;

  let row = matrix.length;
  let col = matrix[0].length;
  // construct an `M × N` matrix to keep track of visited
  // cells
  let visited = [];
  for (var i = 0; i < row; i++) visited.push(new Array(col));

  let dist = Number.MAX_SAFE_INTEGER;
  dist = findShortestPath(
    matrix,
    visited,
    src.first,
    src.second,
    dest.first,
    dest.second,
    dist,
    0
  );

  if (dist != Number.MAX_SAFE_INTEGER) return dist;
  return -1;
}

//Each test case has been tested to implement the expected output
//The implementation runs only 1 'let' statemet at a time so comment out all but the desired let case you wish to test.

// Driver code
// Good Input case example usage1
let matrix = [
  [1, 1, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0],
];

let src = new Matrix(0, 0);
let dest = new Matrix(7, 5);
//expected output: 14

// Good Input case example usage2
// let matrix = [
//   [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
// ];

// let src = new Matrix(0, 0);
// let dest = new Matrix(3, 4);
//expected output: 11

// Good Input case example usage3
// let matrix = [
//   [1, 1, 1, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
// ];

// let src = new Matrix(0, 1);
// let dest = new Matrix(2, 2);
//expected output: 3

// Bad Input case example usage1
// let matrix = [
//   [1, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];

// let src = new Matrix(0, 1);
// let dest = new Matrix(0, 1);
//expected output: Shortest Path doesn't exist

// Bad Input case example usage2
// let matrix = [
//   [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
//     [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
//     [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
//     [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
//     [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
//     [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
//     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
//     [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
//     [ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
// ];

// let src = new Matrix(0, 0);
// let dest = new Matrix(7, 5);
//expected output: Shortest Path doesn't exist

let dist = findShortestPathLength(matrix, src, dest);

if (dist != -1) console.log("Shortest Path is " + dist);
else console.log("Shortest Path doesn't exist");
