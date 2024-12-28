function SmallButton() {
  const handleClick = (name) => console.log(`${name} have a good day`);

  return <button onClick={() => handleClick("Anush")}>Click</button>;
}

export default SmallButton;
