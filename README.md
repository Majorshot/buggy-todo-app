# Fixed issues

The following bugs were found and fixed in the project source so the app loads and CRUD actions work as intended:

## todosSlice.js

  - Fixed the incorrect fetch endpoint: changed `https://jsonplaceholder.typicode.com/todoz` to `https://jsonplaceholder.typicode.com/todos`.
  - Added missing `await` for the GET request so `response.data` is available.
  - Updated `fetchTodos.fulfilled` to populate `state.items = action.payload` and set `state.status = 'succeeded'`.
  - Implemented `deleteTodo.fulfilled` to remove the deleted item from `state.items`.

## App.jsx
  - Fixed `handleAdd` to dispatch `addTodo(title)` instead of `deleteTodo(title)`.
  - Replaced the placeholder `TodoList` (which returned `null`) with a component that renders `todos` from state and provides a Delete button that dispatches `deleteTodo(id)`.
