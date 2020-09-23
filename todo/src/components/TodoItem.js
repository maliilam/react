import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return  {
            padding: '10px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={{color:'blue', width:'50%'}}>
                <input type="checkbox" checked={completed} 
                    onChange={this.props.markComplete.bind(this, id)} />
                <span style={this.getStyle()}>
                    {title}
                </span>
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'lightgray'
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
