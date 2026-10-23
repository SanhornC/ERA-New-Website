import EventDetail from './EventDetail'
import img2 from './../../../assets/Events/event3_img1.jpg'
import img3 from './../../../assets/Events/event3_img2.jpg'
import img5 from './../../../assets/Events/event3_img4.jpg'
import img6 from './../../../assets/Events/event3_img5.jpg'
import img7 from './../../../assets/Events/event3_img6.jpg'

const images = [
  { src: img2, width: 1280, height: 720 },
  { src: img3, width: 1280, height: 960 },
  { src: img5, width: 1280, height: 960 },
  { src: img6, width: 1280, height: 960 },
  { src: img7, width: 1280, height: 960 },
]

const Event4 = () => (
  <EventDetail
    images={images}
    title="凱峰保密合約演講"
    date="2023/3/8"
    isoDate="2023-03-08"
    relatedServices={['contract-consulting', 'trade-secrets']}
  />
)

export default Event4
