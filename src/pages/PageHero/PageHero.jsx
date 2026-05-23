import React from 'react'
import { Link } from 'react-router-dom'
import './PageHero.css'

const PageHero = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <header className="page-hero" role="banner">
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="page-hero__inner">
        <span className="page-hero__rule" aria-hidden="true" />
        {subtitle && <span className="page-hero__subtitle" lang="en">{subtitle}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav aria-label="麵包屑導覽" className="breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1
                return (
                  <li key={i}>
                    {crumb.to && !isLast ? (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    ) : (
                      <span aria-current={isLast ? 'page' : undefined}>{crumb.label}</span>
                    )}
                    {!isLast && <span className="breadcrumb__sep" aria-hidden="true">／</span>}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}
      </div>
    </header>
  )
}

export default PageHero
