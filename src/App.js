import React, { Component } from 'react';
import {Routes} from './routes';
import './App.css';
import Nav from './components/navbar/Navbarcontainer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes/>
                    <Nav/>
                </div>
            </div>
        );
    }
}

export default App;
