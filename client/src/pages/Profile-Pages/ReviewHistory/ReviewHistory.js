import React, {Component} from 'react';
import Nav from '../../../components/Nav';
import ProfileHeader from '../../../components/ProfileHeader';

class ReviewHistory extends Component {
    render() {
        return(
            <div className="profile-body">
                <Nav />
                <ProfileHeader username={this.props.username}/>

                <br />

                <main className="profile-settings-body mw6 center">

                    <p id="settings-header">Review History</p>


                </main>
            </div> 
        )
    }
}

export default ReviewHistory;