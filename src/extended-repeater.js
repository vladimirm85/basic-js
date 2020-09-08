const CustomError = require("../extensions/custom-error");

module.exports = repeater = (string, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) => {
  const str = typeof string === "string" ? string : String(string);
  const realSeparator = separator ? separator : "+";
  const additionString = typeof addition !== "undefined" ? String(addition) : "";
  const realAdditionSeparator = additionSeparator ? additionSeparator : "|";

  const repeat = (str, separator, repeatTimes) =>
    (separator + str).repeat(repeatTimes);
  const addAddition = (addition, separator, repeatTimes) =>
    repeatTimes
      ? addition + repeat(addition, separator, repeatTimes - 1)
      : addition;

  return (
    str +
    addAddition(additionString, realAdditionSeparator, additionRepeatTimes) +
    (repeatTimes
      ? repeat(
        str +
        addAddition(
          additionString,
          realAdditionSeparator,
          additionRepeatTimes
        ),
        realSeparator,
        repeatTimes - 1
      )
      : "")
  );
};
