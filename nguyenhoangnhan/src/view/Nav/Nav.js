import React from "react";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        return (
            // <div className="topnav">
            //     <a className="active" href="#home">Home</a>
            //     <a href="#about">About</a>
            //     <a href="#services">Services</a>
            //     <a href="#blog">Blog</a>
            //     <a href="#portfolio">Portfolio</a>
            //     <a href="#page">Page</a>
            //     <ul className="dropdown">
            //         <li><a href="#">Team</a></li>
            //         <li><a href="#">Team Details</a></li>
            //         <li><a href="#">Career</a></li>
            //         <li><a href="#">Career Details</a></li>
            //         <li><a href="#">Blog Details</a></li>
            //         <li><a href="#">Pricing</a></li>
            //         <li><a href="#">FAQ's</a></li>
            //     </ul>
            //     <a href="#contract">Contract</a>
            // </div>
            <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Pages</a>
                        <div className="dropdown">
                            <ul>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Team Details</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Career Details</a></li>
                                <li><a href="#">Blog Details</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ's</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Contract</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;