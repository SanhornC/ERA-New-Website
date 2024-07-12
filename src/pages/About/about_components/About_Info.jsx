import React from 'react'
import './About_Info.css'
import era_door_img from '../../../assets/era_door.jpg'

const About_Info = () => {
  return (
    <div className='info_container'>
      <img src={era_door_img} />
      <div className='text_container'>
        <p>本所林秀怡主持律師秉持多年來處理國際法律事務之經驗，深刻體會國內企業在國際巿場中拓展業務時，容易輕忽其所承擔之法律風險，
            加以國內多數律師之主要業務為民刑事訴訟而缺乏與國外企業交手之經驗，無法提供國內企業開發國際市場時必要之法律諮詢服務；而國內大型法律事務所，
            又常接受外國企業之委託，成為國內企業各項交易、締約談判之對造，致使國內企業常處於相對弱勢之一方；
            身為台灣子弟，林秀怡律師長久以來，一直希望能轉換角色，從外國企業的代表轉而為國內企業的守護者，為這塊土地盡一己之力；
            終於在累積豐富的經驗後，林秀怡律師決定於2013年7月創立為本土企業提供國際商業法律服務之『怡睿國際法律事務所』，
            並以『專業、信賴、成就』作為本所的核心理念。</p>
        <br></br>
        <h3><mark>Expert</mark>-「專業」代表著本所致力於提供專業、全面、高品質之法律諮商服務</h3>
        <h3><mark>Reliance</mark>-「信賴」代表著本所冀望能成為客戶絕對信任和值得依賴的法律專家</h3>
        <h3><mark>Achievement</mark>-「成就」代表著本所堅持以成就客戶輝煌事業為一切服務之最終目標</h3>
      </div>
    </div>
  )
}

export default About_Info
