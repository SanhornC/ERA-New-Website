import React from 'react'
import Navbar_other from '../Navbar_other'
import Lawyer from './team_components/Lawyer'
import Other_Lawyer from './team_components/Other_Lawyer'
import P1_Team from '../p1_components/p1_team/P1_Team'
import Title from '../p1_components/Title/Title'

const Team = () => {
  return (
    <div>
      <Navbar_other />
      <Lawyer />
      <div className='container'>
        <Title subTitle="律師團隊" />
        <Other_Lawyer />
      </div>
    </div>
  )
}

export default Team
