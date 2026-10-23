import { Link } from 'react-router-dom'
import { getService, servicePath } from '../../../data/services'
import './P1_Focus.css'

// Figures mirror the track record on the 本所優勢 page (Adv_record).
const highlights = [
  { value: '1997', unit: '起', label: '主持律師執業迄今' },
  { value: '2,000', unit: '+', label: '審閱修改之英文合約' },
  { value: '500', unit: '+', label: '跨國併購、投資及股份出售合約' },
  { value: '100', unit: '+', label: '協助股東會、董事會事務之科技公司' },
]

const clientGroups = [
  {
    title: '上市櫃公司',
    text: '上市櫃法規諮詢、股東會與董事會運作、審計及薪酬委員會，以及上市櫃與現金增資法律意見。',
    services: ['corporate-compliance', 'corporate-control'],
  },
  {
    title: '科技與半導體產業',
    text: '中英文合約審閱與談判、營業秘密與智慧財產權保護，以及美國出口管制法規（EAR）遵循。',
    services: ['contract-consulting', 'trade-secrets', 'us-export-controls'],
  },
  {
    title: '新創公司',
    text: '設立規劃、技術股與合資安排、募資談判、ESOP 員工認股，以及開曼等境外公司章程。',
    services: ['startup-legal-services', 'intellectual-property'],
  },
  {
    title: '跨國投資企業',
    text: '跨國併購與投資、台商對外投資、外資及陸資來台投資、境外控股公司規劃，以及協助尋找開曼、美國及日本等地律師。',
    services: ['mergers-acquisitions', 'cross-border-legal'],
  },
]

export const P1_Highlights = () => (
  <ul className="highlights">
    {highlights.map((item) => (
      <li className="highlights__item" key={item.label}>
        <span className="highlights__value">
          <span lang="en">{item.value}</span>
          <span className="highlights__unit">{item.unit}</span>
        </span>
        <span className="highlights__label">{item.label}</span>
      </li>
    ))}
  </ul>
)

const P1_Focus = () => (
  <div className="focus">
    <p className="focus__lead">
      怡睿國際法律事務所在新竹苗栗等科技產業紮根將近20年，深刻了解半導體產業（IC設計、半導體設備及半導體周邊產業）之各種交易型態，可縮短與科技產業客戶溝通之時程，並精準提供適切之服務。
    </p>

    <ul className="focus__grid">
      {clientGroups.map((group) => (
        <li className="focus-card" key={group.title}>
          <h3 className="focus-card__title">{group.title}</h3>
          <p className="focus-card__text">{group.text}</p>
          <ul className="focus-card__links">
            {group.services.map((slug) => (
              <li key={slug}>
                <Link to={servicePath(slug)}>{getService(slug).name}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <p className="focus__note">
      本所亦為個人及家族客戶處理
      <Link to={servicePath('trusts-estates')}>信託及遺產規劃</Link>
      與
      <Link to={servicePath('civil-criminal-litigation')}>一般民刑事案件</Link>
      。
    </p>
  </div>
)

export default P1_Focus
