import React, { Component } from 'react';
import './applications.css';

class Applications extends Component {
    render() {
        return (
            <div className="app-page">
                <div className='application-header'>
                    Applications
                </div>
                <div>
                    <button type="button" className={"button-app"}>New Application</button>
                    <button type="button" className={"button-app"}>Delete Application</button>
                </div>
            </div>

        )
    }
}

export default Applications;