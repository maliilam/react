import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import About from './components/About'

function App() {
  return (
    <Router>
      <NavLink exact to='/'>Hmoe</NavLink>&nbsp;&nbsp;
      <NavLink exact to='/about'>About</NavLink>
      <Route exact path="/">
        <h4>Todo List</h4>
        <Filter />
        <AddTodo />
        <TodoList />
      </Route>
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
