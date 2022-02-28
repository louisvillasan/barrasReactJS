import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/User/UserContext.js';
import Proyectstate from '../context/Proyect/ProyectState.js';

import Header from '../components/Header'
import Proyect from './Proyect';
import Edit from './Edit';



const Home = () => {

    const [component, setComponent] = useState(true);
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentUser()
            .then(response => {if (!response) navigate('/register')})

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    const handleComponent = () =>{
        setComponent(!component);
    }

    const handleHome = () =>{
        setComponent(true);
    }

    return (
            <Proyectstate>
                <Header handleHome={handleHome}/>
                {(component) 
                    ? <Proyect 
                    handleComponent={handleComponent}/>                    
                    : <Edit
                    handleComponent={handleComponent} />}
            </Proyectstate>
                
        );
}

export default Home;
