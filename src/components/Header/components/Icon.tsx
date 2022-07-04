import React from 'react'

interface Image {
  image: string
}

export default function Icon( { image  } : Image) {
  return (
    <li className="icons-box__item">
      {/* <a className="icons-box__link"> */}
        <img 
        src={image} 
        alt="Icon" 
        className="icons-box__image" 
        />
      {/* </a> */}
    </li>
  )
}
