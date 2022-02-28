import React from 'react';

import {Col, Card} from 'react-bootstrap'

const TableItem = ({word}) => {
    return (
        <Col>
            <Card className='myProyectCard' 
            style={{ width: '15rem', height: '4rem'}}>
                <Card.Body>
                    <Card.Title>{word}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default TableItem;
