const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  let counter = 1;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      counter += 1;
    } else {
      res += counter + s[i];
      counter = 1;
    }
  }
  return res.replace(/1/g, "");
}

module.exports = {
  encodeLine
};
