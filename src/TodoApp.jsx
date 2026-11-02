import { useState } from "react";

export default function TodoApp() {
  let [todos, setTodos] = useState(["sample todo"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <h1>Todo App</h1>

      <input
        placeholder="Enter tasks to do"
        type="text"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Todo</button>

      <br />
      <h3>Tasks to do</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
