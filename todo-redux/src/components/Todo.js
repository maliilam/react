import React from 'react'

const Todo = ({text, completed}) => (
    <li>
        {text} - {String(completed)}
    </li>
)

export default Todo
