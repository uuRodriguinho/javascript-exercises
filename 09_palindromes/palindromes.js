const palindromes = function (word) {
  let newWord = "";
  let result;
  let currentWord;
  let toStrip = [];

  for (let i = word.length - 1; i >= 0; i--) {
    currentWord = word[i];
    // used this because a ! or any non char i thin is always a ! being lowerCase or not
    // and chars are different, A != a = true, ! != !, false
    if (currentWord.toUpperCase() != currentWord.toLowerCase()) {
      newWord += word[i];
    } else {
      toStrip += word[i];
      continue;
    }
  }

  for (let i = 0; i < toStrip.length; i++) {
    word = word.replace(toStrip[i], "");
  }

  console.log(`newWord: ${newWord}\ntoSTrip: ${toStrip}\nword: ${word}`);

  if (word.toLowerCase() === newWord.toLowerCase()) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
