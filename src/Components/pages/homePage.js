import React, { Component } from 'react';
import Title from './title'
import './homePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="name">
               <Title/>
            </div>
        )
    }
}

export default HomePage;