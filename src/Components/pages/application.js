import React, { Component } from 'react';
import './application.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            jobTitle: "",
            jobLink: "",
            dateApplied: ""
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

    async handleSubmit(event) {
        event.preventDefault();
        const data = {
            "companyName": this.state.companyName,
            "jobTitle": this.state.jobTitle,
            "jobLink": this.state.jobLink,
            "dateApplied": this.state.dateApplied
        };
        let form_data = new FormData();
        for (const key in data) {
            form_data.append(key, data[key]);
        }

        try {
            const response = await fetch('http://jobappbucket.s3-website-us-west-2.amazonaws.com/', {
                method: 'PUT',
                body: form_data
            });
            const result = await response.json();
            console.log('Success:', JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div className={"app-page"}>
                <h2>New Job Application</h2>
                <p>Add in the information related to your most recent job application</p>
                <span className={"item"}>
                    <form>
                        <legend className={"legend-val"}>Personal information:</legend>
                        <label className={"lab"}>
                            Company:
                            <input
                                className={"inp"}
                                type="text"
                                name="companyName"
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
                                name="jobTitle"
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
                                name="jobLink"
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
                                name="dateApplied"
                                value={this.state.dateApplied}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <br/>
                        <br/><br/>
                    </form>
                    <button className={"sub"} onClick={this.handleSubmit}>
                        SUBMIT
                    </button>
                </span>
            </div>

        )
    }
}

export default Application;