import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditTodo extends Component {
    state = {
        title: ""
    }

    onChange = (e) => this.setState({
        title: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editTodo({...this.props.todo, title: this.state.title})
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input 
                    type='text' 
                    name='title' 
                    style={{ flex: '10'}}
                    placeholder='Add todo ...'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}


EditTodo.propTypes = {
    editTodo: PropTypes.func.isRequired    
}
  
const formStyle = {
    display: 'flex',
    flexDirection: 'row'    
}