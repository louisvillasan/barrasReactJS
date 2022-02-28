import React from 'react';
import { Form} from 'react-bootstrap'


import '../styles/components/SideInput.css'
const SideInput = ({handleAbout, height, about}) => {

    return (
        <div>
            <Form.Group className='formInput'>
                <Form.Label>Barras</Form.Label>
                    <Form.Control 
                        id="textSide" 
                        as="textarea" 
                        style={height}
                        value={about} 
                        onChange={handleAbout}/>
            </Form.Group>
        </div>
    );
}

export default SideInput;
