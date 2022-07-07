import React from 'react'

interface Image {
  image: string
}

export default function Icon({ image }: Image) {
  return (
    <li className="icons-box__item">
      <img
        src={image}
        alt="Icon"
        className="icons-box__image"
      />
    </li>
  )
}
