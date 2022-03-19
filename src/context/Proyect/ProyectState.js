import React, {useReducer} from 'react';
import axios from 'axios';

import ProyectReducer from './ProyectReducer';
import ProyectContext from './ProyectContext';


const Proyectstate = (props) => {
    
    const API = 'https://agile-tundra-44286.herokuapp.com/api/v1/';
    
    const initialState = {
        proyects: [],
        currentProyect: null
    }

    const [state, dispatch] = useReducer(ProyectReducer, initialState);


    const getProyects = async (jwt)=>{
        const config = {
            headers: { Authorization: `Bearer ${jwt}` }
        };
        return axios.get(`${API}proyect`, config)
                .then(response => dispatch({
                    type: 'GET_PROYECTS',
                    payload: response.data
                }))
                .catch(error => {throw error})        
    }      


    const setSelectedProyect = proyect =>{
        dispatch({
            type: 'SET_CURRENT_PROYECT',
            payload: proyect
        })
    }

    const newProyect = async(jwt) =>{
        const config = {
            headers: { Authorization: `Bearer ${jwt}` }
        };
        return axios.post(`${API}proyect`, {}, config)
            .then(response => dispatch({
                type: 'NEW_PROYECT',
                payload: response.data
            }))
    }


    const deleteProyect = async (id, jwt) =>{
        const config = {
            headers: { Authorization: `Bearer ${jwt}` }
        };
        return axios.delete(`${API}proyect/${id}`, config)
            .then(response => dispatch({
                type: 'DELETE_PROYECT',
                payload: response.data
            }))
    }


    const updateProyect = async (id, proyect, jwt) =>{
        const config = {
            headers: { Authorization: `Bearer ${jwt}` }
        };
        return axios.patch(`${API}proyect/${id}`, proyect, config)
        .then(response => dispatch({
            type: 'UPDATE_PROYECT',
            payload: response.data
        }))
        .then(response => alert("Se guardo correctamente"))
        .catch(error => alert('Algo malo paso'))
    }


    return (
        <ProyectContext.Provider value={{   
                proyects: state.proyects,
                currentProyect: state.currentProyect,
                getProyects,
                setSelectedProyect,
                newProyect,
                deleteProyect,
                updateProyect}} >
            {props.children}
        </ProyectContext.Provider>

    )

}

export default Proyectstate;
