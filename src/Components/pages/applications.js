import React, { Component } from 'react';
import './applications.css';
import {Link} from "react-router-dom";

class Applications extends Component {
    render() {
        return (
            <div id="app-page-main">
                <div className='application-header'>
                    Applications
                </div>
                <div id={"button-holder"}>
                    <button type="button"><Link to="/application">New Application</Link></button>
                    <button type="button">Delete Application</button>
                </div>
            </div>

        )
    }
}

export default Applications;