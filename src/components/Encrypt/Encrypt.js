import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import {
  initialize,
  twistArray,
  encryptWordsToNumberArray,
  convertToCode,
  convertToSentenceCode,
  encryptSentencesToWords
} from "../actions/actions";
import CommonForm from "../CommonForm/CommonForm";

export default function Encrypt(props) {
  const { toggle, button } = props;

  const [keyNum, setKeyNum] = useState(0);
  const [message, setMessage] = useState("");
  const [curNum, setCurNum] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [final, setFinal] = useState("");

  const calculate = () => {
    var words_to_num_array = [],
      char_array = [],
      { words, dict, sentences } = twistArray(
        curNum,
        keyNum,
        alpha,
        message.toLowerCase()
      );
    if (sentences.length) {
      sentences = encryptSentencesToWords(sentences);
      for (var i in sentences) {
        char_array.push(encryptWordsToNumberArray(sentences[i]));
      }
      for (i in char_array) {
        for (var j in char_array[i]) {
          if (j === `${char_array[i].length - 1}`) {
            words_to_num_array.push(
              convertToSentenceCode(char_array[i][j], dict, true) + "."
            );
          } else {
            words_to_num_array.push(
              convertToSentenceCode(char_array[i][j], dict) + " "
            );
          }
        }
      }
      setFinal(words_to_num_array.join(""));
    } else {
      words = encryptWordsToNumberArray(words);
      setFinal(convertToCode(words, dict));
    }
  };

  useEffect(() => {
    const { current_num, alphas } = initialize();
    setCurNum(current_num);
    setAlpha(alphas);
  }, []);

  return (
    <div id="enrypt">
      <div className="inner">
        <h3>Encrypto</h3>
        <Button onClick={toggle}>{button}</Button>
        <CommonForm
          inputOne={setKeyNum}
          inputTwo={setMessage}
          value={final ? final : "Code"}
          textAreaOnChange={setFinal}
          one={keyNum}
          two={message}
          buttonText={"encrypt"}
          calculate={calculate}
        />
      </div>
    </div>
  );
}
