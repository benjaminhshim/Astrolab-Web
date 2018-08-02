import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import CreateAccountButton from '../../components/CreateAccountButton';
import './SignUp.css';
// import API from '../../utils/API';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthdate: '',
            signedIn: '',
            redirectTo: null
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    
    handleCreateUser = event => {
        event.preventDefault();
        console.log('sign-up-form, username: ', this.state.username);

        axios.post('/api/users', {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            birthdate: this.state.birthdate
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)


			})
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{pathname: this.state.redirectTo}} />
        } else {
            return (
                <div className="sign-up-body">
    
                    <img 
                        src='/assets/images/AstrolabIconImages/Logo.png' 
                        id="astrolab-logo"
                        alt=""/>
    
                    <h2 className="tc" id="astrolab-header">ASTROLAB</h2>
                    <h5 id="sign-up-header">Sign Up</h5>
    
                    <Form style={{width: "25%", clear: "both", overflow:"auto", margin: "0 auto"}}>
                        <input 
                            type="text" 
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            placeholder="First name"/>
                        <input 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            placeholder="Last name"/>
                        <input 
                            type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"/>
                        <input 
                            type="text" 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Username"/>
                        <input 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                            />
                        <input 
                            type="password" 
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            placeholder="Confirm password"/>
                        <input 
                            type="date" 
                            name="birthdate"
                            value={this.state.birthdate}
                            onChange={this.handleInputChange}
                            placeholder="mm/dd/yy"/>
    
                        <FormGroup 
                            check 
                            style={{marginTop: 35}}
                            id="checkbox">
                            <Label check>
                                <Input 
                                    type="checkbox" 
                                    />{' '}
                                <p style={{color: "#FFFFFE"}}>Remember Me</p>
                            </Label>
                        </FormGroup>
    
                        <CreateAccountButton 
                            handleClick={this.handleCreateUser}/>
    
                    </Form>
    
                    
    
                    
                </div>
            )
        }
        
    }
}

export default SignUp;