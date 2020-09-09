const CustomError = require("../extensions/custom-error");

module.exports = transform = (arr) => {
  const controlSequencesTypes = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];

  const isOutOfRange = (arr, index) => index >= 0 && index < arr.length;

  const controlSequencesMap = {
    "--discard-next": ([...arr], position) => {
      if (isOutOfRange(arr, position + 1)) {
        delete arr[position + 1];
      }
      delete arr[position];
      return arr;
    },
    "--discard-prev": ([...arr], position) => {
      if (isOutOfRange(arr, position - 1)) {
        delete arr[position - 1];
      }
      delete arr[position];
      return arr;
    },
    "--double-next": ([...arr], position) => {
      if (arr[position + 1] !== "undefined")
        arr.splice(position, 1, arr[position + 1]);
      else delete arr[position];
      return arr;
    },
    "--double-prev": ([...arr], position) => {
      if (arr[position - 1] !== "undefined")
        arr.splice(position, 1, arr[position - 1]);
      else delete arr[position];
      return arr;
    },
  };
  return arr
    .reduce(
      (resultArray, element, index) =>
        controlSequencesTypes.find((el) => el === element)
          ? controlSequencesMap[element](resultArray, index)
          : resultArray,
      arr
    )
    .filter((el) => el !== undefined);
};

