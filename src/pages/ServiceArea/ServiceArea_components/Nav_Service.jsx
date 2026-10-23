import { Link } from 'react-router-dom'
import { servicePath, services } from '../../../data/services'
import './Nav_Service.css'

const Nav_Service = () => (
  <div className="nav-service">
    <div className="section-head--center">
      <span className="section-label" lang="en">Services</span>
      <h2 className="section-title">服務內容</h2>
      <div className="section-divider section-divider--center" />
    </div>

    <div className="nav-service__layout">
      <nav className="nav-service__menu" aria-label="服務領域選單">
        <ul>
          {services.map((service, index) => (
            <li key={service.slug}>
              <a className="nav-service__menu-item" href={`#service-${service.slug}`}>
                <span className="nav-service__menu-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{service.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-service__details">
        {services.map((service, index) => (
          <article
            className="nav-service__detail"
            id={`service-${service.slug}`}
            key={service.slug}
          >
            <span className="nav-service__detail-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="nav-service__detail-title">
              <Link to={servicePath(service.slug)}>{service.name}</Link>
            </h3>
            <p className="nav-service__detail-tagline">{service.tagline}</p>
            <div className="section-divider" />
            <ol className="nav-service__detail-body">
              {service.items.map((item) => (
                <li key={item.text}>
                  {item.text}
                  {item.details && (
                    <span className="nav-service__detail-extra">（{item.details.join('／')}）</span>
                  )}
                </li>
              ))}
            </ol>
            <Link
              to={servicePath(service.slug)}
              className="nav-service__detail-more"
              aria-label={`了解更多：${service.name}`}
            >
              了解更多 <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </div>
)

export default Nav_Service
