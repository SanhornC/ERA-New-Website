import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getService, servicePath } from '../../../data/services'
import './EventDetail.css'

const EventDetail = ({ images, title, date, isoDate, relatedServices = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <>
      <article className="event-detail">
        <div className="event-detail__hero">
          <div className="container event-detail__head">
            <nav aria-label="麵包屑導覽" className="event-detail__breadcrumb">
              <Link to="/">首頁</Link>
              <span aria-hidden="true">／</span>
              <Link to="/events">活動資訊</Link>
              <span aria-hidden="true">／</span>
              <span aria-current="page">{title}</span>
            </nav>
            <span className="section-label" lang="en">Event Record</span>
            <h1 className="event-detail__title">{title}</h1>
            <div className="event-detail__meta">
              {date && (
                <p className="event-detail__date">
                  演講日期：<time dateTime={isoDate}>{date}</time>
                </p>
              )}
              <p>主講人：<Link to="/lawyer/1">林秀怡律師</Link></p>
            </div>
          </div>
        </div>

        <div className="container event-detail__body">
          <section className="event-detail__intro" aria-labelledby="event-record-heading">
            <h2 id="event-record-heading">活動紀錄</h2>
            <p>本頁收錄林秀怡律師受邀主講「{title}」之活動照片與演講紀錄。</p>
          </section>

          {images.length > 0 && (
            <div className="event-detail__carousel">
              {images.length > 1 && (
                <button
                  type="button"
                  className="event-detail__nav event-detail__nav--prev"
                  onClick={prevSlide}
                  aria-label="上一張"
                >‹</button>
              )}

              {images.map((image, index) => (
                <figure
                  className="event-detail__figure"
                  hidden={index !== currentIndex}
                  key={image.src}
                >
                  <img
                    src={image.src}
                    alt={image.alt || `${title} 活動照片 ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{`照片 ${index + 1} / ${images.length}`}</figcaption>
                </figure>
              ))}

              {images.length > 1 && (
                <button
                  type="button"
                  className="event-detail__nav event-detail__nav--next"
                  onClick={nextSlide}
                  aria-label="下一張"
                >›</button>
              )}
            </div>
          )}

          {relatedServices.length > 0 && (
            <section className="event-detail__related" aria-labelledby="event-related-heading">
              <h2 id="event-related-heading">相關服務領域</h2>
              <ul>
                {relatedServices.map(getService).map((service) => (
                  <li key={service.slug}>
                    <Link to={servicePath(service.slug)}>
                      <span className="event-detail__related-name">{service.name}</span>
                      <span className="event-detail__related-tagline">{service.tagline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="event-detail__back">
            <Link to="/events" className="btn btn-secondary">回到活動列表</Link>
          </div>
        </div>
      </article>
    </>
  )
}

const eventImageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
})

EventDetail.propTypes = {
  images: PropTypes.arrayOf(eventImageShape).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isoDate: PropTypes.string.isRequired,
  relatedServices: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default EventDetail
