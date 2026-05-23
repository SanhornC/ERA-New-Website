import React from 'react'
import './Contact_Box.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "9ccd212a-12b4-4193-88d7-2a5e1fc729be"

const Contact_Box = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("傳送中…")
    const formData = new FormData(event.target)
    formData.append("access_key", WEB3FORMS_KEY)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()

    if (data.success) {
      setResult("已成功送出，本所將盡快與您聯繫。")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message || "送出失敗，請稍後再試。")
    }
  }

  return (
    <div className="page-c">
      <div className="section-head--center">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">聯絡我們</h2>
        <div className="section-divider section-divider--center" />
      </div>

      <div className="page-contact">
        <div className="page-contact__intro">
          <h3 className="page-contact__intro-title">
            <span lang="en">Let&apos;s Get Started</span>
          </h3>
          <p>
            怡睿國際法律事務所係由林秀怡律師於2013年在台灣設立之國內法律事務所。
            怡睿一貫堅持，並以提供全方位及高品質之法律專業服務為客戶解決問題。憑著這樣的堅持，「怡睿」擁有豐厚的信譽及口碑。
          </p>
          <address className="page-contact__info">
            <ul>
              <li><img src={mail_icon} alt="" role="presentation" /><span>電子信箱：<a href="mailto:attorneys@eralawfirm.com" lang="en">attorneys@eralawfirm.com</a></span></li>
              <li><img src={mail_icon} alt="" role="presentation" /><span>備用聯絡信箱：<a href="mailto:eralawfirm2013@gmail.com" lang="en">eralawfirm2013@gmail.com</a></span></li>
              <li><img src={phone_icon} alt="" role="presentation" /><span>聯絡電話：<a href="tel:+886-3-551-5533" lang="en">03-551-5533</a></span></li>
              <li><img src={phone_icon} alt="" role="presentation" /><span>公司傳真：<span lang="en">03-516-7034</span></span></li>
              <li><img src={phone_icon} alt="" role="presentation" /><span><span lang="en">Skype</span> 網路電話：<span lang="en">joylinemba</span></span></li>
              <li><img src={location_icon} alt="" role="presentation" /><span>公司地址：302 新竹縣竹北市惟馨街95號10-3樓(凱峰世紀科技中心)</span></li>
            </ul>
          </address>
        </div>

        <form className="page-contact__form" onSubmit={onSubmit}>
          <label className="page-contact__label" htmlFor="cu-name">您的姓名</label>
          <input id="cu-name" type="text" name="name" placeholder="請輸入您的姓名" required />

          <label className="page-contact__label" htmlFor="cu-phone">您的聯絡電話</label>
          <input id="cu-phone" type="tel" name="phone" placeholder="請輸入聯絡電話" required />

          <label className="page-contact__label" htmlFor="cu-email">您的電子郵件</label>
          <input id="cu-email" type="email" name="email" placeholder="請輸入電子郵件" required />

          <label className="page-contact__label" htmlFor="cu-msg">您想反應的狀況、建議或諮詢事項</label>
          <textarea id="cu-msg" name="message" rows="6" placeholder="請描述您的問題或需求" required></textarea>

          <button type="submit" className="btn btn-accent page-contact__submit">送出</button>
          <span className="page-contact__result" role="status" aria-live="polite">{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact_Box
