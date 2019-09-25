import React, { Component } from 'react';
import './application.css';

class Application extends Component {
    render() {
        return (
            <div className={"app-page"}>
                <h2>New Job Application</h2>
                <p>Add in the information related to your most recent job application</p>
                <span className={"item"}>
                    <form action="/action_page.php">
                        <fieldset>
                        <legend className={"legend-val"}>Personal information:</legend>
                        Company:<br/>
                        <input className={"input"} type="text" name="firstname"/>
                        <br/>
                        Job Title:<br/>
                        <input className={"input"} type="text" name="lastname"/>
                        <br/>
                        Link:<br/>
                        <input className={"input"} type="text" name="lastname"/>
                        <br/>
                        Date Applied:<br/>
                        <input className={"input"} type="text" name="lastname"/>
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