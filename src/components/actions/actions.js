// Initializes the array of numbers and alphabets
export const initialize = () => {
  var current_num = [],
    alphas = [];
  for (var i = 1; i < 27; i++) current_num.push(i);
  for (i = 10; i < 36; i++) alphas.push(i.toString(36));
  return { current_num, alphas };
};

// converts a dict containing alphas according to the numbers
export const convertToDict = (new_num, alpha) => {
  var dict = [];
  for (var i = 0; i <= 25; i++)
    dict.push({
      key: new_num[i],
      value: alpha[i]
    });
  return dict;
};

// Splits a word using ',' and converts to number array
export const convertWordsToArrays = letter_num => {
  var letter = [];
  for (var i in letter_num) {
    letter.push(parseInt(letter_num[i]));
  }
  return letter;
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

//Checks if the letter(number) is in the dict
export const checkInDict = (letter, dict) => {
  for (var i in dict)
    if (dict[i].key === letter) {
      return dict[i].value;
    }
};

//Converts array of numbers,array numbers into array of strings
export const convertToWords = (words_num, dict) => {
  var final = [];
  for (var i in words_num)
    if (!Array.isArray(words_num[i]))
      final.push(" " + checkInDict(words_num[i], dict) + " ");
    else {
      for (var j in words_num[i])
        final.push(checkInDict(words_num[i][j], dict));
      final.push(" ");
    }

  return final.join("");
};

// //Converts array of numbers,array numbers into array of strings
// export const convertToWords = (words_num, dict) => {
//   var final = [];
//   for (var i in words_num)
//     if (!Array.isArray(words_num[i]))
//       final.push(" " + checkInDict(words_num[i], dict) + " ");
//     else {
//       for (var j in words_num[i])
//         final.push(checkInDict(words_num[i][j], dict));
//       final.push(" ");
//     }

//   return final.join("");
// };