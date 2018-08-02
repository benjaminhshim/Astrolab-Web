import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layers from './pages/Layers';
import Explore from './pages/Explore';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [],
        locationResults: [],
        yelpResults:[],
        myLat:"", myLon:""
    }
  }



  searchLocation = (search, location, lat, lon, yelpResults) => {
      console.log("these are the search parameters -->", search, lat, location, lon)
    this.setState({searchResults: search, locationResults: location, myLat: lat, myLon: lon, yelpResults: yelpResults})
    // this.setState({myLat: lat, myLon: lon})
    console.log("search occurred -->>>", this.state.myLat, this.state.myLon)
  }

  render() {
    return (
        <Router>
            <div>
                <Route 
                    exact path="/"                 
                    render={props => <Home {...props} googleMapsLat={this.state.myLat}googleMapsLon={this.state.myLon}googleMapsResult={this.state.searchResults}  googleMapsLocation={this.state.locationResults}yelpResults={this.state.yelpResults}/>}
                    />
                <Route 
                    path="/layers" 
                    component={Layers} />
                <Route 
                    path="/explore" 
                    render={props => <Explore {...props} onSearchLocation={this.searchLocation}/>}
                    />
                <Route 
                    path="/bookmarks" 
                    component={Bookmarks} />
                <Route 
                    path="/profile" 
                    component={Profile} />
                <Route 
                    path="/landing-page" 
                    component={LandingPage} />
                <Route 
                    path="/sign-up" 
                    component={SignUp} />
                <Route 
                    path="/log-in" 
                    component={LogIn} />
            </div>
        </Router>
    )
  }
}

export default AppContainer;