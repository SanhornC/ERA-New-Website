import React from 'react'
import Navbar_other from '../Navbar_other'
import Title from '../p1_components/Title/Title'
import './Events.css'
import Events_list from './Events_components/Events_list'
import Event_photo from './Events_components/Event_photo'

const Events = () => {
  return (
    <div>
        <Navbar_other />
        <div className='container'>
            <Events_list />
            <Title subTitle='怡睿活動合集' />
            <Event_photo />
        </div>
    </div>
  )
}

export default Events
