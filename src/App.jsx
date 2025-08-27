import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo } from './todosSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const title = prompt('Enter todo:');
    if (title) {
      dispatch(deleteTodo(title));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>My Todo App</h2>
      <button onClick={handleAdd}>Add Todo</button>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

function TodoList() {
  return null;
}

export default App;
