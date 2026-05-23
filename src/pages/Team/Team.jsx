import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import Lawyer_list from './team_components/Lawyer_list'

const Team = () => {
  return (
    <>
      <Helmet>
        <title>專業團隊 — 律師與顧問 | 怡睿國際法律事務所</title>
        <meta name="description" content="怡睿國際法律事務所團隊介紹 — 律師、智權顧問、財務顧問。" />
      </Helmet>
      <PageHero
        title="專業團隊"
        subtitle="Our People"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '專業團隊' }]}
      />
      <section className="section">
        <div className="container">
          <Lawyer_list />
        </div>
      </section>
    </>
  )
}

export default Team
