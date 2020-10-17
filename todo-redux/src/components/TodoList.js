import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onChange={() => toggleTodo(todo.id)} />                
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
