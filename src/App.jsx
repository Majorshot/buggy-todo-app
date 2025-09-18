import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, deleteTodo } from "./todosSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  function TodoList({ todos, onDelete }) {
    return (
      <>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const title = prompt("Enter todo:");
    if (title) {
      dispatch(addTodo(title));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h2>My Todo App</h2>
      <button onClick={handleAdd}>Add Todo</button>
      {status === "loading" && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        <TodoList todos={todos} onDelete={handleDelete} />
      </ul>
    </div>
  );
}

export default App;
