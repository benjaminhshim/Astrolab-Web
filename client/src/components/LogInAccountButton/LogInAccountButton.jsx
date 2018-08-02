import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './LogInAccountButton.css';

class LogInAccountButton extends Component {
    render() {
        return (
            <div id="log-in-account-btn-div">
                <Link to="/log-in">
                    <button 
                        id="log-in-account-btn"
                        onClick={this.props.logIn}>Log in</button>
                </Link>
            </div>
        )
    }
}

export default LogInAccountButton;