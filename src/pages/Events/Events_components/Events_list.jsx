import React from 'react'
import { Link } from 'react-router-dom';
import './Events_list.css'

const events = [
    { id: 1, date: '2023/10/9', title: '新竹科學園區新興產業專題技術人才培訓計畫 - 合約談判之技巧分享-從保密、採購、經銷代理等合約談起', person: '林秀怡律師'},
    { id: 2, date: '2023/10/4', title: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論- 從企業併購法有關「保護股東權益」之修正談起', person: '林秀怡律師'},
    { id: 3, date: '2023/4/25', title: '陽明交大校友會工商經營178Club - 4月份總裁思維讀書會科技法律講座與商務交流活動', person: '林秀怡律師'},
    { id: 4, date: '2023/3/8', title: '凱峰保密合約演講', person: '林秀怡律師'},
    { id: 5, date: '2021/11/24', title: '新竹市室內裝修商業同業公會演講 - 合約常見之實務問題', person: '林秀怡律師'},
    { id: 6, date: '2021/9/7', title: '新創公司必知的議題', person: '林秀怡律師'},
    { id: 7, date: '2021/6/28', title: '前瞻科技 新創企業的專利佈局與法律議題', person: '林秀怡律師'},
    { id: 8, date: '2020/10/29', title: '交大新竹校友會互貴幫分享會 - 從就業到創業的普通法律常識', person: '林秀怡律師'},
    { id: 9, date: '2020/3/24', title: '工研院營運發展處分享研討會 - 新創相關法律案件分享', person: '林秀怡律師'},
];

const Events_list = () => {
  return (
    <div className="events-container">
      <h1>近期受邀演講</h1>
      <br></br>
      <div className="events-grid">
        {events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id} className="events-item">
            <p className="events-date">{event.date}</p>
            <p className="events-title">{event.title}</p>
            <br></br>
            <p className='events-person'>主講人: {event.person}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default Events_list
