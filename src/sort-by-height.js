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
  const result = arr.filter((num) => num>=0).sort((a,b) => a-b);
  arr.forEach((n, i, arr) => {
    if(n == -1) {
      result.splice(i, 0, n);
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
