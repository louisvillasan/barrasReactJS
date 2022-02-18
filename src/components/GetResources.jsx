import React, {useState, useEffect} from 'react';
// import {getDatamuse} from '../libs/datamuse';
import axios from 'axios';
import '../styles/components/GetResources.css';


import {Button, 
        ButtonGroup,
        Form}       from 'react-bootstrap'
import Tabledata from './TableData';



const Getresources = () => {
    
    const [data, setData] = useState([]);
    const [word, setWord] = useState('');

    // const baseURL = 'https://api.datamuse.com/words?sp=sabor&v=es&max=40';
    const baseURL = 'https://api.datamuse.com/words?ml=';

    const handleData = (type)=>{
        axios.get(`${baseURL}${word}&v=es&max=40`).then((response) => {
            setData(response.data)
        });
    }

    const handleWord = (e)=>{
        setWord(e.target.value)
    }

    useEffect(()=>{
        console.log(data);
    }, [data])

    
    return (
        <>
            <div className='btnGroupResources'>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Palabra</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Introduce la palabra a usar"
                        onChange={handleWord} />
                </Form.Group>
                
                <ButtonGroup  size="lg" className="mb-2">
                    <Button className='btnResources'  onClick={()=>handleData('ml')} >Rima Perfecta</Button>
                    <Button className='btnResources' >Rima</Button>
                    <Button className='btnResources'>Palabra relacionada</Button>
                </ButtonGroup>
            </Form>
            </div>

            <Tabledata data={data}/>
            
        </>
    );
}

export default Getresources;
