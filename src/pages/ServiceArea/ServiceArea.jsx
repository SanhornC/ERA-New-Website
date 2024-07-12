import React from 'react'
import './ServiceArea.css'
import Navbar_other from '../Navbar_other'
import Nav_Service from './ServiceArea_components/Nav_Service'

const ServiceArea = () => {
  return (
    <div>
        <Navbar_other />
        <div className='container'>
            <Nav_Service/>
        </div>
    </div>
  )
}

export default ServiceArea
