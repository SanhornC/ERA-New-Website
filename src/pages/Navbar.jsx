import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/era-official-logo.png'

const NAV_LINKS = [
  { to: '/about', label: '本所優勢' },
  { to: '/team', label: '專業團隊' },
  { to: '/services', label: '服務領域' },
  { to: '/events', label: '活動資訊' },
  { to: '/related', label: '相關內容' },
]

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isSolid = !isHome || scrolled

  return (
    <nav
      aria-label="主要導覽"
      className={`site-nav ${isSolid ? 'site-nav--solid' : 'site-nav--transparent'} ${mobileOpen ? 'is-mobile-open' : ''}`}
    >
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__logo-link" aria-label="怡睿國際法律事務所 首頁">
          <img src={logo} alt="怡睿國際法律事務所標誌" className="site-nav__logo" />
        </Link>

        <ul className="site-nav__links">
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <li key={to} className={`site-nav__item ${active ? 'is-active' : ''}`}>
                <Link to={to}>{label}</Link>
              </li>
            )
          })}
          <li className="site-nav__cta">
            <Link to="/contactus" className={`btn ${isSolid ? 'btn-primary' : 'btn-outline-light'}`}>
              <span lang="en">聯絡我們</span>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="site-nav__menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? '關閉導覽選單' : '開啟導覽選單'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="site-nav__menu-bar" />
          <span className="site-nav__menu-bar" />
          <span className="site-nav__menu-bar" />
        </button>
      </div>

      <div id="mobile-menu" className="site-nav__mobile" aria-hidden={!mobileOpen}>
        <ul>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contactus">聯絡我們</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
