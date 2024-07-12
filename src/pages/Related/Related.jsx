import React from 'react'
import Navbar_other from '../Navbar_other'
import Title from '../p1_components/Title/Title'
import './Related.css'
import Related_Follow from './Related_components/Related_Follow/Related_Follow'
import Related_gallery from './Related_components/Related_gallery/Related_gallery'
import Related_links from './Related_components/Related_links'


const Related = () => {
  return (
    <div>
        <Navbar_other />
        <div className='container'>
            <Related_Follow />
            <Related_links />
            <Title subTitle='怡睿活動合集' />
            <Related_gallery />
        </div>
    </div>
  )
}

export default Related
