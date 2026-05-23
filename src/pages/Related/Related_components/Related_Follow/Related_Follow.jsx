import React from 'react'
import './Related_Follow.css'

const Related_Follow = () => {
  return (
    <section className="related-follow" aria-labelledby="related-follow-heading">
      <div className="section-head--center">
        <span className="section-label">Follow Us</span>
        <h2 className="section-title" id="related-follow-heading">關注怡睿</h2>
        <div className="section-divider section-divider--center" />
      </div>
      <ul className="related-follow__list">
        <li>
          <a
            href="https://www.facebook.com/people/怡睿國際法律事務所/100064182153080/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="related-follow__brand" lang="en">Facebook</span>
            <span className="related-follow__label">怡睿國際法律事務所</span>
            <span className="related-follow__arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Related_Follow
