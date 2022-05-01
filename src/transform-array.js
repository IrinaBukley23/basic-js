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
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArray = [];
  let i = 0; 
  while(i < arr.length) {
    const curr = arr[i];
    if (curr === '--discard-next') {
      i += 1;
    }
    else if (curr === '--discard-prev') {
        const prev = arr[i - 1];
        if (newArray[newArray.length - 1] === prev) {
          newArray.pop();
        }
    }
    else if (curr === '--double-next') {
      const next = arr[i + 1];
      if (next !== undefined) {
        newArray.push(next);
      }
    }
    else if (curr === '--double-prev') {
      const prev = arr[i - 1];
      if (newArray[newArray.length - 1] === prev && prev !== undefined) {
        newArray.push(prev);
      }
    }
    else newArray.push(curr);
    i += 1;
  }

  return newArray;  
}

module.exports = {
  transform
};
