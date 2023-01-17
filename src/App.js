import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
      <h1> Todo App </h1>
      <div className="input-wrapper">
        <input type="text" name="todo" placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }} />
        <button className="add-button">Add</button>
      </div>

    </div>
    
   
  );
};

export default App;
