import React, { useState } from "react";

const SearchBar = ({ search }) => {
  const [query, setQuery] = useState("");

  const searchRecepes = (e) => {
    e.preventDefault();
    search(query);
    setQuery("");
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-3 w-full mx-auto">
      <form
        className=" mb-4 flex w-full flex-wrap items-stretch"
        onSubmit={searchRecepes}
      >
        <input
          type="search"
          className=" m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={handleQuery}
          value={query}
        />
        <button
          className=" rounded-l rounded-xl border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 text-white"
          type="submit"
          id="button-addon3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
