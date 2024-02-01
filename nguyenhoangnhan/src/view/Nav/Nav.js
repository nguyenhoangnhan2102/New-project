import React from "react";
import './Nav.scss';
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="nav">
                    <ul>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="checkbtn">
                            <i className="fa fa-bars"></i>
                        </label>
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
                <div>
                    HOME
                </div>
            </>
        )
    }
}

export default Nav;