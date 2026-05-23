import React from 'react'
import { Link } from 'react-router-dom'
import './Events_list.css'

const events = [
  { id: 1, date: '2023-10-09', display: '2023/10/9', title: '新竹科學園區新興產業專題技術人才培訓計畫 - 合約談判之技巧分享 — 從保密、採購、經銷代理等合約談起', person: '林秀怡律師' },
  { id: 2, date: '2023-10-04', display: '2023/10/4', title: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論 — 從企業併購法有關「保護股東權益」之修正談起', person: '林秀怡律師' },
  { id: 3, date: '2023-04-25', display: '2023/4/25', title: '陽明交大校友會工商經營178Club — 4月份總裁思維讀書會科技法律講座與商務交流活動', person: '林秀怡律師' },
  { id: 4, date: '2023-03-08', display: '2023/3/8', title: '凱峰保密合約演講', person: '林秀怡律師' },
  { id: 5, date: '2021-11-24', display: '2021/11/24', title: '新竹市室內裝修商業同業公會演講 — 合約常見之實務問題', person: '林秀怡律師' },
  { id: 6, date: '2021-09-07', display: '2021/9/7', title: '新創公司必知的議題', person: '林秀怡律師' },
  { id: 7, date: '2021-06-28', display: '2021/6/28', title: '前瞻科技 — 新創企業的專利佈局與法律議題', person: '林秀怡律師' },
  { id: 8, date: '2020-10-29', display: '2020/10/29', title: '交大新竹校友會互貴幫分享會 — 從就業到創業的普通法律常識', person: '林秀怡律師' },
  { id: 9, date: '2020-03-24', display: '2020/3/24', title: '工研院營運發展處分享研討會 — 新創相關法律案件分享', person: '林秀怡律師' },
]

const Events_list = () => {
  return (
    <div className="events">
      <div className="section-head--center">
        <span className="section-label">Recent Talks</span>
        <h2 className="section-title">近期受邀演講</h2>
        <div className="section-divider section-divider--center" />
      </div>

      <ul className="events__list">
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`} className="event-row">
              <time className="event-row__date" dateTime={event.date}>{event.display}</time>
              <article className="event-row__body">
                <h3 className="event-row__title">{event.title}</h3>
                <p className="event-row__person">主講人：{event.person}</p>
              </article>
              <span className="event-row__arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Events_list
