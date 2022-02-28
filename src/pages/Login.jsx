import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from '../context/User/UserContext.js';

import {Form, Button} from 'react-bootstrap'
import '../styles/pages/Login.css'


const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {login, getLocaleUser} = useContext(UserContext);
    
    useEffect(() => {
        getLocaleUser()
            .then(res => {if (res) navigate('/')})
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const handleEmail = (e) =>{
        setEmail(e.target.value);        
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        (!email && !password) 
            ? alert('email or password empty')
            : login(email,password)
                .then(response => navigate('/'))
    }
  
    return (
        <div className='loginDiv'>
            <Form>

                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
              
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button onClick={handleSubmit} className='btnLogin' variant="primary mr-1" type="submit">
                    Login
                </Button>

                <Link to="/register">
                    <Button variant="secondary" type="submit">
                        Sign Up
                    </Button>
                </Link>
                
            </Form>
        </div>
    );
}

export default Login;
