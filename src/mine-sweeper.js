const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arrOfNumbers = [];
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      let countSmall = [];
      if(matrix[i-1]){
        countSmall.push(matrix[i-1][j-1])
        countSmall.push(matrix[i-1][j])
        countSmall.push(matrix[i-1][j+1])
      }

      countSmall.push(matrix[i][j-1])
      countSmall.push(matrix[i][j+1])
      
      if(matrix[i+1]){
        countSmall.push(matrix[i+1][j-1])
        countSmall.push(matrix[i+1][j])
        countSmall.push(matrix[i+1][j+1])
      }

      let countOfTrue = 0;
      countSmall.map((item) => {
        if(item === true) countOfTrue++;
        
      })
      arrOfNumbers.push(countOfTrue)
      
    } 
    
  }
  let newArr = [];
  for(let i = 0; i < arrOfNumbers.length; i += matrix[0].length){

  newArr.push(arrOfNumbers.slice(i, i + matrix[0].length))
  }
  return newArr;
}

module.exports = {
  minesweeper
};
