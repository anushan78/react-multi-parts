import { useState, useEffect } from "react";

function EffectTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `The count is in effect ${count}`;
  }, []);

  const handleClick = () => setCount((c) => c + 1);
  return (
    <>
      <p>{`State Count ${count}`}</p>
      <button onClick={handleClick}>Click Count</button>
    </>
  );
}

export default EffectTest;
