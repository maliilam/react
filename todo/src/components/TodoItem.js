import React, { Component } from 'react'
import EditTodo from './EditTodo'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    state = {
        editing : false
    }

    getStyle = () => {
        return  {
            padding: '10px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    editTitle = () => {
        this.setState({
            editing: true
        })
    }

    editTodo = (e) => {
        this.setState({
            editing: false
        })
        this.props.editTodo(e)
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={{color:'blue'}}>
                <input type="checkbox" checked={completed} 
                    onChange={this.props.markComplete.bind(this, this.props.todo)} />
                {this.state.editing
                    ? <EditTodo todo={this.props.todo} editTodo={this.editTodo} /> 
                    : <span style={this.getStyle()} onClick={this.editTitle}>
                        {title}
                      </span>                    
                }
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    color: 'red',
    background: 'lightyellow',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
