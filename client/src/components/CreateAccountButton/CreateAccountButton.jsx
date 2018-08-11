import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CreateAccountButton.css';


class CreateAccountButton extends Component {
    render() {
        return (
            <div id="create-account-btn-div">
                <Link to="/home" className="create-account-btn-link">
                    <button 
                        id="create-account-btn"
                        className="center"
                        onClick={this.props.handleClick}>
                        Create Account
                    </button>
                </Link>

            </div>
        )
    }
}

export default CreateAccountButton;