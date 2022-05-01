const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let seasons = {
  winter: [0, 1, 11],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10]
}

function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

  if(!arguments.length){ 
    return 'Unable to determine the time of year!';
  }

  if(typeof date == 'number'){ 
    throw new Error("Invalid date!")
  }

  // try {
  //   Date.prototype.getUTCDate(date)
  // } catch { 
  //   throw new Error("Invalid date!")

  // }

  try {
    let month = date.getMonth();

    for (let season in seasons){
      
      if (seasons[season].includes(month)){
        
        return season;
      }
    } 
  } catch { 
    throw new Error("Invalid date!")
  }

  
}

module.exports = {
  getSeason
};
