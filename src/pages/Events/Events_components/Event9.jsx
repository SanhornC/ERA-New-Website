import React, { useState } from 'react'
import './Event1.css'
import img1 from './../../../assets/Events/event9_img1.jpg'
import img2 from './../../../assets/Events/event9_img2.jpeg'
import img3 from './../../../assets/Events/event9_img3.jpeg'
import img4 from './../../../assets/Events/event9_img4.jpeg'


const images = [ 
    {src: img1, title: '工研院營運發展處分享研討會 - 新創相關法律案件分享', description: '請點擊觀看活動照片', date: '2020/3/24'},
    {src: img2, title: '工研院營運發展處分享研討會 - 新創相關法律案件分享', description: '請點擊觀看活動照片', date: '2020/3/24'},
    {src: img3, title: '工研院營運發展處分享研討會 - 新創相關法律案件分享', description: '請點擊觀看活動照片', date: '2020/3/24'},
    {src: img4, title: '工研院營運發展處分享研討會 - 新創相關法律案件分享', description: '請點擊觀看活動照片', date: '2020/3/24'},
];

const Event9 = () => {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
        <div className="event-container">
                <div className="event-image">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                    <div className="event-caption">
                        <h2>{images[currentIndex].title}</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3>{images[currentIndex].description}</h3>
                        <p className="event-date">演講日期: {images[currentIndex].date}</p>
                    </div>
                </div>
                <div className="evenet-controls">
                    <button onClick={prevSlide} className="event-control left">&lt;</button>
                    <button onClick={nextSlide} className="event-control right">&gt;</button>
                </div>
        </div>
  )
}

export default Event9
