import React, {useContext, useEffect} from 'react';

import UserContext from '../context/User/UserContext.js';
import ProyectContext from '../context/Proyect/ProyectContext.js';

import Proyects from '../components/Proyects';
import {Button, Container, Row} from 'react-bootstrap'

import '../styles/components/Proyect.css'
const Proyect = ({handleComponent}) => {

    const {currentUser} = useContext(UserContext);
    
    
    const {getProyects, proyects, 
            newProyect, deleteProyect,
            setSelectedProyect
            } = useContext(ProyectContext);
    


    useEffect(()=>{
        if (currentUser){
            getProyects(JSON.parse(currentUser).myJwt);
        }
    },[currentUser])// eslint-disable-line react-hooks/exhaustive-deps


    

    
    const handleNewProyect = ()=>{
        newProyect(JSON.parse(currentUser).myJwt)
            .then(newProyect => handleComponent());

    }

    const handleDelete = id => e => {
        e.preventDefault();
        deleteProyect(id, JSON.parse(currentUser).myJwt)
            .then(response=> alert('Proyecto eliminado'))
    }

    const handleSentToEdit =  proyect =>{
        setSelectedProyect(proyect);
        handleComponent();
    }

    return (
        <>
            <div className='divCreateProyect'>
                <Button
                    className='btnCreateProyect'
                    onClick={handleNewProyect} 
                    variant="primary">
                        Crear nuevo proyecto
                </Button>
            </div>
            
            <Container fluid>
                <Row>
                    {proyects.map((proyect)=>{
                        return(
                            <Proyects 
                                proyect={proyect}
                                handleDelete={handleDelete} 
                                key={proyect.id}
                                handleSentToEdit={handleSentToEdit}
                                />
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default Proyect;
