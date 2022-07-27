const removeFromArray = function (array, ...numToRemove) {
  for (let i = 0; i < numToRemove.length; i++) {
    // i was trying to go for a loop but it wasn't quite right :/
    /* if (typeof numToRemove[i] == "string") {
      continue;
    } else if (i > array.lenght) {
      continue;
    } else {
      array.splice(numToRemove[i] - 1, 1);
    } */

    // serches the index of the value in the array
    // if the search don't find the value don't do nothing
    // if the value is greater than 0, remove it from the array
    let index = array.indexOf(numToRemove[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
