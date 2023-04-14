const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  if (typeof string !== 'string' || Number.isNaN(string*1) || string*1 > 15 || string*1<=0) {return false}
  return Math.ceil(HALF_LIFE_PERIOD/Math.LN2 * Math.log(MODERN_ACTIVITY/string*1));
}

module.exports = {
  dateSample
};
