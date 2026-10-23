import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event7_img1.jpeg'
import img2 from './../../../assets/Events/event7_img2.jpeg'

const images = [
  { src: img2, width: 1980, height: 1490 },
  { src: img1, width: 1980, height: 1490 },
]

const Event7 = () => (
  <EventDetail
    images={images}
    title="前瞻科技 — 新創企業的專利佈局與法律議題"
    date="2021/6/28"
    isoDate="2021-06-28"
    relatedServices={['intellectual-property', 'startup-legal-services']}
  />
)

export default Event7
