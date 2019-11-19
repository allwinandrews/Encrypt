import React, { useEffect, useState } from "react";
import { Input, Button } from "reactstrap";

export default function App() {
  const [keyNum, setKeyNum] = useState(0);
  const [position, setPosition] = useState(0);
  const [curNum, setCurNum] = useState([]);
  const [newNum, setNewNum] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [code, setCode] = useState("");
  const [codeDict, setCodeDict] = useState([]);
  const [final, setFinal] = useState("");

  var current_num = [],
    alphas = [],
    toattach,
    dict = [],
    new_num = [],
    words_num,
    letter_num,
    words = [];

  const convertToDict = new_num => {
    for (var i = 0; i <= 25; i++)
      dict.push({
        key: new_num[i],
        value: alpha[i]
      });
    return dict;
  };

  const convertWordsToArrays = letter_num => {
    var letter = [];
    for (var i in letter_num) {
      letter.push(parseInt(letter_num[i]));
    }
    return letter;
  };

  const convertToWordArray = words_num => {
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

  const checkInDict = letter => {
    for (var i in dict) if (dict[i].key === letter) return dict[i].value;
  };

  const convertToWords = words_num => {
    var final = [];
    for (var i in words_num)
      if (!Array.isArray(words_num[i]))
        final.push(" " + checkInDict(words_num[i]) + " ");
      else {
        for (var j in words_num[i]) final.push(checkInDict(words_num[i][j]));
        final.push(" ");
      }
    return final.join("");
  };

  const twistArray = () => {
    setPosition(curNum.indexOf(keyNum));
    current_num = curNum;
    toattach = current_num.splice(0, current_num[curNum.indexOf(keyNum) - 1]);
    new_num = current_num.concat(toattach);
    setNewNum(new_num);
    dict = convertToDict(new_num);
    setCodeDict(dict);
    words_num = code.split(" ");
    words_num = convertToWordArray(words_num);
    setFinal(convertToWords(words_num));
  };

  const initialize = () => {
    for (var i = 1; i < 27; i++) current_num.push(i);
    setCurNum(current_num);
    for (i = 10; i < 36; i++) alphas.push(i.toString(36));
    setAlpha(alphas);
  };

  useEffect(() => {
    initialize();
  }, [keyNum, code]);

  return (
    <>
      <Input
        onChange={event => {
          setKeyNum(parseInt(event.target.value));
        }}
        placeholder="Type key number"
        type="number"
      />
      <Input
        onChange={event => setCode(event.target.value)}
        placeholder="Type your code"
        type="text"
      />
      {!(keyNum === 0 || code === "") ? (
        <Button onClick={twistArray}>encrypt</Button>
      ) : (
        ""
      )}
      <div>{final}</div>
    </>
  );
}
