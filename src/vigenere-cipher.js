const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }
  getVigenereCode = (char) => char.toUpperCase().charCodeAt(0) - 65;
  getEncryptedChar = (char, keyChar) =>
    String.fromCharCode(
      ((this.getVigenereCode(char) + this.getVigenereCode(keyChar)) % 26) + 65
    );
  getDecryptedChar = (char, keyChar) =>
    String.fromCharCode(
      ((this.getVigenereCode(char) + 26 - this.getVigenereCode(keyChar)) % 26) +
      65
    );
  getSplitMessage = (message) =>
    this.modification ? [...message] : [...message].reverse();
  getResultMessage = (splitMessage, key, operation) => {
    let keyAcc = key.length;
    return splitMessage.reduce(
      (acc, char) =>
        /^[a-z]$/i.test(char)
          ? acc + operation(char, key[keyAcc++ % key.length])
          : acc + char,
      ""
    );
  };
  encrypt = (message, key) => {
    if (!message || !key) throw new Error();
    return this.getResultMessage(this.getSplitMessage(message), key, this.getEncryptedChar);
  };
  decrypt(message, key) {
    if (!message || !key) throw new Error();
    return this.getResultMessage(this.getSplitMessage(message), key, this.getDecryptedChar);
  }
}

module.exports = VigenereCipheringMachine;
