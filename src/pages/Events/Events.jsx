import React from 'react'
import Navbar_other from '../Navbar_other'
import './Events.css'
import Events_list from './Events_components/Events_list'

const Events = () => {
  return (
    <div>
        <Navbar_other />
        <div className='container'>
            <Events_list />
        </div>
    </div>
  )
}

export default Events
