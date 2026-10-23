import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PageHero from '../PageHero/PageHero'
import { firm, fullAddress } from '../../data/firm'
import { getService, servicePath } from '../../data/services'
import './ServiceDetail.css'

const ServiceDetail = ({ slug }) => {
  const service = getService(slug)
  const relatedServices = service.related.map(getService).filter(Boolean)

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.englishName}
        breadcrumbs={[
          { to: '/', label: '首頁' },
          { to: '/services', label: '服務領域' },
          { label: service.name },
        ]}
      />

      <section className="section service-detail">
        <div className="container service-detail__inner">
          <div className="service-detail__main">
            <p className="service-detail__tagline">{service.tagline}</p>
            <div className="service-detail__intro">
              {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <h2 className="service-detail__heading">服務項目</h2>
            <div className="section-divider" />
            <ol className="service-items">
              {service.items.map((item, index) => (
                <li className="service-items__item" key={item.text}>
                  <span className="service-items__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="service-items__text">{item.text}</h3>
                    {item.details && (
                      <ul className="service-items__details">
                        {item.details.map((detail) => (
                          <li key={detail} lang={/^[\x20-\x7E]+$/.test(detail) ? 'en' : undefined}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>

          </div>

          <aside className="service-detail__aside" aria-label="預約諮詢">
            <div className="service-cta">
              <span className="section-label" lang="en">Consultation</span>
              <h2 className="service-cta__title">聯絡本所</h2>
              <p className="service-cta__text">
                如需「{service.name}」相關法律服務，歡迎來電、來信或透過線上表單與本所聯繫。
              </p>
              <dl className="service-cta__list">
                <div>
                  <dt>電話</dt>
                  <dd><a href={firm.phoneHref} lang="en">{firm.phone}</a></dd>
                </div>
                <div>
                  <dt>信箱</dt>
                  <dd><a href={`mailto:${firm.email}`} lang="en">{firm.email}</a></dd>
                </div>
                <div>
                  <dt>地址</dt>
                  <dd>{fullAddress}</dd>
                </div>
              </dl>
              <Link to="/contactus" className="btn btn-accent service-cta__btn">線上諮詢表單</Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section section--compact service-related" aria-labelledby="service-related-heading">
          <div className="container">
            <div className="section-head--center">
              <span className="section-label" lang="en">Related Practice Areas</span>
              <h2 className="section-title" id="service-related-heading">相關服務領域</h2>
              <div className="section-divider section-divider--center" />
            </div>
            <ul className="service-related__list">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link to={servicePath(related.slug)} className="service-related__card">
                    <span className="service-related__name">{related.name}</span>
                    <span className="service-related__tagline">{related.tagline}</span>
                    <span className="service-related__arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="service-related__all">
              <Link to="/services" className="btn btn-secondary">瀏覽全部服務領域</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

ServiceDetail.propTypes = {
  slug: PropTypes.string.isRequired,
}

export default ServiceDetail
