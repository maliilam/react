import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import EditTodo from './components/EditTodo';
import About from './components/pages/About'
import axios from 'axios';

class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => {
        this.setState({todos: res.data})
      })
  }

  markComplete = (todo) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      ...todo, completed: !todo.completed
    }).then(res => this.setState({
      todos: this.state.todos.map(td => {
        if (td.id === todo.id) {
          td.completed = res.data.completed
        }
        return td;
      })
    }))
  }
  
  addTodo = (todo) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: todo.title,
      completed: false
    }).then(res => this.setState({ todos : 
      [...this.state.todos, res.data]}))
  }

  editTodo = (todo) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo).then(res => this.setState({
      todos: this.state.todos.map(td => {
        return td.id === todo.id ? res.data : td;
      })
    }))
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]}))
  }
  
  render() {
    return (
      <Router>
        <div className="App" style={{width:'50%'}}>
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <EditTodo editTodo={this.addTodo}/>
              <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete}
                editTodo={this.editTodo}
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
