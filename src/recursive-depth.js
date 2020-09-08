const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    const depthArray = arr.reduce((a, el) => {
      if (Array.isArray(el)) a.push(this.calculateDepth(el))
      return a;
    },[0])
    return Math.max.apply(null, depthArray) + 1
  }
};
