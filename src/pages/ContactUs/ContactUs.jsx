import React from 'react'
import Navbar_other from '../Navbar_other'
import P1_About from '../p1_components/p1_about/P1_About'
import './ContactUs.css'
import Contact_Box from './Contact_Box/Contact_Box'
import Contact_Info from './Contact_Info/Contact_Info'

const ContactUs = () => {
  return (
    <div>
      <Navbar_other />
      <div className='container'>
        <Contact_Info />
        <Contact_Box />
      </div>
    </div>
  )
}

export default ContactUs
