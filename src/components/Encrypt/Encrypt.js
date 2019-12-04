import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import { initialize } from "../actions/actions";

export default function Encrypt(props) {
  const { toggle, button } = props;

  const [keyNum, setKeyNum] = useState(0);
  const [message, setMessage] = useState("");
  const [curNum, setCurNum] = useState([]);
  const [alpha, setAlpha] = useState([]);

  const e_convertToWords = (keyNum, message) => {
    var words = message.split(" ");
    return words;
  };

  const twistArray = () => {
    var words = e_convertToWords(keyNum, message);
  };

  useEffect(() => {
    const { current_num, alphas } = initialize();
    setCurNum(current_num);
    setAlpha(alphas);
  }, [keyNum]);

  return (
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
              onChange={event => {
                setMessage(event.target.value);
              }}
              type="text"
              placeholder="Type your message"
            />
          </div>
          <div className="field">
            <textarea disabled rows="6" placeholder="Code"></textarea>
          </div>
          <ul className="actions">
            <li>
              {!(keyNum === 0 || message === "") ? (
                <input
                  value="encrypt"
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
  );
}
