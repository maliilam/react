import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: "aaa",
        completed: false
      },
      {
        id: 2,
        title: "bbb",
        completed: true
      },
      {
        id: 3,
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
  
  render() {
    return (
      <div className="App" style={{width:'50%'}}>
        <Header/>
        <AddTodo/>
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
