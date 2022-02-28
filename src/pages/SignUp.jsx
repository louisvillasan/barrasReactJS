import React, {useEffect, useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import UserContext from '../context/User/UserContext.js';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcp, setPasswordcp] = useState('');
    const navigate = useNavigate();

    const {signUp, getLocaleUser} = useContext(UserContext);

    useEffect(() => {
        getLocaleUser()
            .then(res => {if (res) navigate('/')})
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleEmail = (e) =>{
        setEmail(e.target.value);        
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);        
    }
    const handlePasswordcp = (e) =>{
        setPasswordcp(e.target.value);        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        ((!email && !password) || (password !== passwordcp))
            ? alert('wrong data')
            : signUp(email,password, passwordcp)
                .then(response => navigate('/'))
                .catch(e => alert('Wrong data'))

    }


    return (
        <div className='loginDiv'>
            <Form>

                <h1>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword}  type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordcp">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control onChange={handlePasswordcp}  type="password" placeholder="Password" />
                </Form.Group>
                
                <Button onClick={handleSubmit} className='btnLogin' variant="primary mr-1" type="submit">
                    Sign up
                </Button>

                <Link to="/login">
                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Signup;
