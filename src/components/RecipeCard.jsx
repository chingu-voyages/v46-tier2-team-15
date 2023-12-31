/*
This component represents a 
single recipe info in the list of recipes on the Search Page 
*/

import "../App.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { TbHealthRecognition } from "react-icons/tb";

function RecipeCard({ recipe, getRecipe, id }) {
  const { image, label, cuisineType, calories, mealType, ingredients } = recipe;

  const caloriesRound = Math.round(calories);

  return (
    <div className="recipe-card flex flex-col items-center w-[12rem] md:w-[14rem] text-center min-h-[21rem] my-4 md:my-8 mx-6 p-1">
      <div className="img-bg w-full h-24 flex items-start justify-center mb-20 ">
        <img
          className="recipe-image w-36 md:w-40 h-[10rem] m-4  border-4 border-solid"
          src={image}
          alt="recipe image"
        />
      </div>

      <div className="recipe-label-div min-h-[4rem] h-auto w-full">
        <h3 className="recipe-label font-semibold text-[15px] md:text-[16px] ">
          {label}
        </h3>
      </div>

      <div className="more-details flex flex-col items-start justify-around self-start my-1 bottom-14">
        <div className="cuisin flex items-center p-1">
          <ImEarth />
          <p className="recipe-cuisineType tracking-wider py-0 px-2 capitalize text-sm md:text-base">
            {cuisineType}
          </p>
        </div>

        <div className="calories flex items-center p-1">
          <TbHealthRecognition />
          <p className="recipe-cuisineType tracking-wider py-0 px-2 capitalize text-sm md:text-base">
            {caloriesRound}Kcals
          </p>
        </div>
      </div>

      <button
        className="card-button w-[10rem] md:w-[12rem] my-1 py-2 flex items-center justify-around border-2 border-solid border-black text-base bg-transparent cursor-pointer"
        onClick={() => {
          getRecipe(recipe);
        }}
      >
        <p className="text-[14px] md:text-base">Get More Info</p>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default RecipeCard;
