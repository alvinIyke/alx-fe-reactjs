import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn Coding', completed: false },
  { id: 2, text: 'Build Projects', completed: false },
  { id: 3, text: 'Do laundry', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        (link unavailable) === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => (link unavailable) !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={(link unavailable)}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle((link unavailable))}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleDelete((link unavailable))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
