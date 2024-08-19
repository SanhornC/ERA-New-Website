import React from 'react'
import huang_img from './../../../assets/person/黃炫中照片1.jpg'
import './Lawyer_Huang.css'

const Lawyer_Huang = () => {
  return (
    <div>
        <div className='about'>
            <div className='about-left'>
                <img src={huang_img} className='lawyer-img'></img>
            </div>
            <div className='about-right'>
                <h3>合作律師</h3>
                <h2>黃炫中律師</h2>
                <h3>學歷:</h3>
                <p>國立台灣大學法律系學士</p>
                <p>國立中興大學科技法律研究所碩士</p>
    
                <h3>經歷:</h3>
                <p> - 曾任臺灣高等法院法官3年 </p>
                <p> - 曾任臺灣臺中地方法院法官13年 </p>
                <p> - 曾任臺灣高等法院臺南分院助理法官1年 </p>
                <p> - 擔任司法院法官學院講座 </p>
                <p> - 司法院「商事事件審理法草案」研議小組成員 </p>
            </div>
        </div>
    </div>
  )
}

export default Lawyer_Huang

// <p>欲了解更多關於黃炫中律師相關資訊：<a href='https://www.facebook.com/HUANGLAWFIRM/'>黃炫中律師官方網站</a>  </p>