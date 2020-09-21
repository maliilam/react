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
        return (
            <div style={{color:'blue'}}>
                <span style={this.getStyle()}>
                    {this.props.todo.title}
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
