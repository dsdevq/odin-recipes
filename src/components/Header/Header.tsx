import Icon from './components/Icon'
import gluten from '../../assets/gluten-free.png'
import veganImg from '../../assets/vegan.png'
import vegeterian from '../../assets/vegetarian.png'
import './Header.scss'

// Сделать функцию getImages, через map передать их в Icon component
// Сделать Title Component и в него передавать title

interface HeaderProps {
  image: string,
  title: string,
  vegan: boolean,
  vegetarian: boolean,
  glutenFree: boolean,
  style: object
}


export default function Header({ image, title, vegan, vegetarian, glutenFree, style }: HeaderProps) {

  return (
    <header className="header" style={style}>
      <div className="header__container">
        <div className="header__information">
          <ul className="header__icons icons-box">
            {
              vegan ? <Icon image={veganImg} />
                :
                vegetarian ? <Icon image={vegeterian} />
                  :
                  glutenFree &&
                  <Icon image={gluten} />
            }
          </ul>
          <h1 className="header__title title">
            {title}
          </h1>
        </div>
        <div className="header__decor decor">
          <img src={image} alt="Decor" className="decor__image" />
        </div>
      </div>
    </header>
  )
}

