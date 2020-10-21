import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo, updateTodo, deleteTodo } from '../actions'

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
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

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
