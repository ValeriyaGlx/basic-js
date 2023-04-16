const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let part of domains) {
    let newPart = part.split(".").reverse();

    let el = "";
    for (key in newPart) {
      el += "." + newPart[key];
      console.log(el);

      if (obj[el]) {
        obj[el]++;
      } else {
        obj[el] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
