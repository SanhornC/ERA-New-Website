import React from 'react'
import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/Event1/event1_img1.jpeg'
import img2 from './../../../assets/Events/Event1/event1_img2.jpeg'
import img3 from './../../../assets/Events/Event1/event1_img3.jpg'

const images = [{ src: img1 }, { src: img2 }, { src: img3 }]

const Event2 = () => (
  <EventDetail
    images={images}
    title="新竹科學園區新興產業專題技術人才培訓計畫 — 科技公司相提「併」論：從企業併購法有關「保護股東權益」之修正談起"
    date="2023/10/4"
    isoDate="2023-10-04"
  />
)

export default Event2
