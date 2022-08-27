import heartPng from '../../assets/heart.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className='footer__img' src={heartPng} alt="heart" />
        <a target='_blank' rel="noreferrer" href='https://www.figma.com/community/file/822951830245509816' >
          <p className="footer__text">
            Grab this <span>recipe template!</span>
          </p>
        </a>
      </div>
    </footer>
  )
}
