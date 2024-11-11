import React from 'react';
import RecipeList from './RecipeList';
import { useContext, useEffect, useState } from "react";
import Options from './Options';
import {ChoicesList} from '../Utils/const';
import Header from './Header';


const Home = () => {
    const [recipeChoices,setrecipeChoices] = useState('breakfast');
    const [recipes, setRecipes] = useState([]); 
    const [search,setsearch] = useState('')
    useEffect(() => {
        fetchRecipeListApi();
    },[recipeChoices]);

        const fetchRecipeListApi = async() => {
          const response =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeChoices}`);
          const jsonRes = await response.json();
          setRecipes(jsonRes.meals || []);
            
           
      }
      const handleChoiceClick = (type) => {
        setrecipeChoices(type);
      }
      const searchRecipe = (e) => {
        if(e.key == "Enter"){
            setrecipeChoices(search)
        }
      }
     
      
    return (
        <>

        <div className='main flex flex-col items-center'>
            <div className='heading'>
                <h1>Search Your Favourite Food Here </h1>
                <p>Simple recipes made for   <span>real, actual, everyday life.</span></p>
            </div>
            <div className='searchBox'>
                <input className='searcfBar' type='search' placeholder='search by incgedients,name etc...'
                onChange={e => setsearch(e.target.value)}
                onKeyPress={searchRecipe}/>
               
            </div>


        </div>
        <div className='containerChoice'>
            {
              ChoicesList.map((choice,index) =>(
                <Options data ={choice} key={index}
                onClick={() => handleChoiceClick(choice.type)}/>
              )
               )  
            }

        </div>

        <div className='container'>
        <div className='container-inner'>
        {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <RecipeList key={index} recipe={recipe} />
                    ))
                ) : (
                    <p>No recipes found for "{recipeChoices}"</p>
                )}
        </div>
        </div>

        </>
    )

}
export default Home;