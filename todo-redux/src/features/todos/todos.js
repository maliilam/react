import React from 'react'
import { useSelector } from 'react-redux'

export function TodosList() {
    const todos = useSelector(state => state.todos)
    const renderedTodos = todos.map(todo => (
        <div>
            {todo.title}-{todo.completed}
        </div>
    ))
    return (
        <div>
            {renderedTodos}
        </div>
    )
}
