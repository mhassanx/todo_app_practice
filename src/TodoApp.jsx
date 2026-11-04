import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  let [todos, setTodos] = useState([
    { id: uuidv4(), task: "sample todo", isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (!newTodo.trim()) {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: newTodo, isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log("deleted");
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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

  let updateTodoStatus = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    });
  };
  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <div className="todo-input-row">
        <input
          className="todo-input"
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
        <button className="primary-btn" onClick={addNewTask}>
          Add Todo
        </button>
      </div>

      <h3>Tasks to do</h3>
      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            <div className="task-content">
              <span className={`task-text ${todo.isDone ? "done" : ""}`}>
                {todo.task}
              </span>
            </div>
            <div className="task-actions">
              <button className="action-btn danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
              <button className="action-btn" onClick={() => upperCaseOne(todo.id)}>
                Uppercase one
              </button>
              <button className="action-btn status" onClick={() => updateTodoStatus(todo.id)}>
                {todo.isDone ? "Done" : "Mark done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="secondary-btn" onClick={upperCaseAll}>
        Uppercase all
      </button>
    </div>
  );
}
