import './Related_gallery.css'
import gallery_1 from '../../../../assets/gallery1.jpg'
import gallery_2 from '../../../../assets/gallery2.jpg'
import gallery_3 from '../../../../assets/gallery3.jpg'
import gallery_4 from '../../../../assets/gallery4.jpg'
import gallery_5 from '../../../../assets/gallery5.jpg'
import gallery_6 from '../../../../assets/gallery6.jpg'
import gallery_7 from '../../../../assets/gallery7.jpg'
import gallery_8 from '../../../../assets/gallery8.jpg'
import gallery_9 from '../../../../assets/gallery9.jpg'
import gallery_10 from '../../../../assets/gallery10.jpg'
import gallery_11 from '../../../../assets/gallery11.jpg'
import gallery_12 from '../../../../assets/gallery12.jpg'
import gallery_13 from '../../../../assets/gallery13.jpg'
import gallery_14 from '../../../../assets/gallery14.jpg'
import gallery_15 from '../../../../assets/gallery15.jpg'
import gallery_16 from '../../../../assets/gallery16.jpg'
import gallery_17 from '../../../../assets/gallery17.jpg'
import gallery_18 from '../../../../assets/gallery18.jpg'
import gallery_19 from '../../../../assets/gallery19.jpg'

const galleryImages = [
  { src: gallery_9, width: 2000, height: 1287 },
  { src: gallery_1, width: 1280, height: 720 },
  { src: gallery_2, width: 1280, height: 960 },
  { src: gallery_3, width: 960, height: 720 },
  { src: gallery_4, width: 1566, height: 1046 },
  { src: gallery_6, width: 1616, height: 1080 },
  { src: gallery_5, width: 1566, height: 1046 },
  { src: gallery_7, width: 960, height: 642 },
  { src: gallery_8, width: 1616, height: 1080 },
  { src: gallery_10, width: 1121, height: 1683 },
  { src: gallery_11, width: 1686, height: 1125 },
  { src: gallery_12, width: 1686, height: 1125 },
  { src: gallery_14, width: 1440, height: 1080 },
  { src: gallery_13, width: 1440, height: 1080 },
  { src: gallery_15, width: 1440, height: 1080 },
  { src: gallery_16, width: 1440, height: 1080 },
  { src: gallery_17, width: 1440, height: 1080 },
  { src: gallery_19, width: 865, height: 1248 },
  { src: gallery_18, width: 1080, height: 1440 },
]



const Related_gallery = () => {
  return (
    <div className="campus">
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={`怡睿國際法律事務所活動紀錄照片 ${index + 1}`}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  )
}

export default Related_gallery
