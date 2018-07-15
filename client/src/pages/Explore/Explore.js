import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Explore.css';

class Explore extends Component {
    render() {
        return (
            <div className="explore-body">
                <Nav />
                <h1>Explore</h1>
            </div>
        )
    }
}

export default Explore;