import React from 'react'
import './Horizontal_Scroll.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/PIC/era-office/凱峰辦公室招牌(正拍).jpg'
import img2 from '../../assets/PIC/era-office/大會議室3.jpg'
import img3 from '../../assets/PIC/era-office/事務所大樓外觀照片2.jpg'
import img5 from '../../assets/PIC/era-office/2.jpg'
import img6 from '../../assets/PIC/era-office/3.jpeg'
import img7 from '../../assets/PIC/era-office/4.jpg'

const images = [img1, img2, img3, img5, img6, img7];

const Horizontal_Scroll = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,  // 5 seconds
        pauseOnHover: true,
        arrows: true,
      };
    
      return (
        <div className="image-gallery">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className="image-slide" key={index}>
                <img src={image} alt={`Slide ${index}`} />
                <div className="overlay">
                  <h2>歡迎來到怡睿國際法律事務所</h2>
                  <p>向下滑動暸解更多怡睿提供的法律服務！</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
  )
}

export default Horizontal_Scroll
