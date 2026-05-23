import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../PageHero/PageHero'
import './LawyerProfile.css'

const LawyerProfile = ({
  name,
  englishName,
  role,
  img,
  imgAlt,
  sections = [],
  body = [],
  publications = [],
}) => {
  const title = `${name}${role ? ` — ${role}` : ''}`

  return (
    <>
      <Helmet>
        <title>{`${title} | 怡睿國際法律事務所`}</title>
        <meta
          name="description"
          content={`${name}${englishName ? ` (${englishName})` : ''} — ${role}，怡睿國際法律事務所。`}
        />
      </Helmet>
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
              <img src={img} alt={imgAlt || `${name} — ${role} — 怡睿國際法律事務所`} loading="lazy" decoding="async" />
            </div>
            <h2 className="lawyer-profile__name">
              {name}
              {englishName && <span className="lawyer-profile__english" lang="en"> ({englishName})</span>}
            </h2>
            <span className="lawyer-profile__role">{role}</span>
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

export default LawyerProfile
