import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Brand from './Brand/Brand'

const NAV_LINKS = [
  { to: '/about', label: '本所優勢' },
  { to: '/team', label: '專業團隊' },
  { to: '/services', label: '服務領域' },
  { to: '/events', label: '活動資訊' },
  { to: '/related', label: '相關內容' },
]

const isNavLinkActive = (pathname, target) => {
  if (pathname === target) return true
  if (target === '/team') return pathname.startsWith('/lawyer/')
  if (target === '/events') return pathname.startsWith('/events/')
  return false
}

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const logoLinkRef = useRef(null)
  const menuToggleRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const focusAfterCloseRef = useRef(null)

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
    if (!mobileOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [mobileOpen])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined

    const desktopQuery = window.matchMedia('(min-width: 861px)')
    const closeForDesktop = (event) => {
      if (!event.matches) return

      if (mobileMenuRef.current?.contains(document.activeElement)) {
        focusAfterCloseRef.current = 'logo'
      }
      setMobileOpen(false)
    }

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', closeForDesktop)
      return () => desktopQuery.removeEventListener('change', closeForDesktop)
    }

    desktopQuery.addListener(closeForDesktop)
    return () => desktopQuery.removeListener(closeForDesktop)
  }, [])

  useEffect(() => {
    let focusFrame

    if (!mobileOpen) {
      const focusTarget = focusAfterCloseRef.current
      focusAfterCloseRef.current = null

      if (focusTarget) {
        focusFrame = window.requestAnimationFrame(() => {
          const target = focusTarget === 'logo' ? logoLinkRef.current : menuToggleRef.current
          target?.focus()
        })
      }

      return () => {
        if (focusFrame) window.cancelAnimationFrame(focusFrame)
      }
    }

    const getFocusableElements = () => (
      Array.from(
        mobileMenuRef.current?.querySelectorAll(
          'a[href]:not([tabindex="-1"]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
    )

    focusFrame = window.requestAnimationFrame(() => {
      getFocusableElements()[0]?.focus()
    })

    const handleMenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        focusAfterCloseRef.current = 'toggle'
        setMobileOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      if (!firstElement || !lastElement) return

      const focusIsInsideMenu = mobileMenuRef.current?.contains(document.activeElement)
      if (event.shiftKey && (!focusIsInsideMenu || document.activeElement === firstElement)) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && (!focusIsInsideMenu || document.activeElement === lastElement)) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleMenuKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleMenuKeyDown)
    }
  }, [mobileOpen])

  const handleMobileLinkClick = () => {
    focusAfterCloseRef.current = 'toggle'
    setMobileOpen(false)
  }

  const isSolid = !isHome || scrolled

  return (
    <nav
      aria-label="主要導覽"
      className={`site-nav ${isSolid ? 'site-nav--solid' : 'site-nav--transparent'} ${mobileOpen ? 'is-mobile-open' : ''}`}
    >
      <div className="site-nav__inner">
        <Link
          ref={logoLinkRef}
          to="/"
          className="site-nav__logo-link"
          aria-label="怡睿國際法律事務所 首頁"
          onClick={() => {
            // Already on the home page: the route doesn't change, so scroll up explicitly.
            if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Brand tone={isSolid ? 'dark' : 'light'} />
        </Link>

        <ul className="site-nav__links">
          {NAV_LINKS.map(({ to, label }) => {
            const active = isNavLinkActive(location.pathname, to)
            return (
              <li key={to} className={`site-nav__item ${active ? 'is-active' : ''}`}>
                <Link to={to} aria-current={location.pathname === to ? 'page' : undefined}>{label}</Link>
              </li>
            )
          })}
          <li className="site-nav__cta">
            <Link
              to="/contactus"
              className={`btn ${isSolid ? 'btn-primary' : 'btn-outline-light'}`}
              aria-current={location.pathname === '/contactus' ? 'page' : undefined}
            >
              <span>聯絡我們</span>
            </Link>
          </li>
        </ul>

        <button
          ref={menuToggleRef}
          type="button"
          className="site-nav__menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          aria-label={mobileOpen ? '關閉導覽選單' : '開啟導覽選單'}
          onClick={() => {
            focusAfterCloseRef.current = null
            setMobileOpen((open) => !open)
          }}
        >
          <span className="site-nav__menu-bar" />
          <span className="site-nav__menu-bar" />
          <span className="site-nav__menu-bar" />
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="site-nav__mobile"
        role="dialog"
        aria-modal={mobileOpen ? 'true' : undefined}
        aria-label="行動版導覽選單"
        aria-hidden={!mobileOpen}
      >
        <ul>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                aria-current={location.pathname === to ? 'page' : undefined}
                tabIndex={mobileOpen ? undefined : -1}
                onClick={handleMobileLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contactus"
              aria-current={location.pathname === '/contactus' ? 'page' : undefined}
              tabIndex={mobileOpen ? undefined : -1}
              onClick={handleMobileLinkClick}
            >
              聯絡我們
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
