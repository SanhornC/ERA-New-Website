import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Advantage from './pages/Advantage/Advantage';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar'
import Related from './pages/Related/Related';
import ServiceArea from './pages/ServiceArea/ServiceArea';

import Team from './pages/Team/Team';


const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/ERA-New-Website" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Advantage />} />
          <Route path="/services" element={<ServiceArea />} />
          <Route path="/team" element={<Team />} />
          <Route path="/related" element={<Related />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
