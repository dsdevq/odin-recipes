import Icon from './components/Icon'
import gluten from '../../assets/gluten-free.png'
import vegan from '../../assets/vegan.png'
import vegeterian from '../../assets/vegetarian.png'
import './Header.scss'

// Сделать функцию getImages, через map передать их в Icon component
// Сделать Title Component и в него передавать title

interface HeaderProps {
  image: string,
  title: string,
  isVegan: boolean,
  isVeg: boolean,
  isGlutenFree: boolean,
  style: object
}


export default function Header({ image, title, isVegan, isVeg, isGlutenFree, style }: HeaderProps) {

  return (
    <header className="header" style={style}>
      <div className="header__container">
        <div className="header__information">
          <ul className="header__icons icons-box">
            {
              isVegan ? <Icon image={vegan} />
                :
                isVeg ? <Icon image={vegeterian} />
                  :
                  isGlutenFree &&
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

