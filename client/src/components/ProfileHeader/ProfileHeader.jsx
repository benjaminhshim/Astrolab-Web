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

                    <p className="tc" id="profile-current-city">Los Angeles</p>
                    <p className="tc" id="profile-date">August 11, 2018</p>
                </div>
            </div> 
        )
    }
}

export default ProfileHeader;