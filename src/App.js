import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Aboutme from './components/pages/Aboutme.js';
import Projects from './components/pages/Projects.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about-me' element={<Aboutme/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;