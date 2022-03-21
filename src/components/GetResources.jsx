import React, {useState} from 'react';
import useRimes from '../libs/useRimes.js'

import Resourcesbuttons from './ResourcesButtons.jsx';
import Tabledata from './TableData';
import {Form}  from 'react-bootstrap'



import '../styles/components/GetResources.css';



const Getresources = () => {
    
    const [data, setData] = useState([]);
    const [word, setWord] = useState('');
    const [loading, setLoading] = useState(false)

    const {getFromDatamuse,
           getFromRimar } = useRimes();

    const handleWord = (e)=>{
        setWord(e.target.value)
    }

    const handleData = (about)=>{
        setLoading(true)
        getFromDatamuse(about, word)
            .then(response => setData(response))
            .then(response => setLoading(false))
            .catch(error => {throw error})
    }
    


    const handleScrap = ()=>{
        setLoading(true)
        getFromRimar(word)
            .then(response=>setData(response))
            .then(response => setLoading(false))
            .catch(error => {throw error})
        }

        // FIXME: Responsive does not work properly 
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

                    <Resourcesbuttons
                        loading={loading}
                        handleData={handleData}
                        handleScrap={handleScrap}/>
                    
                </Form>
            </div>

            <Tabledata data={data}/>
            
        </>
    );
}

export default Getresources;
