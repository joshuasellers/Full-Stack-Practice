import React, { Component } from 'react';
import './application.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            jobTitle: "",
            jobLink: "",
            dateApplied: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        //event.preventDefault();
        //const data = new FormData(event.target);

        //console.log(data);
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
                        <legend className={"legend-val"}>Personal information:</legend>
                        <label className={"lab"}>
                            Company:
                            <input
                                className={"inp"}
                                type="text"
                                name="company"
                                value={this.state.companyName}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br/>
                        <label className={"lab"}>
                            Job Title:
                            <input
                                className={"inp"}
                                type="text"
                                name="job"
                                value={this.state.jobTitle}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br/>
                        <label className={"lab"}>
                            Link:
                            <input
                                className={"inp"}
                                type="text"
                                name="link"
                                value={this.state.jobLink}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br/>
                        <label className={"lab"}>
                            Date Applied:
                            <input
                                className={"inp"}
                                type="text"
                                name="date"
                                value={this.state.dateApplied}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br/>
                        <br/><br/>
                        <input
                            className={"sub"}
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </span>
            </div>

        )
    }
}

export default Application;