const sumAll = function (num1, num2) {
  let sum = num1 + num2;
  let smaller;
  let bigger;

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  if (num1 < num2) {
    smaller = num1;
    bigger = num2;
  } else {
    smaller = num2;
    bigger = num1;
  }

  for (let i = smaller + 1; i < bigger; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
