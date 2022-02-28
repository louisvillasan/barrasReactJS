import React, {useState, useEffect, useContext} from 'react';
import ProyectContext from '../context/Proyect/ProyectContext.js';
import UserContext from '../context/User/UserContext.js';


import Maininput from '../components/MainInput';
import SideInput from '../components/SideInput';
import GetResources from '../components/GetResources';


import {Row, Col, Button, ButtonGroup, Form} from 'react-bootstrap';
import '../styles/components/Edit.css';


const Edit = ({handleComponent}) => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [about, setAbout] = useState('');
    const [height, setHeight] = useState({
        height: '310px'
    });

    const {currentUser} = useContext(UserContext);

    const   {currentProyect, updateProyect,
            deleteProyect 
            } = useContext(ProyectContext);

    const setData = (response)=>{
        setTitle(response.title);
        setDescription(response.description);
        setAbout(response.about);        
    }
    
    useEffect(()=>{
        setData(currentProyect);
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const resize = (target) =>{
        const size = document.querySelector(target).scrollHeight;        
        if (size>310)
            setHeight({
                height: (size.toString() + 'px')
            })
    }

    const handleDescription = (e) =>{
        resize('#textMain')
        setDescription(e.target.value);
    }

    const handleAbout = e =>{
        resize('#textSide');
        setAbout(e.target.value);
    }
    const handleTitle = e =>{
        setTitle(e.target.value)
    }

    const handleUpdate = ()=>{
        updateProyect(currentProyect.id,
            {title,
            description,
            about},JSON.parse(currentUser).myJwt);
    }

    const handleDelete = (e)=>{
        e.preventDefault();
        deleteProyect(currentProyect.id,
                    JSON.parse(currentUser).myJwt);
        handleComponent()
    }

    return (
        <>
        <Form.Control className='formTitle' 
                        onChange={handleTitle} 
                        type="text" value={title}/>
        <Row>
            <Col sm={8} className='inputColumn'>
                <Maininput 
                    handleDescription={handleDescription} 
                    height={height}
                    description={description}/>
            </Col>
            <Col sm={4} className='inputColumn'>
                <SideInput 
                    handleAbout={handleAbout} 
                    height={height}
                    about={about}/>
            </Col>
        </Row>
        <div className='btnGroupSide'>
                <ButtonGroup  size="lg" className="mb-2">
                    <Button onClick={handleUpdate} variant="success" className='btnResources'>
                            Guardar
                    </Button>
                    <Button onClick={handleDelete} variant="danger" className='btnResources'>
                            Eliminar
                    </Button>
                </ButtonGroup>
            </div>
        <GetResources/>
        </>
    );
}

export default Edit;
