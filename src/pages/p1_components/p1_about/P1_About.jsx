import './P1_About.css'
import about_img from '../../../assets/capital-market-award.webp'

const P1_About = () => {
  return (
    <div className="about">
      <figure className="about-media about-award">
        <div className="about-award__stage">
          <img
            src={about_img}
            alt="臺灣證券交易所 113年度資本市場貢獻獎獎座"
            className="about-award__img"
            width="343"
            height="840"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="about-award__caption">
          <span className="about-award__label" lang="en">Award · 2024</span>
          <strong className="about-award__title">資本市場貢獻獎</strong>
          <span className="about-award__issuer">臺灣證券交易所頒發｜113 年度</span>
        </figcaption>
      </figure>
      <div className="about-body">
        <h3 className="about-eyebrow">怡睿國際法律事務所</h3>
        <h2 className="about-headline">專業、信賴、成就</h2>
        <p className="about-text">
          本所<b>林秀怡主持律師</b>秉持多年來處理國際法律事務之經驗，深刻體會國內企業在國際市場中拓展業務時，容易輕忽其所承擔之法律風險，加以國內多數律師之主要業務為民刑事訴訟而缺乏與國外企業交手之經驗，無法提供國內企業開發國際市場時必要之法律諮詢服務；而國內大型法律事務所，又常接受外國企業之委託，成為國內企業各項交易、締約談判之對造，致使國內企業常處於相對弱勢之一方；身為台灣子弟，林秀怡律師長久以來，一直希望能轉換角色，從外國企業的代表轉而為國內企業的守護者，為這塊土地盡一己之力；終於在累積豐富的經驗後，林秀怡律師決定於2013年7月創立為本土企業提供國際商業法律服務之『怡睿國際法律事務所』，並以『專業、信賴、成就』作為本所的核心理念。
        </p>
      </div>
    </div>
  )
}

export default P1_About
