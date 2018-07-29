import React, {Component} from 'react';
import './CreateAccountButton.css';
import { Link } from 'react-router-dom';


class CreateAccountButton extends Component {
    render() {
        return (
            <div>
               <button  id="create-account-btn">Create Account</button>
            </div>
        )
    }
}

export default CreateAccountButton;