import React, { Component } from 'react'
import './LogOutButton.css';

export default class LogOutButton extends Component {
  render() {
    return (
      <div id="log-out-btn-div">
        <button 
            onClick={this.props.logOut}
            id="log-out-btn"
            className="grow center">Log Out</button>
      </div>
    )
  }
}
