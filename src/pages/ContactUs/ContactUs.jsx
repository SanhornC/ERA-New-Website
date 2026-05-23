import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import './ContactUs.css'
import Contact_Box from './Contact_Box/Contact_Box'
import Contact_Info from './Contact_Info/Contact_Info'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>聯絡我們 | 怡睿國際法律事務所</title>
        <meta name="description" content="聯絡怡睿國際法律事務所 — 服務據點位於新竹竹北。電話 03-551-5533 / Email attorneys@eralawfirm.com" />
      </Helmet>
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
      <section className="section section--compact contact-form-section">
        <div className="container">
          <Contact_Box />
        </div>
      </section>
    </>
  )
}

export default ContactUs
