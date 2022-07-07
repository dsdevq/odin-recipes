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
            {/* <p className="textbox-instructions__text">
            Marinate chicken in all the marinade ingredients for at least 20 minutes.
            </p>
            <p className="textbox-instructions__text">
            Pulse the bell pepper, scallions, chickpeas, nuts, celery, ginger and garlic in a blender or food processor quickly - keep it a bit chunky.
            </p>
            <p className="textbox-instructions__text">
            Place mixture in a bowl and add the lime juice, honey/aminos, rice vinegar, sesame oil an hot peppter flakes/sriracha. Adjust flavors to your liking.
            </p>
            <p className="textbox-instructions__text">
            Cook the chicken (on a grill, preferably) and chop the carrots, add’l scallions, nuts, and cilantro.
            </p>
            <p className="textbox-instructions__text">
            When cooked, chop the chicken and lay out with the toppings (see photo). Grab a lettuce leaf and make a wrap. If you have other toppings/sauces you like, try it out!
            </p> */}
          </div>
        </div>
      </section>
    </main>
  )
}
