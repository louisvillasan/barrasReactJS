import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap'

const Resourcesbuttons = ({handleData, handleScrap, loading}) => {
    return (
        <ButtonGroup  size="lg" className="mb-2">
            <Button className='btnResources'  
                onClick={()=>handleData('sp')} >
                    {(loading)  ? <span>   Cargando  </span>
                                : <span>Rima Perfecta</span>
                    }
            </Button>
            
            <Button className='btnResources' 
                onClick={()=>handleScrap()}>
                    {(loading)  ? <span>Cargando</span>
                                : <span>  Rima  </span>
                    }
            </Button>
            <Button className='btnResources' 
                onClick={()=>handleData('ml')}>
                    {(loading)  ? <span>Cargando           </span>
                                : <span>Palabra relacionada</span>
                    }
            </Button>
        </ButtonGroup>
    );
}

export default Resourcesbuttons;
