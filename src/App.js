import './App.css';
import Nav from './My Components/Nav'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './My Components/LogBody/Body';
import ContextProvider from './context/ContextProvider';
function App() {
  return (
    <>
    <BrowserRouter>
    <ContextProvider>
    <Nav isLog={false}/>
    <Routes>

    <Route path='/' element={<Body/>}/>

    </Routes>
    </ContextProvider>
    </BrowserRouter>

    </>
  )
  }

export default App;
