import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Lawyer_list.css'
import lawyer_1 from './../../../assets/person/Joy.jpg'
import lawyer_2 from './../../../assets/person/黃炫中照片1.jpg'
import lawyer_3 from './../../../assets/person/Sherry.jpg'
import consultant_1 from './../../../assets/person/Henry.jpg'
import consultant_2 from './../../../assets/person/Anna.jpg'
import consultant_3 from './../../../assets/person/余昱辰照片.jpg'
import consultant_4 from './../../../assets/person/周庭卉照片.jpg'
import consultant_5 from './../../../assets/person/楊佩雯2.jpg'

const lawyers = [
  { id: 1, name: '林秀怡', level: '主持律師', img: lawyer_1, width: 378, height: 568 },
  { id: 2, name: '王承舜', level: '合作美國加州律師', img: lawyer_3, width: 1134, height: 1443 },
  { id: 3, name: '黃炫中', level: '合作律師', img: lawyer_2, width: 2448, height: 3264, focus: 'center 78%' },
]

const consultants = [
  { id: 1, name: '余昱辰', level: '智權顧問', img: consultant_3, width: 319, height: 406 },
  { id: 2, name: '徐弘光', level: '智權資深顧問', img: consultant_1, width: 269, height: 323 },
  { id: 3, name: '許華珍', level: '智權顧問', img: consultant_2, width: 416, height: 474 },
]

const finance_consultants = [
  { id: 1, name: '周庭卉', level: '財務顧問', img: consultant_4, width: 1335, height: 1227 },
  { id: 2, name: '楊佩文', level: '顧問', img: consultant_5, width: 1279, height: 1279 },
]

const personShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  focus: PropTypes.string,
})

export const LawyerGroup = ({ heading, label, people, linkable = false }) => (
  <div className="lawyer-group">
    <div className="lawyer-group__head">
      <span className="section-label" lang="en">{label}</span>
      <h2 className="lawyer-group__title">{heading}</h2>
      <div className="section-divider" />
    </div>
    <ul className="lawyer-grid">
      {people.map((p) => {
        const card = (
          <>
            <div className="lawyer-card__media">
              <img
                src={p.img}
                alt={linkable ? '' : `${p.name} — ${p.level} — 怡睿國際法律事務所`}
                width={p.width}
                height={p.height}
                style={p.focus ? { objectPosition: p.focus } : undefined}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lawyer-card__body">
              <h3 className="lawyer-card__name">{p.name}</h3>
              <span className="lawyer-card__role">{p.level}</span>
            </div>
          </>
        )
        return (
          <li
            key={p.id}
            className={`lawyer-card${linkable ? ' lawyer-card--interactive' : ''}`}
          >
            {linkable
              ? (
                <Link
                  to={`/lawyer/${p.id}`}
                  aria-label={`查看 ${p.name}（${p.level}）的介紹`}
                >
                  {card}
                </Link>
              )
              : <div>{card}</div>}
          </li>
        )
      })}
    </ul>
  </div>
)

LawyerGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(personShape).isRequired,
  linkable: PropTypes.bool,
}

const LawyerList = () => {
  return (
    <div className="lawyers">
      <LawyerGroup heading="律師" label="Attorneys" people={lawyers} linkable />
      <LawyerGroup heading="智權顧問" label="IP Consultants" people={consultants} />
      <LawyerGroup heading="顧問" label="Advisors" people={finance_consultants} />
    </div>
  )
}

export default LawyerList
