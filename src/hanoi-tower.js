const CustomError = require("../extensions/custom-error");

module.exports = calculateHanoi = (disksNumber, turnsSpeed) => {
  const turns = 2**disksNumber - 1;
  const seconds = Math.floor(turns * 3600 / turnsSpeed)
  return {turns, seconds}
}
