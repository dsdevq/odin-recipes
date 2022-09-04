import { Instructions } from '../../App'
import { InstructionsComponent } from '../Instructions'
import './Main.scss'



export default function Main({ steps }: Instructions) {
  return (
    <main className="main">
      <section className="main__ingredients ingredients">
      </section>
      <section className="main__instuctions instructions">
        <InstructionsComponent steps={steps} />
      </section>
    </main>
  )
}
