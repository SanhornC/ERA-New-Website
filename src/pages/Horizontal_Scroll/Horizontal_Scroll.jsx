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

const images = [img1, img2, img3, img5, img6, img7]

const Horizontal_Scroll = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <section className="hero-gallery" aria-label="怡睿國際法律事務所辦公室">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="hero-slide" key={index}>
            <img
              src={image}
              alt={`怡睿國際法律事務所辦公室 ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'sync' : 'async'}
              fetchpriority={index === 0 ? 'high' : 'auto'}
            />
            <div className="hero-slide__overlay" aria-hidden="true" />
          </div>
        ))}
      </Slider>

      <div className="hero-content">
        <span className="hero-content__rule" aria-hidden="true" />
        <span className="hero-content__eyebrow" lang="en">ERA International Law Firm</span>
        <h1 className="hero-content__title">怡睿國際法律事務所</h1>
        <p className="hero-content__lead">
          專業、信賴、成就 — 向下滑動暸解更多怡睿提供的法律服務
        </p>
      </div>

      <a href="#main-anchor" className="hero-scroll" aria-label="向下捲動">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default Horizontal_Scroll
