import { useEffect, useState } from 'react';
import './App.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface colorType {
  [key: string]: string
}


const API_KEY = `920a7fb04c7c4ee1a1dc65b9a1a60722`

export interface Recipes {
  id: number;
  image: string;
  title: string;
  analyzedInstructions: Instructions[]
}

//! analyzedInstructions
export interface Instructions {
  name?: string
  steps: Step[]
}

export interface Step {
  number?: string
  step?: string
  ingredients: Ingredient[]
}

export interface Ingredient {
  id: number
  name: string
}

const colors: colorType = {
  0: '#F24E1E',
  1: '#0FA958',
  2: '#699BF7',
  3: '#5551FF',
  4: '#FF8577',
  5: '#FFC700',
  6: '#C7B9FF',
  7: '#A259FF',
  8: '#FFFFFF',
  9: '#999999',
}
const setColor = (indx: number) => {
  if (colors[indx]) {
    return indx
  }
  else {
    return indx.toString()[indx.toString().length - 1]
  }
}

const randomRecipes = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=50&tags=vegetarian,dessert`

function App() {

  const [recipes, setRecipes] = useState<Recipes[]>()

  useEffect(() => {
    getRecipes(randomRecipes)
  }, [])

  const getRecipes = async (API: string) => {
    const response = await fetch(API)
    const { recipes } = await response.json()
    setRecipes(recipes)
  }


  return (
    <div className="App">
      <Accordion allowZeroExpanded>
        {recipes?.length && recipes.map(({ id, analyzedInstructions, ...rest }: Recipes, index) => (
          <AccordionItem key={id}>
            <AccordionItemHeading>
              <AccordionItemButton >
                <Header
                  style={
                    {
                      backgroundColor: colors[setColor(index)]
                    }
                  }
                  {...rest}
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Main steps={analyzedInstructions[0].steps} />
            </AccordionItemPanel>
          </AccordionItem>
        )
        )}
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
