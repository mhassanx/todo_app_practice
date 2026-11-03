import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  let [todos, setTodos] = useState([{ id: uuidv4(), task: "sample todo" }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (!newTodo.trim()) {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: newTodo }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log("deleted");
    setTodos(todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos(() =>
      todos.map((prevTodos) => {
        return {
          ...prevTodos,
          task: prevTodos.task.toUpperCase(),
        };
      }),
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo,
      ),
    );
  };
  return (
    <div>
      <h1>Todo App</h1>

      <input
        placeholder="Enter tasks to do"
        type="text"
        value={newTodo}
        onChange={updateTodoValue}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addNewTask();
          }
        }}
      />
      <button onClick={addNewTask}>Add Todo</button>

      <br />
      <h3>Tasks to do</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.task}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => upperCaseOne(todo.id)}>
                UpperCase one
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
