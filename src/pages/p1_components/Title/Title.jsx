import PropTypes from 'prop-types'
import './Title.css'

const Title = ({ subTitle, label, center = true, headingId }) => {
  return (
    <div className={`title-block ${center ? 'title-block--center' : ''}`}>
      {label && <span className="section-label" lang="en">{label}</span>}
      <h2 id={headingId} className="section-title">{subTitle}</h2>
      <div className={`section-divider ${center ? 'section-divider--center' : ''}`} />
    </div>
  )
}

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  label: PropTypes.string,
  center: PropTypes.bool,
  headingId: PropTypes.string,
}

export default Title
