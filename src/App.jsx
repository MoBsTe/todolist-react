import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todoitem from './components/Todoitem';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // Добавляем состояние для фильтрации

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed === true;
    } else if (filter === 'active') {
      return todo.completed === false;
    }
    return true; // Все задачи, если выбран фильтр "All"
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className='buttons'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <hr />
      {filteredTodos.map((item) => (
        <Todoitem item={item} key={item.id} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
  );
}

export default App;
