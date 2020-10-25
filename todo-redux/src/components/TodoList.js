import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { getTodos, toggleTodo, updateTodo, deleteTodo, Filters } from '../actions'

class TodoList extends Component {
    componentDidMount() {
        const { getTodos } = this.props
        getTodos()
    }

    render() {
        const { todos, filter, toggleTodo, updateTodo, deleteTodo } = this.props
        
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
                        updateTodo={title => updateTodo(todo.id, title)}
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
    getTodos: () => getTodos(dispatch),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: (id, title) => dispatch(updateTodo(id, title)),
    deleteTodo: id => dispatch(deleteTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
