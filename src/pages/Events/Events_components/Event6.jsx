import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event6_img1.jpeg'
import img2 from './../../../assets/Events/event6_img2.jpeg'

const images = [
  { src: img2, width: 1600, height: 1202 },
  { src: img1, width: 1600, height: 1202 },
]

const Event6 = () => (
  <EventDetail
    images={images}
    title="新創公司必知的議題"
    date="2021/9/7"
    isoDate="2021-09-07"
    relatedServices={['startup-legal-services', 'intellectual-property']}
  />
)

export default Event6
