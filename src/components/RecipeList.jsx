/*
This component represents a list of returnd recipe cards on the Search Page
*/


import { useState } from "react"
import RecipeCard from "./RecipeCard"
import {v4 as uuidv4 } from 'uuid'
import RecipePopUp from "./RecipePopUp"
import '../App.css'

function RecipeList({recipes}) {

    const [isPopUpVisible,setIsPopUpVisible] = useState(false)

    const [popUpData,setPopUpData] = useState(null)

    function getRecipe(recipe){
        console.log(recipe)
        setIsPopUpVisible(true)
        setPopUpData(recipe)
    }   

    function closeRecipePopUp() {
      setIsPopUpVisible(false)
  }



    return (
    <div className="recipe-list flex flex-wrap items-center justify-around  w-full h-auto my-8 mx-auto p-4 border-2  border-solid border-black" >

    {recipes ?
      recipes.map(eachRecipeObj => {
        const id = uuidv4()
        const {recipe} = eachRecipeObj
        return <RecipeCard recipe={recipe}
        key={id}
        id={id} 
        getRecipe={getRecipe}
        closeRecipePopUp={closeRecipePopUp} 
        />
      }) 
      : 
      <div className="recipe-list">
        <h3 className="text-lg tracking-widest">Recipes not Found.</h3>
      </div>
    }
    {isPopUpVisible && <RecipePopUp 
    data={popUpData}
    closeRecipePopUp={closeRecipePopUp}/>}
    </div>
  ) 
  
}

  

export default RecipeList
