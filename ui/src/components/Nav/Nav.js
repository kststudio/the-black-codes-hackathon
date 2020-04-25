import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <div className="container">
                    <h1>The Black Code</h1>
                    <ul>
                        <li className="mobile-button"><a href="/">Menu</a></li>
                        <li><a href="/">Sign Out</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;