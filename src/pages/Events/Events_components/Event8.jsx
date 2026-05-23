import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event8_img1.jpeg'
import img2 from './../../../assets/Events/event8_img2.jpg'
import img3 from './../../../assets/Events/event8_img3.jpg'
import img4 from './../../../assets/Events/event8_img4.jpg'
import img5 from './../../../assets/Events/event8_img5.jpg'

const images = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }]

const Event8 = () => (
  <EventDetail
    images={images}
    title="交大新竹校友會互貴幫分享會 — 從就業到創業的普通法律常識"
    date="2020/10/29"
    isoDate="2020-10-29"
  />
)

export default Event8
