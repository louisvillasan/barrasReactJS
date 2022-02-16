import React from 'react';
import '../styles/pages/Login.css'
import "bootstrap/dist/css/bootstrap.css";

import {Form, Button} from 'react-bootstrap'

const Login = () => {
    return (
        <div className='loginDiv'>
            <Form>

                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button className='btnLogin' variant="primary mr-1" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default Login;
