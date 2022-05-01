const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let sortArrOfHeights = [], newArr = [];
  let count = 0;
  arr.map(height => { 
    if (height != -1) { 
      sortArrOfHeights.push(height);
    }
  })
  sortArrOfHeights.sort((a, b) => a - b)

  arr.map((height, i) => {
      if(height != -1){
        newArr.push(sortArrOfHeights[count]);
        count++;
      } else {
        newArr.push(height);
      }
  })

  return newArr;
}

module.exports = {
  sortByHeight
};
