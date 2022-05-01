const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'array': [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    let link = `( ${value} )`
    if (value === undefined) {
      link = `( )`;
    }
    this.array.push(link);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position <= 0 || position > this.getLength()) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.array.splice(position - 1, 1);
      return chainMaker;
    }
  },
  reverseChain() {
    this.array.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
