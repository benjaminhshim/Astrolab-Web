import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CreateAccountButton.css';


class CreateAccountButton extends Component {
    render() {
        return (
            <div id="create-account-btn-div">
                <Link to="/home">
                    <button 
                        id="create-account-btn"
                        onClick={this.props.handleClick}>
                        Create Account
                    </button>
                </Link>

            </div>
        )
    }
}

export default CreateAccountButton;