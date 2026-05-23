import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import Title from '../p1_components/Title/Title'
import './Events.css'
import Events_list from './Events_components/Events_list'
import Event_photo from './Events_components/Event_photo'

const Events = () => {
  return (
    <>
      <Helmet>
        <title>活動資訊 — 演講與研討會 | 怡睿國際法律事務所</title>
        <meta name="description" content="怡睿國際法律事務所近期受邀演講、研討會與活動合集。" />
      </Helmet>
      <PageHero
        title="活動資訊"
        subtitle="Speaking & Events"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '活動資訊' }]}
      />
      <section className="section">
        <div className="container">
          <Events_list />
        </div>
      </section>
      <section className="section section--compact events-photos">
        <div className="container">
          <Title label="Gallery" subTitle="怡睿活動合集" />
        </div>
        <Event_photo />
      </section>
    </>
  )
}

export default Events
