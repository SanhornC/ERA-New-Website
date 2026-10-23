import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event8_img1.jpeg'
import img2 from './../../../assets/Events/event8_img2.jpg'
import img3 from './../../../assets/Events/event8_img3.jpg'
import img4 from './../../../assets/Events/event8_img4.jpg'
import img5 from './../../../assets/Events/event8_img5.jpg'

const images = [
  { src: img1, width: 953, height: 709 },
  { src: img2, width: 1566, height: 1046 },
  { src: img3, width: 1566, height: 1046 },
  { src: img4, width: 960, height: 720 },
  { src: img5, width: 960, height: 720 },
]

const Event8 = () => (
  <EventDetail
    images={images}
    title="交大新竹校友會互貴幫分享會 — 從就業到創業的普通法律常識"
    date="2020/10/29"
    isoDate="2020-10-29"
    relatedServices={['labor-employment', 'startup-legal-services']}
  />
)

export default Event8
