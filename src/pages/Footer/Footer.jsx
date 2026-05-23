import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/era-official-logo.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner container">
        <div className="site-footer__col site-footer__brand">
          <Link to="/" aria-label="怡睿國際法律事務所 首頁">
            <img src={logo} alt="怡睿國際法律事務所" className="site-footer__logo" />
          </Link>
          <p className="site-footer__tagline">
            專業、信賴、成就 — 為本土企業提供國際商業法律服務。
          </p>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">服務領域</h3>
          <ul>
            <li><Link to="/services">合約諮詢</Link></li>
            <li><Link to="/services">智慧財產權</Link></li>
            <li><Link to="/services">企業併購</Link></li>
            <li><Link to="/services">新創公司法律服務</Link></li>
            <li><Link to="/services">勞資法規諮詢</Link></li>
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
            <p>302 新竹縣竹北市惟馨街95號10-3樓</p>
            <p>(凱峰世紀科技中心)</p>
            <p><a href="tel:+886-3-551-5533" lang="en">03-551-5533</a></p>
            <p><a href="mailto:attorneys@eralawfirm.com" lang="en">attorneys@eralawfirm.com</a></p>
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
