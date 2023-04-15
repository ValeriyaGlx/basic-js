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
function deleteDigit(num) {
  const arr = [];
  const numArr = (num+'').split('')
  for (let i of numArr){
   let a = (num+'').replace(i, '')
    arr.push(a)
  }
  return Math.max(...arr)
  }




module.exports = {
  deleteDigit
};
