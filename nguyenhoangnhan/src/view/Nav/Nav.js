import React from "react";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">About</a>
                <a href="#contact">Services</a>
                <a href="#about">Blog</a>
                <a href="#about">Portfolio</a>
                <a href="#about">Page</a>
                <a href="#about">Contract</a>
            </div>
        )
    }
}

export default Nav;