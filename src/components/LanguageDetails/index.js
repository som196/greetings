import './index.css'

const LanguageDetails = props => {
  const {eachLanguage} = props
  const {imageUrl, imageAltText} = eachLanguage
  return (
    <ul>
      <li className="list-item">
        <img src={imageUrl} alt={imageAltText} className="img" />
      </li>
    </ul>
  )
}

export default LanguageDetails
