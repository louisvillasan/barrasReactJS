import React, {useReducer} from 'react';
// import {useNavigate} from 'react-router-dom';

import axios from 'axios';



import UserContext from './UserContext.js';
import UserReducer from './UserReducer.js';

const UserState = (props)=>{

    const API = 'https://agile-tundra-44286.herokuapp.com/api/v1/';

    const initialState = {
        currentUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getLocaleUser = async ()=>{
        return new Promise((res,rej)=>{
            res(localStorage.getItem('user'));
            rej("No tengo usuario");
        });
    }

    const setCurrentUser = () =>{
        return getLocaleUser()
            .then(response => {dispatch({
                type: 'GET_USER',
                payload: response
            }); return response} )
    }

    const setLocalDataUser = async (data) =>{
        localStorage.setItem('user', JSON.stringify(data));
    }

    const login = async (email,password)=>{
        return axios.post(`${API}auth/login`, {email, password})
            .then(response => {setLocalDataUser(response.data); return response.data})
            .then(response => {dispatch({
                type: 'GET_USER',
                payload: JSON.stringify(response)
            }); return response})
    }

    const signUp = async (email,password, passwordcp)=>{
            return axios.post(`${API}user`, {email, password})
            .then(response  => {setLocalDataUser(response.data); return response.data})
            .then(response => { 
                    dispatch({
                        type: 'GET_USER',
                        payload: JSON.stringify(response)
                    }); 
                    return response 
                });
    }

    const logout = ()=>{
        dispatch({
            type: 'DELETE_CURRENT_USER'
        })
        localStorage.removeItem('user');
        
    }


    


    return (
        <UserContext.Provider value={{
            currentUser: state.currentUser,
            login,
            signUp,
            logout,
            setCurrentUser,
            getLocaleUser

        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;