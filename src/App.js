import React, { useState } from "react";

import Decrypt from "./components/Decrypt/Decrypt";
import Encrypt from "./components/Encrypt/Encrypt";

export default function App() {
  const [encrypt, setEncrypt] = useState(true);
  const [button, setButton] = useState("Change to Decrypt Mode");

  const toggle = () => {
    setEncrypt(!encrypt);
    if (encrypt) setButton("Change to Encrypt Mode");
    else setButton("Change to Decrypt Mode");
  };
  return (
    <>
      {encrypt ? (
        <Encrypt toggle={toggle} button={button} />
      ) : (
        <Decrypt toggle={toggle} button={button} />
      )}
    </>
  );
}
