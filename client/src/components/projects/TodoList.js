import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <h2>To‑Do List</h2>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add new task" value={input}
          onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTodo()} />
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

