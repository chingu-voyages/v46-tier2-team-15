/*
This page will open between Header and Footer and 
it will be a page about team members who created the Dish Dive App.
*/
import React from "react";

import AppTeamMember from "./AppTeamMember";
import contributors from "../assets/contributors";

function AppTeamPage() {
  const [visibility, setVisibility] = React.useState(true);
  const teamMembers = contributors.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="w-full h-[100%] flex flex-col bg-[#1B1107] px-[120px]">
      <div className={`${visibility ? "visible " : "hidden"}`}>
        <h2 className="mb-4 text-[#DCB288] text-4xl text-center">
          The team behind the App
        </h2>
        <p className="mb-4 mx-12 text-[#DCB288] text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          magni, consectetur inventore molestias ratione veritatis nam sed unde
          voluptatibus autem eveniet minus mollitia itaque exercitationem
          assumenda corporis libero nesciunt sequi?
        </p>
      </div>
      <div
        className={`w-full flex flex-wrap justify-around  
        ${visibility ? "visible " : "h-[100%]"}`}
      >
        {teamMembers.map((teamMember) => (
          <AppTeamMember
            key={teamMember.name}
            teamMember={teamMember}
            toggleVisibility={() => setVisibility((prevState) => !prevState)}
            visibility={visibility}
          />
        ))}
      </div>
    </div>
  );
}

export default AppTeamPage;
