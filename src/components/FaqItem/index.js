// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {questionText} = faqDetails
  const onClickFaq = () => {}
  return (
    <li className="faq-item">
      <div className="list-container">
        <h1 className="heading">{questionText}</h1>
        <button className="button" type="button" onClick={onClickFaq}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
            className="image"
          />
        </button>
      </div>
    </li>
  )
}
export default FaqItem
