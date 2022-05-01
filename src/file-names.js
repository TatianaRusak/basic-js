const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 1;
  let arrOfRenamedFiles = [];
  
  for (let i = 0; i < names.length; i++) { 
    for (let j = 1; j < names.length; j++) { 
      if (names[i] == names[j]) { 
        count += 1;
        names[j] += `&{count}`
      }
    }
  }
}

function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = {};
  let arrUnic = [];

  names.forEach(name => {
    if(!arrUnic.includes(name)){
      arrUnic.push(name)
    }
  })

  arrUnic.forEach(unicName => {
    count[unicName] = 0;
  })
    
for (let i = 0; i < names.length; i++) {
  if (names.indexOf(names[i]) != i) {
    count[names[i]]++;
    names[i] = names[i] + `(${count[names[i]]})`;
  }
}
  
  return names;
}

module.exports = {
  renameFiles
};
