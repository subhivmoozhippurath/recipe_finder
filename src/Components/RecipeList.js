import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  let navigate = useNavigate();
  return (
    <div
      className="card"
      key={recipe.idMeal}
      onClick={() => navigate(`/${recipe.idMeal}`)}
    >
      <img src={recipe.strMealThumb} />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
};

export default RecipeList;
