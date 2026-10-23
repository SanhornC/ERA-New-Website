import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PageHero from '../../PageHero/PageHero'
import { getService, servicePath } from '../../../data/services'
import './LawyerProfile.css'

const LawyerProfile = ({
  name,
  englishName,
  role,
  img,
  imgAlt,
  imgWidth,
  imgHeight,
  imgFocus,
  sections = [],
  body = [],
  publications = [],
  practiceAreas = [],
}) => {
  return (
    <>
      <PageHero
        title={name}
        subtitle={role}
        breadcrumbs={[
          { to: '/', label: '首頁' },
          { to: '/team', label: '專業團隊' },
          { label: name },
        ]}
      />

      <section className="section lawyer-profile">
        <div className="container lawyer-profile__inner">
          <aside className="lawyer-profile__aside">
            <div className="lawyer-profile__media">
              <img
                src={img}
                alt={imgAlt || `${name} — ${role} — 怡睿國際法律事務所`}
                width={imgWidth}
                height={imgHeight}
                style={imgFocus ? { objectPosition: imgFocus } : undefined}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2 className="lawyer-profile__name">
              {name}
              {englishName && <span className="lawyer-profile__english" lang="en"> ({englishName})</span>}
            </h2>
            <span className="lawyer-profile__role">{role}</span>
            <Link to="/contactus" className="btn btn-primary lawyer-profile__back">預約諮詢</Link>
            <Link to="/team" className="btn btn-secondary lawyer-profile__back">← 回到團隊頁面</Link>
          </aside>

          <div className="lawyer-profile__body">
            {sections.map((section, i) => (
              <div key={i} className="lawyer-profile__section">
                <h3 className="lawyer-profile__heading">{section.label}</h3>
                <div className="section-divider" />
                {section.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}

            {body.length > 0 && (
              <div className="lawyer-profile__section">
                <h3 className="lawyer-profile__heading">執業概要</h3>
                <div className="section-divider" />
                {body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            )}

            {practiceAreas.length > 0 && (
              <div className="lawyer-profile__section">
                <h3 className="lawyer-profile__heading">主要服務領域</h3>
                <div className="section-divider" />
                <ul className="lawyer-profile__areas">
                  {practiceAreas.map(getService).map((service) => (
                    <li key={service.slug}>
                      <Link to={servicePath(service.slug)}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {publications.length > 0 && (
              <div className="lawyer-profile__section">
                <h3 className="lawyer-profile__heading">著作</h3>
                <div className="section-divider" />
                <ul className="lawyer-profile__pubs">
                  {publications.map((pub, i) => (
                    <li key={i}>{pub}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const profileSectionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  lines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
})

LawyerProfile.propTypes = {
  name: PropTypes.string.isRequired,
  englishName: PropTypes.string,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,
  imgFocus: PropTypes.string,
  sections: PropTypes.arrayOf(profileSectionShape),
  body: PropTypes.arrayOf(PropTypes.string.isRequired),
  publications: PropTypes.arrayOf(PropTypes.string.isRequired),
  practiceAreas: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default LawyerProfile
