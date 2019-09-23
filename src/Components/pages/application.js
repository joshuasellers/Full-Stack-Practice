import React, { Component } from 'react';
import './application.css';

class Application extends Component {
    render() {
        return (
            <div className={"app-page"}>
                <span className={"item"}>
                    <table className="tg">
                        <tr>
                            <th><input className="tg-tlxv" type="text" name="firstname" value="COMPANY"/></th>
                            <th><input className="tg-hayz" type="text" name="firstname" value="POSITION"/></th>
                            <th><input className="tg-hayz" type="text" name="firstname" value="LINK"/></th>
                            <th><input className="tg-hayz" type="text" name="firstname" value="STATUS"/></th>
                            <th><input className="tg-hayz" type="text" name="firstname" value="DATE APPLIED"/></th>
                            <th><input className="tg-hayz" type="text" name="firstname" value="DATE CONTACTED"/></th>
                        </tr>
                    </table>
                </span>
                <span className={"item"}>
                    <button type="button" className={"button-app"}>Add Row</button>
                </span>
            </div>

        )
    }
}

export default Application;