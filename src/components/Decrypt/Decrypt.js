import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import {
  initialize,
  convertToDict,
  convertToWordArray,
  convertToWords
} from "../actions/actions";

export default function Decrypt(props) {
  const { toggle, button } = props;
  const [keyNum, setKeyNum] = useState(0);
  const [curNum, setCurNum] = useState([]);
  const [alpha, setAlpha] = useState([]);
  const [code, setCode] = useState("");
  const [final, setFinal] = useState("");

  var dict = [],
    new_num = [],
    words_num;

  //Sets the decrypted code by rearranging the array
  const twistArray = () => {
    var current = curNum;
    var toattach = current.splice(0, current[curNum.indexOf(keyNum) - 1]);
    console.log(curNum.indexOf(keyNum) - 1);
    new_num = current.concat(toattach);
    dict = convertToDict(new_num, alpha);
    words_num = code.split(" ");
    words_num = convertToWordArray(words_num);
    setFinal(convertToWords(words_num, dict));
  };

  useEffect(() => {
    const { current_num, alphas } = initialize();
    setCurNum(current_num);
    setAlpha(alphas);
  }, [keyNum, code]);

  return (
    <>
      <div id="enrypt">
        <div className="inner">
          <h3>Encrypto</h3>
          <Button onClick={toggle}>{button}</Button>
          <form>
            <div className="field half first">
              <input
                onChange={event => {
                  setKeyNum(parseInt(event.target.value));
                }}
                type="number"
                placeholder="Type key number"
              />
            </div>
            <div className="field half">
              <input
                onChange={event => setCode(event.target.value)}
                placeholder="Type your code"
                type="text"
              />
            </div>
            <div className="field">
              <textarea
                disabled
                rows="6"
                placeholder={final ? final : "Message"}
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                {!(keyNum === 0 || code === "") ? (
                  <input
                    value="decrypt"
                    className="button alt"
                    type="button"
                    onClick={twistArray}
                  />
                ) : (
                  ""
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}
