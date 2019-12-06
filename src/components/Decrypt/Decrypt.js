import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import {
  initialize,
  twistArray,
  convertToWordArray,
  convertToWords
} from "../actions/actions";
import CommonForm from "../CommonForm/CommonForm";

export default function Decrypt(props) {
  const { toggle, button } = props;
  const [keyNum, setKeyNum] = useState(0);
  const [curNum, setCurNum] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [code, setCode] = useState("");
  const [final, setFinal] = useState("");

  //Sets the decrypted code by rearranging the array
  const calculate = () => {
    var { words, dict } = twistArray(curNum, keyNum, alpha, code);
    words = convertToWordArray(words);
    setFinal(convertToWords(words, dict));
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
          inputTwo={setCode}
          value={final ? final : "Message"}
          textAreaOnChange={setFinal}
          one={keyNum}
          two={code}
          buttonText={"decrypt"}
          calculate={calculate}
        />
      </div>
    </div>
  );
}
