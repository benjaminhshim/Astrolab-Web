import React, {Component} from 'react';
import './SignUpButton.css';
import { Link } from 'react-router-dom';



class SignUpButton extends Component {
    render() {
        return (
            <div>
                <Link to="/sign-up">
                <button id="sign-up-btn">Sign Up</button>
                </Link>
            </div>
        )
    }
}

export default SignUpButton;