import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../recipeData';
import './recipe.css'
import './recipePreview.css'

export default function Recipe() {
    let {name} = useParams();
    console.log(name);
    let recipe = recipes.find(x => x.name === name);
    console.log(recipe);
    if(!recipe) {
        return (
            <div></div>
        )
    }
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className="flex-container">
        <img className="large-image"src={recipe.image} alt="img"/>
        <div className = "flex-content">
            <h1> {recipe.name}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
                {/* {recipe.ingredients} */}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
            </ol>
        </div>
    </div>
  );
}