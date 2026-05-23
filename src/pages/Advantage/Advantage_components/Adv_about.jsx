import React from 'react'
import './Adv_about.css'

const advantages = [
  '各項案件，均由擁有豐富經驗的主持律師親自參與，以確保服務品質，並提供適切及成熟之策略。',
  '本所擁有長期合作的國內外專業團隊及人脈，能針對不同個案需求，彈性機動啟用資源，提供完整服務。',
  '豐富的中英文法律服務經驗，能協助客戶處理跨國商業事宜。',
  '在新竹苗栗等科技產業紮根將近20年，深刻了解半導體產業（IC設計、半導體設備及半導體周邊產業）之各種交易型態，可縮短與科技產業客戶溝通之時程，並精準提供適切之服務。',
  '長期提供公司事務之顧問服務，並熟稔科技公司之內部運作，可有效提供科技公司相關諮詢服務。',
  '誠信經營，貼心服務，深入研究客戶需求，提供終局解決客戶難題之解決方案，與客戶建立相互信任及良好的長期合作關係。',
]

const Adv_about = () => {
  return (
    <section className="adv-about section" aria-labelledby="adv-about-heading">
      <div className="container">
        <div className="section-head--center">
          <span className="section-label">Why ERA</span>
          <h2 className="section-title" id="adv-about-heading">我們的優勢</h2>
          <div className="section-divider section-divider--center" />
        </div>
        <ul className="adv-grid">
          {advantages.map((title, index) => (
            <li className="adv-grid__card" key={index}>
              <span className="adv-grid__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Adv_about
