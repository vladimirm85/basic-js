const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam = (members) =>
  !Array.isArray(members) || !members.length
    ? false
    : [
      ...members.reduce(
        (a, str) =>
          a + (typeof str === "string" ? str.trim()[0].toUpperCase() : ""),
        ""
      ),
    ]
      .sort()
      .join("");
