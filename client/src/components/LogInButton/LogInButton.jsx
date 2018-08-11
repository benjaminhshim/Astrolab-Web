import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './LogInButton.css';


class LogInButton extends Component {
    render() {
        return (
            <div className="f6 f5-ns dib">
                <Link to="/login">
                    <button id="log-in-btn">Log in</button>
                </Link>

            </div>
        )
    }
}

export default LogInButton;