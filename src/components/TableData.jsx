import React, {useEffect, useState} from 'react';

import '../styles/components/TableData.css'
import {Table} from 'react-bootstrap'


const Tabledata = ({data}) => {
    
    
        const [dataShow, setDataShow] = useState([]);

        useEffect(()=>{

            setDataShow( data.reduce((rows,key,index)=>{
                return (index % 4 === 0 ? rows.push([key]) 
                : rows[rows.length-1].push(key)) && rows;
            }, []));

        }, [data])

    return (
        <div className='tableData'>
            <Table striped bordered hover>
                <tbody>
                    {dataShow.map((item)=>{
                        return(
                            <tr>
                                <td>{item[0].word}</td>
                                <td>{item[1].word}</td>
                                <td>{item[2].word}</td>
                                <td>{item[3].word}</td>
                            </tr>   
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}

export default Tabledata;
