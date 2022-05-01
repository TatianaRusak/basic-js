const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  // if (typeof str != 'string') String(str);

  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (options.addition === false) options.addition = 'false';
  if (options.addition === null) options.addition = 'null';
  if (!options.addition) options.addition = '';
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.additionSeparator) options.additionSeparator = '|';


  let additionStrArr = [];
  for (let i = 1; i <= options.additionRepeatTimes; i++) { 
    additionStrArr.push(options.addition)
  }

  let additionStr = additionStrArr.join(options.additionSeparator)
  
  let longStr = [];
  for (let i = 1; i <= options.repeatTimes; i++) { 
    longStr.push(str + additionStr)
  }

  longStr = longStr.join(options.separator)


  return longStr
}

module.exports = {
  repeater
};
