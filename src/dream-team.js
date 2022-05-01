const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  if (!Array.isArray(members)) { 
    return false
  }

  let dreamTeam = [];
  
  members.forEach(name => {
    if (typeof (name) === 'string') {
      name = name.trim();
      dreamTeam.push(name[0].toUpperCase());
      }
  })
  return dreamTeam.sort().join('');  
}

module.exports = {
  createDreamTeam
};
