import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetai = () => {
  const { mealid } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();
  let i=1;
  useEffect(() => {
    if (mealid) {
        fetchRecipeDetails();
    }
}, [mealid]);

const fetchRecipeDetails = async () => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        if (data.meals) {
            setRecipeDetails(data.meals[0]);
            console.log(data.meals[0])
        } else {
            setRecipeDetails(null); 
        }
    } catch (error) {
        console.error("Error fetching recipe details:", error);
    }
};
  return (
    <>
      {!recipeDetails ? (
        " "
      ) : (
        <div className="recipeContainer">
          <div className="content">
            <img src={recipeDetails.strMealThumb}/>
            <div className="desc_iinner_content">
              <h1>{recipeDetails.strMeal}</h1>
              <h2>{recipeDetails.strCategory}</h2>
              <h3>{recipeDetails.strArea}</h3>             
            </div>
          </div>
          <div className="recipe_desc">
            <div className="incredients">
              <h2>ingredients</h2>
              <h4>{recipeDetails.strIngredient1} : {recipeDetails.strMeasure1}</h4>
              <h4>{recipeDetails.strIngredient2} : {recipeDetails.strMeasure2}</h4>
              <h4>{recipeDetails.strIngredient3} : {recipeDetails.strMeasure3}</h4>
              <h4>{recipeDetails.strIngredient4} : {recipeDetails.strMeasure4}</h4>
              <h4>{recipeDetails.strIngredient5} : {recipeDetails.strMeasure5}</h4>
              <h4>{recipeDetails.strIngredient6} : {recipeDetails.strMeasure6}</h4>
              <h4>{recipeDetails.strIngredient7} : {recipeDetails.strMeasure7}</h4>
              <h4>{recipeDetails.strIngredient8} : {recipeDetails.strMeasure8}</h4>

            </div>
            <div className="instruction">
              <h2>Instructions</h2>
              <p>{recipeDetails.strInstructions}</p>
              
            </div>

          </div>

        </div>
      )}
    </>
  );
  
};

export default RecipeDetai;
