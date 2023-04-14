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
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = String(options.addition) || "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";

  const res = [];

  if (
    !options.hasOwnProperty("additionRepeatTimes") ||
    options.additionRepeatTimes === 1
  ) {
    additionSeparator = "";
  }
  let string = String(str) + ((String(addition) !== 'undefined' ? addition : '') + additionSeparator).repeat(additionRepeatTimes);

  if(options.hasOwnProperty = 'addition'){
    string = string.slice(0, string.length - additionSeparator.length)
  }

  

  for (let i = 0; i < repeatTimes; i++) {
    res.push(string);
  }

  return res.join(separator);
}

module.exports = {
  repeater
};
