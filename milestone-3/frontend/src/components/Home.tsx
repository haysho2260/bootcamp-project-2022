import RecipePreview from './recipePreview'
import {useState, useEffect } from 'react';
import recipes from '../recipeData';
import {Recipe} from "../recipeData"
export default function Home(){
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
  const compRecipes = [...recipes, ...externalRecipes] ;
  console.log(compRecipes);
    return(
    <main>

        {recipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      link={"/recipe/"}
    />
  ))}
    {externalRecipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      link={"/externalRecipe/"}
    />
  ))}
    </main>
    );
}