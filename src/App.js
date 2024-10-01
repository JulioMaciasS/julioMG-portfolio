import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Aboutme from './components/pages/Aboutme.js';
import Projects from './components/pages/Projects.js';
import Footer from './components/Footer.js';
import CineSharePost from './components/Posts/CineShare.js';
import ScrollToTop from './utils/ScrollToTop.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about-me' element={<Aboutme/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/cineshare-post' element={<CineSharePost/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;