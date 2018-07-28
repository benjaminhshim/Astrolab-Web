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
        locationResults: []
    }
  }

  componentDidMount() {
      this.setState({searchResults: 'Physics Astronomy', locationResults: 'UCLA'})
  }

  searchLocation = (search, location) => {
    this.setState({searchResults: search, locationResults: location})
  }

  render() {
    return (
      <Router>
        <div>
            <Route 
                exact path="/"                 
                render={props => <Home {...props} googleMapsResult={this.state.searchResults} googleMapsLocation={this.state.locationResults}/>}
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