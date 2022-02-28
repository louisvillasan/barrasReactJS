import React  from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'
import UserState from './context/User/UserState.js';
//Pages and Components

import Login from './pages/Login';
import Notfound from './pages/NotFound';
import Signup from './pages/SignUp';

// Styles
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <CookiesProvider>
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/login' element={<Login/>} />
            <Route  exact path='/register' element={<Signup/>} />
            <Route  path='*' element={<Notfound/>} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </CookiesProvider>
  );
}

export default App;
