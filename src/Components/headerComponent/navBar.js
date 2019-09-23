import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navStyle.css';

class NavBar extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/applications">Applications</Link></li>
                <li><a href="#to-dos">To-Dos</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        )
    }
}
export default NavBar;

