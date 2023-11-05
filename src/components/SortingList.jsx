import React, { useState } from "react";
import "../App.css";

const SortingList = ({ handleSortChange }) => {
  const [selectedValue, setSelectedValue] = useState(""); // Default selected value

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    handleSortChange(event.target.value);
  };

  return (
    <>
      <div className="sorting-list  flex items-center justify-around w-fit px-4 h-auto mx-auto my-8">
        <h1>Sort By :</h1>
        <select
          value={selectedValue}
          className="dropdown cursor-pointer py-4 px-6 mx-4"
          onChange={handleDropdownChange}
        >
          <option value="">None</option>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch/dinner">Lunch / Dinner</option>
          <option value="teatime">Teatime</option>
        </select>
      </div>
    </>
  );
};

export default SortingList;
