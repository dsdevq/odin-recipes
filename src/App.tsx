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

const API_KEY = `920a7fb04c7c4ee1a1dc65b9a1a60722`

const AUTH = `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true.`

const randomRecipes = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=4&tags=vegetarian,dessert`

function App() {

  const [recipes, setRecipes] = useState<any[]>()

  useEffect(() => {
    // getRecipes(randomRecipes)
  }, [])

  const getRecipes = async (API: string) => {
    const response = await fetch(API)
    const result = await response.json()
    const recipes = result.recipes
    setRecipes(recipes)
  }

  return (
    <div className="App">
      <Accordion allowZeroExpanded>
        {/* {recipes?.length && recipes.map((recipe) : any => { */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton >
              {/* Куда необходимо нажать */}
              <Header />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {/* Что отображается при нажатии */}
            <Main />
          </AccordionItemPanel>
        </AccordionItem>
        {/* })} */}
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
