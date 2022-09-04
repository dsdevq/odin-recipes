import { Instructions, Step } from '../App'
import { StepComponent } from './Step'

export const InstructionsComponent = ({ steps }: Instructions) => {
  return (
    <div className="instructions__container">
      <div className="instructions__textbox textbox-instructions">
        {
          steps?.length && steps.map((step: Step) => (
            <StepComponent key={step.number} {...step} />
          ))
        }
      </div>
    </div>
  )
}
