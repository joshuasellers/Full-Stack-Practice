import React, { Component } from 'react';
import './applications.css';
import {Link} from "react-router-dom";

class Applications extends Component {
    render() {
        return (
            <div className="app-page">
                <div className='application-header'>
                    Applications
                </div>
                <div>
                    <button type="button" className={"button-app"}><Link to="/application">New Application</Link></button>
                    <button type="button" className={"button-app"}>Delete Application</button>
                </div>
            </div>

        )
    }
}

export default Applications;