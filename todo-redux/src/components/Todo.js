import React from 'react'

const Todo = ({title, completed}) => (
    <li>
        {title} - {completed}
    </li>
)

export default Todo
