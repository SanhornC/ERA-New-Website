import React from 'react'
import './Title.css'

const Title = ({ subTitle, label, center = true }) => {
  return (
    <div className={`title-block ${center ? 'title-block--center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{subTitle}</h2>
      <div className={`section-divider ${center ? 'section-divider--center' : ''}`} />
    </div>
  )
}

export default Title
