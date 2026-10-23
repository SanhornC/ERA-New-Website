import { Link } from 'react-router-dom'
import { displayDate, eventPath, events, hasEventPage } from '../../../data/events'
import './Events_list.css'

const newestFirst = [...events].sort((a, b) => b.isoDate.localeCompare(a.isoDate))

const Events_list = () => {
  return (
    <div className="events">
      <div className="section-head--center">
        <span className="section-label" lang="en">Selected Talks</span>
        <h2 className="section-title">歷年受邀演講</h2>
        <div className="section-divider section-divider--center" />
      </div>

      <ul className="events__list">
        {newestFirst.map((event) => {
          const body = (
            <>
              <time className="event-row__date" dateTime={event.isoDate}>{displayDate(event.isoDate)}</time>
              <article className="event-row__body">
                <h3 className="event-row__title">{event.listTitle ?? event.title}</h3>
                <p className="event-row__person">主講人：林秀怡律師</p>
                {event.time && <p className="event-row__person">課程時間：{event.time}</p>}
                {event.location && <p className="event-row__person">地點：{event.location}</p>}
              </article>
            </>
          )

          return (
            <li key={event.id}>
              {hasEventPage(event) ? (
                <Link to={eventPath(event.id)} className="event-row">
                  {body}
                  <span className="event-row__arrow" aria-hidden="true">→</span>
                </Link>
              ) : (
                <div className="event-row event-row--static">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Events_list
