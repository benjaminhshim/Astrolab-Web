import React, {Component} from 'react';
import './SignUp.css';

import {Form, FormGroup, Label, Input} from 'reactstrap';



class SignUp extends Component {

    render() {
        return (
            <div className="sign-up-body">

                <img 
                    src='/assets/images/AstrolabIconImages/Logo.png' 
                    id="astrolab-logo"/>

                <h2 className="tc" id="astrolab-header">ASTROLAB</h2>
                <h5 id="sign-up-header">Sign Up</h5>

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
                    <input 
                        type="birthday" 
                        name="birthday"
                        placeholder="mm/dd/yy"/>

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

                

                
            </div>
        )
    }
}

export default SignUp;