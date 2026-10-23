import P1_Contact from '../p1_components/p1_contact/P1_Contact'
import Service from '../p1_components/p1_services/Service'
import P1_Team from '../p1_components/p1_team/P1_Team'
import P1_About from '../p1_components/p1_about/P1_About'
import P1_Focus, { P1_Highlights } from '../p1_components/p1_focus/P1_Focus'
import Title from '../p1_components/Title/Title'
import './Home.css'
import Horizontal_Scroll from '../Horizontal_Scroll/Horizontal_Scroll'

const Home = () => {
  return (
    <>
      <Horizontal_Scroll />
      <span id="main-anchor" aria-hidden="true" />

      <section className="home-section home-section--primary" aria-labelledby="about-heading">
        <div className="container">
          <Title headingId="about-heading" label="About ERA" subTitle="關於怡睿 — 設立理念" />
          <P1_About />
        </div>
      </section>

      <section className="home-section home-section--dark home-section--band" aria-label="本所實績">
        <div className="container">
          <P1_Highlights />
        </div>
      </section>

      <section className="home-section home-section--primary" aria-labelledby="focus-heading">
        <div className="container">
          <Title headingId="focus-heading" label="Who We Serve" subTitle="服務對象" />
          <P1_Focus />
        </div>
      </section>

      <section className="home-section home-section--secondary" aria-labelledby="services-heading">
        <div className="container">
          <Title headingId="services-heading" label="Practice Areas" subTitle="服務領域" />
          <Service />
        </div>
      </section>

      <section className="home-section home-section--primary" aria-labelledby="team-heading">
        <div className="container">
          <Title headingId="team-heading" label="Our People" subTitle="專業團隊" />
          <P1_Team />
        </div>
      </section>

      <section className="home-section home-section--dark" aria-labelledby="contact-heading">
        <div className="container">
          <Title headingId="contact-heading" label="Get in Touch" subTitle="聯絡我們" />
          <P1_Contact />
        </div>
      </section>
    </>
  )
}

export default Home
