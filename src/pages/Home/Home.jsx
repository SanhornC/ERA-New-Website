import React from 'react'
import Hero from '../p1_components/Hero/Hero'
import P1_Contact from '../p1_components/p1_contact/P1_Contact'
import Service from '../p1_components/p1_services/Service'
import P1_Team from '../p1_components/p1_team/P1_Team'
import P1_About from '../p1_components/p1_about/P1_About'
import Title from '../p1_components/Title/Title'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Hero />
        <div className='container'>
            <Title subTitle='關於怡睿 - 專務所相關介紹' />
            <P1_About />
            <Title subTitle='服務領域' />
            <Service />
            <Title subTitle='專業團隊' />
            <P1_Team />
            <Title subTitle='聯絡我們' />
            <P1_Contact />
        </div>
    </div>
  )
}

export default Home
