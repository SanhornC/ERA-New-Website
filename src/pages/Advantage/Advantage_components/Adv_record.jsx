import React, { useState } from 'react'
import './Adv_record.css'

const sections = [
  {
    id: 1,
    title: '律師',
    goals: [
      { value: '27年', description: '主持律師擁有長達27年的執業經驗' },
      { value: '創下司法紀錄', description: '處理併購案件之異議股東股份收買請求權案件，並創下司法紀錄', sub: 'https://www.businesstoday.com.tw/article/category/80395/post/201808080038/' },
    ],
  },
  {
    id: 2,
    title: '合約／投資協議',
    goals: [
      { value: '2,000+', description: '審閱修改過數以千計的英文合約並協助跨國談判' },
      { value: '500+',   description: '審閱過數以百計的跨國併購、投資、股份出售合約' },
      { value: '50+',    description: '協助數十家新創公司相關新創事務、募資相關合約之撰寫或修改' },
      { value: '20+',    description: '協助十家以上開曼公司修改章程及相關特別股投資協議' },
    ],
  },
  {
    id: 3,
    title: '科技公司',
    goals: [
      { value: '100+', description: '協助數百家科技公司進行股東會、董事會相關事宜' },
      { value: '30+',  description: '協助數十家科技公司進行員工認股權相關辦法及合約之進行' },
      { value: '100+', description: '提供數百家科技公司進行跨國法律之諮詢' },
      { value: '10+',  description: '協助數家科技公司進行員工股份信託之相關建置安排' },
      { value: '10+',  description: '提供數家科技公司進行上市櫃法律意見、現金增資法律意見' },
    ],
  },
]

const Adv_record = () => {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <section className="adv-record section" aria-labelledby="adv-record-heading">
      <div className="container">
        <div className="section-head--center">
          <span className="section-label">Track Record</span>
          <h2 className="section-title" id="adv-record-heading">本所實績</h2>
          <div className="section-divider section-divider--center" />
        </div>

        <div className="adv-record__tabs" role="tablist">
          {sections.map((section, index) => (
            <button
              key={section.id}
              role="tab"
              aria-selected={index === currentSection}
              className={`adv-record__tab ${index === currentSection ? 'is-active' : ''}`}
              onClick={() => setCurrentSection(index)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="adv-record__grid" role="tabpanel">
          {sections[currentSection].goals.map((goal, index) => (
            <div className="adv-record__card" key={index}>
              <div className="adv-record__value">{goal.value}</div>
              <div className="adv-record__divider" aria-hidden="true" />
              <p className="adv-record__desc">{goal.description}</p>
              {goal.sub && (
                <a
                  className="adv-record__sub"
                  href={goal.sub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  新聞連結
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Adv_record
