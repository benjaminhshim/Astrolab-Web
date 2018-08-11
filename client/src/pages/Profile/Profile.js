import React, {Component} from 'react';
import './Profile.css';
// import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

// import ProfileSettings from '../Profile-Pages/ProfileSettings';
// import Notifications from '../Profile-Pages/Notifications';
// import ReviewHistory from '../Profile-Pages/ReviewHistory';
// import Permissions from '../Profile-Pages/Permissions';
// import LogOut from '../Profile-Pages/LogOut';

import ProfileNav from '../../components/ProfileNav';
import Nav from '../../components/Nav';
import ProfileHeader from '../../components/ProfileHeader';

class Profile extends Component {
 


    render() {
        return (
            <div className="profile-body">
                <Nav />
                <ProfileHeader 
                    username={this.props.username}/>

                <br />

                <main className="profile-settings-body mw6 center">

                    <p id="main-settings-header">Settings</p>

                    <ProfileNav 
                        updateUser={this.props.updateUser} 
                        username={this.props.username}/>

                </main>
            </div>
        )
    }
}

export default Profile;