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
  let repeatTimes = options.repeatTimes || null,
      separator = options.separator || '+',
      addition = options.addition || null,
      additionRepeatTimes = options.additionRepeatTimes || null,
      additionSeparator = addition ? (options.additionSeparator || '|') : null,
      bigAddition = '';
  if (addition) {
    bigAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator)
  }
  return Array(repeatTimes).fill(str + bigAddition).join(separator);
}

module.exports = {
  repeater
};
