import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [result, setResult] = useState(false);
  const APP_ID = "69b87f9b";
  const APP_KEY = "c1555e257f882dc0d5ee81afe169f456";
  const searchQuery = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        setResult(true);
      })
      .catch((error) => console.error(error));
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="mb-3 md:w-96 mx-auto">
      <form
        className="relative mb-4 flex w-full flex-wrap items-stretch"
        onSubmit={searchQuery}
      >
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={handleQuery}
        />
        <button
          className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          type="submit"
          id="button-addon3"
        >
          Search
        </button>
      </form>
      {/* {result === false ? "Loading" : recipes} */}

      <RecipeCard />
    </div>
  );
};

export default SearchBar;
