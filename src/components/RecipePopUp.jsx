/*
This page will open as a pop up in front of the Search Page and 
it will be a page about a single recipe.
*/

import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "../App.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

function RecipePopUp({ data, closeRecipePopUp }) {
  if (data) {
    // console.log(data)
    const { label, mealType, ingredients, totalNutrients, url } = data;
    const nutrientArray = Object.values(totalNutrients);
    return (
      // <div className="recipe-pop-up top-[100px] md:top-[133px] bottom-[40px] w-[290px] sm:w-[610px] md:w-[706px] lg:w-[964px] xl:w-[1038px] vertical-scroll">
      <div className="recipe-pop-up top-[100px] md:top-[133px] bottom-[40px] w-[290px]  sm:w-2/4 vertical-scroll px-[0.1rem] py-[1.5rem] md:p-[1.5rem]">
        <button
          onClick={() => closeRecipePopUp()}
          className="exit-btn text-2xl absolute right-6 top-6 bg-transparent border-none outline-none cursor-pointer"
        >
          <RxCross1 />
        </button>
        <h2 className="m-4 text-[16px] md:text-[18px] font-bold">{label}</h2>

        {/* check if mealType is present in the response or not. */}
        {mealType ? (
          <div className="group mealType">
            {mealType.map((type) => {
              const id = uuidv4();
              return (
                <p
                  className="border-none w-fit tracking-widest text-[12px] md:text-[14px]"
                  key={id}
                >
                  {type}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="group mealType">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Meal Type
            </h3>
            <p>no mealType found.</p>
          </div>
        )}

        {/* check if ingredients is present in the response or not. */}
        {ingredients ? (
          <div className="group ingredients">
            <h3 className="topic text-sm md:text-base">
              <FaAngleDoubleRight />
              Ingredients
            </h3>
            {ingredients.map((ingredient) => {
              const id = uuidv4();
              return (
                <p className="text-[12px] md:text-[14px]" key={id}>
                  {ingredient.text}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="group ingredients">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Ingredients
            </h3>
            <p>no ingredients found.</p>
          </div>
        )}

        {/* check if Nutrients is present in the response or not. */}
        {totalNutrients ? (
          <div className="group Nutrients">
            <div>
              <h3 className="topic text-sm md:text-base">
                <FaAngleDoubleRight />
                Nutrients
              </h3>
            </div>
            <div className="nutrient-flex flex flex-wrap py-0 px-[0.3rem]">
              {nutrientArray.map((nutrient) => {
                const id = uuidv4();
                return (
                  <p
                    className="nutrient p-[0.2rem] text-[12px] md:text-[14px]"
                    key={id}
                  >
                    {nutrient.label}
                  </p>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="group Nutrients">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Nutrients
            </h3>
            <p>no totalNutrients found.</p>
          </div>
        )}

        {url ? (
          <div className="group url">
            <a
              className="p-2 md:p-3 tracking-widest mb-4 mx-2 inline-block text-[12px] md:text-[16px]"
              target="_blank"
              href={url}
            >
              Recipe Link
            </a>

            <div className="w-fit m-auto">
              <p
                style={{ color: "var(--hover-color)" }}
                className="text-[14px] md:text-[16px]"
              >
                Share this recipe with friends
              </p>

              <div className="w-fit m-auto">
                <FacebookShareButton url={url} className="mx-1" quote={label}>
                  <FacebookIcon
                    round={true}
                    size={32}
                    iconFillColor="#efdfc5"
                    bgStyle={{ fill: "#1b1107" }}
                  ></FacebookIcon>
                </FacebookShareButton>

                <WhatsappShareButton url={url} className="mx-1" title={label}>
                  <WhatsappIcon
                    round={true}
                    size={32}
                    iconFillColor="#efdfc5"
                    bgStyle={{ fill: "#1b1107" }}
                  ></WhatsappIcon>
                </WhatsappShareButton>

                <TwitterShareButton url={url} className="mx-1" title={label}>
                  <TwitterIcon
                    round={true}
                    size={32}
                    iconFillColor="#efdfc5"
                    bgStyle={{ fill: "#1b1107" }}
                  ></TwitterIcon>
                </TwitterShareButton>

                <LinkedinShareButton url={url} className="mx-1" title={label}>
                  <LinkedinIcon
                    round={true}
                    size={32}
                    iconFillColor="#efdfc5"
                    bgStyle={{ fill: "#1b1107" }}
                  ></LinkedinIcon>
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="group url">
            <p>no url found.</p>
          </div>
        )}
      </div>
    );
  }
  return null;
}

export default RecipePopUp;
