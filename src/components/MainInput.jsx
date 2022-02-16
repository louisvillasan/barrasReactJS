import React from 'react';
import { Form} from 'react-bootstrap'


import '../styles/components/MainInput.css'
const Maininput = ({handleText, howManyLines}) => {

    return (

        

        <Form.Group className='formInput' controlId="exampleForm.ControlTextarea1">
            <Form.Label>Barras</Form.Label>
            {
                (howManyLines>15)   
                    ? <Form.Control onChange={handleText} as="textarea" 
                rows={howManyLines+2}/> 
                    :<Form.Control onChange={handleText} as="textarea" 
                rows="15"/>   
            }
          
        </Form.Group>
    );
}

export default Maininput;
