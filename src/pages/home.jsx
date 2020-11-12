import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Bar from '../components/bar';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <Bar />
            </div>
        );
    }
}

export default Home;