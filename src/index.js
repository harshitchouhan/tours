import ReactDom from "react-dom";

function Greetings() {
  return <h4>React Boilerplate</h4>;
}

ReactDom.render(<Greetings></Greetings>, document.getElementById("root"));
