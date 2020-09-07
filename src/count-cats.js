const CustomError = require("../extensions/custom-error");

module.exports = countCats = (matrix) =>
  matrix.reduce(
    (a, arr) => a + arr.reduce((a, str) => a + (str === "^^" ? 1 : 0), 0),
    0
  );

