import React, { Component } from 'react';
import Nav from '../../components/Nav';

import './Home.css';
import MapContainer from '../../components/MapPOV/MapComtainer';
import AnotherMap from "../../components/MapPOV/MapContainer2"
class Home extends Component {

    render() {
        return (
            <div className="home-body">
                <Nav />
                <p className="tc" id="home-header">Home</p>

                <MapContainer
                    search={this.props.googleMapsResult}
                    location={this.props.googleMapsLocation}
                    lat={this.props.googleMapsLat}
                    lon={this.props.googleMapsLon}
                    yelpResults={this.props.yelpResults} />

                <AnotherMap
                    search={this.props.googleMapsResult}
                    location={this.props.googleMapsLocation}
                    lat={this.props.googleMapsLat}
                    lon={this.props.googleMapsLon}
                    yelpResults={this.props.yelpResults} />
                {/* {/{this.props.googleMapsResult}+${this.props.googleMapsLocation}`} */}
                {/* <iframe 
                    id="google-maps-display"
                    width="450"
                    height="575"
                    frameBorder="0" 
                    style={{border:0}} 
                    className="embed-responsive-item center d-block mt-5"
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhSBjmU-q9Jf9qFxhho_cfQjWwo2aJcYs&zoom=14&q=${this.props.googleMapsResult}+${this.props.googleMapsLocation}`}
                    allowFullScreen
                    title="Google Maps">

                </iframe> */}

            </div>
        )
    }
}

export default Home;