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
 let arr = [];
 let str = String(n);
 let newArr = [...str];
 for(let i = 0; i < newArr.length; i++) {
   let cutNum = [...str];
   cutNum.splice(i, 1);
   arr.push(cutNum.join(''));
 }
 return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
