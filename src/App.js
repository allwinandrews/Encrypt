import React, { useEffect, useState } from "react";
import { Input, Button } from "reactstrap";

export default function App() {
  const [keyNum, setKeyNum] = useState(0);
  const [keyAlpha, setKeyAlpha] = useState("a");
  const [position, setPosition] = useState(0);
  const [oldNum, setOldNum] = useState([]);

  const current_num = [],
    new_num = [],
    alpha = [];

  useEffect(() => {
    for (var i = 1; i < 27; i++) current_num.push(i);
    setOldNum(current_num);
    for (i = 10; i < 36; i++) alpha.push(i.toString(36));
    console.log(oldNum);
    console.log(oldNum.indexOf(keyNum));
    // setPosition(current_num.indexOf(keyNum));
    // console.log(position);
  }, [keyNum]);

  return (
    <>
      <Input
        onChange={event => setKeyAlpha(event.target.value)}
        placeholder="Type key alphabet"
        type="text"
      />
      <Input
        onChange={event => {
          setKeyNum(parseInt(event.target.value));
        }}
        placeholder="Type key number"
        type="number"
      />
      <Input
        onChange={event => setKeyNum(event.target.value)}
        placeholder="Type your code"
        type="text"
      />
      <Button
        onClick={() => {
          console.log(keyNum);
          setPosition(current_num.indexOf(keyNum));
          console.log(position);
        }}
      >
        encrypt
      </Button>
      <div>keyNum={keyNum}</div>
      <div>position={position}</div>
    </>
  );
}
