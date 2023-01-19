import React, { useState } from "react";


const TodoInput = ({ onAddTodo}) => {
    const [todo, setTodo] = useState("");
   
    

    fetch("http://localhost:9292/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        body:JSON.stringify({
            item: todo,
            importance: importance,
        
        }),

    })
    .then((r) => r.json())
    .then(newTodo => {
        onAddTodo(newTodo)
        setTodo("/")
    
    })

    return (
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={newTodo}>
          Add
        </button>
      </div>
    );
  };
  
  export default TodoInput;