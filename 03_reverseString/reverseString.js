const reverseString = function (string) {
  // return string.split("").reverse().join(""); // most conventional way

  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }

  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
