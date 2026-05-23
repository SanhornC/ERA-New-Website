import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event9_img1.jpg'
import img2 from './../../../assets/Events/event9_img2.jpeg'
import img3 from './../../../assets/Events/event9_img3.jpeg'
import img4 from './../../../assets/Events/event9_img4.jpeg'

const images = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }]

const Event9 = () => (
  <EventDetail
    images={images}
    title="工研院營運發展處分享研討會 — 新創相關法律案件分享"
    date="2020/3/24"
    isoDate="2020-03-24"
  />
)

export default Event9
