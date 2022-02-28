import {GET_USER, DELETE_CURRENT_USER} from '../types.js'



const reducer = (state, action) =>{
    const {payload, type} = action;

    switch (type) {
        case GET_USER:
            return {
                currentUser: payload
            }

        case DELETE_CURRENT_USER:
            return{
                currentUser: null
            }
           
        default:
            return state;
    }
}

export default reducer