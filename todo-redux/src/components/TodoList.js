import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo, deleteTodo } from '../actions'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    {...todo} 
                    onChange={() => toggleTodo(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
