import { useEffect, useRef } from "react";

function DemoRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default DemoRef;
