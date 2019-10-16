import React, { Component } from 'react';
import './application.css';

class Application extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data);
        //const response = fetch('/api/form-submit-url', {
        //    method: 'POST',
        //    body: data,
        //});
    }

    render() {
        return (
            <div className={"app-page"}>
                <h2>New Job Application</h2>
                <p>Add in the information related to your most recent job application</p>
                <span className={"item"}>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                        <legend className={"legend-val"}>Personal information:</legend>
                        Company:<br/>
                        <input className={"input"} type="text" name="company"/>
                        <br/>
                        Job Title:<br/>
                        <input className={"input"} type="text" name="job"/>
                        <br/>
                        Link:<br/>
                        <input className={"input"} type="text" name="link"/>
                        <br/>
                        Date Applied:<br/>
                        <input className={"input"} type="text" name="date"/>
                        <br/>
                        <br/><br/>
                        <input className={"input"} type="submit" value="Submit" />
                        </fieldset>
                    </form>
                </span>
            </div>

        )
    }
}

export default Application;