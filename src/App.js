import React from 'react';
import Navbar from './components/Layout/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Footer from './components/Layout/Footer.js';
import CineSharePost from './components/Posts/CineShare.js';
import ScrollToTop from './utils/ScrollToTop.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EugeniaBravo from './components/Posts/EugeniaBravo.js';
import ContactMePage from './pages/ContactMePage.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/contact-me' element={<ContactMePage/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/cineshare' element={<CineSharePost/>}/>
            <Route path='/projects/eugeniabravo' element={<EugeniaBravo/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;