const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
 let all_cats = matrix.map(cat => cat.filter(item => item === "^^"));
 let result = 0;
 for(let elem of all_cats) {
   result += elem.length;
 }
 return result;
}

module.exports = {
  countCats
};
