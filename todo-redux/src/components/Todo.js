import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

export default class Todo extends Component {
    static propTypes = {
        title: PropTypes.string,
        completed: PropTypes.bool,
        toggleTodo: PropTypes.func,
        updateTodo: PropTypes.func,
        deleteTodo: PropTypes.func
    }

    state = {
        editing: false,
        title: this.props.title
    }

    startEdit = () => {
        this.setState({
            editing: true,
            title: this.props.title
        })
    }

    updateTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    updateTodo = () => {
        this.setState({
            editing: false
        })
        this.props.updateTodo(this.state.title)
    }

    cancelEdit = () => {
        this.setState({
            editing: false,
            title: ""
        })
    }

    render() {
        const { title, completed, toggleTodo, deleteTodo } = this.props
        return (
            <div>
                {this.state.editing
                    ? <div className="todo-editing">
                        <input type="checkbox" checked={completed} disabled/>
                        <input type="text" value={this.state.title} onChange={this.updateTitle} />
                        <button onClick={this.updateTodo} >update</button>
                        <button onClick={this.cancelEdit} >cancel</button>
                      </div>
                    : <div className="todo-row">
                        <input type="checkbox" checked={completed} onChange={toggleTodo} />
                        <div 
                            style={{textDecoration: completed ? 'line-through' : 'none','overflowWrap': 'anywhere'}}
                            onClick={this.startEdit}
                        >
                            {title}
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
