import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { requestGetTodos, toggleTodo, updateTodo, deleteTodo, Filters } from '../actions'

class TodoList extends Component {
    render() {
        const { todos, filter, requestGetTodos, toggleTodo, updateTodo, deleteTodo } = this.props
        
        const filterTodo = (todo) => {
            switch(filter) {
                case Filters.SHOW_COMPLETED:
                    return todo.completed === true
                case Filters.SHOW_ACTIVE:
                    return todo.completed === false
                default:
                    return true            
            }
        }

        return (
            <div>
                {todos.filter(todo => filterTodo(todo))
                    .map(todo => (
                    <Todo 
                        key={todo.id} 
                        {...todo} 
                        toggleTodo={() => toggleTodo(todo.id)}
                        updateTodo={text => updateTodo(todo.id, text)}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />
                ))}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    requestGetTodos: () => dispatch(requestGetTodos),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
