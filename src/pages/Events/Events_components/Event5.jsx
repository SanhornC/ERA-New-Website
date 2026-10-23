import EventDetail from './EventDetail'
import img1 from './../../../assets/Events/event5_img1.jpeg'
import img2 from './../../../assets/Events/event5_img2.jpeg'

const images = [
  { src: img2, width: 1600, height: 1202 },
  { src: img1, width: 1600, height: 1202 },
]

const Event5 = () => (
  <EventDetail
    images={images}
    title="新竹市室內裝修商業同業公會演講 — 合約常見之實務問題"
    date="2021/11/24"
    isoDate="2021-11-24"
    relatedServices={['contract-consulting', 'civil-criminal-litigation']}
  />
)

export default Event5
