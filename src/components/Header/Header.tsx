import React, { useState } from 'react'
import Icon from './components/Icon'
import gluten from '../../assets/gluten-free.png'
import vegan from '../../assets/vegan.png'
import vegeterian from '../../assets/vegetarian.png'
import food from '../../assets/with-image.png'
import './Header.scss'

// Сделать функцию getImages, через map передать их в Icon component
// Сделать Title Component и в него передавать title


export default function Header({ FoodImage, title, } : any) {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__information">
          <ul className="header__icons icons-box">
            <Icon image={vegan} />
            <Icon image={gluten} />
            <Icon image={vegeterian} />
          </ul>
          <h1 className="header__title title">
            {title || 'Sweet Spicy Lettuce Wraps'}
          </h1>
        </div>
        <div className="header__decor decor">
          <img src={food} alt="Photo" className="decor__image" />
        </div>
      </div>
    </header>
  )
}

