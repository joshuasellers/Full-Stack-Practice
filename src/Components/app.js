import React, { Component } from 'react';
// import { render } from 'react-dom';
import NavBar from './headerComponent/navBar.js';
import HomePage from './pages/homePage.js'
import Applications from './pages/applications.js';
import Application from './pages/application.js';
import Footer from './footerComponent/footer.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/applications" component={Applications} />
                    <Route path="/application" component={Application} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;