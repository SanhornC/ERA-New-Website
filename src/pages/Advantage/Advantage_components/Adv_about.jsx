import React from 'react'
import './Adv_about.css'

const advantages = [
    {
        title: '各項案件，均由擁有豐富經驗的主持律師親自參與，以確保服務品質，並提供適切及成熟之策略。',
        description: '',
      },
      {
        title: '本所擁有長期合作的國內外專業團隊及人脈，能針對不同個案需求，彈性機動啟用資源，提供完整服務。',
        description: '',
      },
      {
        title: '豐富的中英文法律服務經驗，能協助客戶處理跨國商業事宜。',
        description: '',
      },
      {
        title: '在新竹苗栗等科技產業紮根將近20年，深刻了解半導體產業（IC設計、半導體設備及半導體周邊產業）之各種交易型態，可縮短與科技產業客戶溝通之時程，並精準提供適切之服務',
        description: '',
      },
      {
        title: '長期提供公司事務之顧問服務，並熟稔科技公司之內部運作，可有效提供科技公司相關諮詢服務',
        description: '',
      },
      {
        title: '誠信經營，貼心服務，深入研究客戶需求，提供終局解決客戶難題之解決方案，與客戶建立相互信任及良好的長期合作關係。',
        description: '',
      },
];

const Adv_about = () => {
  return (
    <div className="advantage-page">
      <h2 className="page-title">我們的優勢</h2>
      <div className="advantage-grid">
        {advantages.map((advantage, index) => (
          <div className="advantage-card" key={index}>
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Adv_about
