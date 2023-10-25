/*
This page will open between Header and Footer and 
it will be the most important page.

It needs to have a search form, list of returned recipes, pagination, 
and we need to make it as a Carousel so the user can 
swipe left right to load new lists of recipe results...
*/

import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

function SearchPage() {
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center bg-[#1B1107] px-[120px]">
      <h1 className="text-5xl">LandingPage component</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default SearchPage;
