import React, { useRef, useEffect } from 'react'
import './Other_Lawyer.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_1 from '../../../assets/Joy.png'
import user_2 from '../../../assets/Sanhorn.jpeg'
import user_3 from '../../../assets/Sanhorn.jpeg'
import user_4 from '../../../assets/Sanhorn.jpeg'
import user_5 from '../../../assets/Sanhorn.jpeg'
import user_6 from '../../../assets/Sanhorn.jpeg'

const Other_Lawyer = () => {
  
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
    <div className='other-teams'>
        <img src={next_icon} className='nxt-btn' onClick={slideForward}></img>
        <img src={back_icon} className='bck-btn' onClick={slideBackward}></img>
        <div className='other-slider'>
            <ul ref={slider}>
                <li>
                    <div className='other-slide'>
                        <div className='other-user-info'>
                            <img src={user_2}></img>
                            <div>
                                <h3>徐弘光</h3>
                                <span>智權資深顧問</span>
                            </div>
                        </div>
                        <h4>學歷：</h4>
                        <p> - 國立台灣大學機械工程碩士(Master of Mechanical Engineering, National Taiwan University)</p>
                        <p> - 國立政治大學科技管理碩士(Master of Technology and Innovation Management, Institute of Technology and Innovation Management, National Chengchi University)</p>
                    </div>
                </li>
                
                <li>
                    <div className='other-slide'>
                        <div className='other-user-info'>
                            <img src={user_3}></img>
                            <div>
                                <h3>許華珍</h3>
                                <span>智權顧問</span>
                            </div>
                        </div>
                        <h4>學歷：</h4>
                        <p> - 國立中央大學物理學系學士 (B.S. in Physics, National Central University)</p>
                        <p> - 國立中央大學光電研究所碩士 (M.S. in Optics & Electronics, National Central University)</p>
                    </div>
                </li>

                <li>
                    <div className='other-slide'>
                        <div className='other-user-info'>
                            <img src={user_4}></img>
                            <div>
                                <h3>楊佩文</h3>
                                <span>顧問</span>
                            </div>
                        </div>
                        <h4>學歷：</h4>
                        <p> - 私立輔仁大學法學士 (LLB, Fu Jen Catholic University)</p>
                        <p> - 國立交通大學科技法律研究所碩士 (LLM, Institute of Technology Law, National Chiao Tung University)</p>
                        <p> - 美國印第安那大學法學碩士 (LLM, Indiana University School of Law－Bloomington, Indiana)</p>
                    </div>
                </li>
            
                <li>
                    <div className='other-slide'>
                        <div className='other-user-info'>
                            <img src={user_5}></img>
                            <div>
                                <h3>陳聖閎</h3>
                                <span>IT技術顧問</span>
                            </div>
                        </div>
                        <h4>學歷：</h4>
                        <p> - 美國伊利諾州香檳分校學士 (CS + Econ, University of Illinois Urbana Champaign)</p>
                    </div>
                </li>
                
                <li>
                    <div className='other-slide'>
                        <div className='other-user-info'>
                            <img src={user_6}></img>
                            <div>
                                <h3>許琇媚</h3>
                                <span>法務助理</span>
                            </div>
                        </div>
                        <h4>學歷：</h4>
                        <p> - 國立東華大學經濟學學士及法學學士 (Bachelor of Arts in Economics and Bachelor of Laws, National Dong Hwa University)</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Other_Lawyer
