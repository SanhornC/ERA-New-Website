import React from 'react'
import './Lawyer_Wang.css'
import wang_img from './../../../assets/person/Sherry.jpg'

const Lawyer_Wang = () => {
  return (
    <div>
        <div className='about'>
            <div className='about-left'>
                <img src={wang_img} className='lawyer-img'></img>
            </div>
            <div className='about-right'>
                <h3>合作美國加州律師</h3>
                <h2>王承舜律師</h2>
                <h3>學歷:</h3>
                <p>國立政治大學法律學系學士</p>
                <p>美國伊利諾大學香檳分校法學碩士</p>
    
                <h3>經歷:</h3>
                <p> - New York Bar: Admitted in 2007 </p>
                <p> - California Bar: Admitted in 2015 </p>
                <p> - LAW OFFICES OF MAY LIOU Legal Assistant (2003) </p>
                <p> - HARRY J. LIU & ASSOCIATES Law Researcher (2004 - 2007) </p>
                <p> - HARRY J. LIU & ASSOCIATES Associate (2007 - 2016) </p>
                <p> - LAW OFFICES OF SHERRY C. WANG Attorney (2016 - Present) </p>
                
            </div>
        </div>
    </div>
  )
}

export default Lawyer_Wang
