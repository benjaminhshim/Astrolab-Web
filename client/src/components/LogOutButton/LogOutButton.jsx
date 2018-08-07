import React, { Component } from 'react'
import './LogOutButton.css';

export default class LogOutButton extends Component {
  render() {
    return (
      <div>
        <button 
            onClick={this.props.logOut}
            id="log-out-btn">Log Out</button>
      </div>
    )
  }
}
