const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
  if (isNaN(Math.abs(Date.parse(data)))) {
    throw new Error("Invalid date!");
  }
  const season = data.getMonth();

  const obj = {
    winter: ["winter", 0, 1, 11],
    fall: ["fall", 8, 9, 10],
    spring: ["spring", 2, 3, 4],
    summer: ["summer", 5, 6, 7],
  };

  const a = Object.values(obj).filter((el) => el.some((el) => el === season));

  return a.join(",").split(",")[0];
}

module.exports = {
  getSeason
};
