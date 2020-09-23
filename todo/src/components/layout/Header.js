import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h3>Todo List</h3>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center'
}
export default Header;