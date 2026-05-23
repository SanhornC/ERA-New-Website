import React from 'react'
import EventDetail from './EventDetail'
import img4 from './../../../assets/Events/event4_img1.jpg'

const images = [{ src: img4 }]

const Event3 = () => (
  <EventDetail
    images={images}
    title="陽明交大校友會工商經營178Club — 4月份總裁思維讀書會科技法律講座與商務交流活動"
    date="2023/4/25"
    isoDate="2023-04-25"
  />
)

export default Event3
