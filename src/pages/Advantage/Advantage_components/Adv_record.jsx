import { useRef, useState } from 'react'
import './Adv_record.css'

const sections = [
  {
    id: 1,
    title: '律師',
    goals: [
      { value: '1997起', description: '主持律師自1997年起執業，累積深厚法律實務經驗' },
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
  const tabRefs = useRef([])

  // Arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern).
  const handleTabKeyDown = (event, index) => {
    const last = sections.length - 1
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (next === undefined) return
    event.preventDefault()
    setCurrentSection(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="adv-record section" aria-labelledby="adv-record-heading">
      <div className="container">
        <div className="section-head--center">
          <span className="section-label" lang="en">Track Record</span>
          <h2 className="section-title" id="adv-record-heading">本所實績</h2>
          <div className="section-divider section-divider--center" />
        </div>

        <div className="adv-record__tabs" role="tablist" aria-label="本所實績分類">
          {sections.map((section, index) => (
            <button
              key={section.id}
              id={`adv-record-tab-${section.id}`}
              type="button"
              role="tab"
              aria-controls={`adv-record-panel-${section.id}`}
              aria-selected={index === currentSection}
              tabIndex={index === currentSection ? 0 : -1}
              ref={(el) => { tabRefs.current[index] = el }}
              className={`adv-record__tab ${index === currentSection ? 'is-active' : ''}`}
              onClick={() => setCurrentSection(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {sections.map((section, sectionIndex) => (
          <div
            id={`adv-record-panel-${section.id}`}
            className="adv-record__grid"
            role="tabpanel"
            aria-labelledby={`adv-record-tab-${section.id}`}
            hidden={sectionIndex !== currentSection}
            tabIndex={0}
            key={section.id}
          >
            {section.goals.map((goal) => (
              <div className="adv-record__card" key={`${goal.value}-${goal.description}`}>
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
        ))}
      </div>
    </section>
  )
}

export default Adv_record
