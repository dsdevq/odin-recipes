// ! Steps => Step + Ingredients 

import { Ingredient, Step } from "../App"


export const Ingredients = ({ ingredients }: Step) => {
  return (
    <ul className="contentbox-ingredients__ingredients">
      {
        ingredients.map(({ name }: Ingredient, index) => (
          <li className="contentbox-ingredients__item" key={index}>
            {name}
          </li>
        ))
      }
    </ul>

  )
}
