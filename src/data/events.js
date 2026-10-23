// Talks and seminars. Each entry renders as a row on /events; entries with
// images also get their own page at /events/<id>.
//   id         — permanent URL id; never renumber (pages are indexed)
//   title      — page heading; listTitle overrides it in the /events list
//   shortTitle — <title> and breadcrumb label
//   time / location — optional, shown on the list row and the event page
//   images     — photos for the event page; leave empty for a list-only entry
//   related    — service slugs linked from the event page
import event1Img1 from '../assets/Events/event2_img2.jpeg'
import event1Img2 from '../assets/Events/event2_img1.jpeg'
import event1Img3 from '../assets/Events/Event1/event1_img3.jpg'
import event2Img1 from '../assets/Events/Event1/event1_img1.jpeg'
import event2Img2 from '../assets/Events/Event1/event1_img2.jpeg'
import event3Img1 from '../assets/Events/event4_img1.jpg'
import event4Img1 from '../assets/Events/event3_img1.jpg'
import event4Img2 from '../assets/Events/event3_img2.jpg'
import event4Img3 from '../assets/Events/event3_img4.jpg'
import event4Img4 from '../assets/Events/event3_img5.jpg'
import event4Img5 from '../assets/Events/event3_img6.jpg'
import event5Img1 from '../assets/Events/event5_img2.jpeg'
import event5Img2 from '../assets/Events/event5_img1.jpeg'
import event6Img1 from '../assets/Events/event6_img2.jpeg'
import event6Img2 from '../assets/Events/event6_img1.jpeg'
import event7Img1 from '../assets/Events/event7_img2.jpeg'
import event7Img2 from '../assets/Events/event7_img1.jpeg'
import event8Img1 from '../assets/Events/event8_img1.jpeg'
import event8Img2 from '../assets/Events/event8_img2.jpg'
import event8Img3 from '../assets/Events/event8_img3.jpg'
import event8Img4 from '../assets/Events/event8_img4.jpg'
import event8Img5 from '../assets/Events/event8_img5.jpg'
import event9Img1 from '../assets/Events/event9_img1.jpg'
import event9Img2 from '../assets/Events/event9_img2.jpeg'
import event9Img3 from '../assets/Events/event9_img3.jpeg'
import event9Img4 from '../assets/Events/event9_img4.jpeg'
import event11Img1 from '../assets/Events/event11_img1.jpg'
import event11Img2 from '../assets/Events/event11_img2.jpg'
import event12Img1 from '../assets/Events/event12_img1.jpg'
import event12Img2 from '../assets/Events/event12_img2.jpg'
import event13Img1 from '../assets/Events/event13_img1.jpg'
import event13Img2 from '../assets/Events/event13_img2.jpg'
import event14Img1 from '../assets/Events/event14_img1.jpg'

const SCIENCE_PARK_VENUE = '科管局活動中心（尼尼生活館）1樓第一會議室（新竹市新安路2-1號）'

export const events = [
  {
    id: 1,
    isoDate: '2023-10-09',
    title: '新竹科學園區新興產業專題技術人才培訓計畫 — 合約談判之技巧分享：從保密、採購、經銷代理等合約談起',
    listTitle: '新竹科學園區新興產業專題技術人才培訓計畫 - 合約談判之技巧分享 — 從保密、採購、經銷代理等合約談起',
    shortTitle: '合約談判之技巧分享',
    description: '新竹科學園區新興產業專題技術人才培訓計畫 — 合約談判之技巧分享：從保密、採購、經銷代理等合約談起，林秀怡律師主講，2023/10/9。',
    images: [
      { src: event1Img1, width: 1984, height: 1490 },
      { src: event1Img2, width: 1984, height: 1490 },
      { src: event1Img3, width: 1440, height: 1080 },
    ],
    related: ['contract-consulting', 'trade-secrets'],
  },
  {
    id: 2,
    isoDate: '2023-10-04',
    title: '新竹科學園區新興產業專題技術人才培訓計畫 — 科技公司相提「併」論：從企業併購法有關「保護股東權益」之修正談起',
    listTitle: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論 — 從企業併購法有關「保護股東權益」之修正談起',
    shortTitle: '科技公司相提「併」論',
    description: '科技公司相提「併」論 — 從企業併購法有關保護股東權益之修正談起，新竹科學園區人才培訓計畫，林秀怡律師主講，2023/10/4。',
    images: [
      { src: event2Img1, width: 1986, height: 1504 },
      { src: event2Img2, width: 1986, height: 1504 },
      { src: event1Img3, width: 1440, height: 1080 },
    ],
    related: ['mergers-acquisitions', 'corporate-compliance'],
  },
  {
    id: 3,
    isoDate: '2023-04-25',
    title: '陽明交大校友會工商經營178Club — 4月份總裁思維讀書會科技法律講座與商務交流活動',
    shortTitle: '陽明交大 178Club 科技法律講座',
    description: '陽明交大校友會工商經營 178Club 總裁思維讀書會科技法律講座與商務交流活動，林秀怡律師主講，2023/4/25。',
    images: [{ src: event3Img1, width: 960, height: 540 }],
    related: ['corporate-compliance', 'intellectual-property'],
  },
  {
    id: 4,
    isoDate: '2023-03-08',
    title: '凱峰保密合約演講',
    shortTitle: '凱峰保密合約演講',
    description: '凱峰保密合約演講紀錄，林秀怡律師主講，2023/3/8。',
    images: [
      { src: event4Img1, width: 1280, height: 720 },
      { src: event4Img2, width: 1280, height: 960 },
      { src: event4Img3, width: 1280, height: 960 },
      { src: event4Img4, width: 1280, height: 960 },
      { src: event4Img5, width: 1280, height: 960 },
    ],
    related: ['contract-consulting', 'trade-secrets'],
  },
  {
    id: 5,
    isoDate: '2021-11-24',
    title: '新竹市室內裝修商業同業公會演講 — 合約常見之實務問題',
    shortTitle: '合約常見之實務問題',
    description: '新竹市室內裝修商業同業公會演講 — 合約常見之實務問題，林秀怡律師主講，2021/11/24。',
    images: [
      { src: event5Img1, width: 1600, height: 1202 },
      { src: event5Img2, width: 1600, height: 1202 },
    ],
    related: ['contract-consulting', 'civil-criminal-litigation'],
  },
  {
    id: 6,
    isoDate: '2021-09-07',
    title: '新創公司必知的議題',
    shortTitle: '新創公司必知的議題',
    description: '「新創公司必知的議題」法律講座紀錄，林秀怡律師主講，2021/9/7。',
    images: [
      { src: event6Img1, width: 1600, height: 1202 },
      { src: event6Img2, width: 1600, height: 1202 },
    ],
    related: ['startup-legal-services', 'intellectual-property'],
  },
  {
    id: 7,
    isoDate: '2021-06-28',
    title: '前瞻科技 — 新創企業的專利佈局與法律議題',
    shortTitle: '新創企業的專利佈局與法律議題',
    description: '前瞻科技 — 新創企業的專利佈局與法律議題講座紀錄，林秀怡律師主講，2021/6/28。',
    images: [
      { src: event7Img1, width: 1980, height: 1490 },
      { src: event7Img2, width: 1980, height: 1490 },
    ],
    related: ['intellectual-property', 'startup-legal-services'],
  },
  {
    id: 8,
    isoDate: '2020-10-29',
    title: '交大新竹校友會互貴幫分享會 — 從就業到創業的普通法律常識',
    shortTitle: '從就業到創業的普通法律常識',
    description: '交大新竹校友會互貴幫分享會 — 從就業到創業的普通法律常識，林秀怡律師主講，2020/10/29。',
    images: [
      { src: event8Img1, width: 953, height: 709 },
      { src: event8Img2, width: 1566, height: 1046 },
      { src: event8Img3, width: 1566, height: 1046 },
      { src: event8Img4, width: 960, height: 720 },
      { src: event8Img5, width: 960, height: 720 },
    ],
    related: ['labor-employment', 'startup-legal-services'],
  },
  {
    id: 9,
    isoDate: '2020-03-24',
    title: '工研院營運發展處分享研討會 — 新創相關法律案件分享',
    shortTitle: '新創相關法律案件分享',
    description: '工研院營運發展處分享研討會 — 新創相關法律案件分享，林秀怡律師主講，2020/3/24。',
    images: [
      { src: event9Img1, width: 1920, height: 1236 },
      { src: event9Img2, width: 1920, height: 1281 },
      { src: event9Img3, width: 1920, height: 1281 },
      { src: event9Img4, width: 1920, height: 1281 },
    ],
    related: ['startup-legal-services', 'contract-consulting'],
  },
  {
    id: 10,
    isoDate: '2024-08-21',
    title: '竹科管理局免費課程【合約談判之技巧分享(一)-從保密、經銷代理合約談起】',
    time: '13:30～16:30',
    location: SCIENCE_PARK_VENUE,
    images: [],
  },
  {
    id: 11,
    isoDate: '2024-08-27',
    title: '竹科管理局免費課程【合約談判之技巧分享(二)-從採購(買賣)、供應合約談起】',
    shortTitle: '合約談判之技巧分享(二)：採購、供應合約',
    description: '竹科管理局免費課程「合約談判之技巧分享(二)」— 從採購（買賣）、供應合約談起，於科管局活動中心舉辦，林秀怡律師主講，2024/8/27。',
    time: '13:30～16:30',
    location: SCIENCE_PARK_VENUE,
    images: [
      { src: event11Img1, width: 1800, height: 1350 },
      { src: event11Img2, width: 1800, height: 1350 },
    ],
    related: ['contract-consulting', 'trade-secrets'],
  },
  {
    id: 12,
    isoDate: '2025-08-29',
    title: '竹科管理局免費課程【合約談判之技巧分享(一)-從保密、投資、股份買賣合約談起】',
    shortTitle: '合約談判之技巧分享(一)：保密、投資、股份買賣合約',
    description: '竹科管理局免費課程「合約談判之技巧分享(一)」— 從保密、投資、股份買賣合約談起，新竹科學園區人才培訓計畫，林秀怡律師主講，2025/8/29。',
    time: '13:30～16:30',
    images: [
      { src: event12Img1, width: 1200, height: 1600 },
      { src: event12Img2, width: 1800, height: 1350 },
    ],
    related: ['contract-consulting', 'trade-secrets', 'mergers-acquisitions'],
  },
  {
    id: 13,
    isoDate: '2025-09-08',
    title: '竹科管理局免費課程【合約談判之技巧分享(二)-從經銷代理、採購(買賣)、供應合約談起】',
    shortTitle: '合約談判之技巧分享(二)：經銷代理、採購、供應合約',
    description: '竹科管理局免費課程「合約談判之技巧分享(二)」— 從經銷代理、採購（買賣）、供應合約談起，新竹科學園區人才培訓計畫，林秀怡律師主講，2025/9/8。',
    time: '13:30～16:30',
    images: [
      { src: event13Img1, width: 1860, height: 880 },
      { src: event13Img2, width: 1860, height: 880 },
    ],
    related: ['contract-consulting', 'trade-secrets'],
  },
  {
    id: 14,
    isoDate: '2026-09-17',
    title: '企業內部演講 — 別讓客戶的營業秘密成為你的囚籠：談營業秘密法及國家安全法',
    shortTitle: '談營業秘密法及國家安全法',
    description: '企業內部演講 — 別讓客戶的營業秘密成為你的囚籠：談營業秘密法及國家安全法，林秀怡律師主講，2026/9/17。',
    images: [{ src: event14Img1, width: 2048, height: 1078 }],
    related: ['trade-secrets', 'corporate-compliance'],
  },
]

export const eventPath = (id) => `/events/${id}`

// 2023-10-09 → 2023/10/9
export const displayDate = (isoDate) => isoDate.split('-').map(Number).join('/')

export const hasEventPage = (event) => event.images.length > 0

export const eventPages = events.filter(hasEventPage)
