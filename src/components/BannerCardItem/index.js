// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`banner-card-item ${className}`}>
      <h1 className="banner-heading">{headerText}</h1>
      <p className="banner-description">{description}</p>
      <button type="button" className="show-more-button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
