const ftoc = function (tempf) {
  // round with n.toFixed(1)
  // but it returns a string
  // so convert string into number with Number()

  tempf = (tempf - 32) * (5 / 9);
  tempf = tempf.toFixed(1);
  tempf = Number(tempf);
  return tempf;
};

const ctof = function (tempc) {
  // round with n.toFixed(1)
  // but it returns a string
  // so convert string into number with Number()

  tempc = tempc * (9 / 5) + 32;
  tempc = tempc.toFixed(1);
  tempc = Number(tempc);
  return tempc;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
