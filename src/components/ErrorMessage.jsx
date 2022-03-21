import React, {useEffect, useContext} from 'react';
import UserContext from '../context/User/UserContext.js';

import { Alert } from 'react-bootstrap';

const Errormessage = ({message}) => {

    // setTimeout(() => {console.log("this is the first message")}, 5000);
    const {clearError} = useContext(UserContext);

    useEffect(()=>{
        clearError()
    },[])// eslint-disable-line


    return (
        <Alert variant="danger" onClose={() => clearError()} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {message}
            </p>
      </Alert>
    );
}

export default Errormessage;
