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
            <div style={{color:'blue'}}>
                <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />
                <span style={this.getStyle()}>
                    {title}
                </span>
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

export default TodoItem
