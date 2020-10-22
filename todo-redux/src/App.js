import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

function App() {
  return (
      <div>
        <h4>Todo List</h4>
        <Filter />
        <AddTodo />
        <TodoList />
      </div>
  );
}

export default App;
