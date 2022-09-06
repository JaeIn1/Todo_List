import { useState } from "react";
import buttonCSS from "./css/appModule.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [curTodo, setCurTodo] = useState([]);
  const [info, setInfo] = useState(true);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;
    setCurTodo((currentArray) => [...currentArray, todo]);
    setInfo((current) => !current);
    setTodo("");
  };
  return (
    <div className="App">
      <h1>To do List</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} type="text" onChange={onChange}></input>
        <button>Add</button>
        <ul>
          {curTodo.map((item, index) => (
            <span key={index}>
              <li className="button">
                {item}
                <button>✔</button>
                <button>❌</button>
              </li>
            </span>
          ))}
        </ul>
        hello
      </form>
    </div>
  );
}

export default App;
