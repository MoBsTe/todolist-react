import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersistItem from './components/PersistItem';
import TodoForm from './components/TodoForm';
import Todoitem from './components/Todoitem';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    let newTodos;
    
    if (Array.isArray(text)) {
      newTodos = text.map((task, index) => ({
        id: todos.length > 0 ? todos[0].id + index + 1 : index + 1,
        text: task,
        completed: false,
        important: false,
      }));
      setTodos([...newTodos, ...todos]);
    } else {
      const id = todos.length > 0 ? todos[0].id + 1 : 1;
      const todo = { id, text, completed: false, important: false };
      setTodos([todo, ...todos]);
    }
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
    <div className='main'>
      <Header/>
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className='buttons'>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <hr />
      <PersistItem/>
      {filteredTodos.map((item) => (
        <Todoitem item={item} key={item.id} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
    </div>
        
        </div>
  );
}

export default App;
