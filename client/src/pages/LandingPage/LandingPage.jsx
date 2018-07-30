import React, {Component} from 'react';
import './LandingPage.css';

import SignUpButton from '../../components/SignUpButton';
import LogInButton from '../../components/LogInButton';


class LandingPage extends Component {

    render() {
        return (
            <div className="landing-page-body">

                <img 
                    src='/assets/images/AstrolabIconImages/Logo.png' 
                    id="astrolab-logo"/>

                <h2 className="tc" id="landing-page-header">ASTROLAB</h2>

                <div id="landing-page-buttons">
                    <SignUpButton />
                    <LogInButton />
                </div>
            </div>
        )
    }
}

export default LandingPage;