import React, {Component} from 'react';
import Nav from '../../components/Nav';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <Nav />
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;