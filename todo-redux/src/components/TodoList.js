import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({ todos }) => {
    console.log("todos:", todos)
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.text}-{String(todo.completed)}-{todo.id}</div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList)
