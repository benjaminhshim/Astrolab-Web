import React, {Component} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import LogInAccountButton from '../../components/LogInAccountButton';
import {Redirect} from 'react-router-dom';
import './LogIn.css';
// import API from '../../utils/API';
import axios from 'axios';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
    }

    handleLogIn = event => {
        event.preventDefault();

        // API.logInUser({username: this.state.username, password: this.state.password})
        axios.post('/api/users/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log('login response: ');
                console.log(res);
                if (res.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: res.data.username
                    })
                    this.setState({
                        redirectTo: '/home'
                    })
                }
            }).catch(err => {
                console.log('login error');
                console.log(err);
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{pathname: this.state.redirectTo}} />
        } else {
            return (
                <div className="log-in-body">
    
                    <img 
                        src='/assets/images/AstrolabIconImages/Logo.png' 
                        id="astrolab-logo"
                        alt=""/>
    
                    <h2 className="tc" id="astrolab-header">ASTROLAB</h2>
                    <h5 id="log-in-header">Log In</h5>
    
                    <Form style={{width: "25%", clear: "both", overflow:"auto", margin: "0 auto"}}>
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
    
                        <p style={{textAlign: "center", color: "#FFFFFE", marginBottom: 35}}>Forgot Password?</p>
    
                        <LogInAccountButton
                            logIn={this.handleLogIn}/>
    
                    </Form>
    
                </div>
            )
        }
        

    }
}

export default LogIn;