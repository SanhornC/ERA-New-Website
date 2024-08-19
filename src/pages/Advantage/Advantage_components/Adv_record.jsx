import React from 'react'
import { useState } from 'react'
import './Adv_record.css'

const sections = [
    {
      id: 1,
      title: '律師',
      goals: [
        { value: '27年', description: '主持律師擁有長達27年的執業經驗' },
        { value: '創下司法紀錄', description: '處理併購案件之異議股東股份收買請求權案件，並創下司法紀錄', sub: '新聞：https://www.businesstoday.com.tw/article/category/80395/post/201808080038/' },
      ],
    },
    {
      id: 2,
      title: '合約/投資協議',
      goals: [
        { value: '2000↑', description: '審閱修改過數以千計的英文合約並協助跨國談判' },
        { value: '500↑', description: '審閱過數以百計的跨國併購、投資、股份出售合約' },
        { value: '50↑', description: '協助數十家新創公司相關新創事務、募資相關合約之撰寫或修改' },
        { value: '20↑', description: '協助十家以上開曼公司修改章程及相關特別股投資協議' },
      ],
    },
    {
      id: 3,
      title: '科技公司',
      goals: [
        { value: '100↑', description: '協助數百家科技公司進行股東會、董事會相關事宜' },
        { value: '30↑', description: '協助數十家科技公司進行員工認股權相關辦法及合約之進行' },
        { value: '100↑', description: '提供數百家科技公司進行跨國法律之諮詢' },
        { value: '10↑', description: '協助數家科技公司進行員工股份信託之相關建置安排' },
        { value: '10↑', description: '提供數家科技公司進行上市櫃法律意見、現金增資法律意見' },
      ],
    },
  ];


const Adv_record = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const handlePrevClick = () => {
      setCurrentSection((prevSection) =>
        prevSection === 0 ? sections.length - 1 : prevSection - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1
      );
    };

  return (
    <div className="record-page">
      <h2 className="record-title">本所實績</h2>
      <div className="record-tab-navigation">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`record-tab-button ${index === currentSection ? 'active' : ''}`}
            onClick={() => setCurrentSection(index)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="record-sections">
        {sections[currentSection].goals.map((goal, index) => (
          <div className="record-card" key={index}>
            <div className="record-value">{goal.value}</div>
            <div className="record-description">
                {goal.description}
            </div>
            {goal.sub && <div className="record-sub">{goal.sub}</div>}
            {goal.sub2 && <div className="record-sub">{goal.sub2}</div>}
            {goal.sub3 && <div className="record-sub">{goal.sub3}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Adv_record
