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

/*
new Board({n: someNum});
new Board ([filled matrix])

[
[1, 0, 0, 0],
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 0, 0, 1]
]
*/

window.findNRooksSolution = function (n) {
  let solution = []; //fixme

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


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  // debugger;
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
  console.log('Number of solutions for ' + n + ' rooks:', solution);
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = new Board({ n: n }); //fixme


  if (!solution.hasAnyQueensConflicts() && solution.countPieces() === n) {
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    return solution.rows();
  }

  let checkBranches = function (board) {
    /*

     know we need to toggle pieces
     when we toggle pieces they cannot have conflicts
     toggle a piece in first availble spot then next ++
     if no available space "return"




    */
  };



  return checkBranches(solution.rows());

};

// https://app.ziteboard.com/team/40b21dc1-98f9-457e-aca9-dd11dc2d17d0

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
