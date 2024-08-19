import React, { useState } from 'react'
import './Event2.css'
import img1 from './../../../assets/Events/Event1/event1_img1.jpeg'
import img2 from './../../../assets/Events/Event1/event1_img2.jpeg'
import img3 from './../../../assets/Events/Event1/event1_img3.jpg'

const images = [
    {src: img1, title: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論- 從企業併購法有關「保護股東權益」之修正談起', description: '請點擊觀看活動照片', date: '2023/10/4'}, 
    {src: img2, title: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論- 從企業併購法有關「保護股東權益」之修正談起', description: '請點擊觀看活動照片', date: '2023/10/4'},
    {src: img3, title: '新竹科學園區新興產業專題技術人才培訓計畫 - 科技公司相提「併」論- 從企業併購法有關「保護股東權益」之修正談起', description: '請點擊觀看活動照片', date: '2023/10/4'},
];

const Event2 = () => {

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

export default Event2
