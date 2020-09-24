import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
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
      <Router>
        <div className="App" style={{width:'50%'}}>
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );  
  }
}

export default App;
