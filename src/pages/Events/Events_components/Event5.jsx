import React, { useState } from 'react'
import './Event1.css'
import img1 from './../../../assets/Events/event5_img1.jpeg'
import img2 from './../../../assets/Events/event5_img2.jpeg'

const images = [ 
    {src: img2, title: '新竹市室內裝修商業同業公會演講 - 合約常見之實務問題', description: '請點擊觀看活動照片', date: '2021/11/24'},
    {src: img1, title: '新竹市室內裝修商業同業公會演講 - 合約常見之實務問題', description: '請點擊觀看活動照片', date: '2021/11/24'},
];

const Event5 = () => {
  
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

export default Event5
