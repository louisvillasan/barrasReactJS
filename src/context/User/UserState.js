import React, {useReducer} from 'react';
// import {useNavigate} from 'react-router-dom';

import axios from 'axios';



import UserContext from './UserContext.js';
import UserReducer from './UserReducer.js';

const UserState = (props)=>{

    const API = 'https://agile-tundra-44286.herokuapp.com/api/v1/';

    const initialState = {
        currentUser: null,
        error: {
            domElement: null,
            message: '',

        }
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getLocaleUser = async ()=>{
        return new Promise((res,rej)=>{
            res(localStorage.getItem('user'));
            rej("No tengo usuario");
        });
    }

    const setCurrentUser = async () =>{
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

        return (email !=='' && password!=='')
            ?   axios.post(`${API}auth/login`, {email, password})
                    .then(response => {setLocalDataUser(response.data); return response.data})
                    .then(response => {dispatch({
                        type: 'GET_USER',
                        payload: JSON.stringify(response)
                    }); return response})
                    .catch(e => {dispatch({
                        type: 'SET_ERROR',
                        payload: {
                            domElement: 'Login',
                            message: 'Wrong email or password'
                        }
                        })
                    })
            : dispatch({
                type: 'SET_ERROR',
                        payload: {
                            domElement: 'Login',
                            message: 'Write and email or password please'
                        }
            });
    }

        

    const signUp = async (email,password, passwordcp)=>{
        return (email !=='' && password!==''  && password === passwordcp)
            ?   axios.post(`${API}user`, {email, password})
                    .then(response  => {setLocalDataUser(response.data); return response.data})
                    .then(response => { 
                            dispatch({
                                type: 'GET_USER',
                                payload: JSON.stringify(response)
                            }); 
                            return response 
                        })
                    .catch(e => {dispatch({
                        type: 'SET_ERROR',
                        payload: {
                            domElement: 'SignUp',
                            message: 'Use another Email please or try it later'
                        }
                        })
                    })
            : dispatch({
                type: 'SET_ERROR',
                        payload: {
                            domElement: 'SignUp',
                            message: 'Complete all the fields please, or check your passwords'
                        }
            });
    }

    const logout = ()=>{
        dispatch({
            type: 'DELETE_CURRENT_USER'
        })
        localStorage.removeItem('user');
        
    }

    const clearError = ()=>{
        setTimeout(()=>{
            dispatch({
                type: 'DELETE_ERROR'
            })
        }, 5000)
    }


    


    return (
        <UserContext.Provider value={{
            currentUser: state.currentUser,
            error: state.error,
            login,
            signUp,
            logout,
            setCurrentUser,
            getLocaleUser,
            clearError

        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;