import React, {Component} from 'react';
import './Profile.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileSettings from '../Profile-Pages/ProfileSettings';
import Notifications from '../Profile-Pages/Notifications';
import ReviewHistory from '../Profile-Pages/ReviewHistory';
import Permissions from '../Profile-Pages/Permissions';
import LogOut from '../Profile-Pages/LogOut';

import ProfileNav from '../../components/ProfileNav';
import Nav from '../../components/Nav';


class Profile extends Component {
    render() {
        return (
            <div className="profile-body">
                <Nav />
                <div className="profile-header">
                    <p className="tc" id="profile-username">Username</p>
                    <p className="tc" id="profile-current-city">Current City</p>
                    <p className="tc" id="profile-date">Month Day, Year</p>
                </div>

                <br />

                <main className="profile-settings-body mw6 center">

                    <p id="settings-header">Settings</p>

                    <Router>
                        <div>
                            <ProfileNav />
                            <Route path="/profile/settings" component={ProfileSettings} />
                            <Route path="/profile/notifications" component={Notifications} />
                            <Route path="/profile/review-history" component={ReviewHistory} />
                            <Route path="/profile/permissions" component={Permissions} />
                            <Route path="/logout" component={LogOut} />
                        </div>
                    </Router>

                </main>
            </div>
        )
    }
}

export default Profile;