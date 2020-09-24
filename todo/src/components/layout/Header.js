import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h3>Todo List</h3>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center'
}

const linkStyle = {
    color: 'yellow',
    margin: '5px'
}
export default Header;