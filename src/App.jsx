import Student from "./Student";
import List from "./List";
import "./App.css";

function App() {
  return (
    <>
      <Student name="Anushan" age={46} isStudent={false} />
      <hr />
      <Student name="Nisha" age={42} isStudent={false} />
      <hr />
      <Student name="Saseni" age={15} isStudent={true} />
      <hr />
      <Student name="Dilu" age={13} isStudent={true} />
      <hr />
      <Student />
      <br />
      <br />
      <List />
    </>
  );
}

export default App;
