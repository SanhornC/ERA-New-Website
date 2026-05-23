import React from 'react'
import { Helmet } from 'react-helmet-async'
import P1_Contact from '../p1_components/p1_contact/P1_Contact'
import Service from '../p1_components/p1_services/Service'
import P1_Team from '../p1_components/p1_team/P1_Team'
import P1_About from '../p1_components/p1_about/P1_About'
import Title from '../p1_components/Title/Title'
import './Home.css'
import Horizontal_Scroll from '../Horizontal_Scroll/Horizontal_Scroll'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>怡睿國際法律事務所 | 國際商業法律服務 | 新竹竹北</title>
        <meta name="description" content="怡睿國際法律事務所由林秀怡律師於2013年創立，專精國際商業法律、合約審閱、智慧財產權、企業併購及新創公司法律服務。" />
      </Helmet>
      <Horizontal_Scroll />
      <span id="main-anchor" aria-hidden="true" />

      <section className="home-section home-section--primary" aria-labelledby="about-heading">
        <div className="container">
          <Title label="About ERA" subTitle="關於怡睿 — 設立理念" />
          <P1_About />
        </div>
      </section>

      <section className="home-section home-section--secondary" aria-labelledby="services-heading">
        <div className="container">
          <Title label="Practice Areas" subTitle="服務領域" />
          <Service />
        </div>
      </section>

      <section className="home-section home-section--primary" aria-labelledby="team-heading">
        <div className="container">
          <Title label="Our People" subTitle="專業團隊" />
          <P1_Team />
        </div>
      </section>

      <section className="home-section home-section--dark" aria-labelledby="contact-heading">
        <div className="container">
          <Title label="Get in Touch" subTitle="聯絡我們" />
          <P1_Contact />
        </div>
      </section>
    </>
  )
}

export default Home
