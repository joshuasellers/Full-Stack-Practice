import React, { Component } from 'react';
// import { render } from 'react-dom';
import NavBar from './headerComponent/navBar.js';
import HomePage from './pages/homePage'
import Footer from './footerComponent/footer.js'

class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <HomePage />
                <Footer />
            </div>
        );
    }
}

export default App;