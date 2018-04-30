/**
 * Ensures the number has 2 digits.
 *
 * @param  {Number} number
 * @return {String}
 */
const pad = number => (number > 9 ? String(number) : '0' + number);

module.exports = {
  pad,
};
