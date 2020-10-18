import React from 'react'

const Todo = ({text, completed, onChange, deleteTodo}) => (
    <div>
        <input type="checkbox" checked={completed} onChange={onChange} />
        <span style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {text}
        </span>
        <button onClick={deleteTodo} >x</button>
    </div>
)

export default Todo
