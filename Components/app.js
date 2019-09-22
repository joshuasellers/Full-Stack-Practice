import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './headerComponent/navBar.js';

class App extends Component {

    render() {
        return (
            <div>
                <Example />
                <a href="https://reactstrap.github.io/components/navbar/">reactstrap Navbar example</a>
            </div>
        );
    }
}

export default App;