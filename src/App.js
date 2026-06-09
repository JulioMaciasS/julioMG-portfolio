import React from 'react';
import Navbar from './components/Layout/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Services from './pages/Services.js';
import Footer from './components/Layout/Footer.js';
import CineSharePost from './components/Posts/CineShare.js';
import ScrollToTop from './utils/ScrollToTop.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EugeniaBravo from './components/Posts/EugeniaBravo.js';
import EugeniaBravoRebuild from './components/Posts/EugeniaBravoRebuild.js';
import ChatGPTLearn from './components/Posts/ChatGPTLearn.js';
import ContactMePage from './pages/ContactMePage.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import CookiePolicy from './pages/CookiePolicy.js';
import NotFound from './pages/NotFound.js';
import LangLayout from './components/Layout/LangLayout.js';
import CookieConsent from './components/Consent/CookieConsent.js';
import PageviewTracker from './components/Analytics/PageviewTracker.js';
import EasterEgg from './components/common/EasterEgg.js';
import FloatingContact from './components/Layout/FloatingContact.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <PageviewTracker/>
          <Routes>
            {/* Unprefixed (English / auto-detected) */}
            <Route path='/' element={<Home/>}/>
            <Route path='/contact-me' element={<ContactMePage/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/projects/chatgptlearn' element={<ChatGPTLearn/>}/>
            <Route path='/projects/cineshare' element={<CineSharePost/>}/>
            <Route path='/projects/eugeniabravo' element={<EugeniaBravo/>}/>
            <Route path='/projects/eugeniabravo-rebuild' element={<EugeniaBravoRebuild/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/cookie-policy' element={<CookiePolicy/>}/>

            {/* Language-prefixed (es / fr / ar) */}
            <Route path=':lang' element={<LangLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='contact-me' element={<ContactMePage/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='projects/chatgptlearn' element={<ChatGPTLearn/>}/>
              <Route path='projects/cineshare' element={<CineSharePost/>}/>
              <Route path='projects/eugeniabravo' element={<EugeniaBravo/>}/>
              <Route path='projects/eugeniabravo-rebuild' element={<EugeniaBravoRebuild/>}/>
              <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path='cookie-policy' element={<CookiePolicy/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
          <FloatingContact/>
          <CookieConsent/>
          <EasterEgg/>
      </Router>
    </>
  );
}

export default App;
