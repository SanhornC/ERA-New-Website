import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './P1_Team.css'
import user_1 from '../../../assets/person/Joy.jpg'
import user_2 from '../../../assets/person/Henry.jpg'
import user_3 from '../../../assets/person/Anna.jpg'
import user_4 from '../../../assets/person/黃炫中照片1.jpg'
import user_5 from '../../../assets/person/余昱辰照片.jpg'
import user_6 from '../../../assets/person/周庭卉照片.jpg'
import user_7 from '../../../assets/person/楊佩雯2.jpg'
import user_8 from '../../../assets/person/Sherry.jpg'

const members = [
  {
    img: user_1, name: '林秀怡', role: '主持律師', link: '/lawyer/1',
    body: '林秀怡律師自1997年起執行法律業務迄今，專長領域包含公司海內外投資、併購、上市櫃法令、證券相關特許事業法規遵循、勞工、專利、著作權、合約審閱及一般公司法務諮詢。由於林律師於國際性事務所服務長達十五年，所以對於處理英文合約暨與外商交涉，經驗豐富。',
  },
  {
    img: user_8, name: '王承舜', role: '合作美國加州律師', link: '/lawyer/2',
    sections: [
      { label: '學歷', lines: ['國立政治大學法律學系學士', '美國伊利諾大學香檳分校法學碩士'] },
      { label: '法律執照', lines: ['New York Bar: Admitted in 2007', 'California Bar: Admitted in 2015'] },
    ],
  },
  {
    img: user_4, name: '黃炫中', role: '律師', link: '/lawyer/3',
    sections: [
      { label: '學歷', lines: ['國立台灣大學法律系學士', '國立中興大學科技法律研究所碩士'] },
      { label: '經歷', lines: ['前臺灣高等法院法官', '前臺灣臺中地方法院法官'] },
    ],
  },
  {
    img: user_5, name: '余昱辰', role: '智權顧問',
    sections: [
      { label: '經歷', lines: [
        '2014第一屆總統創新獎：專利服務創新',
        '工研院光電所、電光所LED組 - 專利經理 (1999-2014)',
        '威爾立國際智權顧問有限公司總經理 (2015-2017)',
        '嘉興山蒲照明電器有限公司 - IP與法務中心負責人 (2018-2023/02)',
      ] },
    ],
  },
  {
    img: user_2, name: '徐弘光', role: '智權資深顧問',
    sections: [
      { label: '學歷', lines: ['國立台灣大學機械工程碩士', '國立政治大學科技管理碩士'] },
    ],
  },
  {
    img: user_3, name: '許華珍', role: '智權顧問',
    sections: [
      { label: '學歷', lines: ['國立中央大學物理學系學士', '國立中央大學光電研究所碩士'] },
    ],
  },
  {
    img: user_6, name: '周庭卉', role: '財務顧問',
    sections: [
      { label: '學歷', lines: ['銘傳管理學院會計系學士', '國立交通大學管理科學研究所碩士'] },
      { label: '經歷', lines: [
        '光頡科技股份有限公司資深經理 (2006-2015)',
        '光磊科技股份有限公司稽核經理 (2015-2017)',
        '錼創科技股份有限公司財會處處長 (2017 - 迄今)',
      ] },
    ],
  },
  {
    img: user_7, name: '楊佩文', role: '顧問',
    sections: [
      { label: '學歷', lines: ['私立輔仁大學法學士', '國立交通大學科技法律研究所碩士', '美國印第安那大學法學碩士'] },
    ],
  },
]

const P1_Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  }

  return (
    <div className="team-carousel">
      <Slider {...settings}>
        {members.map((m, idx) => (
          <div key={idx} className="team-slide">
            <article className="team-card">
              <div className="team-card__media">
                <img src={m.img} alt={`${m.name} — ${m.role} — 怡睿國際法律事務所`} loading="lazy" decoding="async" />
              </div>
              <div className="team-card__body">
                <div className="team-card__name-row">
                  <h3 className="team-card__name">
                    {m.link
                      ? <Link to={m.link} className="team-card__name-link" aria-label={`查看 ${m.name} ${m.role} 的介紹頁面`}>{m.name}</Link>
                      : m.name}
                  </h3>
                  <span className="team-card__role">{m.role}</span>
                </div>
                {m.body && <p className="team-card__text">{m.body}</p>}
                {m.sections && m.sections.map((s, i) => (
                  <div key={i} className="team-card__section">
                    <h4 className="team-card__section-label">{s.label}</h4>
                    {s.lines.map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                ))}
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default P1_Team
