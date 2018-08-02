import React, {Component} from 'react';
import Nav from '../../../components/Nav';
import ProfileHeader from '../../../components/ProfileHeader';

class Notifications extends Component {
    render() {
        return(
            <div className="profile-body">
                <Nav />
                <ProfileHeader username={this.props.username}/>

                <br />

                <main className="profile-settings-body mw6 center">

                    <p id="settings-header">Notifications</p>


                </main>
            </div>        
        )
    }
}

export default Notifications;