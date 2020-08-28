/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function (n) {
  let solution = [];

  for (let i = 0; i < n; i++) {
    let rowArr = [];
    for (let j = 0; j < n; j++) {
      if (j === i) {
        rowArr.push(1);
      } else {
        rowArr.push(0);
      }
    }
    solution.push(rowArr);
  }

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {

  let factorial = function (n) {
    if (n < 0) {
      return;
    }
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  let solution = factorial(n);
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  let solution = new Board({ n: n });
  let sample = solution.rows();


  let checkBranches = function (rowNum) {
    if (!solution.hasAnyQueensConflicts() && solution.countPieces() === n) {
      sample = _.map(solution.rows(), function (row) { return row.slice(); });
      return;
    }

    for (let i = 0; i < n; i++) {
      solution.togglePiece(rowNum, i);
      if (!solution.hasAnyQueensConflicts()) {
        checkBranches(rowNum + 1);
        solution.togglePiece(rowNum, i);
      } else if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(rowNum, i);
      }
    }
  };

  checkBranches(0);
  return sample;
};


window.countNQueensSolutions = function (n) {
  let solution = new Board({ n: n });
  let count = 0;

  let checkBranches = function (rowNum) {
    if (!solution.hasAnyQueensConflicts() && solution.countPieces() === n) {
      count++;
      return;
    }

    for (let i = 0; i < n; i++) {
      solution.togglePiece(rowNum, i);
      if (!solution.hasAnyQueensConflicts()) {
        checkBranches(rowNum + 1);
        solution.togglePiece(rowNum, i);
      } else if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(rowNum, i);
      }
    }
  };

  checkBranches(0);
  return count;
};
