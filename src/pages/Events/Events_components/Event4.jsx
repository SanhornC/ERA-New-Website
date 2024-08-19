import React, { useState } from 'react'
import img1 from './../../../assets/Events/event4_img1.jpg'



const images = [ 
    {src: img1, title: '陽明交大校友會工商經營178Club - 4月份總裁思維讀書會科技法律講座與商務交流活動', description: '請點擊觀看活動照片', date: '2023/4/25'},
];

const Event4 = () => {

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

export default Event4
