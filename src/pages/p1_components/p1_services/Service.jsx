import { Link } from 'react-router-dom'
import { servicePath, services } from '../../../data/services'
import './Service.css'

const Service = () => (
  <div className="services-container">
    <ul className="services-list">
      {services.map((service, index) => (
        <li key={service.slug} className="service-card">
          <Link to={servicePath(service.slug)} className="service-card__link">
            <span className="service-card__num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="service-card__text">
              <span className="service-card__name">{service.name}</span>
              <span className="service-card__tagline">{service.tagline}</span>
            </span>
            <span className="service-card__arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
    <div className="services-container__action">
      <Link to="/services" className="btn btn-secondary">瀏覽完整服務內容</Link>
    </div>
  </div>
)

export default Service
