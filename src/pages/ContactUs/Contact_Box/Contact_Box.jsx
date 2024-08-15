import React from 'react'
import './Contact_Box.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'
import white_arrow from '../../../assets/white-arrow.png'


const Contact_Box = () => {
    // web3 form service: https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5f334a35-9b60-41cc-b70e-75d7a2413c23");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
     <div className='page-c'>
        <h2>聯絡我們</h2>
        <div className='page-contact'>
            <div className='page-contact-col'>
                <h3>Let's Get Started<img src={msg_icon}></img></h3>
                <p>怡睿國際法律事務所係由林秀怡律師於2013年在台灣設立之國內法律事務所。
                    怡睿一貫堅持，並以提供全方位及高品質之法律專業服務為客戶解決問題。憑著這樣的堅持，「怡睿」擁有豐厚的信譽及口碑。</p>
                <ul>
                    <li><img src={mail_icon}></img>電子信箱：attorneys@eralawfirm.com</li>
                    <li><img src={mail_icon}></img>備用聯絡信箱：eralawfirm2013@gmail.com</li>
                    <li><img src={phone_icon}></img>聯絡電話：03-551-5533</li>
                    <li><img src={phone_icon}></img>公司傳真：03-516-7034</li>
                    <li><img src={phone_icon}></img>Skype網路電話：joylinemba</li>
                    <li><img src={location_icon}></img>公司地址：302 新竹縣竹北市惟馨街95號10-3樓(凱峰世紀科技中心)</li>
                </ul>  
                </div>
            <div className='page-contact-col'>
                <form onSubmit={onSubmit}>
                    <label>您的姓名</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required></input>
                    <label>您的聯絡電話</label>
                    <input type='tel' name='phone' placeholder='Enter Your Number' required></input>
                    <label>您的郵件信箱</label>
                    <input type='email' name='email' placeholder='Enter Your Email' required></input>
                    <label>您想反應的狀況，建議，或諮詢事項</label>
                    <textarea name='message' rows='6' placeholder='Type Your Message Here' required></textarea>
                    <button type='submit' className='btn dark-btn'>送出<img src={white_arrow}></img></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>   
  )
}

export default Contact_Box
