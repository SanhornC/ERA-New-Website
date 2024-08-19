import React, { useState } from 'react'
import img1 from './../../../assets/Events/event3_img0.pdf'
import img2 from './../../../assets/Events/event3_img1.jpg'
import img3 from './../../../assets/Events/event3_img2.jpg'
import img4 from './../../../assets/Events/event3_img3.jpg'
import img5 from './../../../assets/Events/event3_img4.jpg'
import img6 from './../../../assets/Events/event3_img5.jpg'
import img7 from './../../../assets/Events/event3_img6.jpg'


const images = [ 
    {src: img3, title: '凱峰保密合約演講', description: '請點擊觀看活動照片', date: '2023/3/8'},
    {src: img5, title: '凱峰保密合約演講', description: '請點擊觀看活動照片', date: '2023/3/8'},
    {src: img6, title: '凱峰保密合約演講', description: '請點擊觀看活動照片', date: '2023/3/8'},
    {src: img7, title: '凱峰保密合約演講', description: '請點擊觀看活動照片', date: '2023/3/8'},
];

const Event3 = () => {
  
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

export default Event3
