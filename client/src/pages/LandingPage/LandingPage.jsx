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
                    id="astrolab-logo"
                    alt=""/>

                <h2 className="tc" id="landing-page-header">ASTROLAB</h2>


                <div className="landing-page-buttons tc pb3">
                    <SignUpButton />
                    <LogInButton />
                </div>
            </div>
        )
    }
}

export default LandingPage;