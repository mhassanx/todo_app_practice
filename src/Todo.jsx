import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["sample todo"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = (todos) => setTodos((todos) => newTodo.trim());

  let updateTodoValue = (event) => {
    setTodos(event.target.value);
  };

  return (
    <>
      <h3>Todo App</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter todos"
        onChange={updateTodoValue}
        value={newTodo}
      />
      <button onClick={addNewTodo}>submit</button>
      <br />
      <br />
      <br />

      <h3>Your Todo's </h3>
      <br />
      <ul>
        <li>{todos}</li>
      </ul>
    </>
  );
}
