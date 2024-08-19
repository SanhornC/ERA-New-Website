import React from 'react'
import Navbar_other from '../Navbar_other'
import './Advantage.css'
import Adv_about from './Advantage_components/Adv_about'
import Adv_record from './Advantage_components/Adv_record'
import Adv_special from './Advantage_components/Adv_special'

const Advantage = () => {
  return (
    <div>
      <Navbar_other />
      <div className='container'>
        <Adv_special />
        <Adv_about />
        <Adv_record />
      </div>
       
    </div>
  )
}

export default Advantage
