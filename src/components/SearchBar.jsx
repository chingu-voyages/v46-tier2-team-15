import React, { useState } from "react";
import SearchIcon from "../assets/page-images/Search-icon.svg";

const SearchBar = ({ search }) => {
  const [query, setQuery] = useState("");

  const searchRecepes = (e) => {
    e.preventDefault();
    if (query === "") return;
    search(query);
    setQuery("");
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-3 w-full mx-auto">
      <form
        className=" mb-4 flex flex-col items-center justify-center md:flex md:flex-row w-full"
        onSubmit={searchRecepes}
      >
        <input
          type="search"
          className="search-input w-[75vw] mb-[20px] md:m-0 block  flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 md:px-6 md:py-2.5 text-sm sm:text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(255,255,255)] focus:outline-none focus:placeholder:opacity-0	 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Enter comma separated ingredients"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={handleQuery}
          value={query}
        />
        <button
          className="md:rounded-l rounded-xl border-2 border-primary px-3 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 text-white font-jua block"
          type="submit"
          id="button-addon3"
        >
          {" "}
          <span className="md:hidden">Search</span>
          <img
            className="hidden md:inline-block md:w-[25px] md:h-[25px]"
            src={SearchIcon}
            alt=""
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
