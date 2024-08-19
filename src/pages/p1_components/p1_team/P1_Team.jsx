import React, { useRef, useEffect } from 'react'
import './P1_Team.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_1 from '../../../assets/person/Joy.jpg'
import user_2 from '../../../assets/person/Henry.jpg'
import user_3 from '../../../assets/person/Anna.jpg'
import user_4 from '../../../assets/person/黃炫中照片1.jpg'
import user_5 from '../../../assets/person/余昱辰照片.jpg'
import user_6 from '../../../assets/person/周庭卉照片.jpg'
import user_7 from '../../../assets/person/楊佩雯2.jpg'
import user_8 from '../../../assets/person/Sherry.jpg'

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
                            <img src={user_8}></img>
                            <div>
                                <h3>王承舜</h3>
                                <span>合作美國加州律師</span>
                            </div>
                        </div>
                        <b>學歷：</b>
                        <br></br>
                        <p>國立政治大學法律學系學士</p>
                        <p>美國伊利諾大學香檳分校法學碩士</p>
                        <br></br>
                        <b>法律執照：</b>
                        <p> - New York Bar: Admitted in 2007 </p>
                        <p> - California Bar: Admitted in 2015 </p>
                    </div>
                </li>
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4}></img>
                            <div>
                                <h3>黃炫中</h3>
                                <span>律師</span>
                            </div>
                        </div>
                        <b>學歷:</b>
                        <br></br>
                        <p>國立台灣大學法律系學士<br></br>
                        國立中興大學科技法律研究所碩士</p>
                        <br></br>
                        <b>經歷:</b>
                        <br></br>
                        <p>
                        前臺灣高等法院法官<br></br>
                        前臺灣臺中地方法院法官
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_5}></img>
                            <div>
                                <h3>余昱辰</h3>
                                <span>智權顧問</span>
                            </div>
                        </div>
                        <b>經歷：</b>
                        <br></br>
                        <p>2014第一屆總統創新獎：專利服務創新(主動式三維度專利佈局)<br></br>
                        工研院光電所-光通訊組件與系統研發、電光所LED組-專利經理(1999-2014)<br></br>
                        威爾立國際智權顧問有限公司總經理(2015-2017)<br></br>
                        嘉興山蒲照明電器有限公司-IP與法務中心負責人(2018-2023/02)
                        </p>
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
                        <b>學歷:</b>
                        <br></br>
                        <p>國立台灣大學機械工程碩士<br></br>
                        國立政治大學科技管理碩士
                        </p>                        
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
                        <b>學歷:</b>
                        <br></br>
                        <p>國立中央大學物理學系學士<br></br>
                        國立中央大學光電研究所碩士
                        </p>              
                    </div>
                </li>

                
                
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_6}></img>
                            <div>
                                <h3>周庭卉</h3>
                                <span>財務顧問</span>
                            </div>
                        </div>
                        <b>學歷：</b>
                        <br></br>
                        <p>銘傳管理學院會計系學士</p>
                        <p>國立交通大學管理科學研究所碩士</p>

                        <b>經歷：</b>
                        <br></br>
                        <p>光頡科技股份有限公司稽核副理、財務副理、財務經理、總經理室資深經理(2006/05-2015/06)</p>
                        <p>光磊科技股份有限公司-稽核經理(2015/07-2017/01)</p>
                        <p>錼創科技股份有限公司/錼創顯示科技股份有限公司-財會處處長(兼任公司治理主管)/行政處處長(2017/04-迄今)</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_7}></img>
                            <div>
                                <h3>楊佩文</h3>
                                <span>顧問</span>
                            </div>
                        </div>
                        <b>學歷：</b>
                        <br></br>
                        <p>私立輔仁大學法學士</p>
                        <p>國立交通大學科技法律研究所碩士</p>
                        <p>美國印第安那大學法學碩士</p>
                    </div>
                </li>
                
                

            </ul>
        </div>
    </div>
  )
}

export default P1_Team
