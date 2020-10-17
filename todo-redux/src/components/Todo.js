import React from 'react'

const Todo = ({text, completed, onChange}) => (
    <div>
        <input type="checkbox" checked={completed} onChange={onChange} />
        {text} - {String(completed)}
    </div>
)

export default Todo
