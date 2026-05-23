import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Advantage from './pages/Advantage/Advantage'
import ContactUs from './pages/ContactUs/ContactUs'
import Events from './pages/Events/Events'
import Event1 from './pages/Events/Events_components/Event1'
import Event2 from './pages/Events/Events_components/Event2'
import Event3 from './pages/Events/Events_components/Event3'
import Event4 from './pages/Events/Events_components/Event4'
import Event5 from './pages/Events/Events_components/Event5'
import Event6 from './pages/Events/Events_components/Event6'
import Event7 from './pages/Events/Events_components/Event7'
import Event8 from './pages/Events/Events_components/Event8'
import Event9 from './pages/Events/Events_components/Event9'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar'
import Related from './pages/Related/Related'
import ServiceArea from './pages/ServiceArea/ServiceArea'
import Lawyer_Huang from './pages/Team/Lawyer/Lawyer_Huang'
import Lawyer_Wang from './pages/Team/Lawyer/Lawyer_Wang'
import Team from './pages/Team/Team'
import MLawyer from './pages/Team/team_components/MLawyer'
import NotFound from './pages/NotFound/NotFound'
import Privacy from './pages/Legal/Privacy'
import Terms from './pages/Legal/Terms'
import { ScrollRestoration, ScrollToTopButton } from './pages/ScrollToTop'

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollRestoration />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Advantage />} />
            <Route path="/services" element={<ServiceArea />} />
            <Route path="/team" element={<Team />} />
            <Route path="/lawyer/1" element={<MLawyer />} />
            <Route path="/lawyer/2" element={<Lawyer_Wang />} />
            <Route path="/lawyer/3" element={<Lawyer_Huang />} />
            <Route path="/related" element={<Related />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/1" element={<Event1 />} />
            <Route path="/events/2" element={<Event2 />} />
            <Route path="/events/3" element={<Event3 />} />
            <Route path="/events/4" element={<Event4 />} />
            <Route path="/events/5" element={<Event5 />} />
            <Route path="/events/6" element={<Event6 />} />
            <Route path="/events/7" element={<Event7 />} />
            <Route path="/events/8" element={<Event8 />} />
            <Route path="/events/9" element={<Event9 />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </HelmetProvider>
  )
}

export default App
