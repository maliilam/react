import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

class App extends Component{
  state = {
    todos: [
      {
        id: uuid(),
        title: "aaa",
        completed: false
      },
      {
        id: uuid(),
        title: "bbb",
        completed: true
      },
      {
        id: uuid(),
        title: "ccc",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo =>
      todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  
  render() {
    return (
      <div className="App" style={{width:'50%'}}>
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <header className="App-header">
          <Todos todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </header>
      </div>
    );  
  }
}

export default App;
