import React from 'react'
import LawyerProfile from './LawyerProfile'
import wang_img from './../../../assets/person/Sherry.jpg'

const sections = [
  {
    label: '學歷',
    lines: [
      '國立政治大學法律學系學士',
      '美國伊利諾大學香檳分校法學碩士',
    ],
  },
  {
    label: '經歷',
    lines: [
      'New York Bar: Admitted in 2007',
      'California Bar: Admitted in 2015',
      'LAW OFFICES OF MAY LIOU Legal Assistant (2003)',
      'HARRY J. LIU & ASSOCIATES Law Researcher (2004 - 2007)',
      'HARRY J. LIU & ASSOCIATES Associate (2007 - 2016)',
      'LAW OFFICES OF SHERRY C. WANG Attorney (2016 - Present)',
    ],
  },
]

const Lawyer_Wang = () => (
  <LawyerProfile
    name="王承舜律師"
    role="合作美國加州律師"
    img={wang_img}
    sections={sections}
  />
)

export default Lawyer_Wang
