import {GET_PROYECTS, NEW_PROYECT,
        DELETE_PROYECT, UPDATE_PROYECT,
        SET_CURRENT_PROYECT} from '../types';

const reducer = (state, action) =>{
    const {payload, type} = action;

    switch (type) {
        case GET_PROYECTS:
            return {
                ...state,
                proyects: payload
            }
        case SET_CURRENT_PROYECT:
            return {
                ...state,
                currentProyect: payload
            }

        case NEW_PROYECT:
            return {
                proyects: [...state.proyects, payload],
                currentProyect: payload
            }
        case DELETE_PROYECT:
            const newProyects = state.proyects.filter((proyect)=>
            parseInt(payload.id) !== proyect.id)
            return {
                ...state,
                proyects: newProyects
            }

        case UPDATE_PROYECT:
            const updatedProyects = state.proyects.map(proyect=>{
                return (parseInt(payload.id)=== proyect.id)
                    ? payload 
                    : proyect
            })

            return {
                ...state,
                proyects: updatedProyects
            }
    
        default:
            return state;
    }

}


export default reducer