/*
This component will open between Header and Footer and 
it will be the first page a user sees. 
This page should contain some fancy stuff and 
instructions on how to use the Dish Dive App and 
we can add some random recipes below the instructions.

This page will be replaced with the Search page once a search is done.
*/

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SortingList from "./SortingList";
const APP_ID = "69b87f9b";
const APP_KEY = "c1555e257f882dc0d5ee81afe169f456";

function LandingPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [dataLength, setDataLength] = useState(0);


  const fetchRecepes = (query) => {
      const validInput = query.toLowerCase()

    setLoading(true);
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${validInput}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        setSearchPerformed(true);
        setDataLength(recipes.length);

      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full bg-[#1B1107]">
      <div className="py-[32px] px-[24px] bg-[url('/src/assets/page-images/hero-section.png')]  bg-cover opacity-90">
        <h3 className="text-white text-center text-[24px] lg:text-[32px] xl:text-[48px]">
          Hungry?
        </h3>
        <h3 className="text-white text-center text-[24px] lg:text-[32px] xl:text-[48px] mb-[10px]">
          You are at the right place!
        </h3>
        <p className="text-white text-center text-[14px] lg:text-[16px] xl:text-[20px] mb-[20px]">
          We help you in preparing the healthy nutritious dishes
        </p>
        <div className="px-[24px] w-full md:w-[50%] md:px-[0] m-auto">
          <SearchBar search={(query) => fetchRecepes(query)} />
        </div>
      </div>
      {/* if there is a data then only show sortinglist */}
      {dataLength >= 1 && <SortingList 
      recipes={recipes}
      loading={loading}
      searchPerformed={searchPerformed}
      />}
    </div>
  );
}

export default LandingPage;
