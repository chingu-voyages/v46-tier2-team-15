/*
This page will open between Header and Footer and 
it will be a page about team members who created the Dish Dive App.
*/
import React from "react";

import AppTeamMember from "./AppTeamMember";
import contributors from "../assets/contributors";

function AppTeamPage() {
  const [visibility, setVisibility] = React.useState(true);
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center bg-[#1B1107] px-[120px]">
      {contributors.map((teamMember) => (
        <AppTeamMember
          key={teamMember.name}
          teamMember={teamMember}
          toggleVisibility={() => setVisibility((prevState) => !prevState)}
          visibility={visibility}
        />
      ))}
    </div>
  );
}

export default AppTeamPage;
