import React from 'react'
import './Adv_special.css'
import trophy_img from '../../../assets/PIC/era-office/獎盃區.jpg'

const Adv_special = () => {
  return (
    <div className='adv-about'>
        <div className='about-left'>
            <img src={trophy_img} className='trophy-img'></img>
        </div>
        <div className='about-right'>
            <h3>怡睿國際法律事務所 - 特色</h3>
            <p><b>本所始終相信，專業的法律服務，除了能協助客戶解決法律爭端，更重要的是透過事先的詳盡規劃及布局，以盡可能降低未來的法律風險。所以我們的特色是:</b>
            <br></br>
            1. 與客戶做充分溝通，參與客戶的商業規劃，以提供全面性的法律服務，協助客戶達成商業目的，並避免未來的法律爭端。
            <br></br>
            2. 基於過去豐富的經驗，本所不僅能協助客戶解決客戶所提出的問題，更能主動發掘客戶忽略的附隨相關問題，完善客戶的商業計畫。
            </p>
        </div>
    </div>
  )
}

export default Adv_special
