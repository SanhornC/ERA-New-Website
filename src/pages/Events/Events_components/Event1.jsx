import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event2_img2.jpeg'
import img2 from './../../../assets/Events/event2_img1.jpeg'
import img3 from './../../../assets/Events/Event1/event1_img3.jpg'

const images = [{ src: img1 }, { src: img2 }, { src: img3 }]

const Event1 = () => (
  <EventDetail
    images={images}
    title="新竹科學園區新興產業專題技術人才培訓計畫 — 合約談判之技巧分享：從保密、採購、經銷代理等合約談起"
    date="2023/10/9"
    isoDate="2023-10-09"
  />
)

export default Event1
