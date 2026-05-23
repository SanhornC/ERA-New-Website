import React from 'react'
import LawyerProfile from './LawyerProfile'
import huang_img from './../../../assets/person/黃炫中照片1.jpg'

const sections = [
  {
    label: '學歷',
    lines: [
      '國立台灣大學法律系學士',
      '國立中興大學科技法律研究所碩士',
    ],
  },
  {
    label: '經歷',
    lines: [
      '曾任臺灣高等法院法官 3 年',
      '曾任臺灣臺中地方法院法官 13 年',
      '曾任臺灣高等法院臺南分院助理法官 1 年',
      '擔任司法院法官學院講座',
      '司法院「商事事件審理法草案」研議小組成員',
    ],
  },
]

const Lawyer_Huang = () => (
  <LawyerProfile
    name="黃炫中律師"
    role="合作律師"
    img={huang_img}
    sections={sections}
  />
)

export default Lawyer_Huang
