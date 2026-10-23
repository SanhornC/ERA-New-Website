import React from 'react'
import ContactList from '../../ContactUs/ContactList/ContactList'
import './P1_Contact.css'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "9ccd212a-12b4-4193-88d7-2a5e1fc729be"

const P1_Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("傳送中…")
    const formData = new FormData(event.target)
    formData.append("access_key", WEB3FORMS_KEY)
    formData.append("subject", `官網諮詢：${formData.get("name") || ""}`)
    formData.append("from_name", "怡睿國際法律事務所官網")

    try {
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
    } catch (error) {
      console.log("Error", error)
      setResult("送出失敗，請檢查網路連線，或直接來電 03-551-5533。")
    }
  }

  return (
    <div className="p1-contact">
      <div className="p1-contact__intro">
        <h3 className="p1-contact__intro-title">
          <span lang="en">Let&apos;s Get Started</span>
        </h3>
        <p className="p1-contact__intro-text">
          怡睿國際法律事務所係由林秀怡律師於2013年在台灣設立之國內法律事務所。
          怡睿一貫堅持，並以提供全方位及高品質之法律專業服務為客戶解決問題。憑著這樣的堅持，「怡睿」擁有豐厚的信譽及口碑。
        </p>
        <ContactList />
      </div>

      <form className="p1-contact__form" onSubmit={onSubmit}>
        <label className="p1-contact__label" htmlFor="p1-name">您的姓名</label>
        <input id="p1-name" type="text" name="name" placeholder="請輸入您的姓名" required />

        <label className="p1-contact__label" htmlFor="p1-phone">您的聯絡電話</label>
        <input id="p1-phone" type="tel" name="phone" placeholder="請輸入聯絡電話" required />

        <label className="p1-contact__label" htmlFor="p1-email">您的電子郵件</label>
        <input id="p1-email" type="email" name="email" placeholder="請輸入電子郵件" required />

        <label className="p1-contact__label" htmlFor="p1-msg">您想反應的狀況、建議或諮詢事項</label>
        <textarea id="p1-msg" name="message" rows="6" placeholder="請描述您的問題或需求" required></textarea>

        <button type="submit" className="btn btn-accent p1-contact__submit">送出</button>
        <span className="p1-contact__result" role="status" aria-live="polite">{result}</span>
      </form>
    </div>
  )
}

export default P1_Contact
