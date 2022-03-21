import {GET_USER, DELETE_CURRENT_USER,
        SET_ERROR, DELETE_ERROR} from '../types.js'



const reducer = (state, action) =>{
    const {payload, type} = action;

    switch (type) {
        case GET_USER:
            return {
                ...state,
                currentUser: payload
            }

        case DELETE_CURRENT_USER:
            return{
                ...state,
                currentUser: null
            }
        case SET_ERROR: {
            return{
                ...state,
                error:{
                    domElement: payload.domElement,
                    message: payload.message
                }
            }
        }
        case DELETE_ERROR: {
            return {
                ...state,
                error:{ 
                    domElement: null,
                    message: ''
                }
            }
        }
           
        default:
            return state;
    }
}

export default reducer