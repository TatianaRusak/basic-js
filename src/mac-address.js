const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
let charCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 65, 66, 67, 68, 69, 70]
 
function isMAC48Address(n) {
  n.split('-').join('')

  for(let i = 0; i < n.length; i++){
    if(!charCodes.includes(n[i].charCodeAt(0))){
      return false
    } else {
      return true
    }
  }
}
module.exports = {
  isMAC48Address
};
