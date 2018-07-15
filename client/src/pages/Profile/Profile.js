import React, {Component} from 'react';
import Nav from '../../components/Nav';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="profile-body">
                <Nav />
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile;