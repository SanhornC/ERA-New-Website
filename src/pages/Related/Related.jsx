import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import './Related.css'
import Related_Follow from './Related_components/Related_Follow/Related_Follow'
import Related_links from './Related_components/Related_links'

const Related = () => {
  return (
    <>
      <Helmet>
        <title>相關內容 | 怡睿國際法律事務所</title>
        <meta name="description" content="怡睿國際法律事務所相關連結、追蹤社群與法律資源。" />
      </Helmet>
      <PageHero
        title="相關內容"
        subtitle="Resources"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '相關內容' }]}
      />
      <section className="section">
        <div className="container">
          <Related_Follow />
          <Related_links />
        </div>
      </section>
    </>
  )
}

export default Related
