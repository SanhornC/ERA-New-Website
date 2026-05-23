import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event5_img1.jpeg'
import img2 from './../../../assets/Events/event5_img2.jpeg'

const images = [{ src: img2 }, { src: img1 }]

const Event5 = () => (
  <EventDetail
    images={images}
    title="新竹市室內裝修商業同業公會演講 — 合約常見之實務問題"
    date="2021/11/24"
    isoDate="2021-11-24"
  />
)

export default Event5
