import React, { useEffect, useState } from 'react';
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
  [key: string]: string | undefined
}


const API_KEY = `920a7fb04c7c4ee1a1dc65b9a1a60722`

interface Recipes {
  id: number;
  vegetarian: boolean;
  glutenFree: boolean;
  image: string;
  title: string;
  analyzedInstructions: any;
  vegan: boolean;
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
  8: '#FFFFFF'
}
// const AUTH = `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true.`

const randomRecipes = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=50&tags=vegetarian,dessert`

function App() {

  const [recipes, setRecipes] = useState<Recipes[]>()

  useEffect(() => {
    getRecipes(randomRecipes)
  }, [])

  const getRecipes = async (API: string) => {
    const response = await fetch(API)
    const result = await response.json()
    const recipes = result.recipes
    setRecipes(recipes)
  }

  const setColor = (indx: number) => {
    const secondNumber = indx.toString().split('')
    return secondNumber[secondNumber.length - 1]
  }

  return (
    <div className="App">
      <Accordion allowZeroExpanded>
        {recipes?.length && recipes.map((recipe: Recipes, index: number) => (
          <AccordionItem key={recipe.id}>
            <AccordionItemHeading>
              <AccordionItemButton >
                {/* Куда необходимо нажать */}
                <Header
                  style={
                    colors[index] ?
                      {
                        backgroundColor: colors[index]
                      }
                      :
                      {
                        backgroundColor: colors[setColor(index)]
                      }
                  }
                  isVeg={recipe.vegetarian}
                  isVegan={recipe.vegan}
                  isGlutenFree={recipe.glutenFree}
                  image={recipe.image}
                  title={recipe.title} />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {/* Что отображается при нажатии */}
              <Main analyzedInstructions={recipe.analyzedInstructions[0].steps} />
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
