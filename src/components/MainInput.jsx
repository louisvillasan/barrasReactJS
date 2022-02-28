import React from 'react';
import { Form} from 'react-bootstrap'


import '../styles/components/MainInput.css'
const Maininput = ({handleDescription, height, description}) => {
    return (       
        <div>
            <Form.Group className='formInput'>
                <Form.Label>Barras</Form.Label>
                    <Form.Control 
                        id="textMain" 
                        as="textarea" 
                        onChange={handleDescription} 
                        style={height}
                        value={description}/>
                            
            </Form.Group>
        </div> 

        
    );
}

export default Maininput;
