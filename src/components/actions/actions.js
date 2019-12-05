// Initializes the array of numbers and alphabets
export const initialize = () => {
  var current_num = [],
    alphas = [];
  for (var i = 1; i < 27; i++) current_num.push(i);
  for (i = 10; i < 36; i++) alphas.push(i.toString(36));
  return { current_num, alphas };
};

// converts a dict containing alphas according to the numbers
const convertToDict = (new_num, alpha) => {
  var dict = [];
  for (var i = 0; i <= 25; i++)
    dict.push({
      key: new_num[i],
      value: alpha[i]
    });
  return dict;
};

// Splits a word using ',' and converts to number array
const convertWordsToArrays = letter_num => {
  var letter = [];
  for (var i in letter_num) {
    letter.push(parseInt(letter_num[i]));
  }
  return letter;
};

//
const convertLetterToNumberArray = letter => {
  var letter_list = [];
  for (var i in letter) {
    letter_list.push(letter[i]);
  }
  return letter_list;
};

// Converts a array of strings into arrays of numbers
export const convertToWordArray = words_num => {
  var words = [],
    letter_num;
  for (var i = 0; i < words_num.length; i++) {
    if (words_num[i].length <= 2) {
      words.push(parseInt(words_num[i]));
    } else {
      letter_num = words_num[i].split(",");
      letter_num = convertWordsToArrays(letter_num);
      words.push(letter_num);
    }
  }
  return words;
};

//
export const encryptWordsToNumberArray = words => {
  var words_list = [],
    letter;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < 2) {
      words_list.push(words[i]);
    } else {
      letter = words[i].split("");
      letter = convertLetterToNumberArray(letter);
      words_list.push(letter);
    }
  }
  return words_list;
};

//Checks if the letter(number) is in the dict
const checkInDict = (letter, dict, encrypt) => {
  if (encrypt) {
    for (var i in dict) if (dict[i].value === letter) return dict[i].key;
  } else {
    for (i in dict) if (dict[i].key === letter) return dict[i].value;
  }
};

//Converts array of numbers,array numbers into array of strings
export const convertToWords = (words_num, dict) => {
  var result = [];
  for (var i in words_num)
    if (!Array.isArray(words_num[i]))
      result.push(" " + checkInDict(words_num[i], dict, false) + " ");
    else {
      for (var j in words_num[i])
        result.push(checkInDict(words_num[i][j], dict, false));
      result.push(" ");
    }

  return result.join("");
};

//
export const convertToCode = (words, dict) => {
  var result = [];
  for (var i in words)
    if (!Array.isArray(words[i])) {
      result.push(" " + checkInDict(words[i], dict, true) + " ");
    } else {
      for (var j in words[i]) {
        result.push(checkInDict(words[i][j], dict, true) + ",");
      }
      var last_char = result.pop();
      result.push(last_char.slice(0, -1) + "");
    }
  return result.join("");
};

//Sets the decrypted code by rearranging the array
export const twistArray = (curNum, keyNum, alpha, to_split) => {
  var current = curNum;
  var toattach = current.splice(0, current[curNum.indexOf(keyNum) - 1]);
  var new_num = current.concat(toattach);
  var dict = convertToDict(new_num, alpha);
  var words = to_split.split(" ");
  return { words, dict };
};
