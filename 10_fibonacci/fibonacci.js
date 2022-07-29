const fibonacci = function (number) {
  // check if it is a negative number
  if (number < 0) {
    return "OOPS";
  }
  // check if it is a string
  if (typeof number == "string") {
    number = parseInt(number);
  }

  let sequence = [1, 1];
  // debugging
  // console.log(`sequence: ${sequence}\nsequenceLength: ${sequence.length}`);

  for (let i = sequence.length; i < number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  // debugging
  // console.log(`sequence: ${sequence}`);
  // console.log(`sequence -2: ${sequence[sequence.length - 2]}`);

  return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
