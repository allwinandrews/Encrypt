import React from "react";

export default function CommonForm(props) {
  const {
    inputOne,
    inputTwo,
    value,
    textAreaOnChange,
    one,
    two,
    calculate
  } = props;
  return (
    <form>
      <div className="field half first">
        <input
          onChange={event => {
            inputOne(parseInt(event.target.value));
          }}
          type="number"
          placeholder="Type key number"
        />
      </div>
      <div className="field half">
        <input
          onChange={event => inputTwo(event.target.value)}
          placeholder="Type your code"
          type="text"
        />
      </div>
      <div className="field">
        <textarea
          value={value ? value : "Message"}
          onChange={() => textAreaOnChange(value)}
          rows="6"
        ></textarea>
      </div>
      <ul className="actions">
        <li>
          {!(one === 0 || two === "") ? (
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
  );
}
