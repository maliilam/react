import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodosList from './components/TodoList'

function App() {
  return (
      <div>
        <h4>Todo List</h4>
        <AddTodo />
        <TodosList />
      </div>
  );
}

export default App;
