import React from 'react'
import './Main.scss'

export default function Main({ analyzedInstructions }: any) {
  return (
    <main className="main">
      <section className="main__ingredients ingredients">
        <div className="ingredients__container">
          <div className="ingredients__title title-main">
            Ingredients
          </div>
          <div className="ingredients__contentbox contentbox-ingredients">
            <div className="contentbox-ingredients__contentbox">
              {
                analyzedInstructions?.length && analyzedInstructions.map((step: any, index: number) =>
                  step.ingredients.length ?
                    (
                      <ul className="contentbox-ingredients__ingredients" key={index}>
                        {
                          step.ingredients.map((ingredient: any, index: number) => (
                            <li className="contentbox-ingredients__item" key={index}>
                              {ingredient.name}
                            </li>
                          ))
                        }
                      </ul>
                    )
                    :
                    null
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section className="main__instuctions instructions">
        <div className="instructions__container">
          <div className="instructions__title title-main">
            Instructions
          </div>
          <div className="instructions__textbox textbox-instructions">
            {
              analyzedInstructions?.length && analyzedInstructions.map((step: any, index: number) => (
                <p className="textbox-instructions__text" key={index}>
                  {step.number}. {step.step}
                </p>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}
