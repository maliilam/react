import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

export default class Todo extends Component {
    static propTypes = {
        text: PropTypes.string,
        completed: PropTypes.bool,
        toggleTodo: PropTypes.func,
        updateTodo: PropTypes.func,
        deleteTodo: PropTypes.func
    }

    state = {
        editing: false,
        text: this.props.text
    }

    startEdit = () => {
        this.setState({
            editing: true
        })
    }

    updateText = event => {
        this.setState({
            text: event.target.value
        })
    }

    updateTodo = () => {
        this.setState({
            editing: false
        })
        this.props.updateTodo(this.state.text)
    }

    render() {
        const { text, completed, toggleTodo, deleteTodo } = this.props
        return (
            <div>
                {this.state.editing
                    ? <React.Fragment>
                        <input type="text" value={this.state.text} onChange={this.updateText} />
                        <button onClick={this.updateTodo} >update</button>
                      </React.Fragment>
                    : <div className="todo-row">
                        <input type="checkbox" checked={completed} onChange={toggleTodo} />
                        <div 
                            style={{textDecoration: completed ? 'line-through' : 'none','overflow-wrap': 'anywhere'}}
                            onClick={this.startEdit}
                        >
                            {text}
                        </div>
                        <div>
                            <button onClick={deleteTodo} >x</button>
                        </div>
                      </div>
                }
            </div>
        )
    }
}
