import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './EventDetail.css'

const EventDetail = ({ images, title, date, isoDate }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  const current = images[currentIndex]

  return (
    <>
      <Helmet>
        <title>{title} | 怡睿國際法律事務所</title>
        <meta name="description" content={`${title} — 演講日期 ${date}`} />
      </Helmet>
      <article className="event-detail">
        <div className="event-detail__hero">
          <div className="container event-detail__head">
            <nav aria-label="麵包屑導覽" className="event-detail__breadcrumb">
              <Link to="/">首頁</Link>
              <span aria-hidden="true">／</span>
              <Link to="/events">活動資訊</Link>
              <span aria-hidden="true">／</span>
              <span aria-current="page">演講紀錄</span>
            </nav>
            <span className="section-label">Event Record</span>
            <h1 className="event-detail__title">{title}</h1>
            {date && (
              <p className="event-detail__date">
                演講日期：<time dateTime={isoDate}>{date}</time>
              </p>
            )}
          </div>
        </div>

        <div className="container event-detail__body">
          {images.length > 0 && (
            <div className="event-detail__carousel">
              <button
                type="button"
                className="event-detail__nav event-detail__nav--prev"
                onClick={prevSlide}
                aria-label="上一張"
              >‹</button>

              <figure className="event-detail__figure">
                <img src={current.src} alt={current.alt || `${title} 活動照片 ${currentIndex + 1}`} loading="lazy" />
                <figcaption>{`照片 ${currentIndex + 1} / ${images.length}`}</figcaption>
              </figure>

              <button
                type="button"
                className="event-detail__nav event-detail__nav--next"
                onClick={nextSlide}
                aria-label="下一張"
              >›</button>
            </div>
          )}

          <div className="event-detail__back">
            <Link to="/events" className="btn btn-secondary">回到活動列表</Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default EventDetail
