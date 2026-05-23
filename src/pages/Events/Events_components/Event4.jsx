import React from 'react'
import EventDetail from './EventDetail'
import img2 from './../../../assets/Events/event3_img1.jpg'
import img3 from './../../../assets/Events/event3_img2.jpg'
import img5 from './../../../assets/Events/event3_img4.jpg'
import img6 from './../../../assets/Events/event3_img5.jpg'
import img7 from './../../../assets/Events/event3_img6.jpg'

const images = [{ src: img2 }, { src: img3 }, { src: img5 }, { src: img6 }, { src: img7 }]

const Event4 = () => (
  <EventDetail
    images={images}
    title="凱峰保密合約演講"
    date="2023/3/8"
    isoDate="2023-03-08"
  />
)

export default Event4
