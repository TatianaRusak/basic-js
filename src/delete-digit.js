const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n == 10) return 1;
  n = n.toString();
  let maxDigit = 0;

  for (let i = n.length-1; i >=0 ; i--) { 
    if (n[i] > maxDigit) maxDigit = n[i]
  }
  let indexOfDeletedDigit = n.lastIndexOf(maxDigit)-1;
  n = n.replace(`${n[indexOfDeletedDigit]}`, '')
  return +n
}

module.exports = {
  deleteDigit
};
