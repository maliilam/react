import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {    
    markComplete = (e) => {
      this.props.markComplete(e)
    }

    editTodo = (e) => {
      this.props.editTodo(e)
    }

    delTodo = (e) => {
      this.props.delTodo(e)
    }

    render() {
        return this.props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} 
            markComplete={this.markComplete}
            editTodo={this.editTodo}
            delTodo={this.delTodo}
          />
        ))
    }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
