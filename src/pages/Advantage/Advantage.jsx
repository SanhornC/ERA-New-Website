import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import './Advantage.css'
import Adv_about from './Advantage_components/Adv_about'
import Adv_record from './Advantage_components/Adv_record'
import Adv_special from './Advantage_components/Adv_special'

const Advantage = () => {
  return (
    <>
      <Helmet>
        <title>本所優勢 | 怡睿國際法律事務所</title>
        <meta name="description" content="怡睿國際法律事務所特色與優勢，由主持律師親自參與，提供完整國際商業法律服務。" />
      </Helmet>
      <PageHero
        title="本所優勢"
        subtitle="Firm Advantages"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '本所優勢' }]}
      />
      <Adv_special />
      <Adv_about />
      <Adv_record />
    </>
  )
}

export default Advantage
