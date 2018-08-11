import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../../../components/Nav';
import LogOutButton from '../../../components/LogOutButton';
import ProfileHeader from '../../../components/ProfileHeader';
import axios from 'axios';

class LogOut extends Component {

    logOut = event => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/users/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null,
              redirectTo: '/'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        if (this.props.redirectTo === '/') {
            return <Redirect to={{pathname: this.props.redirectTo}} />
          } else {
        return(
            <div className="profile-body">
                <Nav />
                <ProfileHeader username={this.props.username}/>

                <br />

                <main className="profile-settings-body mw6 center">

                    {/* <p id="settings-header">Log Out</p> */}
                    <LogOutButton 
                        logOut={this.logOut}/>

                </main>
            </div> 
        )
      }

    }
}

export default LogOut;