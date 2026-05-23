import React from 'react'
import { Helmet } from 'react-helmet-async'
import './ServiceArea.css'
import PageHero from '../PageHero/PageHero'
import Nav_Service from './ServiceArea_components/Nav_Service'

const ServiceArea = () => {
  return (
    <>
      <Helmet>
        <title>服務領域 — 合約、智財、併購 | 怡睿國際法律事務所</title>
        <meta name="description" content="怡睿國際法律事務所服務領域 — 合約諮詢、智慧財產權、企業併購、新創公司、勞資、信託與遺產規劃。" />
      </Helmet>
      <PageHero
        title="服務領域"
        subtitle="Practice Areas"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '服務領域' }]}
      />
      <section className="section">
        <div className="container">
          <Nav_Service />
        </div>
      </section>
    </>
  )
}

export default ServiceArea
