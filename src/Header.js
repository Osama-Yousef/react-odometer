import React from 'react';

class Header extends React.Component {
    // constructor
    render () {
        return (
        <>
        <h1>Odometer</h1>
        <p>{this.props.greeting}</p>
        </>
        )
    }
}

export default Header;