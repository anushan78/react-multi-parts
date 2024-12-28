import { useState } from "react";

function SetName() {
  const [name, setName] = useState("");
  const handleClick = (nameValue) => setName(nameValue);
  return (
    <>
      <p>Hello {name}</p>
      <button onClick={() => handleClick("Anush")}>Click Me</button>
    </>
  );
}

export default SetName;
