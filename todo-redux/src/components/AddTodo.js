import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                { /* Callback Refs:  https://reactjs.org/docs/refs-and-the-dom.html#callback-refs0 */ }
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

// https://react-redux.js.org/api/connect#connect
export default connect()(AddTodo)