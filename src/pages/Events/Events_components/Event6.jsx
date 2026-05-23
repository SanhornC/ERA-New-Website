import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event6_img1.jpeg'
import img2 from './../../../assets/Events/event6_img2.jpeg'

const images = [{ src: img2 }, { src: img1 }]

const Event6 = () => (
  <EventDetail
    images={images}
    title="新創公司必知的議題"
    date="2021/9/7"
    isoDate="2021-09-07"
  />
)

export default Event6
