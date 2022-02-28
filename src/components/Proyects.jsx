import React from 'react';
import {Col, Card} from 'react-bootstrap';
import '../styles/components/Proyects.css'

const Proyects = ({proyect, handleDelete, handleSentToEdit}) => {
    
    return (
        <Col>
            <Card className='myProyectCard' style={{ width: '20rem', height: '13rem'}}>
                <Card.Body>
                    <Card.Title>{proyect.title.slice(0,25)}</Card.Title>
                    <Card.Text>
                        {proyect.description.slice(0,100)}
                    </Card.Text>
                    <Card.Link onClick={()=>handleSentToEdit(proyect)} >
                        Edit
                    </Card.Link>
                    <Card.Link  
                        style={{marginLeft: "1em"}}
                        onClick={handleDelete(proyect.id)}>
                        Eliminar
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Proyects;
