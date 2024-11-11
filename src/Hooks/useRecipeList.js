import React from 'react'

const useRecipeList = () => {
  const fetchRecipeListApi = async() => {
    const response =  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Soup");
    const jsonRes = await response.json();
    let fetchData = jsonRes.meals
      setrestaurantsList(fetchData);
      setfilteredrestaurantsList(fetchData);
}

  return (
    <div>
      //
    </div>
  )
}

export default useRecipeList
