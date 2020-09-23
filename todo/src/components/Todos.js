import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {    
    markComplete = (e) => {
      this.props.markComplete(e)
    }

    render() {
        return this.props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} 
            markComplete={this.markComplete}/>
        ))
    }
}

Todos.prototypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
