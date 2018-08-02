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
// import { isThisMonth } from 'date-fns';
import axios from 'axios';

import ProfileSettings from './pages/Profile-Pages/ProfileSettings';
import Notifications from './pages/Profile-Pages/Notifications';
import ReviewHistory from './pages/Profile-Pages/ReviewHistory';
import Permissions from './pages/Profile-Pages/Permissions';
import LogOut from './pages/Profile-Pages/LogOut';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import {fetchSearch} from './actions/searchAction';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [],
        locationResults: [],
        loggedIn: '',
        username: null,
        redirectTo: null
    }
  }

  componentDidMount() {
      this.setState({searchResults: 'Physics Astronomy', locationResults: 'UCLA'});
      this.getUser();
      console.log(this.state.loggedIn);
      console.log(this.state.username);
  }

  updateUser = (loggedIn, username, redirectTo) => {
      this.setState({
          loggedIn,
          username,
          redirectTo
      });
  }

  getUser = () => {
      axios.get('/api/users').then(res => {
          console.log('get user response: ');
          console.log(res.data);
          if (res.data.user) {
              console.log('get user there is a user saved in the server session: ');

              this.setState({
                  loggedIn: true,
                  username: res.data.user.username
              })
          } else {
              console.log('get user: no user');
              this.setState({
                  loggedIn: false,
                  username: null
              })
          }
      })
  }
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

  userLoggedIn = user => {
      this.setState({loggedIn: user});
  }

  render() {

        return (
            <Router>
                <div>
                    <Route 
                        path="/home"                 
                        render={props => <Home {...props} googleMapsLat={this.state.myLat}googleMapsLon={this.state.myLon}googleMapsResult={this.state.searchResults}  googleMapsLocation={this.state.locationResults}yelpResults={this.state.yelpResults}/>}

                        />
                    <Route 
                        path="/layers" 
                        component={Layers} />
                    <Route 
                        path="/explore" 
                        render={props => <Explore {...props} 
                            onSearchLocation={this.searchLocation}/>}
                        />
                    <Route 
                        path="/bookmarks" 
                        component={Bookmarks} />
                    <Route 
                        exact path="/profile" 
                        render={props => <Profile {...props} 
                            username={this.state.loggedIn.username}/>}
                        />
                    <Route 
                        exact path="/" 
                        component={LandingPage} />
                    <Route 
                        path="/signup" 
                        component={SignUp} />
                    <Route 
                        path="/login" 
                        render={props => <LogIn {...props} 
                            userLoggedIn={this.userLoggedIn} 
                            updateUser={this.updateUser} 
                            loggedIn={this.state.loggedIn}/>} />
    
    
                    <Route 
                        path="/profile/settings" 
                        render={props => <ProfileSettings {...props} 
                            username={this.state.loggedIn.username}/>} />
    
                    <Route 
                        path="/profile/notifications" 
                        render={props => <Notifications {...props} 
                            username={this.state.loggedIn.username}/>} />
    
                    <Route 
                        path="/profile/review-history" 
                        render={props => <ReviewHistory {...props} 
                            username={this.state.loggedIn.username}/>} />
    
                    <Route 
                        path="/profile/permissions" 
                        render={props => <Permissions {...props} 
                            username={this.state.loggedIn.username}/>} />
    
                    <Route 
                        path="/profile/logout" 
                        render={props => <LogOut {...props} 
                            updateUser={this.updateUser} 
                            username={this.state.loggedIn.username}
                            redirectTo={this.state.loggedIn.redirectTo}/>} />
    
                </div>
            </Router>
        )
    

  }
}

export default AppContainer;


// AppContainer.propTypes = {
//     fetchSearch: PropTypes.func.isRequired,
//     searchResults: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
// // this creates this.state.posts
//     searchResults: state.searchResults.items
// });

// export default connect(mapStateToProps, { fetchSearch })(AppContainer);