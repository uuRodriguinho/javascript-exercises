const palindromes = function (word) {
  let newWord = "";
  let result;
  let currentWord;
  let toStrip = "";

  for (let i = word.length - 1; i >= 0; i--) {
    currentWord = word[i];
    if (currentWord.toUpperCase() != currentWord.toLowerCase()) {
      newWord += word[i];
    } else {
      toStrip += word[i];
      continue;
    }
  }

  word = word.replace(toStrip, "");

  console.log(`newWord: ${newWord}\ntoSTrip: ${toStrip}\nword: ${word}`);

  if (word === newWord) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
