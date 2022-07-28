const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  if (numArray.length === undefined) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }

  return sum;
};

const multiply = function (numArray) {
  let sum = 1;

  numArray.forEach((element) => {
    sum *= element;
  });

  return sum;
};

const power = function (num1, numToPower) {
  return num1 ** numToPower;
};

const factorial = function (numToFactor) {
  if (numToFactor == 0 || numToFactor == 1) {
    return 1;
  }

  let result = numToFactor;

  for (let i = numToFactor - 1; i >= 1; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
