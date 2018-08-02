import React, {Component} from 'react';


class ProfileHeader extends Component {
    render() {
        return(
            <div className="profile-header">
                <div className="profile-settings-header">
                    {this.props.username ? 
                        <p className="tc" id="profile-username">{this.props.username}</p>
                        :
                        <p className="tc" id="profile-username">Username</p>
                    }

                    <p className="tc" id="profile-current-city">Current City</p>
                    <p className="tc" id="profile-date">Month Day, Year</p>
                </div>
            </div> 
        )
    }
}

export default ProfileHeader;