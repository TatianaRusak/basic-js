const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
let transformedArr = [];

function transform(arr) {

    // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) { 
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] == 'number'){
      transformedArr.push(arr[i])
    } else {
      switch (arr[i]){
        case '--discard-next': break;
        case '--discard-prev': transformedArr.pop();
        case '--double-next': transformedArr.push(arr[i+1])
        case '--double-prev': transformedArr.push(arr[i-1])
      }
    }
  }
  return transformedArr;
}


module.exports = {
  transform
};
