import './Header.scss'

interface HeaderProps {
  image: string,
  title: string,
  style: object
}


export default function Header({ image, title, style }: HeaderProps) {

  return (
    <header className="header" style={style}>
      <div className="header__container">
        <div className="header__information">
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

