import React, {Component} from 'react';
import Nav from '../../components/Nav';

import './Home.css';
import MapContainer  from '../../components/MapPOV/MapComtainer';
class Home extends Component {

    render() {
        return (
            <div className="home-body">
                <Nav />
                <p className="tc" id="home-header">Home</p>

                <MapContainer />

            </div>
        )
    }
}

export default Home;