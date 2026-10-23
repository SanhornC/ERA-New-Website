import PageHero from '../PageHero/PageHero'
import './ContactUs.css'
import Contact_Box from './Contact_Box/Contact_Box'
import Contact_Info from './Contact_Info/Contact_Info'
import Contact_Map from './Contact_Map/Contact_Map'

const ContactUs = () => {
  return (
    <>
      <PageHero
        title="聯絡我們"
        subtitle="Contact Us"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '聯絡我們' }]}
      />
      <section className="section">
        <div className="container">
          <Contact_Info />
        </div>
      </section>
      <section className="section section--compact contact-map-section">
        <div className="container">
          <Contact_Map />
        </div>
      </section>
      <section className="section section--compact contact-form-section">
        <div className="container">
          <Contact_Box />
        </div>
      </section>
    </>
  )
}

export default ContactUs
