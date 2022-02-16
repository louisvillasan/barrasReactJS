import React from 'react';
import {Form, Button} from 'react-bootstrap'


const Signup = () => {
    return (
        <div className='loginDiv'>
            <Form>

                <h1>Sign Up</h1>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button className='btnLogin' variant="primary mr-1" type="submit">
                    Sign up
                </Button>
                <Button variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Signup;
