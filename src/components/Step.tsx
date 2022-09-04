import { Step } from "../App"
import { Ingredients } from "./Ingredients"



export const StepComponent = ({ step, number, ingredients }: Step) => {

  return (
    <>
      <p className="textbox-instructions__text">
        {number}. {step}
      </p>
      <div className="ingredients__contentbox contentbox-ingredients">
        {ingredients.length ? (
          <div className="contentbox-ingredients__contentbox">
            <p className="textbox-instructions__text ingredient">Ingredients :</p>
            <Ingredients ingredients={ingredients} />
          </div>
        )
          : <p className="textbox-instructions__text ingredient"> No ingredients </p>
        }
      </div>
    </>
  )
}

