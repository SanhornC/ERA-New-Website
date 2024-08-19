import React, { useState } from 'react'
import './Event1.css'
import img1 from './../../../assets/Events/event7_img1.jpeg'
import img2 from './../../../assets/Events/event7_img2.jpeg'

const images = [ 
    {src: img2, title: '前瞻科技 新創企業的專利佈局與法律議題', description: '請點擊觀看活動照片', date: '2021/6/28'},
    {src: img1, title: '前瞻科技 新創企業的專利佈局與法律議題', description: '請點擊觀看活動照片', date: '2021/6/28'},
];

const Event7 = () => {
  
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

export default Event7
