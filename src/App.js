import React  from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/NotFound';
import Signup from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Home/>} />
        <Route  exact path='/login' element={<Login/>} />
        <Route  exact path='/register' element={<Signup/>} />
        <Route  path='*' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
