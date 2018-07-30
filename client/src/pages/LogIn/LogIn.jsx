import React, { Component } from 'react';
import './LogIn.css';
import LogInButton from '../../components/LogInButton';


import {Form, FormGroup, Label, Input} from 'reactstrap';


class LogIn extends Component {

    render() {
        return (
            <div className="login-page-body">

                <img
                    src='/assets/images/AstrolabIconImages/Logo.png'
                    id="astrolab-logo" />

                <h2 className="tc" id="landing-page-header">ASTROLAB</h2>
                <h5 id="log-in-header">Log In</h5>
                
                <Form style={{width: "25%", clear: "both", overflow:"auto", margin: "0 auto"}}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Username"/>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Confirm password"/>

                    <FormGroup 
                        check 
                        style={{float: "left", marginTop: 35}}>
                        <Label check>
                            <Input 
                                type="checkbox" 
                                />{' '}
                            <p style={{color: "#FFFFFE"}}>Remember Me</p>
                        </Label>
                    </FormGroup>
                  

                </Form>
                <div id="landing-page-buttons">
                <LogInButton />
                </div>
            </div>
        )
    }
}

export default LogIn;