import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext.js';


import {Navbar, Nav, Container} from 'react-bootstrap'



const Header = ({handleHome}) => {


    const {logout, currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    // const user = useContext(UserContext);

    const handleLogout = ()=>{
        logout();
        navigate('/login');
    }



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={()=>handleHome()}>Barras</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">     
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Navbar.Text>
                        {(currentUser) ? <span>{JSON.parse(currentUser).user.email}</span>
                                       : <span></span> }
                    </Navbar.Text>
                    <Nav.Link onClick={handleLogout}>
                        logout
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
