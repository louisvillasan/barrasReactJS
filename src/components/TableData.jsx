import React from 'react';

import '../styles/components/TableData.css'
import {Container, Row} from 'react-bootstrap'
import TableItem from './TableItem';


const Tabledata = ({data}) => {
        return (
            <Container fluid>
                <Row>
                    {data.map((word,index)=>{
                        return(
                            <TableItem
                                key={index}
                                word={word}
                            />
                        );
                    })}
                </Row>
            </Container>
        );
    }

export default Tabledata;
