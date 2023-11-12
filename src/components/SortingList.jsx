import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from 'uuid';

const SortingList = ({ handleSortChange }) => {
  const [selectedValue, setSelectedValue] = useState(""); 
    const mealTypeArray =  
  [{value : '' , label : 'All'},
  {value : 'breakfast' , label : 'Breakfast'},
  {value : 'brunch' , label : 'Brunch'},
  {value : 'lunch/dinner' , label : 'Lunch / Dinner'},
  {value : 'teatime' , label : 'Teatime'}
]

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    handleSortChange(event.target.value);
  };

  return (
    <>
      <div className="sorting-list flex items-center justify-center text-[14px] md:text-[14px] lg:text-[16px] w-fit px-4 h-auto mx-auto my-8 flex-wrap">
        {mealTypeArray.map((mealType) => {
          const id = uuidv4();
          const {value , label} = mealType
          return <button className='sorting-btn' key={id} onClick={handleDropdownChange} value={value}>{label}</button>
        })}
      </div>
    </>
  );
};

export default SortingList;



