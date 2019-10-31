import React, { Component } from 'react';
import './application.css';
import axios from "axios";
import aws from 'aws-sdk';
import {getSecretStuff} from '../../process';
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

    /*async handleSubmit(event) {
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
                method: 'POST',
                body: form_data
            });
            const result = await response.json();
            console.log('Success:', JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error);
        }
    }*/

    // Perform the upload
    handleSubmit(event){
        // Split the filename to get the name and type
        const entry = {
            "companyName": this.state.companyName,
            "jobTitle": this.state.jobTitle,
            "jobLink": this.state.jobLink,
            "dateApplied": this.state.dateApplied
        };
        console.log("Preparing the upload");
        // Configure aws with your accessKeyId and your secretAccessKey
        const things = getSecretStuff();
        aws.config.update({
            region: 'us-east-2', // Put your aws region here
            accessKeyId: things.keyId,
            secretAccessKey: things.secretKey
        });

        const s3 = new aws.S3();

        const params = {
            Bucket: 'jobappdata',
            Key: this.state.jobLink,
            Expires: 60,
        };

        s3.getSignedUrl('putObject', params, function(err, signedUrl) {
            if (err) {
                console.log(err);
                return err;
            } else {
                console.log(signedUrl);

                const instance = axios.create();

                instance.put(signedUrl, entry)
                    .then(function (result) {
                        console.log(result);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
                return signedUrl;
            }
        });

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