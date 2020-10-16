import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
    <ul>
        {(todos || []).map(todo => (
            <Todo todo />
        ))}
    </ul>
)

export default TodoList
