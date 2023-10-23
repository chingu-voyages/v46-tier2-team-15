/*
This component will open between Header and Footer and 
it will be the first page a user sees. 
This page should contain some fancy stuff and 
instructions on how to use the Dish Dive App and 
we can add some random recipes below the instructions.

This page will be replaced with the Search page once a search is done.
*/

import SearchBar from "./SearchBar";

function LandingPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchBar />
      </div>
  )
}

export default LandingPage;