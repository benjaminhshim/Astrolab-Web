import React, {Component} from 'react';
import './LogIn.css';




class LogIn extends Component {

    render() {
        return (
            <div className="landing-page-body">

                <img 
                    src='/assets/images/AstrolabIconImages/Logo.png' 
                    id="astrolab-logo"/>

                <h2 className="tc" id="landing-page-header">ASTROLAB</h2>
                <h5>Sign Up</h5>

                
            </div>
        )
    }
}

export default LogIn;