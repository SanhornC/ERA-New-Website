import React from 'react'
import Navbar_other from '../../Navbar_other'
import Lawyer from './Lawyer'
import Other_Lawyer from './Other_Lawyer'

const MLawyer = () => {
  return (
    <div>
      <Navbar_other />
      <div className='container'>
        <Lawyer />
      </div>
    </div>
  )
}

export default MLawyer
