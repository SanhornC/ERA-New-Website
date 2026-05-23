import React from 'react'
import './Adv_special.css'
import trophy_img from '../../../assets/PIC/era-office/獎盃區.jpg'

const Adv_special = () => {
  return (
    <section className="adv-special section">
      <div className="container adv-special__inner">
        <div className="adv-special__media">
          <img
            src={trophy_img}
            alt="怡睿國際法律事務所獎盃區"
            className="adv-special__img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="adv-special__body">
          <span className="section-label">Firm Distinction</span>
          <h2 className="section-title">怡睿國際法律事務所 — 特色</h2>
          <div className="section-divider" />
          <p className="adv-special__text">
            <b>本所始終相信，專業的法律服務，除了能協助客戶解決法律爭端，更重要的是透過事先的詳盡規劃及布局，以盡可能降低未來的法律風險。</b>
          </p>
          <ol className="adv-special__list">
            <li>與客戶做充分溝通，參與客戶的商業規劃，以提供全面性的法律服務，協助客戶達成商業目的，並避免未來的法律爭端。</li>
            <li>基於過去豐富的經驗，本所不僅能協助客戶解決客戶所提出的問題，更能主動發掘客戶忽略的附隨相關問題，完善客戶的商業計畫。</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Adv_special
