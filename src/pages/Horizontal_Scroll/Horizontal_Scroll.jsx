import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

const images = [
  { src: img1, alt: '怡睿國際法律事務所辦公室招牌', width: 994, height: 561 },
  { src: img2, alt: '怡睿國際法律事務所大會議室', width: 1920, height: 1080 },
  { src: img3, alt: '怡睿國際法律事務所所在大樓外觀', width: 2048, height: 1155 },
  { src: img5, alt: '怡睿國際法律事務所辦公室環境', width: 1477, height: 1108 },
  { src: img6, alt: '怡睿國際法律事務所辦公室環境', width: 1920, height: 1281 },
  { src: img7, alt: '怡睿國際法律事務所辦公室環境', width: 1566, height: 1046 },
]

const Horizontal_Scroll = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(motionQuery.matches)

    updatePreference()
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', updatePreference)
      return () => motionQuery.removeEventListener('change', updatePreference)
    }

    motionQuery.addListener(updatePreference)
    return () => motionQuery.removeListener(updatePreference)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: prefersReducedMotion ? 0 : 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !prefersReducedMotion,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    pauseOnFocus: true,
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
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
            <div className="hero-slide__overlay" aria-hidden="true" />
          </div>
        ))}
      </Slider>

      <div className="hero-content">
        <span className="hero-content__rule" aria-hidden="true" />
        <span className="hero-content__eyebrow">
          <span>新竹竹北律師事務所</span><span className="hero-content__eyebrow-sep" aria-hidden="true"> · </span><span lang="en">ERA International Law Firm</span>
        </span>
        <h1 className="hero-content__title">怡睿國際法律事務所</h1>
        <p className="hero-content__lead">
          <span className="hero-content__lead-line">專業、信賴、成就</span>
          <span className="hero-content__lead-line">為本土企業提供國際商業法律服務</span>
        </p>
        <div className="hero-content__actions">
          <Link to="/services" className="btn btn-accent">服務領域</Link>
          <Link to="/contactus" className="btn btn-outline-light">預約諮詢</Link>
        </div>
      </div>

      <a href="#main-anchor" className="hero-scroll" aria-label="向下捲動">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default Horizontal_Scroll
