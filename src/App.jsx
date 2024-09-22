import React from 'react';
import './App.css';
import './bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Landing from './pages/Landing';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;