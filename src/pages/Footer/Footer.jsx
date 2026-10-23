import { Link } from 'react-router-dom'
import './Footer.css'
import Brand from '../Brand/Brand'
import { firm, mapUrl } from '../../data/firm'
import { getService, servicePath } from '../../data/services'

const FOOTER_SERVICES = [
  'contract-consulting',
  'corporate-compliance',
  'mergers-acquisitions',
  'intellectual-property',
  'trade-secrets',
  'startup-legal-services',
].map(getService)

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner container">
        <div className="site-footer__col site-footer__brand">
          <Link to="/" className="site-footer__brand-link" aria-label="怡睿國際法律事務所 首頁">
            <Brand tone="light" />
          </Link>
          <p className="site-footer__tagline">
            專業、信賴、成就 — 為本土企業提供國際商業法律服務。
          </p>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">服務領域</h3>
          <ul>
            {FOOTER_SERVICES.map((service) => (
              <li key={service.slug}><Link to={servicePath(service.slug)}>{service.name}</Link></li>
            ))}
            <li><Link to="/services">全部服務領域 →</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">關於我們</h3>
          <ul>
            <li><Link to="/about">本所優勢</Link></li>
            <li><Link to="/team">專業團隊</Link></li>
            <li><Link to="/events">活動資訊</Link></li>
            <li><Link to="/related">相關內容</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">聯絡資訊</h3>
          <address className="site-footer__address">
            <p>{firm.address.postalCode} {firm.address.region}{firm.address.locality}{firm.address.street}</p>
            <p>({firm.address.building})</p>
            <p>電話 <a href={firm.phoneHref} lang="en">{firm.phone}</a></p>
            <p>傳真 <span lang="en">{firm.fax}</span></p>
            <p><a href={`mailto:${firm.email}`} lang="en">{firm.email}</a></p>
            <p className="site-footer__links-inline">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">Google 地圖</a>
              <span aria-hidden="true">｜</span>
              <a href={firm.facebook} target="_blank" rel="noopener noreferrer" lang="en">Facebook</a>
            </p>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <p className="site-footer__copy">
          <span lang="en">©</span> {year} 怡睿國際法律事務所 <span lang="en">All Rights Reserved</span>
        </p>
        <ul className="site-footer__legal">
          <li><Link to="/terms"><span lang="en">Terms of Services</span></Link></li>
          <li><Link to="/privacy"><span lang="en">Privacy Policy</span></Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
