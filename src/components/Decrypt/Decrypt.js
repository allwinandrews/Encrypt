import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import {
  initialize,
  twistArray,
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
                value={final ? final : "Message"}
                onChange={() => setFinal(final)}
                rows="6"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                {!(keyNum === 0 || code === "") ? (
                  <input
                    value="decrypt"
                    className="button alt"
                    type="button"
                    onClick={calculate}
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
