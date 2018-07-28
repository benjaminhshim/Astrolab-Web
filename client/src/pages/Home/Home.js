import React, {Component} from 'react';
import Nav from '../../components/Nav';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-body">
                <Nav />
                <p className="tc" id="home-header">Home</p>


                <iframe 
                    id="google-maps-display"
                    width="450"
                    height="575"
                    frameborder="0" 
                    style={{border:0}} 
                    className="embed-responsive-item center d-block mt-5"
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhSBjmU-q9Jf9qFxhho_cfQjWwo2aJcYs&zoom=14&q=${this.props.googleMapsResult}+${this.props.googleMapsLocation}`}
                    allowfullscreen>

                </iframe>

            </div>
        )
    }
}

export default Home;