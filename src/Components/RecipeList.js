import React from 'react'

const RecipeList = ({recipe}) => {
  return (
    <div className='card'>
        <img src={recipe.strMealThumb}/>
        <h3>{recipe.strMeal}</h3>
      
    </div>
  )
}

export default RecipeList
