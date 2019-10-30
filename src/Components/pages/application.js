import React, { Component } from 'react';
import './application.css';
import axios from "axios";

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            jobTitle: "",
            jobLink: "",
            dateApplied: "",
            success: false,
            url: "",
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
        this.setState({
            success: false,
            url : ""
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
    handleUpload(event){
        let file = this.uploadInput.files[0];
        // Split the filename to get the name and type
        let fileParts = this.uploadInput.files[0].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("http://localhost:3001/sign_s3",{
            fileName : fileName,
            fileType : fileType
        })
            .then(response => {
                var returnData = response.data.data.returnData;
                var signedRequest = returnData.signedRequest;
                var url = returnData.url;
                this.setState({url: url});
                console.log("Recieved a signed request " + signedRequest);

                // Put the fileType in the headers for the upload
                var options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };
                axios.put(signedRequest,file,options)
                    .then(result => {
                        console.log("Response from s3");
                        this.setState({success: true});
                    })
                    .catch(error => {
                        alert("ERROR " + JSON.stringify(error));
                    })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            })
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