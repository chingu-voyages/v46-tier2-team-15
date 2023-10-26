/*
This page will open between Header and Footer and 
it will be a page about team members who created the Dish Dive App.
*/
import React from "react";

import AppTeamMember from "./AppTeamMember";
import contributors from "../../public/assets/contributors";

function AppTeamPage() {
  const [visibility, setVisibility] = React.useState(true);
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="w-full h-[100%] flex justify-around items-center flex-wrap bg-[#1B1107] px-[120px]">
      {contributors.map((teamMember) => (
        <AppTeamMember
          key={teamMember.name}
          teamMember={teamMember}
          toggleVisibility={() => setVisibility((prevState) => !prevState)}
          visibility={visibility}
          expand={expand}
          setExpand={setExpand}
        />
      ))}
    </div>
  );
}

export default AppTeamPage;
