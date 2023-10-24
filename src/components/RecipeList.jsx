/*
This component represents a list of returnd recipe cards on the Search Page
*/


import { useState } from "react"
import RecipeCard from "./RecipeCard"
import {v4 as uuidv4 } from 'uuid'
import RecipePopUp from "./RecipePopUp"
import '../App.css'
import ReactPaginate from "react-paginate"

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

  // pagination logic

  const [recipesList, setRecipesList] = useState(recipes.slice(0,recipes.length))

  const [pageNumber , setPageNumber] = useState(0)
  const recipesPerPage = 5
  const pagesVisited = pageNumber * recipesPerPage

  const displayRecipes = recipesList
  .slice(pagesVisited , pagesVisited + recipesPerPage)

  const pageCount = Math.ceil(recipes.length / recipesPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }



    return (
      <div className="list-and-pagination">
    <div className="recipe-list flex flex-wrap items-center justify-around  w-full h-auto my-8 mx-auto p-4" >

    {recipes ? (
    displayRecipes.map(eachRecipeObj => {
    const id = uuidv4();
    const { recipe } = eachRecipeObj;
    return (
      <RecipeCard
        recipe={recipe}
        key={id}
        id={id}
        getRecipe={getRecipe}
        closeRecipePopUp={closeRecipePopUp}
          />
        );
      })
    ) : (
      <div className="recipe-list">
        <h3 className="text-lg tracking-widest">Recipes not Found.</h3>
      </div>
    )}
    
    {isPopUpVisible && <RecipePopUp 
    data={popUpData}
    closeRecipePopUp={closeRecipePopUp}/>}
    </div>
    <div className="pagination">
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={'paginationBtns'}
      previousLinkClassName={'previousBtn'}
      NextLinkClassName={'NextBtn'}
      disabledClassName={'paginationDisabled'}
      activeClassName={'paginationActive'}
    />
    </div>
    </div>
  ) 
} 

export default RecipeList

