import React from 'react'
import './Main.scss'

export default function Main() {
  return (
    <main className="main">
      <section className="main__ingredients ingredients">
        <div className="ingredients__container">
          <div className="ingredients__title title-main">
            Ingredients
          </div>
          <div className="ingredients__contentbox contentbox-ingredients">
            <div className="contentbox-ingredients__title subtitle-main">
              For the filling:
            </div>
            <div className="contentbox-ingredients__contentbox">
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  1 red bell pepper, cut into a few peices
                </li>
                <li className="contentbox-ingredients__item">
                  2 scallions
                </li>
                <li className="contentbox-ingredients__item">
                  1 can chickpeas
                </li>
                <li className="contentbox-ingredients__item">
                  1⁄2 cup nuts (pecans or cashews are good ones!) - more needed for the toppings below
                </li>
                <li className="contentbox-ingredients__item">
                  2 celery stalks
                </li>
                <li className="contentbox-ingredients__item">
                  2 cloves garlic
                </li>
              </ul>
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  1 tablespoon fresh ginger
                </li>
                <li className="contentbox-ingredients__item">
                  1 lime, juiced - another lime needed for the toppings below
                </li>
                <li className="contentbox-ingredients__item">
                  1 tablespoon honey (or coconut aminos), more if you want it sweeter
                </li>
                <li className="contentbox-ingredients__item">
                  1 tablespoon rice vinegar
                </li>
                <li className="contentbox-ingredients__item">
                  1 teaspoon sesame oil
                </li>
                <li className="contentbox-ingredients__item">
                  red pepper flakes or sriracha, to taste
                </li>
              </ul>
            </div>
            <div className="contentbox-ingredients__title subtitle-main">
              For wrap and toppings:
            </div>
            <div className="contentbox-ingredients__contentbox">
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  1 head of bibb lettuce or other wrapper
                </li>
                <li className="contentbox-ingredients__item">
                  1 carrot, shaved
                </li>
                <li className="contentbox-ingredients__item">
                  1⁄2 cup nuts for more crunch
                </li>
              </ul>
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  2 scallions, sliced thin
                </li>
                <li className="contentbox-ingredients__item">
                  ¼ cup Fresh cilantro, roughly
                </li>
                <li className="contentbox-ingredients__item">
                  1 lime sliced in wedges
                </li>
              </ul>
            </div>
            <div className="contentbox-ingredients__title subtitle-main">
              Chicken and mariande:
            </div>
            <div className="contentbox-ingredients__contentbox">
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  1lb of chicken thighs
                </li>
                <li className="contentbox-ingredients__item">
                  2 tbsp soy sauce
                </li>
                <li className="contentbox-ingredients__item">
                  1 tbsp brown sugar
                </li>
              </ul>
              <ul className="contentbox-ingredients__ingredients">
                <li className="contentbox-ingredients__item">
                  2 cloves garlic, finely chopped
                </li>
                <li className="contentbox-ingredients__item">
                  1 tbsp olive oil
                </li>
              </ul>
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
            <p className="textbox-instructions__text">
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
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
