import React, { useRef, useEffect } from 'react'
import './P1_Team.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_1 from '../../../assets/Joy.png'
import user_2 from '../../../assets/Sanhorn.jpeg'
import user_3 from '../../../assets/Sanhorn.jpeg'
import user_4 from '../../../assets/Sanhorn.jpeg'
import user_5 from '../../../assets/Sanhorn.jpeg'
import user_6 from '../../../assets/Sanhorn.jpeg'

const P1_Team = () => {
  
  const slider = useRef();
  let tx = 0;

  const slideForward = ()=> {
    const maxTranslateX = -100 * (slider.current.children.length - 1) / 2;
    if (tx > maxTranslateX) {
        tx -= slider.current.children.length;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  
  const slideBackward = ()=> {
    if (tx < 0) {
        tx += slider.current.children.length;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  useEffect(() => {
    tx = 0;
    if (slider.current) {
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  }, []);

  return (
    <div className='teams'>
        <img src={next_icon} className='next-btn' onClick={slideForward}></img>
        <img src={back_icon} className='back-btn' onClick={slideBackward}></img>
        <div className='slider'>
            <ul ref={slider}>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1}></img>
                            <div>
                                <h3>林秀怡</h3>
                                <span>主持律師</span>
                            </div>
                        </div>
                        <p>林秀怡律師自1997年起執行法律業務迄今，專長領域包含公司海內外投資、併購、上市櫃法令、證券相關特許事業法規遵循、勞工、專利、著作權、合約審閱及一般公司法務諮詢。
                            由於林律師於國際性事務所服務長達十五年，所以對於處理英文合約暨與外商交涉，經驗豐富。 </p>
                    </div>
                </li>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2}></img>
                            <div>
                                <h3>徐弘光</h3>
                                <span>智權資深顧問</span>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </li>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3}></img>
                            <div>
                                <h3>許華珍</h3>
                                <span>智權顧問</span>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4}></img>
                            <div>
                                <h3>楊佩文</h3>
                                <span>顧問</span>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </li>
            
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_5}></img>
                            <div>
                                <h3>陳聖閎</h3>
                                <span>IT技術顧問</span>
                            </div>
                        </div>
                        <p>就讀於美國伊利諾大學香檳分校，陳聖閎顧問長期對怡睿提供IT相關服務</p>
                    </div>
                </li>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_6}></img>
                            <div>
                                <h3>許琇媚</h3>
                                <span>法務助理</span>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default P1_Team
