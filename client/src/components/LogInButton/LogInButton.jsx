import React, {Component} from 'react';
import './LogInButton.css';
import { Link } from 'react-router-dom';


class LogInButton extends Component {
    render() {
        return (
            <div>
               <Link to="/log-in">
               <button  id="log-in-btn">Log in</button>
               </Link> 
            </div>
        )
    }
}

export default LogInButton;