import PropTypes from 'prop-types'
import emblem from '../../assets/era-emblem.png'
import './Brand.css'

// Logo lockup: the ERA emblem (cropped from the official logo) plus the firm
// name set as live text, so it stays sharp at every size and on any background.
const Brand = ({ tone = 'dark' }) => (
  <span className={`brand brand--${tone}`}>
    <img
      src={emblem}
      alt=""
      className="brand__emblem"
      width="311"
      height="107"
      decoding="async"
    />
    <span className="brand__text">
      <span className="brand__name">怡睿國際法律事務所</span>
      <span className="brand__en" lang="en">ERA International Law Firm</span>
    </span>
  </span>
)

Brand.propTypes = {
  tone: PropTypes.oneOf(['dark', 'light']),
}

export default Brand
